// import util from 'util';

interface BoardProperties {
	// Shop
	minShop: number;
	maxShop: number;
	// Two Truths One Lie
	minTwoTruthsOneLie: number;
	maxTwoTruthsOneLie: number;
	// Mine
	minMines: number;
	maxMines: number;
	// Monster battle
	minMonsterBattles: number;
	maxMonsterBattles: number;
	// Player battle
	minPlayerBattles: number;
	maxPlayerBattles: number;
	// Negative effect
	minNegativeEffects: number;
	maxNegativeEffects: number;
	// Random effect
	minRandomEffects: number;
	maxRandomEffects: number;
	// Positive effect
	minPositiveEffects: number;
	maxPositiveEffects: number;
	// Branches
	minBranches: number;
	maxBranches: number;
	minBranchSize: number;
	maxBranchSize: number;
}

enum NodeType {
	START,
	STAR,
	SHOP,
	TWO_TRUTHS_ONE_LIE,
	MINE,
	MONSTER_BATTLE,
	PLAYER_BATTLE,
	NEGATIVE_EFFECT,
	RANDOM_EFFECT,
	POSITIVE_EFFECT,
}

class BoardNode {
	type: NodeType;
	next: Array<BoardNode>;
	id: number;

	constructor(type: NodeType, next: Array<BoardNode>, id: number) {
		this.type = type;
		this.next = next;
		this.id = id;
	}

	setNext(next: Array<BoardNode>) {
		this.next = next;
	}
}

function getRandomInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

class Board {
	size: number;
	star: BoardNode;
	start: BoardNode;

	constructor(properties: BoardProperties) {
		const shopAmount = getRandomInteger(properties.minShop, properties.maxShop);
		// const twoTruthsOneLieAmount = getRandomInteger(properties.minTwoTruthsOneLie, properties.maxTwoTruthsOneLie);
		const minesAmount = getRandomInteger(properties.minMines, properties.maxMines);
		const monsterBattlesAmount = getRandomInteger(properties.minMonsterBattles, properties.maxMonsterBattles);
		const playerBattlesAmount = getRandomInteger(properties.minPlayerBattles, properties.maxPlayerBattles);
		const negativeEffectsAmount = getRandomInteger(properties.minNegativeEffects, properties.maxNegativeEffects);
		const randomEffectsAmount = getRandomInteger(properties.minRandomEffects, properties.maxRandomEffects);
		const positiveEffectsAmount = getRandomInteger(properties.minPositiveEffects, properties.maxPositiveEffects);
		const branchesAmount = getRandomInteger(properties.minBranches, properties.maxBranches);
		this.size =
			shopAmount +
			// twoTruthsOneLieAmount +
			minesAmount +
			monsterBattlesAmount +
			playerBattlesAmount +
			negativeEffectsAmount +
			randomEffectsAmount +
			positiveEffectsAmount;
		// Accomodate for start
		this.size += 1;
		this.start = new BoardNode(NodeType.START, [], 0);
		let currentNode = this.start;
		let currentIndex = 1;
		let nodesAvailable: Array<NodeType> = [];
		let nodesAdded: Set<BoardNode> = new Set<BoardNode>();
		let branchesLeft = branchesAmount;
		nodesAvailable = nodesAvailable.concat(Array(shopAmount).fill(NodeType.SHOP));
		// nodesAvailable = nodesAvailable.concat(Array(twoTruthsOneLieAmount).fill(NodeType.TWO_TRUTHS_ONE_LIE));
		nodesAvailable = nodesAvailable.concat(Array(minesAmount).fill(NodeType.MINE));
		nodesAvailable = nodesAvailable.concat(Array(monsterBattlesAmount).fill(NodeType.MONSTER_BATTLE));
		nodesAvailable = nodesAvailable.concat(Array(playerBattlesAmount).fill(NodeType.PLAYER_BATTLE));
		nodesAvailable = nodesAvailable.concat(Array(negativeEffectsAmount).fill(NodeType.NEGATIVE_EFFECT));
		nodesAvailable = nodesAvailable.concat(Array(randomEffectsAmount).fill(NodeType.RANDOM_EFFECT));
		nodesAvailable = nodesAvailable.concat(Array(positiveEffectsAmount).fill(NodeType.POSITIVE_EFFECT));
		for (let i = 0; i < this.size - 1; i++) {
			const branchEnds: Array<BoardNode> = [];
			const shouldGenerateBranch =
				i > 11 && branchesLeft > 0 && getRandomInteger(0, 10) >= 8 && i + properties.maxBranchSize * 2 < this.size - 1;
			if (shouldGenerateBranch) {
				// Create branch
				const branchSize = getRandomInteger(properties.minBranchSize, properties.maxBranchSize);
				const branchStarts: Array<BoardNode> = [];
				const branchNodesAdded: Set<BoardNode> = new Set<BoardNode>();
				for (let branchIndex = 0; branchIndex < 2; branchIndex++) {
					let currentBranchNode;
					for (let j = 0; j < branchSize; j++) {
						const pickedNodeIndex = getRandomInteger(0, nodesAvailable.length - 1);
						const pickedNodeType = nodesAvailable.splice(pickedNodeIndex, 1)[0];
						const node = new BoardNode(pickedNodeType, [], currentIndex);
						currentIndex++;
						if (!currentBranchNode) {
							branchStarts.push(node);
						}
						if (currentBranchNode) {
							currentBranchNode.setNext([node]);
						}
						currentBranchNode = node;
						branchNodesAdded.add(node);
					}
					branchEnds.push(currentBranchNode);
				}
				currentNode.setNext(branchStarts);
				// Check if one of the branches should point to an existing node
				const pointToExistingNode = getRandomInteger(0, 10) >= 5;
				if (pointToExistingNode) {
					const circularBranchIndex = getRandomInteger(0, 1);
					const endCircularBranchNode = branchEnds.splice(circularBranchIndex, 1)[0];
					const nodesAddedArray = Array.from(nodesAdded);
					const circularEndIndex = getRandomInteger(nodesAddedArray.length - 9, nodesAddedArray.length - 1);
					endCircularBranchNode.setNext([nodesAddedArray[circularEndIndex]]);
				}
				nodesAdded = new Set([...nodesAdded, ...branchNodesAdded]);
				i += branchSize * 2;
				branchesLeft--;
			}

			const pickedNodeIndex = getRandomInteger(0, nodesAvailable.length - 1);
			const pickedNodeType = nodesAvailable.splice(pickedNodeIndex, 1)[0];
			const node = new BoardNode(pickedNodeType, [], currentIndex);
			currentIndex++;
			if (branchEnds.length > 0) {
				branchEnds.forEach((branchEnd) => branchEnd.setNext([node]));
			} else {
				currentNode.setNext([node]);
			}
			nodesAdded.add(node);
			currentNode = node;
		}
		currentNode.setNext([this.start]);
	}

