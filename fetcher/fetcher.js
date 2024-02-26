const { Configuration, OpenAIApi } = require("openai");

const YOUTUBE_API_KEY = "AIzaSyCbNbaXArKQnz6da1w0bA7vGocacEw46B0";
const GIANTBOMB_API_KEY = "6c5f62f2471fd2d3d1e01fe416e875ad232e686e";

const configuration = new Configuration({
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const prompt = require("prompt-sync")();
const { parse, toSeconds } = require("iso8601-duration");
const fs = require("fs");
const path = require("path");

const difficulties = {
	VERY_EASY: 0,
	EASY: 1,
	MEDIUM: 2,
	HARD: 3,
	VERY_HARD: 4,
};

let processed = {
	games: [],
};

const playlistIdregex = /"playlistId":"(.{34})"/;

const processedPath = path.join(process.cwd(), "processed.json");
const rawData = fs.readFileSync(processedPath);
if (rawData) {
	try {
		processed = JSON.parse(rawData.toString());
	} catch (err) {
		console.log(err);
		process.exit();
	}
	if (!processed.games) {
		console.log("Invalid json");
		process.exit();
	}
}

let askForEachGameName = false;

async function getGiantBombGuid(gameName) {
	const response = await fetch(
		`https://www.giantbomb.com/api/search/?api_key=${GIANTBOMB_API_KEY}&format=json&query=${gameName}`
	);
	const data = await response.json();
	return data.results[0].guid;
}

async function getGamesForFranchise(franchiseName) {
	const gameId = await getGiantBombGuid(franchiseName);
	const franchiseResponse = await fetch(
		`https://www.giantbomb.com/api/franchise/${gameId}/?api_key=${GIANTBOMB_API_KEY}&format=json`
	);
	const franchiseData = await franchiseResponse.json();
	let games = franchiseData.results.games ? franchiseData.results.games.map((game) => game.name) : [];
	if (games.length === 0) {
		const tryOpenAI = prompt("Giant bomb didn't return anything. Should we try openai? ");
		if (tryOpenAI.toLowerCase() !== "y") return [franchiseName];
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `The following is a list of all the released games for the "${franchiseName}" game franchise, do not include DLCs and rereleases. The list should contain only the name of the game:\n`,
			temperature: 0,
			max_tokens: 400,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		let answer = response.data.choices[0].text.split("\n").filter((name) => name.length > 0);
		if (answer.length > 0) {
			games = answer;
			// We assume that if this is the case open is answering with #. Game name
			if (games[0][1] === ".") {
				games = games.map((name) => name.trim().substring(3));
			}
		}
	}

	return games.length > 0 ? games : [franchiseName];
}

async function findPlaylistId(gameName) {
	// For when the quota is done
	const noQuota = true;
	if (noQuota) {
		const rawResponse = await fetch(`https://www.youtube.com/results?search_query=${gameName}+OST&sp=EgIQAw%253D%253D`);
		const text = await rawResponse.text();
		const playlistId = playlistIdregex.exec(text)[1];
		return playlistId;
	}
	const response = await fetch(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${gameName} OST&type=playlist&key=${YOUTUBE_API_KEY}`
	);
	const data = await response.json();
	if (!data.items) {
		console.log(data);
	}
	return data.items[0].id.playlistId;
}

async function getItemsForPlaylist(playlistId) {
	const response = await fetch(
		`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
	);
	const data = await response.json();
	return data.items;
}

async function getSongsData(songsId) {
	const response = await fetch(
		`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${songsId.join(
			"%2C"
		)}&key=${YOUTUBE_API_KEY}`
	);
	const data = await response.json();
	return data.items;
}

async function getSongs(gameName, difficulty) {
	const playlistId = await findPlaylistId(gameName);
	console.log(playlistId);
	const items = await getItemsForPlaylist(playlistId);
	const songIds = items.map((item) => item.snippet.resourceId.videoId);
	let songsData = await getSongsData(songIds);
	// Remove songs that are less than 50 seconds and order by view count
	songsData = songsData
		.filter((song) => toSeconds(parse(song.contentDetails.duration)) >= 50)
		.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);
	let songs = songsData.map((item) => {
		return {
			name: item.snippet.title,
			url: `https://youtu.be/${item.id}`,
			difficulty,
		};
	});
	// if (songs.length > 10) {
	// 	console.log(songs);
	// 	const shouldSlice = prompt(
	// 		`We have more than 10 songs (${songs.length}), should we pick all of them? You can also send a number to pick that many songs `
	// 	);
	// 	if (shouldSlice.toLowerCase() !== "y") {
	// 		if (!isNaN(parseInt(shouldSlice))) {
	// 			songs = songs.slice(0, parseInt(shouldSlice));
	// 		}
	// 	} else {
	// 		songs = songs.slice(0, 10);
	// 	}
	// }
	return songs;
}

async function getImages(gameName, difficulty) {
	const imageUrlsResponse = await fetch(
		`https://www.giantbomb.com/api/search/?api_key=${GIANTBOMB_API_KEY}&format=json&query=${gameName}&resources=game&field_list=image_tags`
	);
	const imageUrlsData = await imageUrlsResponse.json();
	if (imageUrlsData.results.length === 0) {
		return [];
	}
	let index = 0;
	if (gameName === "Resident Evil 4") {
		index = 1;
	} else if (gameName === "Dead Space") {
		index = 2;
	} else if (gameName === "Super Mario Bros.") {
		index = 1;
	} else if (gameName === "The Legend of Zelda: Link's Awakening") {
		index = 1;
	} else if (gameName === "Soul Calibur") {
		index = 3;
	} else if (gameName === "Bomberman 64") {
		index = 1;
	} else if (gameName === "Tales of Phantasia") {
		index = 1;
	} else if (gameName === "Hyperlight Drifter") {
		index = 4;
	} else if (gameName === "Overwatch") {
		index = 1;
	} else if (gameName === "Tetris") {
		index = 2;
	} else if (gameName === "The Sims 2") {
		index = 4;
	} else if (gameName === "The Sims 3") {
		index = 4;
	} else if (gameName === "Shadow of the Colossus") {
		index = 1;
	} else if (gameName === "Pac-Man") {
		index = 1;
	} else if (gameName === "Battletoads") {
		index = 2;
	} else if (gameName === "The King of Fighters 2002") {
		index = 1;
	}
	// const imageTagData = imageUrlsData.results[index].image_tags.filter((tag) => tag.name.toLowerCase() === "screenshots");
	const imageTagData = imageUrlsData.results[index].image_tags.filter(
		(tag) => tag.name.toLowerCase().includes("screenshot") || tag.name.toLowerCase().includes("gameplay")
	);
	if (imageTagData.length === 0) {
		console.log("Could not find suitable image tag");
		console.log(imageUrlsData);
		return [];
	}
	const imagesUrl = imageTagData[0].api_detail_url;
	const response = await fetch(`${imagesUrl}&api_key=${GIANTBOMB_API_KEY}&format=json`);
	const data = await response.json();
	const images = data.results.map((image) => {
		return {
			url: image.original_url,
			difficulty,
		};
	});
	return images;
}

async function getAliases(gameName) {
	const response = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "system",
				content:
					"You are an AI that based on a game name sent you build variations of that name that are similar enough to the original name so we can use it when matching a string that could have been typed just slightly different. Do not suggest variations that are only case sensitive. For example, if the game name is 'Mega Man' do not suggest 'mega man'",
			},
			{
				role: "user",
				content: "Crash Bandicoot 4: It's About Time",
			},
			{
				role: "assistant",
				content:
					"Crash 4, Crash Bandicoot 4, Crash Bandicoot It's About Time, Crash Bandicoot 4: Its About Time, Crash Bandicoot 4: It is About Time, Crash Bandicoot 4 Its About Time, Crash Bandicoot 4 It is About Time, Crash Bandicoot 4 It's About Time, Crash Bandicoot It is About Time, Crash Bandicoot Its About Time",
			},
			{
				role: "user",
				content: "Mega man X6",
			},
			{
				role: "assistant",
				content:
					"Mega Man X6, Megaman X6, Mega Man X 6, Megaman X 6, MegaMan X6, MegaMan X 6, Mega Man X VI, Megaman X VI, MegaMan X VI",
			},
			{
				role: "user",
				content: "Crash Team Racing",
			},
			{
				role: "assistant",
				content:
					"CTR, Crash Racing, Crash Team Race, Crash Racing Team, Team Crash Racing, Crash Team Racing Nitro-Fueled, CTR Nitro-Fueled, Crash Nitro-Fueled, CTRNF, Crash Team Racing Nitro Fueled",
			},
			{
				role: "user",
				content: gameName,
			},
		],
		temperature: 0.2,
	});
	let aliases = response.data.choices[0].message.content.split(", ");
	console.log(aliases);
	const addMore = prompt("Add more aliases? (add each one separated by a comma) ");
	if (addMore.length > 0) {
		aliases = aliases.concat(addMore.split(",").map((alias) => alias.trim()));
	}
	return aliases;
}

