import { Client, Message, MessageFlags } from "discord.js";

const ROLL_REGEXP = new RegExp(/\/?(roll|rola|rolar|dado)( )?(\d+)?d(\d+)/gm);

export default async function handleRollMessage(message: Message, client: Client): Promise<boolean> {
	if (!message) return false;
	const messageContent = message.content.toLowerCase();
	const match = ROLL_REGEXP.exec(messageContent);
	if (!match) return false;
	const dices = parseInt(match[3] ?? "1");
	const sides = parseInt(match[4] ?? "1");

	let total = 0;
	const rolls = [];
	for (let i = 0; i < dices; i++) {
		// Random number between 1 and size
		const roll = Math.floor(Math.random() * (sides + 1 - 1) + 1);
		rolls.push(roll);
		total += roll;
	}
	// @ts-ignore
	const answer = `Roll ${dices}d${sides} para ${message.author.username}\n${total}${dices > 1 ? rolls.reduce((acc, roll, index) => `${index === 1 ? ` (${acc})` : acc} (${roll})`) : ''}`
	message.channel.send({ content: answer, flags: MessageFlags.SuppressNotifications });
	return true;
}
