import { Client, Message, MessageFlags } from "discord.js";
// import { client } from "@gradio/client";
import fs from "fs";
import { v4 as uuid } from "uuid";
import path from "path";
import { DiscordBroadcast } from "./broadcast/DiscordBroadcast";

const TTS_PATH = path.join(process.cwd(), '/src/assets/audios/tts');

const mainChannelId = "508072355629629451";

// Default values for TTS
const APPLIO_STATUS_CHECK_URL = "http://127.0.0.1:6969/queue/data?session_hash=";
const APPLIO_TTS_URL = "http://127.0.0.1:6969/queue/join";
const TTS_VOICE = "pt-BR-AntonioNeural";
const PITCH = 0;
const FILTER_RADIUS = 3;
const SEARCH_FEATURE_RATIO = 0.75;
const VOLUME_ENVELOPE = 1;
const PROTECT_VOICELESS_CONSONANTS = 0.5;
const HOP_LENGTH = 128;
const PITCH_EXTRACTION_ALGORITHM = "rmvpe";
const SPLIT_AUDIO = false;
const AUTOTUNE = false;
const CLEAN_AUDIO = true;
const CLEAN_STRENGTH = 0.75;

function sleep(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function ttsFinished(sessionId: string): Promise<boolean> {
  const response = await fetch(APPLIO_STATUS_CHECK_URL + sessionId);
  const result = await response.text();
  // the result is a plain text that they expect us to stream into multiple jsons
  // We don't really care about anything besides it being completed
  return result.includes("process_completed");
}

async function playTTS(text: string, broadcast: DiscordBroadcast): Promise<void> {
  const audioPrefix = Date.now().toString();
  const ttsAudioPath = path.join(TTS_PATH, `${audioPrefix}-tts_output.wav`);
  // These will be used once we support custom voices
  const rvcAudioPath = path.join(TTS_PATH, `${audioPrefix}-rvc_output.wav`);
  const voiceModel: any = null;
  const indexFile: any = null;
  const sessionId = uuid();

  const body: any = {
    data: [
      text,
      TTS_VOICE,
      PITCH,
      FILTER_RADIUS,
      SEARCH_FEATURE_RATIO,
      VOLUME_ENVELOPE,
      PROTECT_VOICELESS_CONSONANTS,
      HOP_LENGTH,
      PITCH_EXTRACTION_ALGORITHM,
      ttsAudioPath,
      rvcAudioPath,
      voiceModel,
      indexFile,
      SPLIT_AUDIO,
      AUTOTUNE,
      CLEAN_AUDIO,
      CLEAN_STRENGTH,
    ],
    event_data: null,
    fn_index: 28,
    trigger_id: 167,
    session_hash: sessionId
  }

  const response = await fetch(APPLIO_TTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (response.status !== 200) {
    console.log("Failed when creating TTS");
    return;
  }
  let tries = 0;

  let isTTSFinished = await ttsFinished(sessionId);
  while (!isTTSFinished) {
    tries++;
    console.log('Waiting for tts to be finished');
    await sleep(1000);
    if (tries > 10) {
      console.log('Tried 10 times and TTS was not done, aborting');
      return;
    }
    isTTSFinished = await ttsFinished(sessionId);
  }
  broadcast.playFileAudio(ttsAudioPath);
}

export default async function handleTTSMessage(message: Message, _: Client, broadcast: DiscordBroadcast): Promise<boolean> {
  if (!message) return false;
  const userId = message.author.id.toString();
  if (!userId) return false;
  const messageContent = message.content.toLowerCase();

  if (!messageContent.startsWith("tts")) return false;
  const text = messageContent.replace("tts", "").trim();
  if (!text) return true;
  playTTS(text, broadcast);
  return true;
}