async function getDifficulty(gameName) {
	const response = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "user",
				content: `From a scale of 1 to 10 where 1 is a very unknown game and a 10 is a very known game how popular is ${gameName}? Answer only the number and nothing else`,
			},
		],
		temperature: 0.2,
		max_tokens: 1,
	});
	const difficulty = parseInt(response.data.choices[0].message.content);
	return isNaN(difficulty) ? -1 : 11 - difficulty;
}

async function getHints(gameName) {
	const response = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "system",
				content:
					"We are building a game whe the user needs to guess the name of a game. Your job is to give a list of hints to help the player. If possible the hints should be orderer in a way so that the first hint helps less than the last one. Let's aim to have 5 hints.",
			},
			{
				role: "user",
				content: "Crash Team Racing",
			},
			{
				role: "assistant",
				content: `1. This game was released in the late 90s.
2. It is a racing game featuring characters from a popular video game franchise.
3. The game was developed by Naughty Dog, the same studio behind the popular game series Uncharted and The Last of Us.
4. The game features power-ups and weapons that can be used to gain an advantage over other racers.
5. The game was remastered and re-released in 2019 for modern consoles.`,
			},
			{
				role: "user",
				content: gameName,
			},
		],
		temperature: 0.2,
	});
	// After the hints are returned they are split by new line, trimmed, and we remove the first 3 characters of each hint
	return response.data.choices[0].message.content.split("\n").map((hint) => hint.trim().substring(3));
}

