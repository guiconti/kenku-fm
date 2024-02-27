import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { EndBehaviorType, VoiceReceiver } from "@discordjs/voice";
import type { User } from "discord.js";
import * as prism from "prism-media";

function getDisplayName(userId: string, user?: User) {
	return user ? `${user.username}_${user.discriminator}` : userId;
}

// https://stackoverflow.com/questions/71583521/how-can-i-convert-opus-packets-to-mp3-wav
// To recode
export function createListeningStream(receiver: VoiceReceiver, userId: string, user?: User) {
	const opusStream = receiver.subscribe(userId, {
		end: {
			behavior: EndBehaviorType.AfterSilence,
			duration: 1000,
		},
	});

	const opusDecoder = new prism.opus.Decoder({
		channels: 2,
		frameSize: 960,
		rate: 48000,
	});

	const folder = getDisplayName(userId, user);
	if (!existsSync(`./recordings`)) {
		mkdirSync("./recordings");
	}
	if (!existsSync(`./recordings/${folder}`)) {
		mkdirSync(`./recordings/${folder}`);
	}
	const filename = `./recordings/${folder}/${Date.now()}-${folder}.ogg`;

	const out = createWriteStream(filename);

	console.log(`Started recording ${filename}`);

	opusStream.pipe(opusDecoder).pipe(out);
}
