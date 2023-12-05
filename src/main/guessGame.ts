import { Client, Message, MessageFlags, AttachmentBuilder } from "discord.js";
import { BrowserWindow } from "electron";
import games from "./gameSongs";
import fs from "fs";
import path from "path";
import jimp from "jimp";

// Caverna
const mainChannelId = "508072355629629451";
// RIP #AXON
// const mainChannelId = "144871794246025216"

let globalLeaderboard: { [key: string]: { name: string; score: number } } = {};
let currentLeaderboard: { [key: string]: { name: string; score: number } } = {};
let isGameActive = false;

// Holds the game ids that were not picked yet, this is what we use to pick a new game
let gameIdsAvailable: Array<number> = [];
// Game index, song index
let pickedSong: [number, number];
// Game index, image index
let pickedImage: [number, number];
const imageSizes = [50, 100, 200];

// Timers
const hintTime = 20;
const enlargeImageTime = 20;
const roundTime = 60;
let notGuessTimeout: NodeJS.Timeout;
let hintTimeout: NodeJS.Timeout;
let enlargeImageTimeout: NodeJS.Timeout;

// Modes
enum Modes {
	SONG = 0,
	IMAGE = 1,
}
const isFranchiseAValidGuess = false;
const mode: Modes = Modes.IMAGE;

const leaderboardPath = path.join(process.cwd(), "leaderboard.json");
const rawData = fs.readFileSync(leaderboardPath);
let jsonData = {};
if (rawData) {
	try {
		jsonData = JSON.parse(rawData.toString());
		globalLeaderboard = jsonData;
	} catch (err) {
		console.log(err);
	}
}

async function startGame(message: Message, window: BrowserWindow) {
	console.log("Guess game started");
	message.channel.send({
		content: `Começando o jogo...`,
		flags: MessageFlags.SuppressNotifications,
	});
	resetGamesAvailable();
	await pickNextGuess(message, window);
	isGameActive = true;
	currentLeaderboard = {};
}

function stopGame(message: Message) {
	console.log("Guess game stopped");
	if (notGuessTimeout) {
		clearTimeout(notGuessTimeout);
	}
	if (hintTimeout) {
		clearTimeout(hintTimeout);
	}
	if (enlargeImageTimeout) {
		clearTimeout(enlargeImageTimeout);
	}
	isGameActive = false;
	pickedSong = undefined;
	gameIdsAvailable = [];
	const users = Object.keys(currentLeaderboard);
	message.channel.send({
		content: `Fim de jogo.\n\nPlacar da partida\n${users
			.map((user) => `${currentLeaderboard[user].name}: ${currentLeaderboard[user].score}`)
			.join("\n")}`,
		flags: MessageFlags.SuppressNotifications,
	});
}

function resetGamesAvailable() {
	gameIdsAvailable = games.map((game, index) => index);
}

async function couldNotGuess(message: Message, window: BrowserWindow) {
	console.log("No guess");
	const game = mode === Modes.SONG ? games[pickedSong[0]] : games[pickedImage[0]];
	let content = `Ninguém acertou. O jogo era **${game.name}**`;
	if (mode === Modes.SONG) {
		content += ` e o nome da música era **${game.songs[pickedSong[1]].name}**`;
	}
	const data: any = {
		content,
		flags: MessageFlags.SuppressNotifications,
		files: [],
	};
	if (mode === Modes.IMAGE) {
		const imageUrl = game.images[pickedImage[1]].url;
		const image = await jimp.read(imageUrl);
		const imageBuffer = await image.getBufferAsync(image.getMIME());
		const attachment = new AttachmentBuilder(imageBuffer);
		data.files = [attachment];
	}
	message.channel.send(data);
	// Little time between the end of one and start of the other
	setTimeout(() => pickNextGuess(message, window), 2000);
}

