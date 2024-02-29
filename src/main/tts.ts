import { Client, Message, MessageFlags } from "discord.js";
import fs from "fs";
import { v4 as uuid } from "uuid";
import path from "path";
import { DiscordBroadcast } from "./broadcast/DiscordBroadcast";
const { Readable } = require('stream');
import { finished } from 'stream/promises';

interface Options {
  hold: boolean;
  save: string | null;
}

const SAVE_REGEX = new RegExp(/\[save=(.*?)\]/gm);
const HOLD_REGEX = new RegExp(/\[hold\]/gm);
const SAVED_TTS_JSON_PATH = path.join(process.cwd(), '/src/assets/audios/saved.json');
let savedAudios: { [key: string]: string | string[] } = {};
const rawData = fs.readFileSync(SAVED_TTS_JSON_PATH);
let jsonData = {};
if (rawData) {
  try {
    jsonData = JSON.parse(rawData.toString());
    savedAudios = jsonData;
  } catch (err) {
    console.log(err);
  }
}

const CACHED_TTS_JSON_PATH = path.join(process.cwd(), '/src/assets/audios/cached.json');
let cachedAudios: { [key: string]: string | string[] } = {};
const cachedRawData = fs.readFileSync(CACHED_TTS_JSON_PATH);
let cachedJsonData = {};
if (cachedRawData) {
  try {
    cachedJsonData = JSON.parse(cachedRawData.toString());
    cachedAudios = cachedJsonData;
  } catch (err) {
    console.log(err);
  }
}

async function updateSavedAudios() {
  fs.writeFile(SAVED_TTS_JSON_PATH, JSON.stringify(savedAudios), () => { });
}

function saveAudio(name: string, audioName: string | string[]) {
  savedAudios[name] = audioName;
  updateSavedAudios();
}

function generateCacheKey(input: string, voice?: Voice) {
  return `v${TTS_VERSION}-${voice ?? Voice.DEFAULT}-${input}`;
}

function cacheAudio(key: string, audioName: string) {
  cachedAudios[key] = audioName;
}

async function updateCachedAudios() {
  fs.writeFile(CACHED_TTS_JSON_PATH, JSON.stringify(cachedAudios), () => { });
}

// setInterval(updateCachedAudios, 1000 * 60 * 15);
setInterval(updateCachedAudios, 1000);

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
  const cacheKey = generateCacheKey(text, voice);
  if (cachedAudios[cacheKey]) {
    return cachedAudios[cacheKey] as string;
  }
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
  const audioPath = RVC_VOICES.has(voice) ? rvcLocalPath : ttsLocalPath;
  cacheAudio(cacheKey, audioPath);
  return audioPath;
}

async function playTTS(text: string, broadcast: DiscordBroadcast, options: Options, voice?: Voice): Promise<void> {
  const audioPath = await retrieveTTSAudio(text, voice);
  if (options.save) {
    saveAudio(options.save, audioPath);
  }
  if (!options.hold) {
    broadcast.playFileAudio(audioPath);
  }
}