async function buildDataForGame(gameName, franchiseName) {
	// This is not very accurate so we comment this to save on openai cost
	// const difficulty = await getDifficulty(gameName);
	const difficulty = 1;
	// Skipping getting the songs for now because my daily quota is over
	const songs = await getSongs(gameName, difficulty);
	const aliases = await getAliases(gameName);
	const hints = await getHints(gameName);
	const images = await getImages(gameName);
	return {
		name: gameName,
		franchise: franchiseName,
		difficulty,
		aliases,
		hints,
		songs,
		images,
	};
}

async function buildDataForFranchise(franchiseName) {
	console.log(`Building data for ${franchiseName}`);
	let gameNames = await getGamesForFranchise(franchiseName);
	const processedGames = new Set();
	if (gameNames.length === 0) {
		gameNames = [franchiseName];
	}
	console.log(gameNames);
	const answer = prompt("Are the games above ok for the franchise? ");
	askForEachGameName = answer.toLowerCase() === "n";
	const gamesForFranchise = [];
	for (let i = 0; i < gameNames.length; i++) {
		let gameName = gameNames[i];
		if (processedGames.has(gameName)) continue;
		if (askForEachGameName) {
			console.log(gameName);
			const changeGameName = prompt(
				"What should we do with this game? (S = skip, C = change name, anything else = keep name)) "
			);
			if (changeGameName.toLowerCase() === "s") {
				continue;
			}
			if (changeGameName.toLowerCase() === "c") {
				gameName = prompt("What should be the new name? ");
			}
		}
		if (processedGames.has(gameName)) continue;
		processedGames.add(gameName);
		const gameData = await buildDataForGame(gameName, franchiseName);
		await removeSongNamesRepetitions(gameData);
		gamesForFranchise.push(gameData);
	}
	processed.games = processed.games.concat(gamesForFranchise);
	fs.writeFileSync(processedPath, JSON.stringify(processed));
}

const franchisesToProcess = [
	"Dragon Age",
	"Star Wars",
	"Spyro",
	"Left 4 Dead",
	"Alan Wake",
	"Worms",
	"Darkest dungeon",
	"Cooking Mama",
	"Contra",
	"Naruto",
	"Fatal Frame",
	"Pikmin",
	"Ninja Gaiden",
	"Dynasty Warriors",
	"Saints Row",
	"Limbo",
	"Hi-fi rush",
	"Killzone",
	"Gauntlet",
	"Divinity Original Sin",
	"Welcome to The Gungeon",
	"Guacamelee",
	"Detroit Became Human",
	"Subnautica",
	"Sea of Thieves",
	"Human Fall Flat",
	"Prince of Persia",
	"Dungeon Defenders",
];

async function getDataForFranchises() {
	for (let i = 0; i < franchisesToProcess.length; i++) {
		const wasFranchiseProcessed = processed.games.find((game) => game.franchise === franchisesToProcess[i]);
		if (wasFranchiseProcessed) continue;
		await buildDataForFranchise(franchisesToProcess[i]);
	}
}