async function sendHint(message: Message) {
	const pickHint = Math.floor(Math.random() * games[pickedSong[0]].hints.length);
	const hint = games[pickedSong[0]].hints[pickHint];
	message.channel.send({
		content: `Dica: ${hint}`,
		flags: MessageFlags.SuppressNotifications,
	});
	clearTimeout(hintTimeout);
}

async function sendImage(message: Message, iteration = 0) {
	const imageUrl = games[pickedImage[0]].images[pickedImage[1]].url;
	const image = await jimp.read(imageUrl);
	let imageBuffer;
	try {
		if (iteration > imageSizes.length) {
			imageBuffer = await image.getBufferAsync(image.getMIME());
		} else {
			const width = image.getWidth();
			const height = image.getHeight();
			const desiredSize = imageSizes[iteration];
			if (desiredSize >= width || desiredSize >= height) {
				imageBuffer = await image.getBufferAsync(image.getMIME());
			} else {
				const x = Math.floor(Math.random() * (width - desiredSize));
				const y = Math.floor(Math.random() * (height - desiredSize));
				imageBuffer = await image.crop(x, y, desiredSize, desiredSize).getBufferAsync(image.getMIME());
			}
		}
	} catch (error) {
		console.error(error);
		return;
	}
	const attachment = new AttachmentBuilder(imageBuffer);
	message.channel.send({
		files: [attachment],
		flags: MessageFlags.SuppressNotifications,
	});
	if (enlargeImageTimeout) {
		clearTimeout(enlargeImageTimeout);
	}
	// Do not send more images if we got to the last size
	if (iteration + 1 >= imageSizes.length) return;
	enlargeImageTimeout = setTimeout(() => sendImage(message, iteration + 1), enlargeImageTime * 1000);
}

function pickAGame() {
	const pickedIndex = Math.floor(Math.random() * gameIdsAvailable.length);
	return gameIdsAvailable.splice(pickedIndex, 1)[0];
}

async function pickNextGuess(message: Message, window: BrowserWindow) {
	message.channel.send({
		content: "Jogo selecionado, comece a adivinhar! Você tem 60 segundos",
		flags: MessageFlags.SuppressNotifications,
	});
	if (mode === Modes.SONG) {
		pickASong(message, window);
		return;
	}
	if (mode === Modes.IMAGE) {
		await pickAnImage(message, window);
		return;
	}
}

function pickASong(message: Message, window: BrowserWindow) {
	if (gameIdsAvailable.length === 0) {
		resetGamesAvailable();
	}
	// Pick a game
	const gameIndex = pickAGame();
	const songIndex = Math.floor(Math.random() * games[gameIndex].songs.length);
	pickedSong = [gameIndex, songIndex];
	window.webContents.send("BROWSER_STREAM", games[gameIndex]["songs"][songIndex].url);
	if (notGuessTimeout) {
		clearTimeout(notGuessTimeout);
	}
	notGuessTimeout = setTimeout(() => couldNotGuess(message, window), roundTime * 1000);
	if (hintTimeout) {
		clearTimeout(hintTimeout);
	}
	hintTimeout = setTimeout(() => sendHint(message), hintTime * 1000);
}

async function pickAnImage(message: Message, window: BrowserWindow) {
	if (gameIdsAvailable.length === 0) {
		resetGamesAvailable();
	}
	let gameIndex = pickAGame();
	// Some games doesn't have images yet (26)
	while (games[gameIndex].images.length === 0) {
		if (gameIdsAvailable.length === 0) {
			resetGamesAvailable();
		}
		gameIndex = pickAGame();
	}
	const imageIndex = Math.floor(Math.random() * games[gameIndex].images.length);
	pickedImage = [gameIndex, imageIndex];
	if (notGuessTimeout) {
		clearTimeout(notGuessTimeout);
	}
	notGuessTimeout = setTimeout(() => couldNotGuess(message, window), roundTime * 1000);
	await sendImage(message);
}