	// [util.inspect.custom](depth, opts) {
	//   let result = 'Start -> ';
	//   let currentNode = this.start;
	//   const printedNodes: Set<BoardNode> = new Set<BoardNode>();
	//   function printPath(node: BoardNode, branchIndex: number) {
	//     if (printedNodes.has(node)) {
	//       result += `(C to ${node.id}) -> `;
	//       return;
	//     };
	//     result += `${node.type}-${node.id}-B${branchIndex} -> `;
	//     printedNodes.add(node);
	//     node.next.forEach((nextNode, i) => printPath(nextNode, branchIndex + i));
	//   }
	//   printPath(currentNode, 0);

	//   // while (currentNode != this.start) {
	//   //   if (printedNodes.has(currentNode)) break;
	//   //   result += `${currentNode.type} -> `;
	//   //   printedNodes.add(currentNode);
	//   //   currentNode = currentNode.next[0];
	//   // }
	//   result += 'Start';
	//   return result;
	// }
}

// const properties = {
//   // Shop
//   minShop: 2,
//   maxShop: 4,
//   // Two Truths One Lie
//   minTwoTruthsOneLie: 8,
//   maxTwoTruthsOneLie: 12,
//   // Mine
//   minMines: 4,
//   maxMines: 6,
//   // Monster battle
//   minMonsterBattles: 10,
//   maxMonsterBattles: 14,
//   // Player battle
//   minPlayerBattles: 5,
//   maxPlayerBattles: 10,
//   // Negative effect
//   minNegativeEffects: 5,
//   maxNegativeEffects: 10,
//   // Random effect
//   minRandomEffects: 3,
//   maxRandomEffects: 5,
//   // Positive effect
//   minPositiveEffects: 4,
//   maxPositiveEffects: 6,
//   // Branches
//   minBranches: 2,
//   maxBranches: 3,
//   minBranchSize: 4,
//   maxBranchSize: 8,
// }
// const board = new Board(properties);
// console.log(board);
