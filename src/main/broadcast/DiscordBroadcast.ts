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
import Eris from "eris";

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
	client?: Eris.Client;
	broadcast = new Eris.SharedStream();
	constructor(window: BrowserWindow) {
		this.window = window;
		ipcMain.on("DISCORD_CONNECT", this._handleConnect);
		ipcMain.on("DISCORD_DISCONNECT", this._handleDisconnect);
		ipcMain.on("DISCORD_JOIN_CHANNEL", this._handleClickJoinChannel);
		ipcMain.on("DISCORD_LEAVE_CHANNEL", this._handleLeaveChannel);
		this.broadcast.on("error", this._handleBroadcastError);
	}

	destroy() {
		ipcMain.off("DISCORD_CONNECT", this._handleConnect);
		ipcMain.off("DISCORD_DISCONNECT", this._handleDisconnect);
		ipcMain.off("DISCORD_JOIN_CHANNEL", this._handleClickJoinChannel);
		ipcMain.off("DISCORD_LEAVE_CHANNEL", this._handleLeaveChannel);
		this.broadcast.off("error", this._handleBroadcastError);
		this.client?.disconnect({ reconnect: false });
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
		if (this.client) {
			this.client.voiceConnections.forEach((connection) => {
				this.broadcast.remove(connection);
			});
			this.client.disconnect({ reconnect: false });
			this.client = undefined;
		}

		try {
			this.client = new Eris.Client(token, {
				// intents: ["guilds", "guildVoiceStates", "guildMessages", "messageContent"],
				intents: ["guilds", "guildVoiceStates", "guildMessages", "directMessages"],
			});
			this.client.once("ready", async () => {
				event.reply("DISCORD_READY");
				event.reply("MESSAGE", "Connected");
				const guilds: Guild[] = [];
				for (const guild of Array.from(this.client.guilds.values())) {
					const voiceChannels: VoiceChannel[] = [];
					guild.channels.forEach((channel) => {
						if (channel instanceof Eris.VoiceChannel) {
							voiceChannels.push({
								id: channel.id,
								name: channel.name,
							});
						}
					});
					guilds.push({
						id: guild.id,
						name: guild.name,
						icon: guild.iconURL,
						voiceChannels,
					});
				}
				event.reply("DISCORD_GUILDS", guilds);
			});
			this.client.on("messageCreate", async (message) => {
				if (!message) return;
				const messageContent = message.content.toLowerCase();
				const messageType = this.getMessageType(messageContent);
				switch (messageType) {
					case MessageType.JOIN: {
						// Before we could do something like message.member.voice.channel.id
						// Now we need to look into all the voiceStates in the guild and find the member there
						const memberId = message.member.id;
						const voiceStateForMember = message.member.guild.voiceStates.get(memberId);
						if (!voiceStateForMember) break;
						event.reply("DISCORD_FORCE_JOIN", voiceStateForMember.channelID);
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
						const memberId = message.member.id;
						const voiceStateForMember = message.member.guild.voiceStates.get(memberId);
						if (!voiceStateForMember) break;
						event.reply("DISCORD_FORCE_JOIN", voiceStateForMember.channelID);
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
			await this.client.connect();
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
		this.client?.voiceConnections.forEach((connection) => {
			this.broadcast.remove(connection);
		});
		this.client?.disconnect({ reconnect: false });
		this.client = undefined;
	};

	_handleClickJoinChannel = async (event: Electron.IpcMainEvent, channelId: string) => {
		if (this.client) {
			const channel = this.client.getChannel(channelId);
			if (channel && channel instanceof Eris.VoiceChannel) {
				try {
					const connection = await channel.join();
					this.broadcast.add(connection);
					event.reply("DISCORD_CHANNEL_JOINED", channelId);
					connection.on("error", (e) => {
						console.error(e);
						this.broadcast.remove(connection);
						this.client.leaveVoiceChannel(channelId);
						event.reply("DISCORD_CHANNEL_LEFT", channelId);
						event.reply("ERROR", `Error connecting to voice channel: ${e.message}`);
					});
				} catch (e) {
					console.error(e);
					this.client.leaveVoiceChannel(channelId);
					event.reply("DISCORD_CHANNEL_LEFT", channelId);
					event.reply("ERROR", `Error connecting to voice channel: ${e.message}`);
				}
			}
		}
	};

	_handleLeaveChannel = async (event: Electron.IpcMainEvent, channelId: string) => {
		this.client.voiceConnections.forEach((connection) => {
			if (connection.channelID === channelId) {
				this.broadcast.remove(connection);
			}
		});
		this.client?.leaveVoiceChannel(channelId);
		event.reply("DISCORD_CHANNEL_LEFT", channelId);
	};

	_handleBroadcastError = (error: Error) => {
		this.window.webContents.send("ERROR", error.message);
		console.error(error);
	};
}
