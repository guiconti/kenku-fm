import { Client, Message, MessageFlags } from "discord.js";
import fs from "fs";
import { v4 as uuid } from "uuid";
import path from "path";
import { DiscordBroadcast } from "./broadcast/DiscordBroadcast";
const { Readable } = require('stream');
import { finished } from 'stream/promises';

const LOCAL_TTS_PATH = path.join(process.cwd(), '/src/assets/audios/tts');
const DESKTOP_TTS_PATH = String.raw`Z:\github\kenku-fm\src\assets\audios\tts`;

const LOCAL_INFER_PATH = path.join(process.cwd(), '/src/assets/audios/infers');
const DESKTOP_INFER_PATH = String.raw`Z:\github\kenku-fm\src\assets\audios\infers`;

// Default values for TTS
const LOCAL_APPLIO_PREFIX = "http://127.0.0.1:6969";
const DESKTOP_APPLIO_PREFIX = "http://192.168.2.82:6969";
const APPLIO_STATUS_CHECK_SUFFIX = "/queue/data?session_hash=";
const APPLIO_TTS_SUFFIX = "/queue/join";
const LOCAL_APPLIO_STATUS_CHECK_URL = LOCAL_APPLIO_PREFIX + APPLIO_STATUS_CHECK_SUFFIX;
const LOCAL_APPLIO_TTS_URL = LOCAL_APPLIO_PREFIX + APPLIO_TTS_SUFFIX;
const DESKTOP_APPLIO_STATUS_CHECK_URL = DESKTOP_APPLIO_PREFIX + APPLIO_STATUS_CHECK_SUFFIX;
const DESKTOP_APPLIO_TTS_URL = DESKTOP_APPLIO_PREFIX + APPLIO_TTS_SUFFIX;
const FILTER_RADIUS = 3;
const SEARCH_FEATURE_RATIO = 0.75;
const VOLUME_ENVELOPE = 1;
const PROTECT_VOICELESS_CONSONANTS = 0.5;
const HOP_LENGTH = 1;
const PITCH_EXTRACTION_ALGORITHM = "rmvpe";
const SPLIT_AUDIO = false;
const AUTOTUNE = false;
const CLEAN_AUDIO = true;

enum Voice {
  DEFAULT = 0,
  LULA = 1,
  BOB_ESPONJA = 2,
  SILVIO_SANTOS = 3,
  GOKU = 4,
}

const TTS_VOICES = {
  [Voice.DEFAULT]: "pt-BR-AntonioNeural",
  [Voice.LULA]: "pt-BR-AntonioNeural",
  [Voice.BOB_ESPONJA]: "pt-BR-FranciscaNeural",
  [Voice.SILVIO_SANTOS]: "pt-BR-AntonioNeural",
  [Voice.GOKU]: "pt-BR-AntonioNeural",
}

const PITCHES = {
  [Voice.DEFAULT]: 0,
  [Voice.LULA]: -5,
  [Voice.BOB_ESPONJA]: 2,
  [Voice.SILVIO_SANTOS]: -5,
  [Voice.GOKU]: -1,
}

const VOICE_MODELS: any = {
  [Voice.DEFAULT]: null,
  [Voice.LULA]: String.raw`logs\Lula\Lula.pth`,
  [Voice.BOB_ESPONJA]: String.raw`logs\bobesponja\bobesponja.pth`,
  [Voice.SILVIO_SANTOS]: String.raw`logs\SilvioSantos\SilvioSantos.pth`,
  [Voice.GOKU]: String.raw`logs\Goku\Goku.pth`,
}

const VOICE_INDEXES: any = {
  [Voice.DEFAULT]: null,
  [Voice.LULA]: String.raw`logs\Lula\added_IVF502_Flat_nprobe_1_Lula_v2.index`,
  [Voice.BOB_ESPONJA]: String.raw`logs\bobesponja\added_IVF1176_Flat_nprobe_1_bobesponja_v2.index`,
  [Voice.SILVIO_SANTOS]: String.raw`logs\SilvioSantos\added_IVF386_Flat_nprobe_1_SilvioSantos_v2.index`,
  [Voice.GOKU]: String.raw`logs\Goku\added_IVF500_Flat_nprobe_1_Goku_v2.index`,
}

const CLEAN_STRENGTHS: any = {
  [Voice.DEFAULT]: 0.75,
  [Voice.LULA]: 0.8,
  [Voice.BOB_ESPONJA]: 1,
  [Voice.SILVIO_SANTOS]: 1,
  [Voice.GOKU]: 1,
}

const TTS_PREFIX = "tts";
const LULA_PREFIX = "lula";
const BOB_ESPONJA_PREFIX = "bob";
const SILVIO_SANTOS_PREFIX = "silvio";
const GOKU_PREFIX = "goku";
const MESSAGE_PREFIX_TO_VOICE = {
  [TTS_PREFIX]: Voice.DEFAULT,
  [LULA_PREFIX]: Voice.LULA,
  [BOB_ESPONJA_PREFIX]: Voice.BOB_ESPONJA,
  [SILVIO_SANTOS_PREFIX]: Voice.SILVIO_SANTOS,
  [GOKU_PREFIX]: Voice.GOKU,
}

