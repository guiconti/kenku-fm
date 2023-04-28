import { Client, Message, MessageFlags } from "discord.js";
import { BrowserWindow } from "electron";
import fs from "fs";
import path from "path";

const mainChannelId = "508072355629629451";

let globalLeaderboard: { [key: string]: number } = {};
let currentLeaderboard: { [key: string]: number } = {};
let isGameActive = false;
let currentName: string = undefined;

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

	// Guess game can only be played in the main channel
	if (message.channel.id !== mainChannelId) return false;

	const stopGuessGame = messageContent.startsWith("parar guess game") || messageContent.startsWith("stop guess game");
	if (stopGuessGame && isGameActive) {
		isGameActive = false;
		currentName = undefined;
		return true;
	}

	// If game is active messages will be considered a guess
	if (isGameActive) {
		if (messageContent.trim().toLowerCase() !== currentName) {
			// TODO: If it is very close maybe send a message
			return true;
		}
		// Correct guess
		if (!currentLeaderboard[userId]) {
			currentLeaderboard[userId] = 0;
		}
		if (!globalLeaderboard[userId]) {
			globalLeaderboard[userId] = 0;
		}
		message.channel.send({
			content: `${message.author.username} acertou! ${currentName}`,
			flags: MessageFlags.SuppressNotifications,
		});
		currentLeaderboard[userId]++;
		globalLeaderboard[userId]++;
		// Next guess
		fs.writeFileSync(leaderboardPath, JSON.stringify(globalLeaderboard));
		return true;
	}

	const startGuessGame =
		messageContent.startsWith("começar guess game") || messageContent.startsWith("start guess game");
	if (startGuessGame && !isGameActive) {
		event.reply("DISCORD_FORCE_JOIN", message.member.voice.channel.id);
		isGameActive = true;
		currentLeaderboard = {};
		return true;
	}

	return false;
}
