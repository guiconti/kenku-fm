// import util from 'util';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var NodeType;
(function (NodeType) {
    NodeType[NodeType["START"] = 0] = "START";
    NodeType[NodeType["STAR"] = 1] = "STAR";
    NodeType[NodeType["SHOP"] = 2] = "SHOP";
    NodeType[NodeType["TWO_TRUTHS_ONE_LIE"] = 3] = "TWO_TRUTHS_ONE_LIE";
    NodeType[NodeType["MINE"] = 4] = "MINE";
    NodeType[NodeType["MONSTER_BATTLE"] = 5] = "MONSTER_BATTLE";
    NodeType[NodeType["PLAYER_BATTLE"] = 6] = "PLAYER_BATTLE";
    NodeType[NodeType["NEGATIVE_EFFECT"] = 7] = "NEGATIVE_EFFECT";
    NodeType[NodeType["RANDOM_EFFECT"] = 8] = "RANDOM_EFFECT";
    NodeType[NodeType["POSITIVE_EFFECT"] = 9] = "POSITIVE_EFFECT";
})(NodeType || (NodeType = {}));
var BoardNode = /** @class */ (function () {
    function BoardNode(type, next, id) {
        this.type = type;
        this.next = next;
        this.id = id;
    }
    BoardNode.prototype.setNext = function (next) {
        this.next = next;
    };
    return BoardNode;
}());
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
var Board = /** @class */ (function () {
    function Board(properties) {
        var shopAmount = getRandomInteger(properties.minShop, properties.maxShop);
        // const twoTruthsOneLieAmount = getRandomInteger(properties.minTwoTruthsOneLie, properties.maxTwoTruthsOneLie);
        var minesAmount = getRandomInteger(properties.minMines, properties.maxMines);
        var monsterBattlesAmount = getRandomInteger(properties.minMonsterBattles, properties.maxMonsterBattles);
        var playerBattlesAmount = getRandomInteger(properties.minPlayerBattles, properties.maxPlayerBattles);
        var negativeEffectsAmount = getRandomInteger(properties.minNegativeEffects, properties.maxNegativeEffects);
        var randomEffectsAmount = getRandomInteger(properties.minRandomEffects, properties.maxRandomEffects);
        var positiveEffectsAmount = getRandomInteger(properties.minPositiveEffects, properties.maxPositiveEffects);
        var branchesAmount = getRandomInteger(properties.minBranches, properties.maxBranches);
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
        var currentNode = this.start;
        var currentIndex = 1;
        var nodesAvailable = [];
        var nodesAdded = new Set();
        var branchesLeft = branchesAmount;
        nodesAvailable = nodesAvailable.concat(Array(shopAmount).fill(NodeType.SHOP));
        // nodesAvailable = nodesAvailable.concat(Array(twoTruthsOneLieAmount).fill(NodeType.TWO_TRUTHS_ONE_LIE));
        nodesAvailable = nodesAvailable.concat(Array(minesAmount).fill(NodeType.MINE));
        nodesAvailable = nodesAvailable.concat(Array(monsterBattlesAmount).fill(NodeType.MONSTER_BATTLE));
        nodesAvailable = nodesAvailable.concat(Array(playerBattlesAmount).fill(NodeType.PLAYER_BATTLE));
        nodesAvailable = nodesAvailable.concat(Array(negativeEffectsAmount).fill(NodeType.NEGATIVE_EFFECT));
        nodesAvailable = nodesAvailable.concat(Array(randomEffectsAmount).fill(NodeType.RANDOM_EFFECT));
        nodesAvailable = nodesAvailable.concat(Array(positiveEffectsAmount).fill(NodeType.POSITIVE_EFFECT));
        var _loop_1 = function (i) {
            var branchEnds = [];
            var shouldGenerateBranch = i > 11 && branchesLeft > 0 && getRandomInteger(0, 10) >= 8 && i + properties.maxBranchSize * 2 < this_1.size - 1;
            if (shouldGenerateBranch) {
                // Create branch
                var branchSize = getRandomInteger(properties.minBranchSize, properties.maxBranchSize);
                var branchStarts = [];
                var branchNodesAdded = new Set();
                for (var branchIndex = 0; branchIndex < 2; branchIndex++) {
                    var currentBranchNode = void 0;
                    for (var j = 0; j < branchSize; j++) {
                        var pickedNodeIndex_1 = getRandomInteger(0, nodesAvailable.length - 1);
                        var pickedNodeType_1 = nodesAvailable.splice(pickedNodeIndex_1, 1)[0];
                        var node_1 = new BoardNode(pickedNodeType_1, [], currentIndex);
                        currentIndex++;
                        if (!currentBranchNode) {
                            branchStarts.push(node_1);
                        }
                        if (currentBranchNode) {
                            currentBranchNode.setNext([node_1]);
                        }
                        currentBranchNode = node_1;
                        branchNodesAdded.add(node_1);
                    }
                    branchEnds.push(currentBranchNode);
                }
                currentNode.setNext(branchStarts);
                // Check if one of the branches should point to an existing node
                var pointToExistingNode = getRandomInteger(0, 10) >= 5;
                if (pointToExistingNode) {
                    var circularBranchIndex = getRandomInteger(0, 1);
                    var endCircularBranchNode = branchEnds.splice(circularBranchIndex, 1)[0];
                    var nodesAddedArray = Array.from(nodesAdded);
                    var circularEndIndex = getRandomInteger(nodesAddedArray.length - 9, nodesAddedArray.length - 1);
                    endCircularBranchNode.setNext([nodesAddedArray[circularEndIndex]]);
                }
                nodesAdded = new Set(__spreadArray(__spreadArray([], nodesAdded, true), branchNodesAdded, true));
                i += branchSize * 2;
                branchesLeft--;
            }
            var pickedNodeIndex = getRandomInteger(0, nodesAvailable.length - 1);
            var pickedNodeType = nodesAvailable.splice(pickedNodeIndex, 1)[0];
            var node = new BoardNode(pickedNodeType, [], currentIndex);
            currentIndex++;
            if (branchEnds.length > 0) {
                branchEnds.forEach(function (branchEnd) { return branchEnd.setNext([node]); });
            }
            else {
                currentNode.setNext([node]);
            }
            nodesAdded.add(node);
            currentNode = node;
            out_i_1 = i;
        };
        var this_1 = this, out_i_1;
        for (var i = 0; i < this.size - 1; i++) {
            _loop_1(i);
            i = out_i_1;
        }
        currentNode.setNext([this.start]);
    }
    return Board;
}());
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