const RVC_VOICES = new Set([Voice.LULA, Voice.BOB_ESPONJA, Voice.SILVIO_SANTOS, Voice.GOKU]);

function generateTTSBody(sessionId: string, text: string, ttsAudioPath: string, rvcAudioPath: string, voice?: Voice) {
  return {
    data: [
      text,
      TTS_VOICES[voice ?? Voice.DEFAULT],
      PITCHES[voice ?? Voice.DEFAULT],
      FILTER_RADIUS,
      SEARCH_FEATURE_RATIO,
      VOLUME_ENVELOPE,
      PROTECT_VOICELESS_CONSONANTS,
      HOP_LENGTH,
      PITCH_EXTRACTION_ALGORITHM,
      ttsAudioPath,
      rvcAudioPath,
      VOICE_MODELS[voice ?? Voice.DEFAULT],
      VOICE_INDEXES[voice ?? Voice.DEFAULT],
      SPLIT_AUDIO,
      AUTOTUNE,
      CLEAN_AUDIO,
      CLEAN_STRENGTHS[voice ?? Voice.DEFAULT],
    ],
    // @ts-ignore
    event_data: null,
    fn_index: 28,
    trigger_id: 167,
    session_hash: sessionId
  }
}

function generateInferBody(sessionId: string, inputPath: string, outputPath: string, voice?: Voice) {
  console.log('Generate infer body', inputPath, outputPath);
  return {
    data: [
      PITCHES[voice ?? Voice.DEFAULT],
      FILTER_RADIUS,
      SEARCH_FEATURE_RATIO,
      VOLUME_ENVELOPE,
      PROTECT_VOICELESS_CONSONANTS,
      HOP_LENGTH,
      PITCH_EXTRACTION_ALGORITHM,
      inputPath,
      outputPath,
      VOICE_MODELS[voice ?? Voice.DEFAULT],
      VOICE_INDEXES[voice ?? Voice.DEFAULT],
      SPLIT_AUDIO,
      AUTOTUNE,
      CLEAN_AUDIO,
      CLEAN_STRENGTHS[voice ?? Voice.DEFAULT],
    ],
    // @ts-ignore
    event_data: null,
    fn_index: 10,
    trigger_id: 37,
    session_hash: sessionId
  }
}

