import { BrowserWindow, ipcMain } from "electron";
// import {
//   ChannelType,
//   Client,
//   Events,
//   Channel,
//   GatewayIntentBits,
// } from "discord.js";
// import {
//   createAudioPlayer,
//   getVoiceConnection,
//   joinVoiceChannel,
//   NoSubscriberBehavior,
//   createAudioResource,
// } from "@discordjs/voice";
// import Eris from "eris";
import { ChannelType, Client, Events, GatewayIntentBits, Partials } from "discord.js";
import { createAudioPlayer, getVoiceConnection, joinVoiceChannel, NoSubscriberBehavior } from "@discordjs/voice";
import handleBetMessages from "../bet";
import handleGuessGame from "../guessGame";

type VoiceChannel = {
	id: string;
	name: string;
};

type Guild = {
	id: string;
	name: string;
	icon: string;
	voiceChannels: VoiceChannel[];
};

enum MessageType {
	NOT_DEFINED = -1,
	JOIN = 0,
	PLAY = 1,
}

export class DiscordBroadcast {
	window: BrowserWindow;
	client?: Client;
	audioPlayer = createAudioPlayer({
		behaviors: {
			noSubscriber: NoSubscriberBehavior.Play,
			// Set max missed frames to 60 seconds (20ms per frame)
			maxMissedFrames: 3000,
		},
	});
	constructor(window: BrowserWindow) {
		this.window = window;
		ipcMain.on("DISCORD_CONNECT", this._handleConnect);
		ipcMain.on("DISCORD_DISCONNECT", this._handleDisconnect);
		ipcMain.on("DISCORD_JOIN_CHANNEL", this._handleJoinChannel);
		ipcMain.on("DISCORD_LEAVE_CHANNEL", this._handleLeaveChannel);
		this.audioPlayer.on("error", this._handleBroadcastError);
	}

	destroy() {
		ipcMain.off("DISCORD_CONNECT", this._handleConnect);
		ipcMain.off("DISCORD_DISCONNECT", this._handleDisconnect);
		ipcMain.off("DISCORD_JOIN_CHANNEL", this._handleJoinChannel);
		ipcMain.off("DISCORD_LEAVE_CHANNEL", this._handleLeaveChannel);
		this.audioPlayer.off("error", this._handleBroadcastError);
		this.client?.destroy();
		this.client = undefined;
	}

