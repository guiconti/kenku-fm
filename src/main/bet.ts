import { Client, Message, MessageFlags } from "discord.js";
import fs from "fs";
import path from "path";

const mainChannelId = "508072355629629451";

type Option = { option: number; amount: number };
let usersMoneyDict: { [key: string]: { name: string; amount: number } } = {};
let bet: Array<{ name: string; odds: number }> = undefined;
let currentBets: { [key: string]: Option } = undefined;

const walletsPath = path.join(process.cwd(), "wallets.json");
const rawData = fs.readFileSync(walletsPath);
let jsonData = {};
if (rawData) {
	try {
		jsonData = JSON.parse(rawData.toString());
		usersMoneyDict = jsonData;
	} catch (err) {
		console.log(err);
	}
}

export default async function handleBetMessages(message: Message, client: Client): Promise<boolean> {
	if (!message) return false;
	const userId = message.author.id.toString();
	if (!userId) return false;
	const messageContent = message.content.toLowerCase();

	const isNewBet = messageContent.startsWith("nova aposta");
	if (isNewBet) {
		const betOptions = messageContent.replace("nova aposta", "").trim().split("/");
		if (betOptions.length < 2) {
			return false;
		}
		const newBet: Array<{ name: string; odds: number }> = [];
		for (let i = 0; i < betOptions.length; i++) {
			const betData = betOptions[i].trim().split(" ");
			const odds = parseFloat(betData[betData.length - 1]);
			if (isNaN(odds)) {
				return false;
			}
			const name = betData.slice(0, betData.length - 1).join(" ");
			newBet.push({
				name,
				odds,
			});
		}
		bet = newBet;
		currentBets = {};
		let answer = "Nova aposta criada!\n";
		for (let i = 0; i < bet.length; i++) {
			answer += `${i}: ${bet[i].name} pagando ${bet[i].odds}\n`;
		}
		message.channel.send({ content: answer, flags: MessageFlags.SuppressNotifications });
		return true;
	}

	const isBet = messageContent.startsWith("apostar");
	if (isBet) {
		if (!bet || bet.length === 0) return false;
		const betData = message.content.replace("apostar", "").trim().split(" ");
		if (betData.length < 2) return false;
		const option = parseInt(betData[0]);
		if (isNaN(option) || option < 0 || option >= bet.length) return false;
		const amount = parseFloat(betData[1]);
		if (isNaN(amount)) return false;
		if (!usersMoneyDict[userId]) {
			usersMoneyDict[userId] = {
				name: message.author.username,
				amount: 0,
			};
			usersMoneyDict[userId].amount = 0;
		}
		// You can't bet more than you have and you can't bet less than 100
		// If you have less than 100 you can still bet 100
		const finalBetAmount = Math.max(Math.min(amount, usersMoneyDict[userId].amount), 100);
		usersMoneyDict[userId].amount -= finalBetAmount;
		usersMoneyDict[userId].amount = Math.max(usersMoneyDict[userId].amount, 0);
		currentBets[userId] = { option, amount };
		const defaultMessage = `Aposta de ${amount} feita para ${bet[option].name}. Você agora tem ${usersMoneyDict[userId].amount} na carteira`;
		// Private message
		if (message.channel.id !== mainChannelId) {
			const channel = await client.channels.fetch(mainChannelId);
			try {
				// @ts-ignore
				channel.send({
					content: `${usersMoneyDict[userId].name} apostou nas escondidas. CUZÃO!`,
					flags: MessageFlags.SuppressNotifications,
				});
			} catch (err) {
				console.error(err);
				return false;
			}
		}
		message.channel.send({
			content: defaultMessage,
			flags: MessageFlags.SuppressNotifications,
		});
		return true;
	}

	const payBet = messageContent.trim().startsWith("pagar aposta");
	if (payBet) {
		if (!bet || bet.length === 0) return false;
		const betData = message.content.replace("pagar aposta", "").trim().split(" ");
		if (betData.length < 1) return false;
		const option = parseInt(betData[0]);
		if (isNaN(option) || option < 0 || option >= bet.length) return false;
		let messageToSend = "";
		Object.keys(currentBets).forEach((currentUserId) => {
			const currentBet = currentBets[currentUserId];
			if (currentBet.option === option) {
				const winAmount = currentBet.amount * bet[option].odds;
				usersMoneyDict[currentUserId].amount += currentBet.amount + winAmount;
				messageToSend += `${usersMoneyDict[currentUserId].name} ganhou ${winAmount}. Você agora tem ${usersMoneyDict[currentUserId].amount}\n`;
				return;
			}
			messageToSend += `${usersMoneyDict[currentUserId].name} perdeu ${currentBet.amount}. Você agora tem ${usersMoneyDict[currentUserId].amount}\n`;
		});
		message.channel.send({
			content: messageToSend,
			flags: MessageFlags.SuppressNotifications,
		});
		bet = undefined;
		currentBets = undefined;
		fs.writeFileSync(walletsPath, JSON.stringify(usersMoneyDict));
		return true;
	}

	if (messageContent.trim().startsWith("carteira")) {
		message.channel.send({
			content: `Você tem ${usersMoneyDict[userId] ? usersMoneyDict[userId].amount : 0} na carteira`,
			flags: MessageFlags.SuppressNotifications,
		});
		return true;
	}

	if (messageContent.trim().startsWith("aposta ajuda") || messageContent.trim().startsWith("apostas ajuda")) {
		message.channel.send({
			content: `Para criar uma aposta digite "nova aposta <opção 1> <odds 1> / <opção 2> <odds 2> / <opção 3> <odds 3> / ...". Exemplo: "nova aposta Flamengo 1.5 / Palmeiras 2.5 / Santos 3.5".\n\nPara apostar digite "apostar <opção> <valor>". Exemplo: "apostar 1 100".\n\nPara pagar a aposta digite "pagar aposta <opção>". Exemplo: "pagar aposta 1".\n\nPara ver sua carteira digite "carteira".`,
			flags: MessageFlags.SuppressNotifications,
		});
		return true;
	}

	return false;
}