async function fillMissingData() {
	for (let i = 0; i < processed.games.length; i++) {
		let changed = false;
		const game = processed.games[i];
		if (game.songs.length === 0) {
			console.log("Finding songs for " + game.name);
			changed = true;
			game.songs = await getSongs(game.name, game.difficulty);
		}
		if (game.hints.length === 0) {
			console.log("Finding hints for " + game.name);
			changed = true;
			game.hints = await getHints(game.name);
		}
		if (!game.images || game.images.length === 0) {
			console.log("Finding images for " + game.name);
			// changed = true;
			// game.images = await getImages(game.name);
		}
		if (changed) {
			fs.writeFileSync(processedPath, JSON.stringify(processed));
		}
	}
}

async function removeSongNamesRepetitions(game) {
	const songs = game.songs.map((song) => song.name).join(",");
	const response = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "system",
				content:
					"Based of a list of entries, where each entry is separated by a comma, your goal is to identify, remove a substring that is repeated through all the entries and return that new list where that repetition is removed. Return all the entries with that repetition removed.",
			},
			{
				role: "user",
				content: `Deltarune Chapter 2 OST: 16 - Faint Courage (Game Over),
Deltarune Chapter 2 OST: 28 - Acid Tunnel of Love,
Deltarune Chapter 2 OST: 33 - Giga Size,
Deltarune Chapter 2 OST: 30 - Lost Girl,
Deltarune Chapter 2 OST: 24 - Elegant Enterance,
Deltarune Chapter 2 OST: 13 - Sound Studio,
Deltarune Chapter 2 OST: 36 - The Dark Truth,
Deltarune Chapter 2 OST: 31 - Ferris Wheel,
Deltarune Chapter 2 OST: ?? - WELCOME TO THE CITY (Alt),
Deltarune Chapter 2 OST: 19 - Holiday Studio,
Deltarune Chapter 2 OST: 18 - Mini Studio,
Deltarune Chapter 2 OST: 44 - You Can Always Come Home`,
			},
			{
				role: "assistant",
				content: `16 - Faint Courage (Game Over),
28 - Acid Tunnel of Love,
33 - Giga Size,
30 - Lost Girl,
24 - Elegant Enterance,
13 - Sound Studio,
36 - The Dark Truth,
31 - Ferris Wheel,
?? - WELCOME TO THE CITY (Alt),
19 - Holiday Studio,
18 - Mini Studio,
44 - You Can Always Come Home`,
			},
			{
				role: "user",
				content: `Superpowered By Light - Spirit Tracks Music Extended,
Stealth Zelda - Spirit Tracks Music Extended,
Sword Training - Spirit Tracks Music Extended,
Snurglars - Spirit Tracks Music Extended,
Linebeck III - Spirit Tracks Music Extended,
Phantom Zelda - Spirit Tracks Music Extended,
Zelda Princess Of New Hyrule - Spirit Tracks Music Extended,
Panicked Zelda - Spirit Tracks Music Extended,
The Tracks Reawaken - Spirit Tracks Music Extended,
Advanced Sword Training - Spirit Tracks Music Extended,
Enemy Gauntlet - Spirit Tracks Music Extended,
Goron Village - Spirit Tracks Music Extended,
Zelda Reminiscing - Spirit Tracks Music Extended,
Papuchia Village - Spirit Tracks Music Extended,
Pirates & Tanks - Spirit Tracks Music Extended,
Key Masters - Spirit Tracks Music Extended,
Whip Race - Spirit Tracks Music Extended`,
			},
			{
				role: "assistant",
				content: `Superpowered By Light,
Stealth Zelda,
Sword Training,
Snurglars,
Linebeck III,
Phantom Zelda,
Zelda Princess Of New Hyrule,
Panicked Zelda,
The Tracks Reawaken,
Advanced Sword Training,
Enemy Gauntlet,
Goron Village,
Zelda Reminiscing,
Papuchia Village,
Pirates & Tanks,
Key Masters,
Whip Race`,
			},
			{
				role: "user",
				content: songs,
			},
		],
		temperature: 0,
		max_tokens: 2000,
	});
	const newSongNames = response.data.choices[0].message.content.split(",\n");
	if (newSongNames.length !== game.songs.length) {
		console.log("Not changed for " + game.name);
		return;
	}
	game.songs = game.songs.map((song, index) => {
		return {
			name: newSongNames[index],
			url: song.url,
			difficulty: song.difficulty,
		};
	});
}

const games = [];

async function migrateGameSongsToProcessed() {
	processed.games = games;
	fs.writeFileSync(processedPath, JSON.stringify(processed));
}

fillMissingData();
