interface Monster {
  name: string;
  life: number;
  damage: number;
}

const bunny = {
  name: 'Bunny',
  life: 2,
  damage: 1,
}
const slime = {
  name: 'Slime',
  life: 3,
  damage: 1,
}
const snake = {
  name: 'Snake',
  life: 3,
  damage: 2,
}
const ghost = {
  name: 'Griffin',
  life: 3,
  damage: 1,
}
const goblin = {
  name: 'Goblin',
  life: 3,
  damage: 2,
}
const kobold = {
  name: 'Kobold',
  life: 4,
  damage: 1,
}
const assassin = {
  name: 'Assassin',
  life: 3,
  damage: 3,
}
const skeleton = {
  name: 'Skeleton',
  life: 4,
  damage: 2,
}
const griffin = {
  name: 'Griffin',
  life: 5,
  damage: 2,
}
const beholder = {
  name: 'Beholder',
  life: 4,
  damage: 3,
}
const orc = {
  name: 'Orc',
  life: 4,
  damage: 3,
}
const gargoyle = {
  name: 'Gargoyle',
  life: 4,
  damage: 3,
}
const giant = {
  name: 'Giant',
  life: 5,
  damage: 3,
}
const dragon = {
  name: 'Dragon',
  life: 9,
  damage: 4,
}

const monsters = [
  bunny, slime, snake, ghost, goblin, kobold, assassin, skeleton, griffin, beholder, orc, gargoyle, giant, dragon
]

function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// 0 player died
// 1 player won
function battle(monster: Monster, player: any): boolean {
  const monsterCopy = { ...monster };
  while (monsterCopy.life > 0 && player.life > 0) {
    // Player attacks
    let damage = 0;
    for (let i = 0; i < player.attackPower; i++) {
      const diceResult = getRandomInteger(1, 6);
      if (diceResult > 3) damage++;
    }
    monsterCopy.life -= damage;
    if (monsterCopy.life <= 0) break;
    let defense = 0;
    for (let i = 0; i < player.defense; i++) {
      const diceResult = getRandomInteger(1, 6);
      if (diceResult > 3) defense++;
    }
    if (defense >= monsterCopy.damage) continue;
    player.life -= monsterCopy.damage - defense;
  }
  return monsterCopy.life <= 0;
}

function simulate(player, monster) {
  let battleCount = 0;
  while (player.life > 0) {
    battle(monster, player);
    battleCount++;
  }
  // console.log(`Killed ${battleCount - 1} ${monster.name}s`);
  return battleCount - 1;
}

const player = {
  life: 5,
  attackPower: 3,
  defense: 3,
}
const monster = giant;
let totalBattles = 0;
const simulations = 1000;
for (let i = 0; i < simulations; i++) {
  totalBattles += simulate({ ...player }, monster);
}
const average = totalBattles / simulations;
console.log(`After ${simulations} simulations the player defeated an average of ${average} ${monster.name}`);