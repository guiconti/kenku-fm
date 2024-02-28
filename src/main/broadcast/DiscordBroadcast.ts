import { BrowserWindow, ipcMain } from "electron";
import { ChannelType, Client, Events, GatewayIntentBits, Message, MessageFlags, Partials } from "discord.js";
import path from "path";
import {
  createAudioPlayer,
  getVoiceConnection,
  joinVoiceChannel,
  NoSubscriberBehavior,
  entersState,
  VoiceConnectionStatus,
  createAudioResource,
  VoiceConnection,
  AudioPlayerStatus,
  AudioPlayerState,
  PlayerSubscription,
} from "@discordjs/voice";
import { createListeningStream } from "../createWriteStream";
import handleBetMessages from "../bet";
import handleGuessGame from "../guessGame";
import handleMiningMessages from "../mining";
import handleRollMessage from "../roll";
import handleTTSMessage from "../tts";

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
  PLAY_NOW = 2,
  SKIP = 3,
  QUEUE = 4,
  STOP = 5,
}

const AUDIOS_PATH = path.join(process.cwd(), '/src/assets/audios/');
const RECORDING_AVAILABLE = false;

export class DiscordBroadcast {
  window: BrowserWindow;
  client?: Client;
  voiceConnection?: VoiceConnection;
  audioPlayer = createAudioPlayer({
    behaviors: {
      noSubscriber: NoSubscriberBehavior.Play,
      // Set max missed frames to 60 seconds (20ms per frame)
      maxMissedFrames: 3000,
    },
  });
  audioPlayerSubscription?: PlayerSubscription;
  fileAudioPlayer = createAudioPlayer({
    behaviors: {
      noSubscriber: NoSubscriberBehavior.Play,
      // Set max missed frames to 60 seconds (20ms per frame)
      maxMissedFrames: 3000,
    }
  });
  fileAudioPlayerSubscription?: PlayerSubscription;
  currentlyPlaying: boolean;
  queue: Array<string> = [];
  constructor(window: BrowserWindow) {
    this.window = window;
    ipcMain.on("DISCORD_CONNECT", this._handleConnect);
    ipcMain.on("DISCORD_DISCONNECT", this._handleDisconnect);
    ipcMain.on("DISCORD_JOIN_CHANNEL", this._handleJoinChannel);
    ipcMain.on("DISCORD_LEAVE_CHANNEL", this._handleLeaveChannel);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.window.on("MEDIA_STARTED_PLAYING", this.onBrowserViewStartPlaying.bind(this));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.window.on("MEDIA_STOPPED_PLAYING", this.nextSong.bind(this));
    this.audioPlayer.on("error", this._handleBroadcastError);
    this.currentlyPlaying = false;
    this.queue = [];
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
        /^play now ((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/gim
      ) ||
      message.match(
        /^play now (https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/gim
      )
    ) {
      return MessageType.PLAY_NOW;
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
    if (message.startsWith("skip") || message.startsWith("next")) {
      return MessageType.SKIP;
    }
    if (message.startsWith("stop")) {
      return MessageType.STOP;
    }
    if (message.startsWith("queue")) {
      return MessageType.QUEUE;
    }
    return MessageType.NOT_DEFINED;
  }

  onBrowserViewStartPlaying() {
    this.currentlyPlaying = true;
  }

  nextSong() {
    if (this.queue.length === 0) {
      this.currentlyPlaying = false;
      return;
    }
    const nextUrl = this.queue.shift();
    this.window.webContents.send("BROWSER_STREAM", nextUrl);
  }

  _handleConnect = async (event: Electron.IpcMainEvent, token: string) => {
    if (!token) {
      event.reply("DISCORD_DISCONNECTED");
      event.reply("ERROR", "Error connecting to bot: Invalid token");
      return;
    }
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
              if (channel && channel.isVoiceBased()) {
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
        handled = await handleMiningMessages(message, this.client);
        if (handled) return;
        handled = await handleRollMessage(message, this.client);
        if (handled) return;
        handled = await handleTTSMessage(message, this.client, this);
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
          case MessageType.PLAY:
          case MessageType.PLAY_NOW: {
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
            if (this.currentlyPlaying && messageType !== MessageType.PLAY_NOW) {
              this.queue.push(url);
              message.channel.send({
                content: `Adicionei na fila, posição ${this.queue.length}.`,
                flags: MessageFlags.SuppressNotifications,
              });
              return;
            }
            this.window.webContents.send("BROWSER_STREAM", url);
            break;
          }
          case MessageType.SKIP: {
            if (this.queue.length === 0) return;
            this.nextSong();
            break;
          }
          case MessageType.QUEUE: {
            const text = "Fila atual: \n" + this.queue.map((url, index) => `${index + 1}: ${url}`).join("\n");
            message.channel.send({
              content: text,
              flags: MessageFlags.SuppressNotifications,
            });
            break;
          }
          case MessageType.STOP: {
            this.window.webContents.send("BROWSER_STREAM", "https://google.com");
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

  onFileAudioPlayerStatusChange(oldState: AudioPlayerState, newState: AudioPlayerState) {
    if (newState.status === AudioPlayerStatus.Paused || newState.status === AudioPlayerStatus.AutoPaused || newState.status === AudioPlayerStatus.Idle) {
      this.fileAudioPlayer.removeAllListeners('stateChange');
      this.switchFileAudioPlayerToAudioPlayer();
    }
  }

  switchFileAudioPlayerToAudioPlayer() {
    console.log('Switch to audio player');
    if (!this.voiceConnection || !this.audioPlayer) return;
    this.fileAudioPlayerSubscription?.unsubscribe();
    this.audioPlayerSubscription?.unsubscribe();
    this.audioPlayerSubscription = this.voiceConnection.subscribe(this.audioPlayer);
  }

  switchAudioPlayerToFileAudioPlayer() {
    console.log('Switch to file audio player');
    if (!this.voiceConnection || !this.fileAudioPlayer) return;
    this.fileAudioPlayerSubscription?.unsubscribe();
    this.audioPlayerSubscription?.unsubscribe();
    this.fileAudioPlayerSubscription = this.voiceConnection.subscribe(this.fileAudioPlayer);
  }

  playIntroWaited() {
    this.playIntro(true);
  }

  playFileAudio(audioPath: string) {
    console.log('Playing', audioPath);
    this.switchAudioPlayerToFileAudioPlayer();
    const audioResource = createAudioResource(audioPath, { inlineVolume: true });
    audioResource.volume?.setVolume(1);
    try {
      this.fileAudioPlayer.play(audioResource);
      this.fileAudioPlayer.on('stateChange', this.onFileAudioPlayerStatusChange.bind(this));
    } catch (err) {
      console.log(err);
    }
  }

  playIntro(fromWait?: boolean): void {
    if (!fromWait) {
      setTimeout(this.playIntroWaited.bind(this), 300);
      return;
    }
    const introAudioPath = path.join(AUDIOS_PATH, 'intro.mp3');
    this.playFileAudio(introAudioPath);
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
          this.voiceConnection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
          });
          this.fileAudioPlayerSubscription = this.voiceConnection.subscribe(this.fileAudioPlayer);
          this.fileAudioPlayer.on("error", this.switchFileAudioPlayerToAudioPlayer.bind(this));
          this.audioPlayerSubscription = this.voiceConnection.subscribe(this.audioPlayer);
          event.reply("DISCORD_CHANNEL_JOINED", channelId);
          this.voiceConnection.on("error", (e) => {
            console.error(e);
            this.voiceConnection.destroy();
            event.reply("DISCORD_CHANNEL_LEFT", channelId);
            event.reply("ERROR", `Error connecting to voice channel: ${e.message}`);
          });
        } catch (e) {
          console.error(e);
          event.reply("DISCORD_CHANNEL_LEFT", channelId);
          event.reply("ERROR", `Error connecting to voice channel: ${e.message}`);
        }
        if (!RECORDING_AVAILABLE) return;
        this.voiceConnection = getVoiceConnection(channel.guild.id);
        if (!this.voiceConnection) return;
        await entersState(this.voiceConnection, VoiceConnectionStatus.Ready, 20e3);
        const receiver = this.voiceConnection.receiver;
        const client = this.client;
        receiver.speaking.on("start", (userId: string) => {
          const user = client.users.cache.get(userId);
          if (!user) return;
          console.log(user);
          createListeningStream(receiver, userId, user);
        });
        console.log("Fim setup som");
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