async function retrieveMultiTTSAudio(text: string): Promise<string[]> {
  const cacheKey = generateCacheKey(text);
  if (cachedAudios[cacheKey]) {
    return cachedAudios[cacheKey] as string[];
  }
  const ttsMessages = text.split("/");
  const audios = [];
  for (let i = 0; i < ttsMessages.length; i++) {
    if (ttsMessages[i].startsWith("savedtts")) {
      const audioName = ttsMessages[i].replace("savedtts", "").trim();
      if (savedAudios[audioName]) {
        const savedAudio = savedAudios[audioName];
        if (typeof savedAudio === 'string') {
          audios.push(savedAudio);
        } else {
          audios.push(...savedAudio);
        }
      }
      continue;
    }
    for (const acceptedPrefix of acceptedPrefixes) {
      if (!ttsMessages[i].startsWith(acceptedPrefix)) continue;
      const ttsMessageText = ttsMessages[i].replace(acceptedPrefix, "").trim();
      if (!ttsMessageText) break;
      // @ts-ignore
      const ttsAudio = await retrieveTTSAudio(ttsMessageText, MESSAGE_PREFIX_TO_VOICE[acceptedPrefix]);
      audios.push(ttsAudio);
    }
  }
  return audios;
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

async function playInfer(desktopPath: string, broadcast: DiscordBroadcast, options: Options, voice?: Voice): Promise<void> {
  const audioPath = await inferAudio(desktopPath, voice);
  if (options.save) {
    saveAudio(options.save, audioPath);
  }
  if (!options.hold) {
    broadcast.playFileAudio(audioPath);
  }
}

function splitTextAndOptions(rawMessage: string): [string, Options] {
  let text = rawMessage;
  const options: Options = { hold: false, save: null };
  const saveMatch = SAVE_REGEX.exec(text);
  if (saveMatch) {
    options.save = saveMatch[1];
    text = text.replace(SAVE_REGEX, "");
  }
  if (HOLD_REGEX.test(text)) {
    options.hold = true;
    text = text.replace(HOLD_REGEX, "");
  }
  return [text.trim().toLowerCase(), options];
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

Voce pode adicionar \`[save=nome do audio]\` para salvar esse audio e reenviar no futuro mandando
\`savedtts nome do audio\`. Um exemplo do uso de save pode ser \`lula tira que eu vou cagar [save=tira que eu vou cagar]\`. Se o nome ja estiver sendo usado eu vou te avisar

Voce pode adicionar \`[hold]\` depois da configuracao de voz para nao enviar o audio. Isso pode ser util se voce quiser salvar mas nao mandar, por exemplo
\`lula tira que eu vou cagar [save=tira que eu vou cagar] [hold]\`

**OBS: SEXO E NACIONALIDADE AINDA NAO FORAM IMPLEMENTADOS**

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

  if (messageContent.startsWith("inferhelp")) {
    message.channel.send({
      content: `
Mande um audio com uma mensagem seguindo as regras do tts para transformar aquele audio na voz.
A mensagem pode ser por exemplo: \`lula\`. Note que diferente do TTS voce nao precisa mandar a mensagem
Ja que o audio ja tem a mensagem. Voce pode usar as mesmas funcionalidades do tts como \`lula[fem][ita]\`.
Para checar as regras do tts mande \`ttshelp\`.

Voce tem opcoes a mais quando mandar um arquivo assim:

Voce pode adicionar \`[save=nome do audio]\` para salvar esse audio e reenviar no futuro mandando
\`savedtts nome do audio\`. Um exemplo do uso de save pode ser \`lula [save=tira que eu vou cagar]\`. Se o nome ja estiver sendo usado eu vou te avisar

Voce pode adicionar \`hold\` depois da configuracao de voz para nao enviar o audio. Isso pode ser util se voce quiser salvar mas nao mandar, por exemplo
\`lula [save=tira que eu vou cagar] [hold]\`
      `, flags: MessageFlags.SuppressNotifications
    });
    return true;
  }

  if (messageContent.startsWith("listtts")) {
    let audios = "";
    for (const savedAudio of Object.keys(savedAudios)) {
      audios += `- ${savedAudio}\n`;
    }
    message.channel.send({ content: audios, flags: MessageFlags.SuppressNotifications });
    return true;
  }

  if (messageContent.startsWith("savedtts")) {
    const audioName = messageContent.replace("savedtts", "").trim();
    if (savedAudios[audioName]) {
      const audioPath = savedAudios[audioName];
      if (typeof audioPath === 'string') {
        broadcast.playFileAudio(audioPath);
      } else {
        for (const singleAudioPath of audioPath) {
          broadcast.playFileAudio(singleAudioPath);
        }
      }
      return;
    } else {
      message.channel.send({
        content: "Audio não encontrado",
        flags: MessageFlags.SuppressNotifications,
      });
    }
    return true;
  }

  if (messageContent.startsWith("deletetts")) {
    const audioName = messageContent.replace("deletetts", "").trim();
    if (savedAudios[audioName]) {
      delete savedAudios[audioName];
      updateSavedAudios();
      message.channel.send({
        content: `Audio ${audioName} deletado`,
        flags: MessageFlags.SuppressNotifications,
      });
    } else {
      message.channel.send({
        content: "Audio não encontrado",
        flags: MessageFlags.SuppressNotifications,
      });
    }
    return true;
  }

  if (messageContent.startsWith("downloadtts")) {
    const audioName = messageContent.replace("downloadtts", "").trim();
    if (!savedAudios[audioName]) {
      message.channel.send({
        content: "Audio não encontrado",
        flags: MessageFlags.SuppressNotifications,
      });
      return true;
    }
    const audioPath = savedAudios[audioName];
    const files = typeof audioPath === 'string' ? [audioPath] : audioPath;
    message.channel.send({
      content: `Audio ${audioName}`,
      files,
      flags: MessageFlags.SuppressNotifications,
    });
    return true;
  }

  for (const acceptedPrefix of acceptedPrefixes) {
    if (!messageContent.startsWith(acceptedPrefix)) continue;
    const [text, options] = splitTextAndOptions(messageContent.replace(acceptedPrefix, "").trim());
    if (text) {
      // @ts-ignore
      playTTS(text, broadcast, options, MESSAGE_PREFIX_TO_VOICE[acceptedPrefix]);
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
      playInfer(desktopInferPath, broadcast, options, MESSAGE_PREFIX_TO_VOICE[acceptedPrefix]);
    }
    return true;
  }

  if (messageContent.startsWith("multitts")) {
    const multiTTSMessage = messageContent.replace("multitts", "").trim();
    const [rawMultiTTSMessage, options] = splitTextAndOptions(multiTTSMessage);
    const audioPaths = await retrieveMultiTTSAudio(rawMultiTTSMessage);
    if (options.save) {
      saveAudio(options.save, audioPaths);
    }
    if (!options.hold) {
      for (const audioPath of audioPaths) {
        broadcast.playFileAudio(audioPath);
      }
    }
    return true;
  }

  return false;
}