	getMessageType(message: string): MessageType {
		if (message.includes("kassino") || message.includes("kassinao")) {
			return MessageType.JOIN;
		}
		if (
			message.match(
				/^play ((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/gim
			) ||
			message.match(
				/^play (https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/gim
			)
		) {
			return MessageType.PLAY;
		}
		return MessageType.NOT_DEFINED;
	}

	_handleConnect = async (event: Electron.IpcMainEvent, token: string) => {
		if (!token) {
			event.reply("DISCORD_DISCONNECTED");
			event.reply("ERROR", "Error connecting to bot: Invalid token");
			return;
		}
		// if (this.client) {
		// 	this.client.voiceConnections.forEach((connection) => {
		// 		this.broadcast.remove(connection);
		// 	});
		// 	this.client.disconnect({ reconnect: false });
		// 	this.client = undefined;
		// }
		if (this.client) {
			this.client.destroy();
			this.client = undefined;
		}

		try {
			this.client = new Client({
				intents: [
					GatewayIntentBits.Guilds,
					GatewayIntentBits.GuildVoiceStates,
					GatewayIntentBits.GuildMessages,
					GatewayIntentBits.DirectMessages,
					GatewayIntentBits.MessageContent,
				],
				partials: [Partials.Channel, Partials.Message],
			});
			// this.client = new Eris.Client(token, {
			// 	// intents: ["guilds", "guildVoiceStates", "guildMessages", "messageContent"],
			// 	intents: ["guilds", "guildVoiceStates", "guildMessages", "directMessages"],
			// });
			this.client.once(Events.ClientReady, async () => {
				event.reply("DISCORD_READY");
				event.reply("MESSAGE", "Connected");
				const rawGuilds = await this.client.guilds.fetch();
				const guilds: Guild[] = await Promise.all(
					rawGuilds.map(async (baseGuild) => {
						const guild = await baseGuild.fetch();
						const voiceChannels: VoiceChannel[] = [];
						const channels = await guild.channels.fetch();
						channels.forEach((channel) => {
							if (channel.isVoiceBased()) {
								voiceChannels.push({
									id: channel.id,
									name: channel.name,
								});
							}
						});
						return {
							id: guild.id,
							name: guild.name,
							icon: guild.iconURL(),
							voiceChannels,
						};
					})
				);
				event.reply("DISCORD_GUILDS", guilds);
			});
			this.client.on(Events.MessageCreate, async (message) => {
				if (!message || !this.client) return;
				// Handle guess game should come first to override other commands when the game is active
				let handled = await handleGuessGame(message, this.client, event, this.window);
				if (handled) return;
				handled = await handleBetMessages(message, this.client);
				if (handled) return;
				const userId = message.author.id.toString();
				const messageContent = message.content.toLowerCase();
				const messageType = this.getMessageType(messageContent);
				switch (messageType) {
					case MessageType.JOIN: {
						event.reply("DISCORD_FORCE_JOIN", message.member.voice.channel.id);
						this.playIntro();
						break;
					}
					case MessageType.PLAY: {
						let url = undefined;
						let matches = message.content.match(
							/((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/gim
						);
						// TODO: Iterate through list of regex instead lol
						if (matches && matches.length > 0) {
							url = matches[0];
						} else {
							matches = message.content.match(
								/(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/gim
							);
							if (matches && matches.length > 0) {
								url = matches[0];
							}
						}
						if (!url) break;
						event.reply("DISCORD_FORCE_JOIN", message.member.voice.channel.id);
						this.window.webContents.send("BROWSER_STREAM", matches[0]);
						break;
					}
					default:
						break;
				}
			});
			this.client.on("error", (err) => {
				event.reply("DISCORD_DISCONNECTED");
				event.reply("ERROR", `Error connecting to bot: ${err.message}`);
			});
			await this.client.login(token);
		} catch (err) {
			event.reply("DISCORD_DISCONNECTED");
			event.reply("ERROR", `Error connecting to bot: ${err.message}`);
		}
	};

	playIntro(): void {
		const windows = BrowserWindow.getAllWindows();
		for (const window of windows) {
			window.webContents.send("BROWSER_STREAM", "https://www.youtube.com/watch?v=K0RAuw68yqM");
		}
	}

	_handleDisconnect = async (event: Electron.IpcMainEvent) => {
		event.reply("DISCORD_DISCONNECTED");
		event.reply("DISCORD_GUILDS", []);
		event.reply("DISCORD_CHANNEL_JOINED", "local");
		this.client.destroy();
		this.client = undefined;
	};

	_handleJoinChannel = async (event: Electron.IpcMainEvent, channelId: string) => {
		if (this.client) {
			const channel = await this.client.channels.fetch(channelId);
			if (channel && channel.isVoiceBased() && channel.joinable) {
				try {
					const connection = joinVoiceChannel({
						channelId: channel.id,
						guildId: channel.guild.id,
						adapterCreator: channel.guild.voiceAdapterCreator,
					});
					connection.subscribe(this.audioPlayer);
					event.reply("DISCORD_CHANNEL_JOINED", channelId);
					connection.on("error", (e) => {
						console.error(e);
						connection.destroy();
						event.reply("DISCORD_CHANNEL_LEFT", channelId);
						event.reply("ERROR", `Error connecting to voice channel: ${e.message}`);
					});
				} catch (e) {
					console.error(e);
					event.reply("DISCORD_CHANNEL_LEFT", channelId);
					event.reply("ERROR", `Error connecting to voice channel: ${e.message}`);
				}
			}
		} else {
			event.reply("DISCORD_CHANNEL_LEFT", channelId);
			event.reply(
				"ERROR",
				`Unable to join voice channel. This channel might be full or this bot might not have permission to join.`
			);
		}
	};

	_handleLeaveChannel = async (event: Electron.IpcMainEvent, channelId: string) => {
		const channel = await this.client.channels.fetch(channelId);
		if (channel.type === ChannelType.GuildVoice) {
			const connection = getVoiceConnection(channel.guild.id);
			connection.destroy();
		}
		event.reply("DISCORD_CHANNEL_LEFT", channelId);
	};

	_handleBroadcastError = (error: Error) => {
		this.window.webContents.send("ERROR", error.message);
		console.error(error);
	};
}
