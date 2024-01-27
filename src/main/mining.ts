import { Client, Message, MessageFlags } from "discord.js";

const MINE_REGEXP = new RegExp(/\/?(mineirar|mineira|mine|mining)/gm);

// 0~35 -> Explode
// 35~70 -> Nada
// 70~95 -> Acerto
// 95~100 -> Acerto crítico
function getAnswerForValue(value: number): string {
	if (value <= 30) {
		return "Você acidentalmente acertou um explosivo e tomou 1 de dano";
	}
	if (value <= 60) {
		return "Você procura algo na mina mas não encontra nada";
	}
	if (value <= 95) {
		return "Você achou um rubi, ela vale 4 de gold";
	}
	return "Você achou um diamante! Ele vale 8 de gold";
}

export default async function handleMiningMessages(message: Message, client: Client): Promise<boolean> {
	if (!message) return false;
	const messageContent = message.content.toLowerCase();
	if (!MINE_REGEXP.test(messageContent)) return false;
	const result = Math.random() * 100;
	const answer = getAnswerForValue(result);
	message.channel.send({ content: answer, flags: MessageFlags.SuppressNotifications });
}