function sleep(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

const TTS_VERSION = 0;
function getFilePrefix() {
  return `v${TTS_VERSION}-${Date.now().toString()}`;
}

async function ttsFinished(sessionId: string, useDesktop?: boolean): Promise<boolean> {
  const response = await fetch((useDesktop ? DESKTOP_APPLIO_STATUS_CHECK_URL : LOCAL_APPLIO_STATUS_CHECK_URL) + sessionId);
  const result = await response.text();
  // the result is a plain text that they expect us to stream into multiple jsons
  // We don't really care about anything besides it being completed
  return result.includes("process_completed");
}

async function retrieveTTSAudio(text: string, voice?: Voice): Promise<string> {
  const audioPrefix = getFilePrefix();
  const useDesktop = RVC_VOICES.has(voice);
  const ttsPathToUse = useDesktop ? DESKTOP_TTS_PATH : LOCAL_TTS_PATH;
  const ttsAudioPathSuffix = `${audioPrefix}-tts_output.wav`;
  const rvcAudioPathSuffix = `${audioPrefix}-rvc_output.wav`;
  const ttsAudioPath = path.join(ttsPathToUse, `${audioPrefix}-tts_output.wav`);
  const rvcAudioPath = path.join(ttsPathToUse, `${audioPrefix}-rvc_output.wav`);
  const ttsLocalPath = path.join(LOCAL_TTS_PATH, ttsAudioPathSuffix)
  const rvcLocalPath = path.join(LOCAL_TTS_PATH, rvcAudioPathSuffix)
  const sessionId = uuid();

  const body = generateTTSBody(sessionId, text, ttsAudioPath, rvcAudioPath, voice);

  const response = await fetch(useDesktop ? DESKTOP_APPLIO_TTS_URL : LOCAL_APPLIO_TTS_URL, {
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

  let isTTSFinished = await ttsFinished(sessionId, useDesktop);
  while (!isTTSFinished) {
    tries++;
    console.log('Waiting for tts to be finished');
    await sleep(1000);
    if (tries > (useDesktop ? 30 : 10)) {
      console.log('Tried 10 times and TTS was not done, aborting');
      return;
    }
    isTTSFinished = await ttsFinished(sessionId, useDesktop);
  }
  return RVC_VOICES.has(voice) ? rvcLocalPath : ttsLocalPath;
}

async function playTTS(text: string, broadcast: DiscordBroadcast, voice?: Voice): Promise<void> {
  const audioPath = await retrieveTTSAudio(text, voice);
  broadcast.playFileAudio(audioPath);
}

async function inferAudio(desktopPath: string, voice?: Voice): Promise<string> {
  const audioPrefix = getFilePrefix();
  const outputAudioSuffx = `${audioPrefix}-infer_output.wav`;
  const desktopOutputAudioPath = path.join(DESKTOP_INFER_PATH, outputAudioSuffx);
  const localOutputAudioPath = path.join(LOCAL_INFER_PATH, outputAudioSuffx);
  const sessionId = uuid();

  const body = generateInferBody(sessionId, desktopPath, desktopOutputAudioPath, voice);

  const response = await fetch(DESKTOP_APPLIO_TTS_URL, {
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

  let isTTSFinished = await ttsFinished(sessionId, true);
  while (!isTTSFinished) {
    tries++;
    console.log('Waiting for tts to be finished');
    await sleep(1000);
    if (tries > 6000) {
      console.log('Tried 10 times and TTS was not done, aborting');
      return;
    }
    isTTSFinished = await ttsFinished(sessionId, true);
  }
  return localOutputAudioPath;
}

async function playInfer(desktopPath: string, broadcast: DiscordBroadcast, voice?: Voice): Promise<void> {
  const audioPath = await inferAudio(desktopPath, voice);
  broadcast.playFileAudio(audioPath);
}

const acceptedPrefixes = [TTS_PREFIX, LULA_PREFIX, BOB_ESPONJA_PREFIX, SILVIO_SANTOS_PREFIX, GOKU_PREFIX];
export default async function handleTTSMessage(message: Message, _: Client, broadcast: DiscordBroadcast): Promise<boolean> {
  if (!message) return false;
  const userId = message.author.id.toString();
  if (!userId) return false;
  const messageContent = message.content.toLowerCase();

  if (messageContent.startsWith("ttshelp")) {
    message.channel.send({
      content: `
Para usar o TTS mande uma mensagem no seguinte formato:
\`tipo_de_voz [sexo] [nacionalidade] mensagem\`

Note que [sexo] e [nacionalidade] sao opcionais. Por exemplo voce pode usar:
\`tts Minha mensagem\` ou \`tts [fem] [ita] mensagem\`
No segundo caso a voz usada sera de uma italiana.

O tipo_de_voz tem que ser substituido por uma das seguinte opcoes:
tts (Default)
lula (Lula)
bob (Bob Esponja)
silvio (Silvio Santos)
goku (Goku)

As opcoes [sexo]:
[mas] (Masculino)
[fem] (Feminino)

As opcoes de [nacionalidade]:
[br] (Default)
[ptg] (Portugues portugal)
[ita] (Italiano)
    `, flags: MessageFlags.SuppressNotifications
    });
    return true;
  }

  for (const acceptedPrefix of acceptedPrefixes) {
    if (!messageContent.startsWith(acceptedPrefix)) continue;
    const text = messageContent.replace(acceptedPrefix, "").trim();
    if (text) {
      // @ts-ignore
      playTTS(text, broadcast, MESSAGE_PREFIX_TO_VOICE[acceptedPrefix]);
    } else {
      // Check if a file was sent so we can infer
      const attachment = message.attachments.first();
      if (!attachment || !attachment.contentType.includes('audio')) return true;
      const response = await fetch(attachment.url);
      const audioPrefix = getFilePrefix();
      const originalAudioPathSuffix = `${audioPrefix}-infer-original.wav`;
      const downloadDestination = path.join(LOCAL_INFER_PATH, originalAudioPathSuffix);
      const fileStream = fs.createWriteStream(downloadDestination, { flags: 'wx' });
      await finished(Readable.fromWeb(response.body).pipe(fileStream));
      const desktopInferPath = path.join(DESKTOP_INFER_PATH, originalAudioPathSuffix);
      // @ts-ignore
      playInfer(desktopInferPath, broadcast, MESSAGE_PREFIX_TO_VOICE[acceptedPrefix]);
    }
    return true;
  }

  if (messageContent.startsWith("multitts")) {
    const multiTTSMessage = messageContent.replace("multitts", "").trim();
    const ttsMessages = multiTTSMessage.split("/");
    const audios = [];
    for (const ttsMessage of ttsMessages) {
      for (const acceptedPrefix of acceptedPrefixes) {
        if (!ttsMessage.startsWith(acceptedPrefix)) continue;
        const text = ttsMessage.replace(acceptedPrefix, "").trim();
        if (!text) break;
        // @ts-ignore
        const ttsAudio = await retrieveTTSAudio(text, MESSAGE_PREFIX_TO_VOICE[acceptedPrefix]);
        audios.push(ttsAudio);
      }
    }
    if (audios.length > 0) {
      for (const audio of audios) {
        broadcast.playFileAudio(audio);
      }
    }
  }

  return false;
}