async function guessMade(message: Message, window: BrowserWindow) {
	const messageContent = message.content.toLowerCase();
	const userId = message.author.id.toString();
	const game = mode === Modes.SONG ? games[pickedSong[0]] : games[pickedImage[0]];
	const formattedMessage = messageContent
		.toLowerCase()
		.replace(/[^a-zA-Z 0-9]/g, "")
		.trim();
	const gameName = game.name
		.toLowerCase()
		.replace(/[^a-zA-Z 0-9]/g, "")
		.trim();
	const isCorrectGuess =
		formattedMessage === gameName ||
		game.aliases.some(
			(alias) =>
				formattedMessage ===
				alias
					.toLowerCase()
					.replace(/[^a-zA-Z 0-9]/g, "")
					.trim()
		);
	if (!isCorrectGuess) {
		const franchiseName = game.franchise
			.toLowerCase()
			.replace(/[^a-zA-Z 0-9]/g, "")
			.trim();
		if (formattedMessage !== franchiseName) {
			// TODO: If it is very close maybe send a message
			return true;
		}
		if (!isFranchiseAValidGuess) {
			message.channel.send({
				content: `${message.author.username} acertou a franquia, mas e o jogo?`,
				flags: MessageFlags.SuppressNotifications,
			});
			return true;
		}
	}
	// Correct guess
	if (!currentLeaderboard[userId]) {
		currentLeaderboard[userId] = {
			name: message.author.username,
			score: 0,
		};
	}
	if (!globalLeaderboard[userId]) {
		globalLeaderboard[userId] = {
			name: message.author.username,
			score: 0,
		};
	}
	let content = `${message.author.username} acertou! O jogo era **${game.name}**`;
	if (mode === Modes.SONG) {
		content += ` e o nome da música era **${games[pickedSong[0]].songs[pickedSong[1]].name}**`;
	}
	const data: any = {
		content,
		files: [],
		flags: MessageFlags.SuppressNotifications,
	};
	if (mode === Modes.IMAGE) {
		const imageUrl = game.images[pickedImage[1]].url;
		const image = await jimp.read(imageUrl);
		const imageBuffer = await image.getBufferAsync(image.getMIME());
		const attachment = new AttachmentBuilder(imageBuffer);
		data.files = [attachment];
	}
	message.channel.send(data);
	currentLeaderboard[userId].score++;
	globalLeaderboard[userId].score++;
	// Next guess
	// Little time between the end of one and start of the other
	setTimeout(() => pickNextGuess(message, window), 2000);
	fs.writeFileSync(leaderboardPath, JSON.stringify(globalLeaderboard));
}

export default async function handleGuessGame(
	message: Message,
	client: Client,
	event: Electron.IpcMainEvent,
	window: BrowserWindow
): Promise<boolean> {
	if (!message) return false;
	const userId = message.author.id.toString();
	if (!userId) return false;
	const messageContent = message.content.toLowerCase();
	// Guess game can only be made in the main channel
	if (message.channel.id !== mainChannelId) return false;
	const stopGuessGame = messageContent.startsWith("parar guess game") || messageContent.startsWith("stop guess game");
	if (stopGuessGame && isGameActive) {
		stopGame(message);
		return true;
	}

	// If game is active messages will be considered a guess
	if (isGameActive) {
		await guessMade(message, window);
		return true;
	}

	const startGuessGame =
		messageContent.startsWith("começar guess game") || messageContent.startsWith("start guess game");
	if (startGuessGame && !isGameActive) {
		if (mode === Modes.SONG) {
			if (!message.member.voice.channel) {
				message.channel.send({
					content: "You need to join a voice channel for this game.",
					flags: MessageFlags.SuppressNotifications,
				});
				return;
			}
			event.reply("DISCORD_FORCE_JOIN", message.member.voice.channel.id);
		}
		await startGame(message, window);
		return true;
	}
	return false;
}
