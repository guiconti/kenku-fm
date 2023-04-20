const difficulties = {
	VERY_EASY: 0,
	EASY: 1,
	MEDIUM: 2,
	HARD: 3,
	VERY_HARD: 4,
};
type Keys = keyof typeof difficulties;
export type Difficulty = typeof difficulties[Keys];

const franchises = {
	A_HAT_IN_TIME: "A Hat in Time",
	ASSASSINS_CREED: "Assassin's Creed",
	CELESTE: "Celeste",
	CRASH: "Crash Bandicoot",
	CUPHEAD: "Cuphead",
	CYBERPUNK: "Cyberpunk",
	DANGANRONPA: "Danganronpa",
	DEAD_SPACE: "Dead Space",
	ENTERNAL_SONATA: "Eternal Sonata",
	EARTHBOUND: "Earthbound",
	GOD_OF_WAR: "God of War",
	GRAVITY_RUSH: "Gravity Rush",
	HALO: "Halo",
	HOLLOW_KNIGHT: "Hollow Knight",
	JET_SET_RADIO: "Jet Set Radio",
	MEGA_MAN: "Mega man",
	MOONLIGHTER: "Moonlighter",
	NO_MORE_HEROES: "No More Heroes",
	OKAMI: "Okami",
	OVERCOOKED: "Overcooked",
	PHOENIX_WRIGHT: "Phoenix Wright",
	RAGNAROK: "Ragnarok",
	THE_BINDING_OF_ISAAC: "The Binding of Isaac",
	THE_ELDER_SCROLLS: "The Elder Scrolls",
	THE_LAST_OF_US: "The Last of Us",
	THE_WITCHER: "The Witcher",
	TOMB_RAIDER: "Tomb Raider",
	UNCHARTED: "Uncharted",
};

type FranchiseKeys = keyof typeof franchises;
export type Franchise = typeof franchises[FranchiseKeys];

// Series that need to be completed
// Castlevania
// Donkey Kong
// Final Fantasy
// Kirby
// Metroid
// Pokemon
// Sonic
// Street Fighter
// Mario
// Zelda
// Gecko
// Monster hunter
// GTA
// Devil May Cry
// Ori and the Blind Forest
// Dark Souls
// Bloodborne
// Guilty Gear
// Tekken
// Mortal Kombat
// Soul Calibur
// Bomberman
// Splatoon
// Chrono cross
// Chrono Trigger
// Mystical Ninja
// YS
// Yooka Laylee
// Banjo Kazooie
// Nier Automata
// Tales
// Persona
// Dragon Quest
// Blasphemous
// Darksiders
// Bayonetta
// Grand Chase
// Fifa
// Need for Speed
// Dragon ball
// Wii sports
// Ni no kuni
// Kingdom Hearts
// Children of mana
// Metal slug
// Metal gear
// Dead or Alive
// Super monkey ball
// Super smash bros
// Undertale
// Delta rune
// Touhou
// Disgaea
// Child of light
// Fable
// Fallout
// Far Cry
// Forza
// Gears of War
// Plants vs Zombies
// Rayman
// Spiderman
// Journey
// Hyperlight Drifter
// Bioshock
// Cross code
// Dead cells
// Nidhogg
// League of legends
// Overwatch
// FTL
// Terraria
// Minecraft
// Stardew Valley
// Harvest Moon
// Animal Crossing
// Hades
// Transistor
// Bastion
// Half life
// Portal
// Hotline Miami
// Tetris
// Crypt of the Necrodancer
// Papers please
// Kingdoms of Amalur
// The Sims
// Super meat boy
// Castle crashers
// Earthworm Jim
// F-zero
// 007
// Star Fox
// Assassin's creed
// Splinter Cell
// Tony Hawk
// Battlefield
// Call of Duty
// Ico
// Shadow of the Colossus
// The Last Guardian
// Ghosts 'n Goblins
// Red dead redemption
// Star wars
// Luftrausers
// Pac-man
// Duke Nukem
// Doom
// Monkey Island
// Deus Ex
// Mass Effect
// Balduge's Gate
// World of warcraft
// Diablo
// Secret of Mana
// Killer Instinct
// Grim Fandango
// World of Goo
// Disco Elysium
// Zero Escape
// Until Dawn
// Horizon Zero Dawn
// Return of the Obra Dinn
// Command & Conquer
// Runescape
// Crysis
// F1
// CSGO
// Dishonored
// Superhexagon
// Batman
// Dying Light
// Payday
// Detroit Become Human
// Fire emblem
// Silent hill
// Ghost of Tsushima
// Inside
// Fortnite
// Spenlunky
// Dota
// Civilization
// Marvel vs Capcom
// Dead Island
// Octopath
// Perfect Dark
// Battletoads
// Life is strange
// Yakuza
// Rivals of Aether
// Luigi's Mansion
// KoF
// Hitman
// Arms
// Lost Planet
// The World Ends With You

type Song = {
	name: string;
	url: string;
	difficulty: Difficulty;
};

type Image = {
	name: string;
	url: string;
	difficulty: Difficulty;
};

type Game = {
	name: string;
	aliases: string[];
	franchise: Franchise;
	hints: Array<string>;
	difficulty: Difficulty;
	songs: Array<Song>;
	images: Array<Image>;
};

const games: Array<Game> = [
	{
		// If we want more songs this playlist have a lot of them
		// https://www.youtube.com/watch?v=a9OdzOz-9-I&list=PLWa6qxs0LO-v6pR8B9vVmqN-asyi8Crpp
		name: "Ragnarok",
		aliases: ["Rag", "Ragzin"],
		difficulty: difficulties.HARD,
		franchise: franchises.RAGNAROK,
		songs: [
			{
				name: "Title BGM",
				url: "https://www.youtube.com/watch?v=a9OdzOz-9-I",
				difficulty: difficulties.HARD,
			},
			{
				name: "Theme of Prontera",
				url: "https://youtu.be/D30M_vLMvWk",
				difficulty: difficulties.VERY_HARD,
			},
			{
				name: "Theme of Morroc",
				url: "https://youtu.be/3-mLZN830y8",
				difficulty: difficulties.VERY_HARD,
			},
			{
				name: "Theme of Geffen",
				url: "https://youtu.be/yWgf7p3_z8w",
				difficulty: difficulties.VERY_HARD,
			},
			{
				name: "Theme of Payon",
				url: "https://youtu.be/zwM4pDzR-6g",
				difficulty: difficulties.VERY_HARD,
			},
			{
				name: "Theme of Alberta",
				url: "https://youtu.be/lQjoaA9QqRA",
				difficulty: difficulties.VERY_HARD,
			},
			{
				name: "Theme of Lutie",
				url: "https://youtu.be/7MSwhIBnqHg",
				difficulty: difficulties.VERY_HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega man",
		aliases: ["Megaman", "Megaman 1", "Mega man 1", "Mega man I", "Megaman I"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Fire Man Stage",
				url: "https://youtu.be/CTIdRD5qrag",
				difficulty: difficulties.EASY,
			},
			{
				name: "Elec Man Stage",
				url: "https://youtu.be/CJdFxTOysjo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cut Man Stage",
				url: "https://youtu.be/GsXEqfDL40k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bomb Man Stage",
				url: "https://youtu.be/GsXEqfDL40k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ice Man Stage",
				url: "https://youtu.be/CUZlDht8iro",
				difficulty: difficulties.EASY,
			},
			{
				name: "Guts Man Stage",
				url: "https://youtu.be/m2jq2YCxAuE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/5WduvI0CZ4c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Willy Fortress 1",
				url: "https://youtu.be/gg97ZlbUJXY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Willy Fortress 2",
				url: "https://youtu.be/7CNIrDQC9q0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/9LmdO3TCzpM",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 2",
		aliases: ["Megaman 2", "Mega man2", "Megaman2", "Mega man II", "Megaman II"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.VERY_EASY,
		songs: [
			{
				name: "Intro Theme",
				url: "https://youtu.be/ZT9DST_M_g8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bubble Man Stage",
				url: "https://youtu.be/FEULEvmq7yE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Crash Man Stage",
				url: "https://youtu.be/7oO7QC32Wfs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Flash Man Stage",
				url: "https://youtu.be/26MopY4DTZU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Heat Man Stage",
				url: "https://youtu.be/2OJphbcA9SY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Metal Man Stage",
				url: "https://youtu.be/uQXA9RkC_-c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wood Man Stage",
				url: "https://youtu.be/WvAAOmoEftg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Quick Man Stage",
				url: "https://youtu.be/FRa4LHSJf_M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Air Man Stage",
				url: "https://youtu.be/IhK4D3ytYMc",
				difficulty: difficulties.VERY_EASY,
			},
			{
				name: "Willy Fortress 1",
				url: "https://youtu.be/aTbfpkByIM8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Willy Fortress 2",
				url: "https://youtu.be/tgY2Sf5vitQ",
				difficulty: difficulties.VERY_EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/GPVDroHSUic",
				difficulty: difficulties.VERY_EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/KL9Gnx42Xf0",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 3",
		aliases: ["Megaman 3", "Mega man3", "Megaman3", "Mega man III", "Megaman III"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Title Theme",
				url: "https://youtu.be/U2kTeh7FNl0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gemini Man Stage",
				url: "https://youtu.be/J2LF3YR2dNM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hard Man Stage",
				url: "https://youtu.be/JzzJwrIN6Mc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Magnet Man Stage",
				url: "https://youtu.be/fuKQCXRseU8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Needle Man Stage",
				url: "https://youtu.be/wDJbOB1h2EU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Shadow Man Stage",
				url: "https://youtu.be/Usl7cw6VnLU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Snake Man Stage",
				url: "https://youtu.be/ZqGLXispP08",
				difficulty: difficulties.EASY,
			},
			{
				name: "Spark Man Stage",
				url: "https://youtu.be/6J5cN87c2yM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Top Man Stage",
				url: "https://youtu.be/4dgtHw-uAxY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/y3t6peqsorE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Get New Weapon",
				url: "https://youtu.be/dvi46JYzwdU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress 1",
				url: "https://youtu.be/sfOE4rJnYYc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress 2",
				url: "https://youtu.be/zC0EWRZE3Dw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress 3",
				url: "https://youtu.be/6eZ7CyMYDLM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Guardian Battle",
				url: "https://youtu.be/scC_d0Ciu0s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Proto Man Theme",
				url: "https://youtu.be/MIDkiPAqhhk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/GSmanKQ8d0s",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 4",
		aliases: ["Megaman 4", "Mega man4", "Megaman4", "Mega man IV", "Megaman IV"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Title Theme",
				url: "https://youtu.be/o3D27b-OnFY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bright Man Stage",
				url: "https://youtu.be/xf4zUAKB08g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dive Man Stage",
				url: "https://youtu.be/6bXE8ldC2DA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Drill Man Stage",
				url: "https://youtu.be/Tud96HogGbo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dust Man Stage",
				url: "https://youtu.be/o65s78WI3oI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Pharaoh Man Stage",
				url: "https://youtu.be/Ok5I0Yp-7fo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ring Man Stage",
				url: "https://youtu.be/-_cjwXYBdOo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Skull Man Stage",
				url: "https://youtu.be/V-z1HLxLJto",
				difficulty: difficulties.EASY,
			},
			{
				name: "Toad Man Stage",
				url: "https://youtu.be/xcveCmdLaNI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/QLjz19Vs6ig",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cossack Fortress 1",
				url: "https://youtu.be/AUCLT7cj4FU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cossack Fortress 2",
				url: "https://youtu.be/S9zoPeH-Ly0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress Intro",
				url: "https://youtu.be/BPQ-7LI37Mw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress 1",
				url: "https://youtu.be/vOOst7LsvgI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress 2",
				url: "https://youtu.be/g1Txs_rI0bk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Battle",
				url: "https://youtu.be/iO2FAI59ZME",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/kRRHZ6_gGdU",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 5",
		aliases: ["Megaman 5", "Mega man5", "Megaman5", "Mega man V", "Megaman V"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Intro Theme",
				url: "https://youtu.be/39FN_LsRMzE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Crystal Man Stage",
				url: "https://youtu.be/YNMI-Vkrp_Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Man Stage",
				url: "https://youtu.be/nPiKZ4AZR8A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gyro Man Stage",
				url: "https://youtu.be/FZWDWJNYEhk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Napalm Man Stage",
				url: "https://youtu.be/vLI6FzBY_JA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Star Man Stage",
				url: "https://youtu.be/zCJss_gW2Qw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Stone Man Stage",
				url: "https://youtu.be/9o8VHKE2lpM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wave Man Stage",
				url: "https://youtu.be/ZI0_v340OPM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Charge Man Stage",
				url: "https://youtu.be/C75Q7bdQAQA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/a9Hxd8Qx3iU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Proto Man Fortress",
				url: "https://youtu.be/6cuDFYZXw0c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress",
				url: "https://youtu.be/b5YIJ_-WlNM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Battle",
				url: "https://youtu.be/BImMZekqGNc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/SPXVodHPUpI",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 6",
		aliases: ["Megaman 6", "Mega man6", "Megaman6", "Mega man VI", "Megaman VI"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Intro Theme",
				url: "https://youtu.be/mt79IPuU1Rg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blizzard Man Stage",
				url: "https://youtu.be/93q61LT2Vuk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Centaur Man Stage",
				url: "https://youtu.be/o0h5kOuxuFM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Flame Man Stage",
				url: "https://youtu.be/eKHVUupbqx0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Knight Man Stage",
				url: "https://youtu.be/hBZL_Iqheeg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Plant Man Stage",
				url: "https://youtu.be/WN_7Wy0RT00",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomahawk Man Stage",
				url: "https://youtu.be/Hz-3Xd43OGo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wind Man Stage",
				url: "https://youtu.be/7u-LyAzviN4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Yamato Man Stage",
				url: "https://youtu.be/n6ST9g8VAT8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/lUESH4vWIos",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mr X Fortress",
				url: "https://youtu.be/yERlXLbNq70",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Fortress",
				url: "https://youtu.be/gsQ8dpS-RJY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Battle",
				url: "https://youtu.be/IgDFobO20YQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/EdJ0fjEPDuU",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 7",
		aliases: ["Megaman 7", "Mega man7", "Megaman7", "Mega man VII", "Megaman VII"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Stage Select",
				url: "https://youtu.be/84Z4z9wCDU8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Freeze Man Stage",
				url: "https://youtu.be/qTZOil4BFnk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Junk Man Stage",
				url: "https://youtu.be/ri8MuT4M84s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Burst Man Stage",
				url: "https://youtu.be/WeVVckMnI0E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cloud Man Stage",
				url: "https://youtu.be/jSdbruDPLQ4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Spring Man Stage",
				url: "https://youtu.be/3KksczzImr0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Slash Man Stage",
				url: "https://youtu.be/20lxSw8w_lk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Shade Man Stage",
				url: "https://youtu.be/lLhrSSw_4vU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Turbo Man Stage",
				url: "https://youtu.be/fE9GuCypaew",
				difficulty: difficulties.EASY,
			},
			{
				name: "Shade Man Stage",
				url: "https://youtu.be/HcbjBxeHxbg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/gX5H39sPaio",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 1",
				url: "https://youtu.be/dI6Zq6QD-rU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 2",
				url: "https://youtu.be/rkw2wWAvlto",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 3",
				url: "https://youtu.be/wLVz3_8Ekww",
				difficulty: difficulties.EASY,
			},
			{
				name: "Final Wily Stage",
				url: "https://youtu.be/ac90R7jXaoA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Final Wily Battle",
				url: "https://youtu.be/4hRaTSS23vE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/OKRcsis3pCA",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 8",
		aliases: ["Megaman 8", "Mega man8", "Megaman8", "Mega man VIII", "Megaman VIII"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Opening Theme",
				url: "https://youtu.be/3NstM8QYsGs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Title Theme",
				url: "https://youtu.be/Qay2EfxzeCU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Frost Man Stage",
				url: "https://youtu.be/VTIHy84Fwnc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Clown Man Stage",
				url: "https://youtu.be/Zm-1jdqrWIc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tengu Man Stage",
				url: "https://youtu.be/WjtJvw7x5Qw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Grenade Man Stage",
				url: "https://youtu.be/jh9vuzg7uoI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sword Man Stage",
				url: "https://youtu.be/bJZ79SSJF8A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Aqua Man Stage",
				url: "https://youtu.be/_4lx-VqXVQE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Astro Man Stage",
				url: "https://youtu.be/S2tbfK-2SwU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Search Man Stage",
				url: "https://youtu.be/v8JcEXF_T44",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mini-Boss Battle",
				url: "https://youtu.be/L1225W_REn8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/K8IcXI8Omyw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 1",
				url: "https://youtu.be/TCKz8RK3V_c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 2",
				url: "https://youtu.be/E91b_mV_DAo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 3",
				url: "https://youtu.be/ILz1dLpPvNo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 4",
				url: "https://youtu.be/8K95OYyXgCg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Battle",
				url: "https://youtu.be/weUQwoHFTLs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Final Wily Battle",
				url: "https://youtu.be/LNybsiw8kWE",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 9",
		aliases: ["Megaman 9", "Mega man9", "Megaman9", "Mega man IX", "Megaman IX"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Intro Theme",
				url: "https://youtu.be/TUB3fK5rOs4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Title Theme",
				url: "https://youtu.be/nUHfjfydbYw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Concrete Man Stage",
				url: "https://youtu.be/FwQ9iCqtpUk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tornado Man Stage",
				url: "https://youtu.be/fTvjc12new0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Splash Woman Stage",
				url: "https://youtu.be/l7qcJwJfyyk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Plug Man Stage",
				url: "https://youtu.be/l7sjf6p2Dqs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jewel Man Stage",
				url: "https://youtu.be/sdLQzZwqVqA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hornet Man Stage",
				url: "https://youtu.be/7OMF8Yknu3w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Magma Man Stage",
				url: "https://youtu.be/aCgsV4KNRd4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Galaxy Man Stage",
				url: "https://youtu.be/AdDbbzuq1vY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Theme",
				url: "https://youtu.be/askKUGHuC_I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily Castle",
				url: "https://youtu.be/ZZ1dJnQw-xA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily Stage 1",
				url: "https://youtu.be/8_UPDQYsGGQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily Stage 2",
				url: "https://youtu.be/_K9-SwNBMSY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily Stage 3",
				url: "https://youtu.be/jtEci6KLVt0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily Stage 4",
				url: "https://youtu.be/FgBvQHvFvNM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Machine",
				url: "https://youtu.be/1LhFpjWjSxA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/z1_3Bx6UtMQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Credits Theme",
				url: "https://youtu.be/t_iRIRwWxFo",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 10",
		aliases: ["Megaman 10", "Mega man10", "Megaman10"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Sheep Man Theme",
				url: "https://youtu.be/zW8Lt1a7QAc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Chill Man Theme",
				url: "https://youtu.be/qOGepwAG-s0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Pump man Theme",
				url: "https://youtu.be/Y2QoEO7pjgc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blade Man Theme",
				url: "https://youtu.be/9xf6qLfJC0c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Commando Man Theme",
				url: "https://youtu.be/aLgzOC3Hzxk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Strike Man Theme",
				url: "https://youtu.be/yhsNZrcvBpU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Nitro Man Theme",
				url: "https://youtu.be/doxUxFsXCJs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Solar Man Theme",
				url: "https://youtu.be/bnRgCt94EaU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/7zAwTiTI2So",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 1",
				url: "https://youtu.be/H01E8MuKx6M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 2",
				url: "https://youtu.be/-ZxGtayMPzE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 3",
				url: "https://youtu.be/pwKfrsL8Vsk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage 4",
				url: "https://youtu.be/ACv0u52Fm1k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Machine Battle",
				url: "https://youtu.be/8OYsaaM4b8Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Final Wily Stage",
				url: "https://youtu.be/QEH7PhO4MQY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wily Stage Boss Battle",
				url: "https://youtu.be/LiS2khqC9p8",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man 11",
		aliases: ["Megaman 11", "Mega man11", "Megaman11", "Mega man XI", "Megaman XI"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Main Title",
				url: "https://youtu.be/sGDq-hRHqA4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Block Man Theme",
				url: "https://youtu.be/uNkQRMXsFno",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bounce Man Theme",
				url: "https://youtu.be/mIh3eDYtXgk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blast Man Theme",
				url: "https://youtu.be/VtjuxtzsH5M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Acid Man Theme",
				url: "https://youtu.be/gK7f5G61E0o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Torch Man Theme",
				url: "https://youtu.be/il9h-wLGRw8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tundra Man Theme",
				url: "https://youtu.be/r7ieO0uItmU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Fuse Man Theme",
				url: "https://youtu.be/6FzCnrVxoy4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Impact Man Theme",
				url: "https://youtu.be/CHDP0t_L_W0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/nsijM8z94e8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily Theme",
				url: "https://youtu.be/N_2DWdW4mnc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily's Gear Fortress",
				url: "https://youtu.be/Z7ak7NEEJhc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr. Wily's Gear Fortress Boss Battle",
				url: "https://youtu.be/X6MP-ACrwR4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/RtAJGm-mNvg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Credits Theme",
				url: "https://youtu.be/xl_OxQO9oXc",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man X",
		aliases: ["Megaman X", "Mega manX", "MegamanX"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Title Theme",
				url: "https://youtu.be/KVGv1Kejhy8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Opening Stage Theme",
				url: "https://youtu.be/MkhIGJsYb4I",
				difficulty: difficulties.EASY,
			},
			{
				name: "T07: Zero (Enter Zero)",
				url: "https://youtu.be/bYqQDjWAez8",
				difficulty: difficulties.EASY,
			},
			{
				name: "T08: Demo (Variable X)",
				url: "https://youtu.be/qRa7F1GyoMI",
				difficulty: difficulties.EASY,
			},
			{
				name: "T11: Launch Octopus Theme",
				url: "https://youtu.be/Ik8kWVBBn-w",
				difficulty: difficulties.EASY,
			},
			{
				name: "T12: Chill Penguin Theme",
				url: "https://youtu.be/fcOjHuAD6SI",
				difficulty: difficulties.EASY,
			},
			{
				name: "T13: Flame Mammoth Theme",
				url: "https://youtu.be/YmKu84IpMt8",
				difficulty: difficulties.EASY,
			},
			{
				name: "T14: Boomer Kuwanger Theme",
				url: "https://youtu.be/qESMvA1Y7Hw",
				difficulty: difficulties.EASY,
			},
			{
				name: "T15: Sting Chameleon Theme",
				url: "https://youtu.be/LsJ-wvyflA0",
				difficulty: difficulties.EASY,
			},
			{
				name: "T16: Spark Mandrill Theme",
				url: "https://youtu.be/P9YU7E483SI",
				difficulty: difficulties.EASY,
			},
			{
				name: "T17: Storm Eagle Theme",
				url: "https://youtu.be/HdpBgxeOw7w",
				difficulty: difficulties.EASY,
			},
			{
				name: "T18: Armored Armadillo Theme",
				url: "https://youtu.be/eAGRVDZdB3Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Theme",
				url: "https://youtu.be/n_doL_kvx18",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/miyHmQCllWo",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega man X2",
		aliases: ["Megaman X2", "Mega manX2", "MegamanX2"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Wire Sponge Theme",
				url: "https://youtu.be/4lRnFG8KlyI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wheel Gator Theme",
				url: "https://youtu.be/pT0VGkxyJYk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bubble Crab Theme",
				url: "https://youtu.be/gieRylwo1gU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Flame Stag Theme",
				url: "https://youtu.be/WRltRQV-tHs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Morph Moth Theme",
				url: "https://youtu.be/x9TH8GkCUfQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Magna Centipede Theme",
				url: "https://youtu.be/b2AjtmD-UOY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Crystal Snail Theme",
				url: "https://youtu.be/P3AFjY2Jsyc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overdrive Ostritch Theme",
				url: "https://youtu.be/3ndYG5a_nno",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man X3",
		aliases: ["Megaman X3", "Mega manX3", "MegamanX3"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Title Theme",
				url: "https://youtu.be/VribQGgeung",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr Doppler Battle",
				url: "https://youtu.be/S1ghwWtWyQs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr Cain's Lab",
				url: "https://youtu.be/0ZHlvH2k9EA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Battle",
				url: "https://youtu.be/MB3H81q8rvw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr Doppler's Theme",
				url: "https://youtu.be/7WaAEmW3DGk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr Doppler Stage 02",
				url: "https://youtu.be/-lOQbPG68xQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dr Doppler Stage 01",
				url: "https://youtu.be/uG74jMEqUMI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blizzard Buffalo Theme",
				url: "https://youtu.be/8R1Mkrp-zWQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blast Hornet Theme",
				url: "https://youtu.be/GMzDplCxwqM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Zero's Theme",
				url: "https://youtu.be/2Vlan1axie8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Volt Catfish Theme",
				url: "https://youtu.be/lfr6SUdpXDI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tunnel Rhino Theme",
				url: "https://youtu.be/yYZ0-3a2E70",
				difficulty: difficulties.EASY,
			},
			{
				name: "Toxic Seahorse Theme",
				url: "https://youtu.be/5XCrH818bOI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Neon Tiger Theme",
				url: "https://youtu.be/UOTFmAF7ICA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Beetle Theme",
				url: "https://youtu.be/ze39UzNocMg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ending Theme",
				url: "https://youtu.be/eLQeDb_Ct4A",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man X4",
		aliases: ["Megaman X4", "Mega manX4", "MegamanX4"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Stage Select",
				url: "https://youtu.be/0Oy60yfHi60",
				difficulty: difficulties.EASY,
			},
			{
				name: "Web Spider Theme",
				url: "https://youtu.be/bslmRlrJoVM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cyber Peacock Theme",
				url: "https://youtu.be/REQgCK_J9r0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Magma Dragoon Theme",
				url: "https://youtu.be/n_22bflV28g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Storm Owl Theme",
				url: "https://youtu.be/4giXYZJaxA4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Stingray Theme",
				url: "https://youtu.be/uNTMGEEEU1A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Split Mushroom Theme",
				url: "https://youtu.be/vXvF2H6maL0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Slash Beast Theme",
				url: "https://youtu.be/3Ysn1Rlf17Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Frost Walrus Theme",
				url: "https://youtu.be/RoVTKTwhetk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Theme",
				url: "https://youtu.be/B8Kb7MAsdIk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man X5",
		aliases: ["Megaman X5", "Mega manX5", "MegamanX5"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Opening Theme",
				url: "https://youtu.be/or47gVq7iZs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dark Dizzy Theme",
				url: "https://youtu.be/y4ftpB1FnPg",
				difficulty: difficulties.EASY,
			},
			{
				name: " MattrexBurn Theme",
				url: "https://youtu.be/9QaxJO0S-l4",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Skiver Theme",
				url: "https://youtu.be/8A5b1BDwJwo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Axle The Red Theme",
				url: "https://youtu.be/Yhajb7Zd6n8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Duff McWhalen Theme",
				url: "https://youtu.be/hOLn7An76WM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dynamo Theme",
				url: "https://youtu.be/V8gEZg1DwtM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Izzy Glow Theme",
				url: "https://youtu.be/F5BZ9KEyM-k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Grizzly Slash Theme",
				url: "https://youtu.be/N-OLhYgkSkc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Squid Adled Theme",
				url: "https://youtu.be/a6i7FA4kEqw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Theme",
				url: "https://youtu.be/A3H4R1YVm1I",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man X6",
		aliases: ["Megaman X6", "Mega manX6", "MegamanX6"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Rainy Turtloid Theme",
				url: "https://youtu.be/w_yBbgTTJHY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Commander Yammark Theme",
				url: "https://youtu.be/35rg-VVAfPE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ground Scaravich Theme",
				url: "https://youtu.be/T6esGWzfMlk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Metal Shark Theme",
				url: "https://youtu.be/VoUYJYC-iVM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Infinity Mijinion Theme",
				url: "https://youtu.be/pq7kYtF9kSA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blaze Heatnix Theme",
				url: "https://youtu.be/jlfdu8thNa0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blizzard Wolfang Theme",
				url: "https://youtu.be/tRJyOXo8fLk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Shield Sheldon Theme",
				url: "https://youtu.be/EaZIYZ0NF98",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Theme",
				url: "https://youtu.be/yzKL95pVUsM",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man X7",
		aliases: ["Megaman X7", "Mega manX7", "MegamanX7"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.EASY,
		songs: [
			{
				name: "Battleship Stage",
				url: "https://youtu.be/DpDCtUSn8q8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Radio Tower Stage",
				url: "https://youtu.be/Q711AqrQ16U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Kombinat Stage",
				url: "https://youtu.be/KUkGjrz5Tvo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tunnel Base Stage",
				url: "https://youtu.be/HSHNNKiITr8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Highway Stage",
				url: "https://youtu.be/bw5af_Lrf7Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Escape Stage",
				url: "https://youtu.be/cYnl7uTSLcs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Central Circuit Stage",
				url: "https://youtu.be/jZKWyB-WUM0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cyber Field Stage",
				url: "https://youtu.be/fB7sWjpCKKg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Air Force Stage",
				url: "https://youtu.be/VOdweR9J4mg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deep Forest Stage",
				url: "https://youtu.be/3v9zv1eQDJs",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mega man X8",
		aliases: ["Megaman X8", "Mega manX8", "MegamanX8"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/Gm6u789819k",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Battle Network",
		aliases: ["Mega Man Network", "Mega Man Battle"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/ZocM0ZCnH5Q",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Battle Network 2",
		aliases: ["Mega Man Network 2", "Mega Man Battle 2"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/3SyM8oThJvk",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Battle Network 3",
		aliases: ["Mega Man Network 3", "Mega Man Battle 3"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/4Dfi5uJ2thw",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Battle Network 4",
		aliases: ["Mega Man Network 4", "Mega Man Battle 4"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/0tk2tMO0vfI",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Battle Network 5",
		aliases: ["Mega Man Network 5", "Mega Man Battle 5"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/Ii9DdJaCYX0",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Battle Network 6",
		aliases: ["Mega Man Network 6", "Mega Man Battle 6"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/5bojt_YZxhU",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Zero",
		aliases: ["MegaMan Zero", "MegaManZero"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Opening Theme",
				url: "https://youtu.be/nxhLcVxaZ3w",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Mega Man Zero 2",
		aliases: ["MegaMan Zero 2", "MegaManZero 2"],
		franchise: franchises.MEGA_MAN,
		difficulty: difficulties.HARD,
		songs: [
			{
				name: "Intro Stage",
				url: "https://youtu.be/ebOwozVMM1w",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	// {
	// 	name: "Mega Man Zero 3",
	// 	aliases: ["MegaMan Zero 3", "MegaManZero 3"],
	// 	franchise: franchises.MEGA_MAN,
	// 	difficulty: difficulties.HARD,
	// 	songs: [],
	// 	images: [],
	// },
	// {
	// 	name: "Mega Man Zero 4",
	// 	aliases: ["MegaMan Zero 4", "MegaManZero 4"],
	// 	franchise: franchises.MEGA_MAN,
	// 	difficulty: difficulties.HARD,
	// 	songs: [],
	// 	images: [],
	// },
	// {
	// 	name: "Mega Man ZX",
	// 	aliases: ["MegaMan ZeroX", "MegaManZeroX"],
	// 	franchise: franchises.MEGA_MAN,
	// 	difficulty: difficulties.HARD,
	// 	songs: [],
	// 	images: [],
	// },
	{
		name: "Crash Bandicoot",
		aliases: ["Crash", "Crash Bandicoot"],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [
			{
				name: "Theme",
				url: "https://youtu.be/4i8qAZOu5-g",
				difficulty: difficulties.EASY,
			},
			{
				name: "N. Sanity Beach",
				url: "https://youtu.be/e68I_a6Y8rY",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Jungle Rollers, Rolling Stones",
				url: "https://youtu.be/JcGKq9uwRoI",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Tawna Bonus Round",
				url: "https://youtu.be/oTgsYG73cK4",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "The Great Gate, Native Fortress",
				url: "https://youtu.be/14ts8rUHySQ",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Boulders, Boulder Dash",
				url: "https://youtu.be/bqOYAUexdig",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Upstream, The Creek",
				url: "https://youtu.be/mzZKaj9IV1M",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Hog Wild, Whole Hog",
				url: "https://youtu.be/hpevyPrwIio",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "The Lost City, Sunset Vista",
				url: "https://youtu.be/t2oMwSRdk50",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Ripper Roo Boss",
				url: "https://youtu.be/pAosKn2JRkY",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Slippery Climb",
				url: "https://youtu.be/7pLRiZKjIiw",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Road To Nowhere, The High Road",
				url: "https://youtu.be/befLWBO_eC0",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Temple Ruins",
				url: "https://youtu.be/jqtLvuVPpTs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Heavy Machinery, Castle Machinery",
				url: "https://youtu.be/-lFwchGSkes",
				difficulty: difficulties.EASY,
			},
			{
				name: "Toxic Waste",
				url: "https://youtu.be/WB1I3PV7Ml8",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Lights Out, Jaws Of Darkness",
				url: "https://youtu.be/GU7BpkCyThs",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Cortex Power",
				url: "https://youtu.be/dK5SLqinHek",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Koala Kong Boss",
				url: "https://youtu.be/vjGqZfIH7x0",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Pinstripe Boss",
				url: "https://youtu.be/6t0eroVJYM0",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Cortex Boss",
				url: "https://youtu.be/lcF3OFr2K8E",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "N. Brio Boss",
				url: "https://youtu.be/YoIvBb33tTo",
				difficulty: difficulties.MEDIUM,
			},
		],
		images: [],
	},
	{
		name: "Crash Bandicoot 2: Cortex Strikes Back",
		aliases: ["Crash 2", "Crash Bandicoot 2", "Crash Bandicoot 2 Cortex Strikes Back"],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [
			{
				name: "Warp Room",
				url: "https://youtu.be/KKoRVTar6cc",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Turtle Woods, The Pits, Night Fight",
				url: "https://youtu.be/DdVI-YAXYFw",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Snow Go, Snow Biz, Cold Hard Crash",
				url: "https://youtu.be/RyHvUNSJ48M",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Hang Eight, Air Crash, Plant Food",
				url: "https://youtu.be/-RCYAsOwh2o",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Crash Dash, Crash Crush, Un-Bearable",
				url: "https://youtu.be/AFZ1bww2Ou4",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Ripper Roo Boss",
				url: "https://youtu.be/5hU8c2hm1TI",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Bear It, Bear Down, Totally Bear",
				url: "https://youtu.be/nhf9dfwgNRU",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Skull Route 1: Air Crash",
				url: "https://youtu.be/1GlHydu_6Uw",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "The Eel Deal, Sewer Or Later, Hangin' Out",
				url: "https://youtu.be/9Ig-Hd8tczU",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Eel Deal Green Gem Path",
				url: "https://youtu.be/8mnXMma8hhg",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Komodo Bros. Boss",
				url: "https://youtu.be/8xPrLjARJ3w",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Road To Ruin, Ruination",
				url: "https://youtu.be/Cs8wiYfvP1g",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Skull Route 2: Road To Ruin",
				url: "https://youtu.be/QdlTNpKAatU",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Diggin' It, Bee-Having",
				url: "https://youtu.be/F519kULnlVU",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Skull Route 3: Un-Bearable",
				url: "https://youtu.be/8r90U20SNrI",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Tiny Boss",
				url: "https://youtu.be/Thr1xb9bv8g",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Skull Route 4: Diggin' It",
				url: "https://youtu.be/Im0w3srlJHY",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Skull Route 5: Cold Hard Crash",
				url: "https://youtu.be/d3kKedUjjI0",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Dr. N. Gin Boss",
				url: "https://youtu.be/_z9_A9vG2dE",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Piston It Away, Spaced Out",
				url: "https://youtu.be/xIFsaaCNFyc",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Skull Route 6: Piston It Away",
				url: "https://youtu.be/akzaNnzLljk",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Rock It, Pack Attack",
				url: "https://youtu.be/rsvHQCTgHvg",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Cortex Boss",
				url: "https://youtu.be/s67WsTvbASU",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Totally Fly",
				url: "https://youtu.be/M_EVKiB_VPc",
				difficulty: difficulties.MEDIUM,
			},
		],
		images: [],
	},
	{
		name: "Crash Bandicoot: Warped",
		aliases: ["Crash 3", "Crash Bandicoot 3", "Crash Bandicoot 3: Warped", "Crash Bandicoot 3 Warped"],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [
			{
				name: "Main Menu",
				url: "https://youtu.be/F6PoWt8lFgs",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Warp Room",
				url: "https://youtu.be/3ik4WBVBN-o",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Toad Village/Gee Wiz/Double Header",
				url: "https://youtu.be/pfk0v5dPtYk",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Under Pressure/Deep Trouble",
				url: "https://youtu.be/XLmO-c23a3U",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Orient Express/Midnight Run",
				url: "https://youtu.be/vcDrH3ZAPiM",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Bone Yard/Dino Might!/Eggipus Rex",
				url: "https://youtu.be/N42cRWXwhl4",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Makin' Waves/Tell No Tales/Ski Crazed/Hot Coco",
				url: "https://youtu.be/3uwd5OVkFRQ",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Tiny Tiger",
				url: "https://youtu.be/eM6abmFxwUw",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Hang 'Em High/High Time/Flaming Passion",
				url: "https://youtu.be/8In_D8pAltc",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Hog Ride/Road Crash/Orange Asphalt/Area 51?",
				url: "https://youtu.be/MGQJKHwl0dw",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Tomb Time/Sphynxinator/Tomb Wader/Bug Lite",
				url: "https://youtu.be/XFA9LRuUltQ",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Dingodile",
				url: "https://youtu.be/ysp65o59qDk",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Bye Bye Blimps",
				url: "https://youtu.be/vtUHsu3sUcg",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Future Frenzy/Gone Tomorrow",
				url: "https://youtu.be/jkj1-_Yknow",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Dr. N. Gin",
				url: "https://youtu.be/6PsBncVUluM",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Mad Bombers",
				url: "https://youtu.be/VqodXjufrng",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Rings Of Power",
				url: "https://youtu.be/53l2MKnNgZo",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Dr. Neo Cortex",
				url: "https://youtu.be/HKI1tOMsSHw",
				difficulty: difficulties.MEDIUM,
			},
		],
		images: [],
	},
	{
		name: "Crash Bandicoot 4: It's About Time",
		aliases: [
			"Crash 4",
			"Crash Bandicoot 4",
			"Crash Bandicoot It's About Time",
			"Crash Bandicoot 4: Its About Time",
			"Crash Bandicoot 4: It is About Time",
			"Crash Bandicoot 4 Its About Time",
			"Crash Bandicoot 4 It is About Time",
			"Crash Bandicoot 4 It's About Time",
			"Crash Bandicoot It is About Time",
			"Crash Bandicoot Its About Time",
		],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [
			{
				name: "Main Theme",
				url: "https://youtu.be/PA5osejHJ0c",
				difficulty: difficulties.MEDIUM,
			},
		],
		images: [],
	},
	{
		name: "Crash Bandicoot: The Wrath of Cortex",
		aliases: ["Crash Bandicoot The Wrath of Cortex"],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [],
		images: [],
	},
	{
		name: "Crash Twinsanity",
		aliases: [],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [
			{
				name: "N. Sanity Island",
				url: "https://youtu.be/PzbnWihnBK4",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Mecha Bandicoot",
				url: "https://youtu.be/rmN5GKJ6_dE",
				difficulty: difficulties.HARD,
			},
			{
				name: "Cavern Catastrophe",
				url: "https://youtu.be/VSGgCmhd9nA",
				difficulty: difficulties.HARD,
			},
			{
				name: "Doc Amok",
				url: "https://youtu.be/QfTXX3qpyBA",
				difficulty: difficulties.HARD,
			},
			{
				name: "River Boat Area",
				url: "https://youtu.be/l1NVq2pBtZc",
				difficulty: difficulties.HARD,
			},
			{
				name: "Worm Chase",
				url: "https://youtu.be/8jjf92tENoI",
				difficulty: difficulties.HARD,
			},
			{
				name: "Tikimon",
				url: "https://youtu.be/UZ3jT0PJ7Hg",
				difficulty: difficulties.HARD,
			},
			{
				name: "Iceberg Lab",
				url: "https://youtu.be/yKJHYgZyGb8",
				difficulty: difficulties.HARD,
			},
			{
				name: "Ice Climb",
				url: "https://youtu.be/R6iVuPcnGUA",
				difficulty: difficulties.HARD,
			},
			{
				name: "Uka Uka",
				url: "https://youtu.be/PIaD3LK0PZM",
				difficulty: difficulties.HARD,
			},
			{
				name: "Slip Slide Icecapades",
				url: "https://youtu.be/0OIqlp2U9EQ",
				difficulty: difficulties.HARD,
			},
			{
				name: "High Seas Hi-jinks",
				url: "https://youtu.be/Z5c3V-vScmE",
				difficulty: difficulties.HARD,
			},
			{
				name: "N. Gin",
				url: "https://youtu.be/j5RGWhxiI_M",
				difficulty: difficulties.HARD,
			},
			{
				name: "Rusty Walrus",
				url: "https://youtu.be/LMKQ66mHieY",
				difficulty: difficulties.HARD,
			},
			{
				name: "Henchmania",
				url: "https://youtu.be/hUSXxW2z0Kw",
				difficulty: difficulties.HARD,
			},
			{
				name: "Rooftop Rampage",
				url: "https://youtu.be/wuCFZ0cbSH4",
				difficulty: difficulties.HARD,
			},
			{
				name: "Madame Amberly",
				url: "https://youtu.be/YfS2n-dlZko",
				difficulty: difficulties.HARD,
			},
			{
				name: "Twisted Iceberg Lab",
				url: "https://youtu.be/zCY34yHJnm0",
				difficulty: difficulties.HARD,
			},
			{
				name: "Rock-Slide Rumble",
				url: "https://youtu.be/qgz9Y-YPZXc",
				difficulty: difficulties.HARD,
			},
			{
				name: "Twinsanity Island",
				url: "https://youtu.be/B1DsG9Kmnrg",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Bandicoot Pursuit",
				url: "https://youtu.be/eLrlQEXp0EQ",
				difficulty: difficulties.MEDIUM,
			},
			{
				name: "Ant Agony",
				url: "https://youtu.be/_jvefUmVSQw",
				difficulty: difficulties.HARD,
			},
		],
		images: [],
	},
	{
		name: "Crash of the Titans",
		aliases: ["Crash Titans", "Crash of Titans", "Crash the Titans"],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [],
		images: [],
	},
	{
		name: "Crash: Mind over Mutant",
		aliases: ["Crash Mind over Mutant"],
		franchise: franchises.CRASH,
		difficulty: difficulties.MEDIUM,
		songs: [],
		images: [],
	},
	{
		name: "Crash Team Racing",
		aliases: ["CTR"],
		franchise: franchises.CRASH,
		difficulty: difficulties.HARD,
		songs: [],
		images: [],
	},
	{
		name: "Crash Bash",
		aliases: [],
		franchise: franchises.CRASH,
		difficulty: difficulties.HARD,
		songs: [],
		images: [],
	},
	// {
	// 	name: "Crash Team Rumble",
	// 	aliases: ["CTR"],
	// 	franchise: franchises.CRASH,
	// 	difficulty: difficulties.HARD,
	// 	songs: [],
	// 	images: [],
	// },
	{
		name: "Danganronpa: Trigger Happy Havoc",
		franchise: "Danganronpa",
		difficulty: difficulties.EASY,
		aliases: [
			"Danganronpa",
			"Trigger Happy Havoc",
			"Danganronpa: THH",
			"Danganronpa: Trigger Happy",
			"Danganronpa: Trigger Havoc",
			"Danganronpa: Trigger Happy Havoc",
			"Danganronpa: Trigger Happy Havoc Game",
			"Danganronpa: Trigger Happy Havoc Adventure",
			"Danganronpa: Trigger Happy Havoc Mystery",
			"Danganronpa: Trigger Happy Havoc Story",
		],
		hints: [
			"This game is a visual novel with elements of mystery and puzzle-solving.",
			"The game was developed by Spike Chunsoft and was first released in Japan in 2010.",
			"The story follows a group of high school students who are trapped in a school and forced to participate in a deadly game.",
			"The game features a unique gameplay mechanic where players must investigate crime scenes and gather evidence to solve murders.",
			"The game has spawned a popular franchise with multiple sequels, spin-offs, and adaptations in other media such as anime and manga.",
		],
		songs: [
			{
				name: "DANGANRONPA OST: -1-01- DANGANRONPA",
				url: "https://youtu.be/JeitvjG-dgI",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -1-08- BOX 15",
				url: "https://youtu.be/xOpHT6gZ0Rs",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -1-05- Beautiful Dead",
				url: "https://youtu.be/3WZb20NinCs",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -1-07- Mr. Monokuma's Tutoring",
				url: "https://youtu.be/zpkl30bTHhw",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -2-03- Mr. Monokuma's Lesson",
				url: "https://youtu.be/ELfxtdEakhk",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -1-02- Dangan Ronpa!",
				url: "https://youtu.be/76wWVp-JIO8",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -1-27- Climax Reasoning",
				url: "https://youtu.be/e0dZnWkzv2U",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -2-17- New World Order",
				url: "https://youtu.be/m3EHCTP3jic",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -1-17- Discussion -BREAK-",
				url: "https://youtu.be/NJ7g-RQQYzg",
				difficulty: difficulties.EASY,
			},
			{
				name: "DANGANRONPA OST: -1-06- Class Trial (Dawn Edition)",
				url: "https://youtu.be/5FbB_obzUNA",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Danganronpa 2: Goodbye Despair",
		franchise: "Danganronpa",
		difficulty: difficulties.EASY,
		aliases: [
			"Danganronpa 2",
			"Danganronpa Goodbye Despair",
			"Danganronpa 2 Goodbye Despair",
			"Danganronpa: Goodbye Despair",
			"Danganronpa 2: Goodbye Despair",
			"Danganronpa 2 - Goodbye Despair",
			"Danganronpa 2 Good-bye Despair",
			"Danganronpa Two Goodbye Despair",
			"Danganronpa Two: Goodbye Despair",
			"Danganronpa 2 GD",
		],
		hints: [
			"This game is a sequel to a popular visual novel game.",
			"It was developed by Spike Chunsoft and released in 2012 in Japan.",
			"The game takes place on a tropical island where the main character and other students are trapped and forced to participate in a killing game.",
			"The game features a variety of mini-games and puzzles that the player must complete to progress the story.",
			"The game has multiple endings and a post-game mode that unlocks after completing the main story.",
		],
		songs: [
			{
				name: "SDR2 OST: -1-09- Ikoroshia",
				url: "https://youtu.be/gCfpmW6s37U",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -1-01- DANGANRONPA SUPER MIX",
				url: "https://youtu.be/_PQ2-NiMSXA",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -1-08- Ms. Monomi's Practice Lesson",
				url: "https://youtu.be/emEg0zGS7KY",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -2-01- DANGANRONPA [2nd GIG]",
				url: "https://youtu.be/S5AZFDBdQKQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -1-05- Beautiful Ruin [Summer Salt]",
				url: "https://youtu.be/P-fMDaPFXME",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -2-20- Discussion -HOPE VS DESPAIR- [2nd mix]",
				url: "https://youtu.be/1Stmp2gAk6s",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -2-09- Objection -CROSS SWORD-",
				url: "https://youtu.be/mymjF4AZJrg",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -2-06- Class Trial (Odd Edition)",
				url: "https://youtu.be/jU4hSFA-dTM",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -2-22- Welcome to DANGAN IsLand!!",
				url: "https://youtu.be/kak8Hy-ydgo",
				difficulty: difficulties.EASY,
			},
			{
				name: "SDR2 OST: -1-19- Re_ Trial Underground",
				url: "https://youtu.be/T8VRrRJ-Dik",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Danganronpa V3: Killing Harmony",
		franchise: "Danganronpa",
		difficulty: difficulties.EASY,
		aliases: [
			"Danganronpa V3",
			"Danganronpa Killing Harmony",
			"Danganronpa V3 Killing Harmony",
			"Danganronpa 3: Killing Harmony",
			"Danganronpa V Killing Harmony",
			"Danganronpa V3 KH",
			"Danganronpa V3: KH",
			"Danganronpa V3: Kill Harmony",
			"Danganronpa V3: Killing H",
			"Danganronpa V3: KH",
		],
		hints: [
			"This game is a visual novel with elements of mystery and puzzle-solving.",
			"It was developed by Spike Chunsoft and released in 2017.",
			"The game is set in a high school where students are forced to participate in a killing game.",
			"The main character is a new student named Kaede Akamatsu who is determined to escape the school and put an end to the killing game.",
			"The game features a cast of unique and eccentric characters, each with their own backstory and motives for participating in the game.",
		],
		songs: [
			{
				name: "Scrum Debate - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/uUvQ5RlFV6A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Climax Return - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/CYdImXwmee8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Climax Reasoning - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/Fx0ZLickoB0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Despair Searching - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/Kl4VnTNuS-0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Rise and Shine, Ursine! (Monokubs Theme) - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/u2XylhnF5bE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Let's Kill Each Other - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/o5IuT5_ayjs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mr. Monokuma's Extracurricular Lesson - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/Yy0JuVXTcUw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Trial Underground - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/_2mHIL_akuM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Class Trial (Odd Edition) - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/gXHwsEVvFxM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Discussion -BREAK- - Danganronpa V3: Killing Harmony OST Extended",
				url: "https://youtu.be/xXSH3q8F96E",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Phoenix Wright: Ace Attorney",
		franchise: "Phoenix Wright",
		difficulty: difficulties.EASY,
		aliases: [
			"Phoenix Wright",
			"Ace Attorney",
			"Phoenix Wright Ace Attorney",
			"Phoenix Wright: Attorney at Law",
			"Ace Attorney: Phoenix Wright",
			"Phoenix Wright: Justice for All",
			"Phoenix Wright: Trials and Tribulations",
			"Phoenix Wright: Dual Destinies",
			"Phoenix Wright: Spirit of Justice",
			"Ace Attorney Investigations",
			"Ace Attorney Investigations: Miles Edgeworth",
			"Gyakuten Saiban",
			'Gyakuten Saiban: Sono "Shinjitsu"',
			"Igi Ari!",
			"Phoenix Wright: Ace Attorney Trilogy",
			"Phoenix Wright: Ace Attorney Collection",
		],
		hints: [
			"This game was originally released in Japan in 2001 for the Game Boy Advance.",
			"It is a visual novel game that follows the story of a defense attorney named Phoenix Wright.",
			"The game is known for its unique gameplay mechanics, which involve investigating crime scenes and cross-examining witnesses in court.",
			"The game has spawned several sequels and spin-offs, including a crossover with the Professor Layton series.",
			"The game has a dedicated fanbase and has been praised for its engaging story, memorable characters, and clever puzzles.",
		],
		songs: [
			{
				name: "Phoenix Wright Ace Attorney OST - Pressing Pursuit ~ Cornered",
				url: "https://youtu.be/UxnvGDK0WGM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Phoenix Wright Ace Attorney OST - Phoenix Wright ~ Objection! 2001",
				url: "https://youtu.be/ANcuqk7x33o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Phoenix Wright Ace Attorney OST - Pressing Pursuit ~ Cornered - Variation",
				url: "https://youtu.be/lAWdWk6a2gg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Phoenix Wright Ace Attorney OST - Trial",
				url: "https://youtu.be/UEGVxLs6Sr0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Phoenix Wright Ace Attorney OST - Questioning ~ Allegro 2001",
				url: "https://youtu.be/HK2VLhbSaoc",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Gravity Rush",
		franchise: "Gravity Rush",
		difficulty: difficulties.EASY,
		aliases: [
			"Gravity Rush",
			"Gravity Rush 1",
			"Gravity Rush Remastered",
			"Gravity Rush HD",
			"Gravity Daze",
			"Gravity Daze 1",
			"Gravity Daze Remastered",
			"Gravity Daze HD",
		],
		hints: [
			"This game was released in 2012 for the PlayStation Vita.",
			"It is an action-adventure game that features a unique gameplay mechanic where the player can manipulate gravity.",
			"The game's protagonist is a young girl named Kat who has lost her memory and must uncover the secrets of her past.",
			"The game's setting is a floating city called Hekseville, which is being threatened by a mysterious force known as the Nevi.",
			"The game was well-received by critics and was followed by a sequel, Gravity Rush 2, which was released for the PlayStation 4 in 2017.",
		],
		songs: [
			{
				name: "Gravity Rush OST - Pleasure Quarter",
				url: "https://youtu.be/BxIC6Vu1ee0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - Douse Shinundakara",
				url: "https://youtu.be/oWrKHWpLn0U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - Discovery of Gravitation",
				url: "https://youtu.be/XRf5XKeo-DQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - Old Town",
				url: "https://youtu.be/3zEeJ2X0uFg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - Douse Shinundakara (Instrumental)",
				url: "https://youtu.be/DpqOrFPcWXk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - Resistance and Extermination",
				url: "https://youtu.be/Gfxf4x3L1bs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - GRAVITY DAZE",
				url: "https://youtu.be/5Ac3lcvdl1s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - Downtown",
				url: "https://youtu.be/poxDJHoYxCc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - Bloody Claws",
				url: "https://youtu.be/vi4eTLQmLkM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gravity Rush OST - GRAVITY DAYS",
				url: "https://youtu.be/RB4nFoA63rs",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Eternal Sonata",
		franchise: "Eternal Sonata",
		difficulty: difficulties.EASY,
		aliases: [
			"Eternal Sonata",
			"Eternal Sonatas",
			"Eterna Sonata",
			"Eterna Sonatas",
			"Eternal Symphony",
			"Eternal Symphonies",
			"Eterna Symphony",
			"Eterna Symphonies",
			"Sonata of Eternity",
			"Symphony of Eternity",
		],
		hints: [
			"This game was released in 2007 for the Xbox 360 and PlayStation 3.",
			"It is a role-playing game that takes place in a dream world that is inspired by the music of a famous composer.",
			"The game features a unique battle system that is based on musical elements.",
			"The story follows a terminally ill composer who experiences a vivid dream world in his final moments.",
			"The game's title is a reference to the fact that the composer's final composition was left unfinished, and the dream world represents his attempt to complete it.",
		],
		songs: [
			{
				name: "Eternal Sonata OST - Leap the precipice",
				url: "https://youtu.be/8pFwmT31vAU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - Pyroxene of the heart",
				url: "https://youtu.be/1u_6irG5wcc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - Raindrops",
				url: "https://youtu.be/c2K7GivJ4l8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - Relaxing place",
				url: "https://youtu.be/ZSLG5QQfJrU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - A flicker which divides light and darkness",
				url: "https://youtu.be/ERo15QKCE6c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - Reflect the sky, bloom the life",
				url: "https://youtu.be/gIL_lDJZiFw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - The mediocrity sought out by everyone",
				url: "https://youtu.be/BTteZHPw30Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - Opposition resignation",
				url: "https://youtu.be/W_PgzJdq9ZI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - A faint light grasped in the hand",
				url: "https://youtu.be/ywa9Yt1WZVQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eternal Sonata OST - I bet my belief",
				url: "https://youtu.be/dho3ZlUzR8A",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mother 2",
		franchise: "Earthbound",
		difficulty: difficulties.EASY,
		aliases: [
			"Mother 1 and 2",
			"Mother 1 & 2",
			"Mother I and II",
			"Mother I & II",
			"EarthBound Beginnings and EarthBound",
			"EarthBound Zero and EarthBound",
			"Mother 1+2: The Compilation",
			"Mother 1 and 2: The Compilation",
			"Mother 1 & 2: The Compilation",
			"Mother I and II: The Compilation",
			"Mother I & II: The Compilation",
			"Earthbound 2",
		],
		hints: [
			"This game is a role-playing game (RPG) developed by a Japanese video game company.",
			"The game was first released in Japan in 1989 for the Famicom console.",
			"The game's story follows a group of children who set out on a journey to save the world from an evil alien force.",
			"The game was later remade and released for the Game Boy Advance in 2003, featuring improved graphics and gameplay mechanics.",
			"The game is known for its quirky humor, unique characters, and emotional storyline, and has gained a cult following among RPG fans.",
		],
		songs: [
			{
				name: "Sanctuary Guardian - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/w1gQv9ejApY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Otherworldly Foe - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/8BQcEISy3e0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Battle Against a Weird Opponent - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/MWe10w-51zU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Battle Against a Mobile Opponent - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/2IXmmZXzRRQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Battle Against a Weak Opponent - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/HPt2nP8Ph0s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Franky (New Age Retro Hippie) - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/7q0Q3TzAezE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Battle Against an Unsettling Opponent - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/ryCq_iDK-RA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sunrise & Onett Theme - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/UlgFVqYE7P8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Your Name, Please - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/H3T6nx1vYO0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Opening Credits - MOTHER 1+2 (MOTHER 2)",
				url: "https://youtu.be/10TRfr92_5A",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Mother 3",
		franchise: "Earthbound",
		difficulty: difficulties.EASY,
		aliases: ["Mother 3", "EarthBound 3", "Mother III", "Mother Three", "EarthBound III", "EarthBound Three", "EB3"],
		hints: [
			"This game is a Japanese role-playing game (JRPG).",
			"It was developed by the same studio that created the popular game series Super Smash Bros.",
			"The game was released exclusively in Japan in 2006.",
			"The game is the third entry in a series that has a cult following among gamers.",
			"Despite never being officially released outside of Japan, the game has a dedicated fanbase that has created their own English translation of the game.",
		],
		songs: [
			{
				name: "Monkey's Delivery Service (Restored) || MOTHER 3",
				url: "https://youtu.be/Wzc7IrL_gb8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tazmily Village (Beta, Restored) || MOTHER 3",
				url: "https://youtu.be/k4gKRI61MGo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sorrowful Tazmily (Restored) || MOTHER 3",
				url: "https://youtu.be/4YrjG627nRU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Confusion (Restored) || MOTHER 3",
				url: "https://youtu.be/hEKNzmWD9yk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gentle Rain (Restored) || MOTHER 3",
				url: "https://youtu.be/L6KSMIdBGJc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mind of a Thief (Restored) || MOTHER 3",
				url: "https://youtu.be/12W5L-oyCwQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mr. Batty Twist (Restored) || MOTHER 3",
				url: "https://youtu.be/l2bfyNuawTE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Strong One (Masked Man, Restored) || MOTHER 3",
				url: "https://youtu.be/HdmTk5hwtVY",
				difficulty: difficulties.EASY,
			},
			{
				name: "It's Over (Restored) || MOTHER 3",
				url: "https://youtu.be/bVaRoZvHV0w",
				difficulty: difficulties.EASY,
			},
			{
				name: "And El Mariachi (Restored) || MOTHER 3",
				url: "https://youtu.be/vrTw1eUH43k",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "EarthBound",
		franchise: "Earthbound",
		difficulty: difficulties.EASY,
		aliases: ["Earthbound", "Earth Bound", "Earthbound 1", "Earth Bound 1", "Mother", "Mother 1"],
		hints: [
			"This game was released in 1994 for the Super Nintendo Entertainment System (SNES).",
			"It is a role-playing game (RPG) that takes place in a modern setting.",
			"The game was developed by Nintendo and was only released in North America and Japan.",
			"The game's protagonist is a young boy named Ness who is on a quest to save the world from an evil alien force.",
			"The game is known for its quirky humor, unique art style, and memorable characters.",
		],
		songs: [],
		images: [],
	},
	{
		name: "The Witcher",
		franchise: "The Witcher",
		difficulty: difficulties.EASY,
		aliases: [
			"The Witcher",
			"Witcher",
			"The Witcher: Rise of the White Wolf",
			"The Witcher: Assassins of Kings",
			"The Witcher: Wild Hunt",
			"Witcher: Rise of the White Wolf",
			"Witcher: Assassins of Kings",
			"Witcher: Wild Hunt",
			"The Witcher 1",
			"Witcher 1",
			"The Witcher I",
			"Witcher I",
		],
		hints: [
			"This game is based on a series of fantasy novels by Polish author Andrzej Sapkowski.",
			"The game was developed by CD Projekt Red and released in 2007.",
			"The game features an open world environment where players can explore and complete quests.",
			"The main character, Geralt of Rivia, is a monster hunter with supernatural abilities.",
			"The game has spawned two sequels, a popular Netflix series, and a tabletop role-playing game.",
		],
		songs: [
			{
				name: "The Witcher -- OST 01 'Dusk of a Northern Kingdom'",
				url: "https://youtu.be/5Avdkt_eScY",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 03 'River of Life'",
				url: "https://youtu.be/i-sSZzwdeIA",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 06 'Last Battle'",
				url: "https://youtu.be/JMx84oOrCNc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 02 'A Wolf's Demise'",
				url: "https://youtu.be/7YYEVtCsS_Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 12 'Peaceful Moments'",
				url: "https://youtu.be/wADy0zZkQMM",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 05 'Dead City'",
				url: "https://youtu.be/l6Vcz-xBnJY",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 04 'Mighty'",
				url: "https://youtu.be/MrMGkYruJtU",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 11 'Evening in the Tavern'",
				url: "https://youtu.be/rdENR0q663s",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 13 'An Ominous Place'",
				url: "https://youtu.be/-EaPqehonIg",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Witcher -- OST 10 'Returning to the Fortress'",
				url: "https://youtu.be/REGWWGQWLUk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Witcher 2: Assassins of Kings",
		franchise: "The Witcher",
		difficulty: difficulties.EASY,
		aliases: [
			"The Witcher 2",
			"The Witcher II",
			"Witcher 2",
			"Witcher II",
			"Assassins of Kings",
			"The Witcher 2 Assassins of Kings",
			"The Witcher II Assassins of Kings",
			"Witcher 2 Assassins of Kings",
			"Witcher II Assassins of Kings",
			"The Witcher 2: AoK",
			"The Witcher II: AoK",
			"Witcher 2: AoK",
			"Witcher II: AoK",
		],
		hints: [
			"This game is based on a series of novels by Polish author Andrzej Sapkowski.",
			"It is an action role-playing game that was released in 2011.",
			"The game's protagonist is a monster hunter named Geralt of Rivia.",
			"The game features a branching narrative with multiple endings based on the player's choices.",
			"The game was praised for its mature storytelling, complex characters, and challenging gameplay.",
		],
		songs: [
			{
				name: "07 - The Witcher 2 Score - Path of the Kingslayer (Extended)",
				url: "https://youtu.be/BFK6YM4JU6I",
				difficulty: difficulties.EASY,
			},
			{
				name: "46 - The Witcher 2 Score - For A Higher Cause (Suite)",
				url: "https://youtu.be/CZJeaR1tXw0",
				difficulty: difficulties.EASY,
			},
			{
				name: "20 - The Witcher 2 Score - Howl of the White Wolf (Extended)",
				url: "https://youtu.be/fXcyktkjjpA",
				difficulty: difficulties.EASY,
			},
			{
				name: "29 - The Witcher 2 Score - Battle Theme 16",
				url: "https://youtu.be/-I9hUKLzmtg",
				difficulty: difficulties.EASY,
			},
			{
				name: "28 - The Witcher 2 Score - Battle Theme 8",
				url: "https://youtu.be/G7yCs14eA0c",
				difficulty: difficulties.EASY,
			},
			{
				name: "44 - The Witcher 2 Score - Practice Makes Perfect (Extended)",
				url: "https://youtu.be/sV7gbqoMw_8",
				difficulty: difficulties.EASY,
			},
			{
				name: "30 - The Witcher 2 Score - Violence (Extended)",
				url: "https://youtu.be/27k3ue5C6HQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "26 - The Witcher 2 Score - Battle Theme 2",
				url: "https://youtu.be/rMTIM_cubTw",
				difficulty: difficulties.EASY,
			},
			{
				name: "37 - The Witcher 2 Score - The Assassin Looms (Extended)",
				url: "https://youtu.be/uWDifgwIwwY",
				difficulty: difficulties.EASY,
			},
			{
				name: "01 - The Witcher 2 Score - Introduction",
				url: "https://youtu.be/J28EmKyBhk0",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Witcher 3: Wild Hunt",
		franchise: "The Witcher",
		difficulty: difficulties.EASY,
		aliases: [
			"The Witcher III: Wild Hunt",
			"The Witcher 3 Wild Hunt",
			"Witcher 3",
			"Witcher III",
			"Wild Hunt",
			"The Witcher: Wild Hunt",
			"The Witcher 3: The Wild Hunt",
			"The Witcher 3: Wild Huntress",
			"The Witcher 3: Wild Hunter",
			"The Witcher 3: Hunt for the Wild",
			"The Witcher 3: Wild Hunted",
		],
		hints: [
			"This game is based on a series of novels by Polish author Andrzej Sapkowski.",
			"It is an open-world action role-playing game.",
			"The game's protagonist is a monster hunter named Geralt of Rivia.",
			"The game features a complex narrative with multiple branching storylines and choices that affect the outcome of the game.",
			"The game won numerous awards, including Game of the Year at The Game Awards 2015.",
		],
		songs: [
			{
				name: "Silver For Monsters...",
				url: "https://youtu.be/jRG0gyVFP60",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Trail",
				url: "https://youtu.be/i1qjKo6Ts60",
				difficulty: difficulties.EASY,
			},
			{
				name: "Geralt Of Rivia",
				url: "https://youtu.be/j940HnlMM8k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Kaer Morhen",
				url: "https://youtu.be/5GUiNoIm0E4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cloak And Dagger",
				url: "https://youtu.be/SPcVvEnxTLU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Spikeroog",
				url: "https://youtu.be/SX9d2wolx6I",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Vagabond",
				url: "https://youtu.be/hd0K0sqkyeo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eyes Of The Wolf",
				url: "https://youtu.be/bbFb5nR19b8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Aen Seidhe",
				url: "https://youtu.be/j52_r_1Rmy8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Commanding The Fury",
				url: "https://youtu.be/1lyYkXEQd24",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Last of Us Part II",
		franchise: "The Last of Us",
		difficulty: difficulties.EASY,
		aliases: [
			"The Last of Us 2",
			"TLOU2",
			"The Last of Us II",
			"The Last of Us Part 2",
			"The Last of Us Part Two",
			"The Last of Us Part II",
			"The Last of Us Part 2",
			"The Last of Us Part II",
			"The Last of Us Part 2",
			"The Last of Us 2nd Part",
		],
		hints: [
			"This game is a sequel to a highly acclaimed game that was released in 2013.",
			"It is a post-apocalyptic action-adventure game set in a world overrun by infected humans.",
			"The game was developed by Naughty Dog, the same studio behind the popular game series Uncharted and the first game in this series.",
			"The game features a new playable character named Abby, who has a significant role in the game's story.",
			"The game has been praised for its emotional storytelling, realistic graphics, and intense gameplay.",
		],
		songs: [
			{
				name: "Unbroken | The Last of Us Part II OST",
				url: "https://youtu.be/LLxcwxVh508",
				difficulty: difficulties.EASY,
			},
			{
				name: "Longing | The Last of Us Part II OST",
				url: "https://youtu.be/ZaB2jdE8od0",
				difficulty: difficulties.EASY,
			},
			{
				name: "It Can't Last (Home) | The Last of Us Part II OST",
				url: "https://youtu.be/bLJIe0fe5u8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Lament/A Father for a Daughter (Fanmade)",
				url: "https://youtu.be/xAkGIJjlzyc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The WLF | The Last of Us Part II OST",
				url: "https://youtu.be/vwnJ-8i5VRs",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Part II | The Last of Us Part II OST",
				url: "https://youtu.be/iAkWMD-5sm0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Unbound | The Last of Us Part II OST",
				url: "https://youtu.be/7Ov3Ckqgdtk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Allowed to be Happy | The Last of Us Part II OST",
				url: "https://youtu.be/ZyZi_6Av_1o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eye for an Eye | The Last of Us Part II OST",
				url: "https://youtu.be/B_xV09zlB8U",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Cycle of Violence | The Last of Us Part II OST",
				url: "https://youtu.be/ptg59yC-chM",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Last of Us",
		franchise: "The Last of Us",
		difficulty: difficulties.EASY,
		aliases: [
			"TLOU",
			"The Last of Us Part 1",
			"The Last of Us Part I",
			"The Last of Us 1",
			"The Last of Us I",
			"Last of Us",
			"The Last of Us: Remastered",
			"The Last of Us Remastered",
			"TLOU Remastered",
			"The Last of Us Part One",
			"The Last of Us 1 Remastered",
			"The Last of Us I Remastered",
		],
		hints: [
			"This game was released in 2013.",
			"It is a post-apocalyptic action-adventure game set in the United States.",
			"The game was developed by Naughty Dog, the same studio behind the popular game series Uncharted and Crash Bandicoot.",
			"The game follows the story of Joel and Ellie, two survivors who must navigate a world overrun by infected humans.",
			"The game won numerous awards for its storytelling, characters, and gameplay, and was remastered for the PlayStation 4 in 2014.",
		],
		songs: [
			{
				name: "The Last of Us Soundtrack 29 - The Path (A New Beginning)",
				url: "https://youtu.be/3o_RwQysgA8",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 03 - The Last of Us",
				url: "https://youtu.be/cwDkutphzmU",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 11 - The Choice",
				url: "https://youtu.be/XYUErkvORWA",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 20 - All Gone (No Escape)",
				url: "https://youtu.be/RBi9lr176uA",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 16 - Home",
				url: "https://youtu.be/nV8sY2Xv3Os",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 18 - All Gone (Aftermath)",
				url: "https://youtu.be/v_LHa-8eipY",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 06 - Vanishing Grace",
				url: "https://youtu.be/zIL4iETMB-0",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 01 - The Quarantine Zone (20 Years Later)",
				url: "https://youtu.be/A3Qvw2ZAxtw",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 27 - The Last of Us (You and Me)",
				url: "https://youtu.be/GVhH3KzOyFo",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last of Us Soundtrack 02 - The Hour",
				url: "https://youtu.be/UwxGmVjNS_8",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Elder Scrolls II: Daggerfall",
		franchise: "The Elder Scrolls",
		difficulty: difficulties.EASY,
		aliases: [
			"Daggerfall",
			"Elder Scrolls Daggerfall",
			"The Elder Scrolls 2",
			"The Elder Scrolls II",
			"Daggerfall Scrolls",
			"Scrolls II Daggerfall",
			"Elder Scrolls Daggerfall II",
			"Daggerfall Elder Scrolls II",
			"The Elder Scrolls: Daggerfall",
			"Elder Scrolls 2: Daggerfall",
			"Daggerfall Scrolls II",
			"Scrolls Daggerfall II",
			"The Elder Scrolls: Daggerfall II",
		],
		hints: [
			"This game was released in 1996.",
			"It is a role-playing game set in a high fantasy world.",
			"The game features a massive open world with a vast number of locations to explore.",
			"The game has a reputation for being one of the most complex and challenging RPGs of its time.",
			"The game's main story involves the player character investigating the mysterious disappearance of the Emperor's messengers.",
		],
		songs: [
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Main Theme (Story)",
				url: "https://youtu.be/YRjHhsUwsuY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - A Bad Feeling",
				url: "https://youtu.be/MA-_mRjWpOk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Day",
				url: "https://youtu.be/-fEy-MKXLaA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Shop",
				url: "https://youtu.be/L-H19AfjQlM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Folk 1",
				url: "https://youtu.be/0C91PKjsUIQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Curse",
				url: "https://youtu.be/vk5ksYh48GQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Snow is Falling",
				url: "https://youtu.be/7qnuTquikj4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Eerie",
				url: "https://youtu.be/PznHexNQlYg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - On the Ship",
				url: "https://youtu.be/rUH1kR_Gzhw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Daggerfall Soundtrack (HQ Remake) - Folk 2",
				url: "https://youtu.be/23ZPSameysM",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Elder Scrolls: Arena",
		franchise: "The Elder Scrolls",
		difficulty: difficulties.EASY,
		aliases: [
			"The Elder Scrolls Arena",
			"Elder Scrolls Arena",
			"The Elder Scrolls: The Arena",
			"Elder Scrolls: The Arena",
			"Arena: The Elder Scrolls",
			"Arena: Elder Scrolls",
			"The Elder Scrolls I: Arena",
			"Elder Scrolls I: Arena",
			"The Arena of Elder Scrolls",
			"Arena of Elder Scrolls",
			"The Elder Scrolls Arena Game",
			"The Elder Scrolls 1",
			"The Elder Scrolls I",
			"Elder Scrolls 1",
			"Elder Scrolls I",
		],
		hints: [
			"This game was released in 1994.",
			"It is the first game in a popular RPG franchise.",
			"The game takes place in a high fantasy world called Tamriel.",
			"The game features a first-person perspective and allows players to create their own character.",
			"The game was originally released as shareware, with only a portion of the game available for free, and the full game requiring a purchase.",
		],
		songs: [
			{
				name: "The Elder Scrolls: Arena (Original Game Soundtrack)",
				url: "https://youtu.be/We2Dwr4CZ4Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - Tharn's Betrayal - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/z5t-V9A48DE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - Where Dost Thou Hail - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/TE9WPHt3aa4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - Opening Titles - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/JzDw_O-ii10",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - Dungeon Crawling - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/bzcCpbxWrWE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - The Wandering Inn - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/J0utMMSm0pQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - Blacksmith - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/Vl2l1Cija8U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - The First Seed - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/-mxtw9rsoqo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - Winter In Hammerfell - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/gYOjmg1DHHk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eric Heberling - The Late Hours - The Elder Scrolls: Arena Soundtrack",
				url: "https://youtu.be/gcaAKmqLEfY",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Elder Scrolls IV: Oblivion",
		franchise: "The Elder Scrolls",
		difficulty: difficulties.EASY,
		aliases: [
			"Oblivion",
			"Elder Scrolls IV",
			"The Elder Scrolls 4",
			"Oblivion IV",
			"Elder Scrolls Oblivion",
			"The Elder Scrolls: Oblivion",
			"Oblivion: The Elder Scrolls IV",
			"TES IV: Oblivion",
			"Oblivion TES IV",
		],
		hints: [
			"This game was released in 2006.",
			"It is an open-world role-playing game set in a fantasy world.",
			"The game was developed by Bethesda Game Studios, the same studio behind the popular game series Fallout and Skyrim.",
			"The game features a main questline as well as numerous side quests and activities.",
			"The game is known for its expansive world, deep lore, and memorable characters such as the Daedric Prince Sheogorath.",
		],
		songs: [
			{
				name: "Harvest Dawn",
				url: "https://youtu.be/s9L9sNtv1-g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Auriel's Ascension",
				url: "https://youtu.be/fHxQ4Nk9tpo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wings of Kynareth",
				url: "https://youtu.be/jkypBTH8hQQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Reign of the Septims",
				url: "https://youtu.be/xLhUGq1nhdU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Minstrel's Lament",
				url: "https://youtu.be/iGzlx2YJMm8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Through the Valleys",
				url: "https://youtu.be/mNIGXJbpjaQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "King and Country",
				url: "https://youtu.be/owsS1TcoJbo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Watchman's Ease",
				url: "https://youtu.be/FLYWMEWC7as",
				difficulty: difficulties.EASY,
			},
			{
				name: "All's Well",
				url: "https://youtu.be/4IeUydwnrpQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sunrise of Flutes",
				url: "https://youtu.be/8v17z_nIidA",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Elder Scrolls V: Skyrim",
		franchise: "The Elder Scrolls",
		difficulty: difficulties.EASY,
		aliases: [
			"Skyrim",
			"Elder Scrolls V",
			"The Elder Scrolls 5",
			"Skyrim V",
			"The Elder Scrolls V Skyrim",
			"Elder Scrolls Skyrim",
			"Skyrim: The Elder Scrolls V",
			"The Elder Scrolls V: Skyrim",
			"TES V: Skyrim",
		],
		hints: [
			"This game was released in 2011.",
			"It is an open-world action role-playing game.",
			"The game is set in a fictional world called Tamriel, which is home to various races and creatures.",
			"The game features a vast open world with numerous quests, dungeons, and locations to explore.",
			"The game has a rich lore and history, with books and characters that provide insight into the world's backstory.",
		],
		songs: [
			{
				name: "TES V Skyrim Soundtrack - From Past to Present",
				url: "https://youtu.be/s5sTI_zBg40",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - Far Horizons",
				url: "https://youtu.be/pPWVfCtnGyg",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - Ancient Stones",
				url: "https://youtu.be/mmZGrvAvPZM",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - Dragonborn (Theme)",
				url: "https://youtu.be/5OWdMHIRld8",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - One They Fear",
				url: "https://youtu.be/XTUFdPJeukY",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - Awake",
				url: "https://youtu.be/--RU438cUM0",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - The Streets of Whiterun",
				url: "https://youtu.be/_34gUVqLkAo",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - Unbroken Road",
				url: "https://youtu.be/EK3q3Jb3TCQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - The City Gates",
				url: "https://youtu.be/WRAlNeOHI-g",
				difficulty: difficulties.EASY,
			},
			{
				name: "TES V Skyrim Soundtrack - Secunda",
				url: "https://youtu.be/qC9Ri2hZsos",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Elder Scrolls Online",
		franchise: "The Elder Scrolls",
		difficulty: difficulties.EASY,
		aliases: [
			"TESO",
			"Elder Scrolls Online",
			"The Elder Scrolls Online: Tamriel Unlimited",
			"The Elder Scrolls Online: Morrowind",
			"The Elder Scrolls Online: Summerset",
			"The Elder Scrolls Online: Elsweyr",
			"The Elder Scrolls Online: Greymoor",
			"Elder Scrolls Online: Tamriel Unlimited",
			"ESO",
		],
		hints: [
			"This game is a massively multiplayer online role-playing game (MMORPG).",
			"It is set in a high fantasy world with a vast open world to explore.",
			"The game was developed by ZeniMax Online Studios and published by Bethesda Softworks.",
			"Players can choose from a variety of races and classes, each with their own unique abilities and playstyles.",
			"The game features a rich and immersive storyline with a focus on player choice and exploration.",
		],
		songs: [
			{
				name: "OST - ESO - For Blood, for Glory, for Honor - 1080p HD",
				url: "https://youtu.be/G_GLDCDRuC0",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Moons of Evening Star - 1080p HD",
				url: "https://youtu.be/Yg8kWtmM1yY",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Weapons Drawn - 1080p HD",
				url: "https://youtu.be/l171ZqfBAOQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Moth, Butterfly, and Torchbug - 1080p HD",
				url: "https://youtu.be/30pHKjToImc",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Omens in the Clouds - 1080p HD",
				url: "https://youtu.be/0tq-aC8wqaQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Yearning for Moonshadow - 1080p HD",
				url: "https://youtu.be/Xd2FrYO7pIE",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Dawn Gleams on Cyrodiil - 1080p HD",
				url: "https://youtu.be/8_OyiuXsNtI",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Beauty of Dawn - 1080p HD",
				url: "https://youtu.be/thzFnhPaNWA",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - The Three Banners-Fanfare - 1080p HD",
				url: "https://youtu.be/LBhqG055qqY",
				difficulty: difficulties.EASY,
			},
			{
				name: "OST - ESO - Greenheart - 1080p HD",
				url: "https://youtu.be/1mq5L6VxiHA",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Elder Scrolls III: Morrowind",
		franchise: "The Elder Scrolls",
		difficulty: difficulties.EASY,
		aliases: [
			"Morrowind",
			"Elder Scrolls III",
			"The Elder Scrolls 3",
			"Morrowind III",
			"The Elder Scrolls III: Morrowind",
			"Elder Scrolls: Morrowind",
			"Morrowind: The Elder Scrolls III",
			"TES III: Morrowind",
			"Morrowind - The Elder Scrolls III",
			"The Elder Scrolls III - Morrowind",
		],
		hints: [
			"This game is an open-world RPG.",
			"It was released in 2002 and is the third installment in a popular video game franchise.",
			"The game takes place in the province of Morrowind, a fictional region in a fantasy world.",
			"The game features a complex character creation system and allows players to choose from a variety of races and classes.",
			"The game has a reputation for its deep lore and immersive world-building, and is considered a classic of the RPG genre.",
		],
		songs: [
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 01. Nerevar Rising",
				url: "https://youtu.be/OHyY8BFPJZw",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 06. The Road Most Travelled",
				url: "https://youtu.be/HR432XFDUQQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 02. Peaceful Waters",
				url: "https://youtu.be/PIlh-wEDYTQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 04. Over the Next Hill",
				url: "https://youtu.be/llINJR3X31A",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 03. Knight's Charge",
				url: "https://youtu.be/Yz_8yiglU-0",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 08. Blessing of Vivec",
				url: "https://youtu.be/FzZP3IWmTv0",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 10. Silt Sunrise",
				url: "https://youtu.be/83nQz4JCk1s",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 14. Caprice",
				url: "https://youtu.be/qCLYm55Vtus",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 05. Bright Spears, Dark Blood",
				url: "https://youtu.be/sPxq6Fet_Ww",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Elder Srolls III: Morrowind Soundtrack - 12. Shed Your Travails",
				url: "https://youtu.be/_ETl-hlOCBk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Cyberpunk 2077",
		franchise: "Cyberpunk",
		difficulty: difficulties.EASY,
		aliases: [
			"Cyberpunk2077",
			"Cyber punk 2077",
			"Cyber-punk 2077",
			"Cyberpunk 2 0 7 7",
			"Cyberpunk two zero seven seven",
			"CP2077",
			"Cyberpunk2077: Vengeance",
			"Cyberpunk2077: Night City",
			"Cyberpunk2077: The Future",
			"Cyberpunk2077: Neon Nights",
			"Cyberpunk2077: Edge of the Future",
			"Cyberpunk2077: Rise of Night City",
		],
		hints: [
			"This game is set in a dystopian future where people are heavily augmented with technology.",
			"The game is developed by CD Projekt Red, the same studio behind the popular game series The Witcher.",
			"The game features a vast open world that can be explored freely.",
			"The game allows players to customize their character's appearance, skills, and abilities.",
			"The game was highly anticipated and had a troubled development cycle, but was eventually released in 2020 to mixed reviews.",
		],
		songs: [
			{
				name: "SAMURAI - Chippin' In | Cyberpunk 2077 OST",
				url: "https://youtu.be/VIg8-1H7ELU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hyper - Spoiler | Cyberpunk 2077 OST",
				url: "https://youtu.be/CHENRaquRHo",
				difficulty: difficulties.EASY,
			},
			{
				name: "SAMURAI - Never Fade Away | Cyberpunk 2077 OST",
				url: "https://youtu.be/wYlgITKlluE",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Rebel Path | Cyberpunk 2077 OST",
				url: "https://youtu.be/7ijP0i_5zdk",
				difficulty: difficulties.EASY,
			},
			{
				name: "V | Cyberpunk 2077 OST",
				url: "https://youtu.be/bG9ahw-5tj8",
				difficulty: difficulties.EASY,
			},
			{
				name: "SAMURAI - The Ballad of Buck Ravers | Cyberpunk 2077 OST",
				url: "https://youtu.be/aSXcA6NUJ8s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Point Break Candy & Raney Shockne - Hole In The Sun | Cyberpunk 2077 OST",
				url: "https://youtu.be/FotaxdMo0Vk",
				difficulty: difficulties.EASY,
			},
			{
				name: "P.T. Adamczyk & Olga Jankowska - Never Fade Away (SAMURAI Cover) | Cyberpunk 2077 OST",
				url: "https://youtu.be/2IU8bvS9K6I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Run The Jewels - No Save Point | Cyberpunk 2077 OST",
				url: "https://youtu.be/BvCHWHnTnik",
				difficulty: difficulties.EASY,
			},
			{
				name: "SAMURAI - A Like Supreme | Cyberpunk 2077 OST",
				url: "https://youtu.be/8_1CNOHl4h4",
				difficulty: difficulties.EASY,
			},
			{
				name: "SAMURAI - Black Dog | Cyberpunk 2077 OST",
				url: "https://youtu.be/cFCX_ZhuUmY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Musorshchiki | Cyberpunk 2077 OST",
				url: "https://youtu.be/W9pW7HCuAY4",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Streets Are Long-Ass Gutters | Cyberpunk 2077 OST",
				url: "https://youtu.be/eluhXBVd6NU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Scavenger Hunt | Cyberpunk 2077 OST",
				url: "https://youtu.be/YzMLd2HFrTI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Outsider No More | Cyberpunk 2077 OST",
				url: "https://youtu.be/AUJzI9GISFw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Extraction Action | Cyberpunk 2077 OST",
				url: "https://youtu.be/e3FZP0NDcPk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wushu Dolls | Cyberpunk 2077 OST",
				url: "https://youtu.be/dY_WXsHw-lc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cloudy Day | Cyberpunk 2077 OST",
				url: "https://youtu.be/7d0hBPCl7iA",
				difficulty: difficulties.EASY,
			},
			{
				name: "You Shall Never Have To Forgive Me Again | Cyberpunk 2077 OST",
				url: "https://youtu.be/GPOoPf9Ciz0",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Heist | Cyberpunk 2077 OST",
				url: "https://youtu.be/8G-Vu90wEcI",
				difficulty: difficulties.EASY,
			},
			{
				name: "SOPHIE & Shygirl & Clockwork Venus - BM | Cyberpunk 2077 OST",
				url: "https://youtu.be/xFRLxZ3e62o",
				difficulty: difficulties.EASY,
			},
			{
				name: "There's Gonna Be A Parade! | Cyberpunk 2077 OST",
				url: "https://youtu.be/Euw_YjvdVZ8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Patri(di)ots | Cyberpunk 2077 OST",
				url: "https://youtu.be/v5UXxR3vpoo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Been Good To Know Ya | Cyberpunk 2077 OST",
				url: "https://youtu.be/A5KcGnjN6B4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Trouble Finds Trouble | Cyberpunk 2077 OST",
				url: "https://youtu.be/QQk9XjiJVtg",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Voice In My Head | Cyberpunk 2077 OST",
				url: "https://youtu.be/k-ADgRg4ZqQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Voice In My Head | Cyberpunk 2077 OST",
				url: "https://youtu.be/k-ADgRg4ZqQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Code Red Initiated | Cyberpunk 2077 OST",
				url: "https://youtu.be/TxIKEUKv3xg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Rite Of Passage | Cyberpunk 2077 OST",
				url: "https://youtu.be/MiNEUnUuucY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Never Fade Away (feat. Olga Jankowska) [SAMURAI Cover] | Cyberpunk 2077 OST",
				url: "https://youtu.be/qEhrZ2s0lSI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Streetfighters | Cyberpunk 2077 OST",
				url: "https://youtu.be/XozX_hVmxNI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Close Probing | Cyberpunk 2077 OST",
				url: "https://youtu.be/IxLW7Sv1X-c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mining Minds | Cyberpunk 2077 OST",
				url: "https://youtu.be/XSWlsfNR_d4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Le Destroy & The Bait - Kill Kill | Cyberpunk 2077 OST",
				url: "https://youtu.be/f-w9xrpL8uw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cyberninja | Cyberpunk 2077 OST",
				url: "https://youtu.be/ap5T9_laiLg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Run The Jewels & Yankee and the Brave - No Save Point | Cyberpunk 2077 OST",
				url: "https://youtu.be/V-kImsh9ez4",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Sacred And The Profane | Cyberpunk 2077 OST",
				url: "https://youtu.be/V_dKkzhDw1s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Juiced Up | Cyberpunk 2077 OST",
				url: "https://youtu.be/llGTPJ7i_rc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Kang Tao Down | Cyberpunk 2077 OST",
				url: "https://youtu.be/gzyaJfq-gdQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cyberwildlife Park | Cyberpunk 2077 OST",
				url: "https://youtu.be/Nxy_dQTS_MM",
				difficulty: difficulties.EASY,
			},
			{
				name: "To Hell and Back | Cyberpunk 2077 OST",
				url: "https://youtu.be/zBil22mcnKY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Modern Anthill | Cyberpunk 2077 OST",
				url: "https://youtu.be/4vKkhYoiCRs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Adam Smasher | Cyberpunk 2077 OST",
				url: "https://youtu.be/2DnJKZlIRvU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Atlantis | Cyberpunk 2077 OST",
				url: "https://youtu.be/t9c_jaYWfvc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bells Of Laguna Bend | Cyberpunk 2077 OST",
				url: "https://youtu.be/uQG4WU0-Dl0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hanako & Yorinobu | Cyberpunk 2077 OST",
				url: "https://youtu.be/yIlQSg7X7AA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Urban Downunder | Cyberpunk 2077 OST",
				url: "https://youtu.be/l4xtTfwUAWY",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Suits Are Scared | Cyberpunk 2077 OST",
				url: "https://youtu.be/_wumJ7mqEIQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Consumer Cathedral | Cyberpunk 2077 OST",
				url: "https://youtu.be/QMTBf5L-qiU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tower Lockdown | Cyberpunk 2077 OST",
				url: "https://youtu.be/4zqwWYGzTUE",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Moonlighter",
		franchise: "Moonlighter",
		difficulty: difficulties.EASY,
		aliases: [
			"Moonlight",
			"Moonlighting",
			"Moonlighted",
			"Moonlighter's",
			"Moonlit",
			"Moonlighters",
			"Moonlighterer",
			"Moonlighterer's",
			"Moonlighterer's",
		],
		hints: [
			"This game was released in 2018.",
			"It is an action RPG game with rogue-lite elements.",
			"The game features a unique gameplay loop where the player runs a shop during the day and goes on dungeon-crawling adventures at night.",
			"The game has a pixel art style and a charming soundtrack.",
			"The game was developed by Digital Sun Games and published by 11 bit studios.",
		],
		songs: [
			{
				name: "Moonlighter OST - 08 - Golem King",
				url: "https://youtu.be/xFTvumMVrek",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 01 - Beyond the Gates",
				url: "https://youtu.be/ijMoJ82NtP8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 03 - Village of Rynoka",
				url: "https://youtu.be/53oWT6opXQk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 04 - The Moonlighter",
				url: "https://youtu.be/g2m8ms32xa4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 22 - The Void",
				url: "https://youtu.be/yHLdW2lVwgk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 13 - Carnivorous Mutae",
				url: "https://youtu.be/c5hXaTpwLL4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 16 - Naja",
				url: "https://youtu.be/dh7ZNAwmgLA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 02 - Will's Theme",
				url: "https://youtu.be/GUL26rS4FI8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 10 - Macadamia Mayhem",
				url: "https://youtu.be/Oh72giq0AmM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 24 - Rynoka Variations (Bonus Track)",
				url: "https://youtu.be/DFeEM80lqw0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 05 - Forbidden Steps",
				url: "https://youtu.be/JT2OQJRQoHI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 21 - Energy Flux",
				url: "https://youtu.be/UFVzhntekLg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 17 - Tired Rynoka",
				url: "https://youtu.be/oaX6tY96JUo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 12 - Botanical Brigade",
				url: "https://youtu.be/5YRUPZpPYVM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 11 - Restless Roots",
				url: "https://youtu.be/hZbvn_Wuw_4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 25 - Dreams of Adventures (Bonus Track)",
				url: "https://youtu.be/FZVXRQPXvQM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 06 - Sentient Stone",
				url: "https://youtu.be/tYAjxwwfkkk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 18 - The Abandoned Laboratory",
				url: "https://youtu.be/JnF-3J5oC8o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 07 - Gaining Courage",
				url: "https://youtu.be/hMFBEkBNXSQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 09 - Onsen",
				url: "https://youtu.be/SeZcn1z2gvE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 19 - Haywire",
				url: "https://youtu.be/jl6uYMlTe2c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 14 - Journey Through the Ancient Sands",
				url: "https://youtu.be/1Y9cU2gECI4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 15 - Dancing Fire",
				url: "https://youtu.be/1FaMBOg3w1M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 23 - The Heroic Merchant",
				url: "https://youtu.be/HpbHzCrz8pI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Moonlighter OST - 20 - Uncontrolled Variables",
				url: "https://youtu.be/dcEiNoTNBkk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "No More Heroes",
		franchise: "No more heroes",
		difficulty: difficulties.EASY,
		aliases: ["No More Heroes", "NoMore Heroes", "No More Heroes 1", "NMH", "NMH 1"],
		hints: [
			"This game was released in 2007 for the Nintendo Wii.",
			"It is an action-adventure game with hack-and-slash elements.",
			"The game was developed by Grasshopper Manufacture, a Japanese video game studio known for their unique and quirky games.",
			"The game's protagonist, Travis Touchdown, is an otaku who becomes an assassin to climb the ranks of the United Assassins Association.",
			"The game features a variety of boss battles, each with their own unique personalities and fighting styles.",
		],
		songs: [
			{
				name: "[Music] No More Heroes - N.M.H.",
				url: "https://youtu.be/ThXV6T-Pq9k",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Cashmere Cannonball",
				url: "https://youtu.be/9EApn11lFfE",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Beam Katana Chronicles",
				url: "https://youtu.be/_fcRM4cRkbQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Heat in Your Heart",
				url: "https://youtu.be/Ly3UYI3Z2Qk",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Pleather for Breakfast",
				url: "https://youtu.be/DeTvEpDj0D8",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Samurai Summer",
				url: "https://youtu.be/jahSpftYKqg",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Season of the Samurai",
				url: "https://youtu.be/jIFSi2oOG2s",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - DND (Do Not Destroy)",
				url: "https://youtu.be/M_JgKHLvH78",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Steel Python",
				url: "https://youtu.be/l_3Incmmkt0",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Stop Hanging DJs",
				url: "https://youtu.be/V1OsfKEwp9E",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Piranhas in the Air",
				url: "https://youtu.be/EtPj2BOO67U",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Hell on Bare Feet",
				url: "https://youtu.be/n9t13o-WcU0",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Heat in your Hand",
				url: "https://youtu.be/lH4SY5CsF4g",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Too Much Gorgeous",
				url: "https://youtu.be/BdmlWr5hnaM",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Oxygen Graffiti",
				url: "https://youtu.be/_m5fMfC_E_s",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Gorgeous Blues",
				url: "https://youtu.be/urVvdyaBNrg",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Violectrolysis",
				url: "https://youtu.be/Y8IggphUZr8",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Fork in the Wall",
				url: "https://youtu.be/aO8IOjbJsXc",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Blaster Nation",
				url: "https://youtu.be/Lo859_9oI5w",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Hustlin' 'n' Tusslin'",
				url: "https://youtu.be/eT_MLxpy5ww",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - K-ENT.",
				url: "https://youtu.be/emr7ZuDe7XM",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Mach 13 Elephant Explosion",
				url: "https://youtu.be/eCZMqLG7rR4",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - The Virgin Child Makes Her Wish Without Feeling Anything",
				url: "https://youtu.be/i_P7MNQtSRc",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Speed with Teeth",
				url: "https://youtu.be/W1OxfjkT_rk",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Blueberry Cheesecake Brownie",
				url: "https://youtu.be/wa1R5mCm86c",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Walk Like This",
				url: "https://youtu.be/XGNoIwT1phk",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Ten Tons of Titanium",
				url: "https://youtu.be/F3FPpNUxTvo",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - LET'S FIGHT A BOSS",
				url: "https://youtu.be/-bElBWWJWEQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Wishful Whistling",
				url: "https://youtu.be/xlcJ-fBmGiI",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Disaster for Sale",
				url: "https://youtu.be/unkD8uvxfMI",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Sun on the Ceiling",
				url: "https://youtu.be/Q29ltDX3WPs",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Hot Dreams",
				url: "https://youtu.be/C3_LmX71wfM",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - CHIPSTER DASH",
				url: "https://youtu.be/e6-Z-T3FIwg",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Shy Supernova",
				url: "https://youtu.be/elMiiZX_Oew",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Wind Blows, Love Dies",
				url: "https://youtu.be/PA3HX74RhxM",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - Electromatherapy",
				url: "https://youtu.be/kKbG-3uNr8s",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] No More Heroes - HISSATSU Jamba",
				url: "https://youtu.be/XyHA6jByit4",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "No More Heroes 2: Desperate Struggle",
		franchise: "No more heroes",
		difficulty: difficulties.EASY,
		aliases: [
			"No More Heroes 2",
			"No More Heroes Desperate Struggle",
			"No More Heroes 2 Desperate Struggle",
			"NMH 2",
			"NMH Desperate Struggle",
			"NMH 2 Desperate Struggle",
			"No More Heroes II",
			"No More Heroes II Desperate Struggle",
			"No More Heroes Two",
			"No More Heroes Two Desperate Struggle",
			"NMH II",
			"NMH II Desperate Struggle",
			"NMH Two",
			"NMH Two Desperate Struggle",
		],
		hints: [
			"This game is a sequel to a popular action-adventure game released in 2007.",
			"The game follows the story of an assassin named Travis Touchdown, who is seeking revenge against other assassins.",
			"The game features a unique combat system that involves using a beam katana to defeat enemies.",
			"The game is known for its over-the-top violence and humor, as well as its unique art style.",
			"The game was released exclusively for the Nintendo Wii in 2010, and later received a remastered version for the Nintendo Switch in 2021.",
		],
		songs: [
			{
				name: "No More Heroes 2: Desperate Struggle OST: Philistine [Jpn Ver.]",
				url: "https://youtu.be/UFXqJ--L_Kk",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2 -  It's Kill or Be Killed ~ Destroy Resort",
				url: "https://youtu.be/q-V8htEtAYI",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2 - We Are Finally Cowboys (Golden Brown Mix) ~ Mimmy",
				url: "https://youtu.be/uBWWumC4XBc",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2: Desperate Struggle - Sling Shot",
				url: "https://youtu.be/6hrsQU8fuBs",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2 -  Philistine ~ RANK 4 Margeret Moonlight",
				url: "https://youtu.be/oAUxhHz-LCM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Awesome Video Game Music 41: Nathan Is Our Boss.",
				url: "https://youtu.be/dHcfCuuJ1eM",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2 - No More Riot",
				url: "https://youtu.be/Mi469Fi7n3k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Awesome Video Game Music 63: Happy WarMore.",
				url: "https://youtu.be/4UeUHJHyozw",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2 - N.M.H. The Outer Rim Remix ~ Akashic Point No. 1",
				url: "https://youtu.be/dk3qAUqI9X0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Feet on the Air (No More Heroes 2: Desperate Struggle OST)",
				url: "https://youtu.be/FJzu9tyA634",
				difficulty: difficulties.EASY,
			},
			{
				name: "Zapper101's VGM Fun #93: No More Heroes 2-Dose of Innocence",
				url: "https://youtu.be/u2i_zpRPE3c",
				difficulty: difficulties.EASY,
			},
			{
				name: "VGM138 Titanium Batt (Jasper 2nd Form Theme) - No More Heroes 2: Desperate Struggle",
				url: "https://youtu.be/sAVVBYmynZE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sub Crazy - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/G7zbyHOdxBw",
				difficulty: difficulties.EASY,
			},
			{
				name: "[HQ Test] No More Heroes 2 Official Soundtrack - Kill U 2wice Over",
				url: "https://youtu.be/u3MV5NQP2dA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Awesome Video Game Music 130: Cheap Whiskey (No more heroes: Desperate Struggle)",
				url: "https://youtu.be/mlOrlC5pkfY",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2 OST - Sonic Smooth",
				url: "https://youtu.be/dmnofvB0HN8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Greatest VGM 5144: Money Shot (No More Heroes 2)",
				url: "https://youtu.be/MURUJnBCrA0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ms. Teller from (No More Heroes 2)",
				url: "https://youtu.be/utpYga11G8M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Do You Want More! - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/9sFB33Xoiaw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Death Parade March - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/17G2Nu8MxsA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Favorite VGM #11 - Charging Katana",
				url: "https://youtu.be/J1pVsGf0qAE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Neutrino - Tooth Paste (No More Heroes 2: Desperate Struggle)",
				url: "https://youtu.be/BMjmuw4KKbw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Travesty - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/4bIJaw2LRio",
				difficulty: difficulties.EASY,
			},
			{
				name: "Surf Santa Destroy - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/prgLGBnXNzw",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Upside from (No More Heroes 2)",
				url: "https://youtu.be/-42QQ_4apMw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Favorite VGM 06: Sound's Asylum - No More Heroes 2",
				url: "https://youtu.be/-vGL1tgR510",
				difficulty: difficulties.EASY,
			},
			{
				name: "Subata.2 - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/h2SWY3B0Gho",
				difficulty: difficulties.EASY,
			},
			{
				name: "Burning Daylight - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/PwAoDos0pbo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bates - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/tqyM5u1g6W0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Subata.1 - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/pcCMNNrRTC4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Debt Free - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/EPcL4PZJDnA",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More Heroes 2 Desperate Struggle Original Sound Tracks - Level Up Man",
				url: "https://youtu.be/wWbG5-oEXY8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Awesome Video Game Music 144: Hurry Back Home (No more heroes 2)",
				url: "https://youtu.be/7b0t324-QIA",
				difficulty: difficulties.EASY,
			},
			{
				name: "No More No - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/jfivwNSPj9k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deep Sub - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/13PpnkchdKI",
				difficulty: difficulties.EASY,
			},
			{
				name: "With You, Without You - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/9XD1wfECXV8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Pi Pa Po - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/dN_R0SMuFxA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sub Smash - No More Heroes 2: Desperate Struggle Original Soundtrack",
				url: "https://youtu.be/6Ky5tU6HeWk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "No More Heroes III",
		franchise: "No more heroes",
		difficulty: difficulties.EASY,
		aliases: [
			"No More Heroes 3",
			"No More Heroes Three",
			"No More Heroes III: Desperate Struggle",
			"No More Heroes 3: Desperate Struggle",
			"No More Heroes III: Bloodbath",
			"No More Heroes 3: Bloodbath",
			"No More Heroes III: Revenge",
			"No More Heroes 3: Revenge",
			"No More Heroes III: Retribution",
			"No More Heroes 3: Retribution",
			"No More Heroes III: Vengeance",
			"No More Heroes 3: Vengeance",
		],
		hints: [
			"This game is the third installment in a popular action-adventure series.",
			"The game is developed by Grasshopper Manufacture, a studio known for their unique and stylized games.",
			"The game follows the story of an assassin named Travis Touchdown, who must fight his way to the top of the rankings to become the world's number one assassin.",
			"The game features a variety of over-the-top weapons and combat styles, including sword fighting and wrestling moves.",
			"The game was released exclusively for the Nintendo Switch in 2021, and features improved graphics and gameplay mechanics compared to its predecessors.",
		],
		songs: [
			{
				name: "Arms of Immortal (Colossal Immortal) - DAEMON X MACHINA Soundtrack",
				url: "https://youtu.be/X1FiOjLC0eE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Travis Strikes Again: No More Heroes OST - Negative return",
				url: "https://youtu.be/A0pRwXi2XpA",
				difficulty: difficulties.EASY,
			},
			{
				name: "HENSHIN! (Full Armor Mode) - No More Heroes 3 OST",
				url: "https://youtu.be/elPdh5xEv1w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Battle Theme #1 - No More Heroes 3 OST",
				url: "https://youtu.be/tLhKCFX3Rho",
				difficulty: difficulties.EASY,
			},
			{
				name: "Head on Fight - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/j9HHMLSAhGw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Night Hawk (FU Phase 2) - No More Heroes 3 OST",
				url: "https://youtu.be/UOCFwDkr758",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ohma Battle - No More Heroes 3 OST",
				url: "https://youtu.be/CD-SrKDS2Gw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uehara Kamui (NMH3 Remix) - No More Heroes 3 OST",
				url: "https://youtu.be/nZ0qOuwMQTY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Blackhole Universe - No More Heroes 3 OST",
				url: "https://youtu.be/yOjksnjGmac",
				difficulty: difficulties.EASY,
			},
			{
				name: "Musical Chair (Final Round Ver. 2) - No More Heroes 3 OST",
				url: "https://youtu.be/KdFAr5uCuS4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Final Boss - No More Heroes 3 OST",
				url: "https://youtu.be/O6tn5iXhCXQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Native Dancer Battle - No More Heroes 3 OST",
				url: "https://youtu.be/2Z9psiomO_4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Musical Chair - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/0pETl0LAqrU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mr. Blackhole Battle (Phase 2) - No More Heroes 3 OST",
				url: "https://youtu.be/uHhE_pYqlL8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Destroyman True Face Battle - No More Heroes 3 OST",
				url: "https://youtu.be/QF0jh2DwGWM",
				difficulty: difficulties.EASY,
			},
			{
				name: "FU Battle (Phase 1) - No More Heroes 3 OST",
				url: "https://youtu.be/smPVJXtIdeY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sonic Juice Battle - No More Heroes 3 OST",
				url: "https://youtu.be/_5eiM90HBR4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gold Joe - No More Heroes 3 OST",
				url: "https://youtu.be/j2ClgnMJvzE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Alien Corridor - No More Heroes 3 OST",
				url: "https://youtu.be/8mcp2GI8Klg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Kimmy Love Battle/Crow from the sun (NMH3 Version) - No More Heroes 3 OST",
				url: "https://youtu.be/YpNlFv0sYYQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Henry Cooldown Battle Theme - No More Heroes 3 OST",
				url: "https://youtu.be/quHeXn5tDio",
				difficulty: difficulties.EASY,
			},
			{
				name: "Native Dancer (Death Chip Tutorial) - No More Heroes 3 OST",
				url: "https://youtu.be/NkqhCx0B6Mo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Start the game - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/-MYPJx-gX9c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Phantom Skate (Gokko of Itachi) - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/RiszM6W4jd8",
				difficulty: difficulties.EASY,
			},
			{
				name: "ITADAKIMASU - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/_5fHeD0U3R4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sonic Juice Pre-Battle Theme - No More Heroes 3 OST",
				url: "https://youtu.be/bFUJQxuuA_c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Midori Midorikawa Pre-Battle Theme #1 - No More Heroes 3 OST",
				url: "https://youtu.be/Ch965CDAEPM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gold Joe Pre-Battle Theme - No More Heroes 3 OST",
				url: "https://youtu.be/GaDuCvwlmgw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Unsettling Classrooms - No More Heroes 3 OST",
				url: "https://youtu.be/rF2T1MmpsnE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Thrilled lady - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/hH8dx2US75w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Damon & Mysterious Man Cutscene - No More Heroes 3 OST",
				url: "https://youtu.be/Lxwym9LkyvI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Notorious & Travis Training Montage - No More Heroes 3 OST",
				url: "https://youtu.be/E_Nam_CAOBY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Unsettling Classrooms (Battle) - No More Heroes 3 OST",
				url: "https://youtu.be/_IyooXTscgM",
				difficulty: difficulties.EASY,
			},
			{
				name: 'DEATHMAN ROUND 0 "Wilderness" - DEATHMAN OST',
				url: "https://youtu.be/v8mwL-bhYFg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uehara Kamui's Monologue - No More Heroes 3 OST",
				url: "https://youtu.be/RGCTXQGm_Uc",
				difficulty: difficulties.EASY,
			},
			{
				name: "I L Y - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/zCY23LrvJeQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "DEATHMAN - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/m3KtmPnHDgo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sonic Juices Approaches Cutscene Theme - No More Heroes 3 OST",
				url: "https://youtu.be/BuDUYfr9Aeo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Brother of the dead - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/qd-FZg2m7hw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Fight #1 - DEATHMAN OST",
				url: "https://youtu.be/gDqjDxxOKao",
				difficulty: difficulties.EASY,
			},
			{
				name: "Finale Fantastique - No More Heroes 3 Musical Selections",
				url: "https://youtu.be/8_QDp_BSAiY",
				difficulty: difficulties.EASY,
			},
			{
				name: "DEATHMAN Stage 2 - DEATHMAN OST",
				url: "https://youtu.be/1Fh-mwdIm40",
				difficulty: difficulties.EASY,
			},
			{
				name: "Emperor Death (Final Boss) - DEATHMAN OST",
				url: "https://youtu.be/_s4wyXj0GdE",
				difficulty: difficulties.EASY,
			},
			{
				name: "General Death (Boss Fight #3) - DEATHMAN OST",
				url: "https://youtu.be/RWYH0xSgi78",
				difficulty: difficulties.EASY,
			},
			{
				name: "Boss Fight #2 - DEATHMAN OST",
				url: "https://youtu.be/Q0a1fakfpko",
				difficulty: difficulties.EASY,
			},
			{
				name: "DEATHMAN Final Stage - DEATHMAN OST",
				url: "https://youtu.be/zbzbZ5mH1mQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "DEATHMAN Stage 3 - DEATHMAN OST",
				url: "https://youtu.be/BVG41m05w78",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Okami",
		franchise: "Okami",
		difficulty: difficulties.EASY,
		aliases: [
			"Okami",
			"Oukami",
			"Ookami",
			"Oukamii",
			"Okamii",
			"Ohkami",
			"Ohkamii",
			"Oukamii",
			"Oukammy",
			"Okammy",
			"Oukamy",
			"Okamy",
			"Oukamie",
			"Okamie",
			"Ohkamie",
		],
		hints: [
			"This game was released in 2006 for the PlayStation 2.",
			"It is an action-adventure game set in a beautiful, stylized world inspired by Japanese mythology.",
			"The player controls a wolf who has the power to manipulate the environment and defeat enemies using a magical paintbrush.",
			"The game's art style is heavily influenced by traditional Japanese ink wash painting.",
			"The game has been praised for its unique gameplay mechanics, beautiful visuals, and immersive story, and has since been remastered and re-released on multiple platforms.",
		],
		songs: [
			{
				name: "[Music] Okami - Title Music",
				url: "https://youtu.be/G3-ojrsg1cY",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Shinshu Field",
				url: "https://youtu.be/wif3MEdRaPA",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Issun's Theme",
				url: "https://youtu.be/Knu3mIwdNXQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Prologue",
				url: "https://youtu.be/_0usEURexYc",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Exorcizing Evil",
				url: "https://youtu.be/qBaele3z2lU",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Cursed Shinshu Field",
				url: "https://youtu.be/HJqBqAHgAA4",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Kamiki Village",
				url: "https://youtu.be/K-fFQH0iKM0",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Cave of Nagi",
				url: "https://youtu.be/UTwMTMZKa3E",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Tama's Theme",
				url: "https://youtu.be/IL_NMd6TNQQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Evil Brewing",
				url: "https://youtu.be/5T53Gia8ArY",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Orochi Returns",
				url: "https://youtu.be/Ouz0FtfPZ6k",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Hana Valley",
				url: "https://youtu.be/qIsLkn89IoY",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Silence of Stones",
				url: "https://youtu.be/B8kezQeRFnQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Gaze Up at the Sky",
				url: "https://youtu.be/sWBmnhTIfjA",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Ominous Feelings",
				url: "https://youtu.be/hUaZMsPiNRo",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Cursed Hana Valley",
				url: "https://youtu.be/Mp1MHSeHa0o",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Constellation (Rejuvenation)",
				url: "https://youtu.be/vq9v2aETJ9w",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Mr. Orange Appears",
				url: "https://youtu.be/A6H0xYZXFuw",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Susano's Training",
				url: "https://youtu.be/bglk14Wz_2I",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Susano's Battle",
				url: "https://youtu.be/-0s6Hyu1gqM",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Susano Goes for a Ride",
				url: "https://youtu.be/XppI-xqCccE",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Dojo Sensei",
				url: "https://youtu.be/V-ZDnH8tlIw",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Susano Skips Training",
				url: "https://youtu.be/t_EEX9BkgFs",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Eat This",
				url: "https://youtu.be/WHyKCsDhUn0",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Cursed Zone",
				url: "https://youtu.be/4A2SzB_yfeI",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Susano is Ready",
				url: "https://youtu.be/LNemdZT5BoE",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Theme of Mika",
				url: "https://youtu.be/fotfJyL0Z78",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Drunken Imps",
				url: "https://youtu.be/QrYzy-GIYAE",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Music] Okami - Dojo Entrance",
				url: "https://youtu.be/9gdiXH0awxc",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Jet Set Radio",
		franchise: "Jet Set radio",
		difficulty: difficulties.EASY,
		aliases: [
			"Jet Set Radio",
			"Jet Grind Radio Future",
			"Jet Grind Future",
			"Jet Set Radio Future",
			"JSRF",
			"JGR",
			"Jet Radio",
			"Jet Grind",
			"Jet Set Grind",
			"Jet Set Grind Radio",
		],
		hints: [
			"This game was originally released for the Sega Dreamcast in 2000.",
			"It is a cel-shaded action game that combines elements of platforming, graffiti, and inline skating.",
			"The game is set in a futuristic Tokyo-to and features a gang of inline skaters called the GGs who are fighting against a corrupt government.",
			"The game's unique art style and soundtrack, which features a mix of J-pop, hip-hop, and electronic music, were highly praised by critics.",
			"The game was later re-released for other platforms, including Xbox, PlayStation, and PC, and has since gained a cult following among gamers.",
		],
		songs: [
			{
				name: "Jet Grind Radio Soundtrack - Humming the Bassline",
				url: "https://youtu.be/mizSUxxuCiY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Let Mom Sleep",
				url: "https://youtu.be/m2680ciixQc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Miller Ball Breakers",
				url: "https://youtu.be/RkVOnU16BMY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Everybody Jump Around",
				url: "https://youtu.be/AW1rgaxsjfo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Electric Toothbrush",
				url: "https://youtu.be/jeKq7vseMSE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Funky Radio",
				url: "https://youtu.be/A9WqF5cyagY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Up-Set Attack",
				url: "https://youtu.be/bvuf_hbXaSc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Yellow Bream",
				url: "https://youtu.be/U_3HOF-f1z8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Magical Girl",
				url: "https://youtu.be/8czESQHZOIY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - 'Bout the City",
				url: "https://youtu.be/kzwbALfMaaI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Sneakman",
				url: "https://youtu.be/FlwEtrYCNwM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Set Radio Soundtrack - Dragula",
				url: "https://youtu.be/LspHkXsuVjY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Sweet Soul Brother",
				url: "https://youtu.be/92__UaovpiI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Grace & Glory",
				url: "https://youtu.be/FcxllvjUo2k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - That's Enough",
				url: "https://youtu.be/YqFG6sV-vC4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Set Radio Soundtrack - Super Brothers",
				url: "https://youtu.be/bHi5jDEqPB0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Recipe for the Perfect Afro",
				url: "https://youtu.be/yLZ_emA486U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - O.K. House",
				url: "https://youtu.be/Chemy6iFC5o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Mischievous Boy",
				url: "https://youtu.be/YXuGVBd3zsA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Rock It On",
				url: "https://youtu.be/8nY23NA25mM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Professional Murder Music - Slow",
				url: "https://youtu.be/DiKhT1TgpwA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - On the Bowl",
				url: "https://youtu.be/Io-3Iohu8k8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Yappie Feet",
				url: "https://youtu.be/2B6fd2mia6E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Jet Grind Radio Soundtrack - Moody's Shuffle",
				url: "https://youtu.be/RBC_pBWJJlU",
				difficulty: difficulties.EASY,
			},
			{
				name: "cold -just got wicked",
				url: "https://youtu.be/zdxU9cwDEsA",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Overcooked",
		franchise: "Overcooked",
		difficulty: difficulties.EASY,
		aliases: [
			"Overcooked",
			"Over Cooked",
			"Overcooking",
			"Overcook",
			"Overcooked Game",
			"Overcooked Video Game",
			"Overcooked Co-op Game",
			"Overcooked Multiplayer Game",
			"Overcooked Party Game",
			"Overcooked Kitchen Game",
			"Overcooked Cooking Game",
			"Overcooked Simulator",
		],
		hints: [
			"This game was released in 2016.",
			"It is a cooperative cooking simulation game.",
			"The game was developed by Ghost Town Games and published by Team17.",
			"The game features a variety of kitchens with different obstacles and challenges.",
			"The game requires players to communicate and work together to prepare and serve dishes before time runs out.",
		],
		songs: [
			{
				name: "Overcooked - Main Menu SONG",
				url: "https://youtu.be/x5S_dM5N4pk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Restaurant",
				url: "https://youtu.be/5rLIWC___Mw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Onion Cabin",
				url: "https://youtu.be/JuUxEUOCh4k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Mansion",
				url: "https://youtu.be/kVGA5T6qhic",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Space",
				url: "https://youtu.be/zPDQNv4Yjwo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Final Boss",
				url: "https://youtu.be/KpedBmlNfNQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Ship",
				url: "https://youtu.be/Mx7G51n1vk0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Truck",
				url: "https://youtu.be/1vM8ULP9lhY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Lost Morsel",
				url: "https://youtu.be/pEdAdNquVPM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Ice",
				url: "https://youtu.be/87qiwCxgtno",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Festive seasoning (idle/menu)",
				url: "https://youtu.be/JnvFHfoRXjk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked OST - Festive Seasoning",
				url: "https://youtu.be/HosyJyBR0LU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked: The Lost Morsel - Main Overworld Theme",
				url: "https://youtu.be/TzlB2GFkhr4",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Overcooked 2",
		franchise: "Overcooked",
		difficulty: difficulties.EASY,
		aliases: [
			"Overcooked Two",
			"Overcooked II",
			"Overcooked 2: Too Many Cooks",
			"Overcooked 2: Surf 'n' Turf",
			"Overcooked 2: Campfire Cook Off",
			"Overcooked 2: Night of the Hangry Horde",
			"Overcooked 2: Carnival of Chaos",
			"Overcooked 2: Season Pass",
			"Overcooked 2: Gourmet Edition",
			"Overcooked Too",
			"Overcooked 2: All You Can Eat",
			"Overcooked 2: Cook",
			"Serve",
			"Delicious! Pack",
		],
		hints: [
			"This game is a sequel to a popular cooking simulation game.",
			"It was developed by Ghost Town Games and published by Team17.",
			"The game features local and online multiplayer modes, allowing players to work together to prepare meals in a chaotic kitchen.",
			"The game introduces new mechanics such as throwing ingredients and dynamic kitchen environments.",
			"The game received several DLCs, including new levels, chefs, and recipes.",
		],
		songs: [
			{
				name: "Overcooked 2 Soundtrack - Menu / Title Screen",
				url: "https://youtu.be/8XBu4ZSlOsw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Ravenous Rapids",
				url: "https://youtu.be/cclWtdYn2SI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Map",
				url: "https://youtu.be/-y6J28I5z0c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Kevin Level",
				url: "https://youtu.be/K-kDSb_ZlA4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Sushi City",
				url: "https://youtu.be/i0rORT_od3w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Buffet Balloons",
				url: "https://youtu.be/I6S8Fs-HsTk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Moreish Mines",
				url: "https://youtu.be/qkwArqsViI4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Moreish Mines (Alternate) / Tutorial",
				url: "https://youtu.be/RIPHqaCrUjw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - The Unbread",
				url: "https://youtu.be/P961PyO53fM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Conjurer's Kitchen",
				url: "https://youtu.be/F6L7TrKBStk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Gourmet Galaxy",
				url: "https://youtu.be/cIJdo2yFG7g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Overcooked 2 Soundtrack - Throne Room",
				url: "https://youtu.be/zs-6-twckqs",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "A Hat In Time",
		franchise: "A Hat In Time",
		difficulty: difficulties.EASY,
		aliases: [
			"A Hat in Time",
			"Hat in Time",
			"A Hat Time",
			"Hat Time",
			"Time Hat",
			"A Hat in Time Game",
			"Hat in Time Game",
			"A Hat in Time Video Game",
			"Hat in Time Video Game",
		],
		hints: [
			"This game was released in 2017.",
			"It is a 3D platformer game featuring a young girl with a magical hat.",
			"The game was developed by Gears for Breakfast, an indie game studio.",
			"The game features a variety of hats that grant the player different abilities.",
			"The game was funded through a successful Kickstarter campaign and has received critical acclaim for its charming characters and fun gameplay.",
		],
		songs: [
			{
				name: "A Hat in Time OST - Train Rush",
				url: "https://youtu.be/e9zvAVH-tsw",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Main Theme",
				url: "https://youtu.be/LijvcUx2LNg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Picture Perfect",
				url: "https://youtu.be/Psquwscyxbg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Title Screen",
				url: "https://youtu.be/Hf92sTAEHTg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Her Spaceship",
				url: "https://youtu.be/Je4PCeDsHik",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Trainwreck Of Electro Swing (Remix)",
				url: "https://youtu.be/nkjVscSRNtY",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - New Adventure",
				url: "https://youtu.be/XtDKPGJLyDE",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Welcome to Mafia Town",
				url: "https://youtu.be/NAQq9tfahZ8",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Big Parade",
				url: "https://youtu.be/4ivEuF_1LAA",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Battle of Award 42",
				url: "https://youtu.be/Yz9aBqJo3ys",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Mafia Boss' Big Showdown",
				url: "https://youtu.be/Mu7cja2fbZU",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - File Select",
				url: "https://youtu.be/ynVjf8l11Fo",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Dead Bird Studio",
				url: "https://youtu.be/HP_X5qr3Uh4",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - She Came From Outer Space",
				url: "https://youtu.be/NXLn_-G8PJg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Oh It's You",
				url: "https://youtu.be/JF2dydt5c9o",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Welcome to Mafia Town (Remix)",
				url: "https://youtu.be/n9wljU5XBjg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Mafia Town Is Asleep",
				url: "https://youtu.be/b3OYXpDhC_g",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Barrel Battle",
				url: "https://youtu.be/0xu_iFFpFkc",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - You Are Now Legally a Bird",
				url: "https://youtu.be/WDFSIe8fcCM",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Time Piece Released",
				url: "https://youtu.be/5K-vJQO3Jeg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Deadbird Studio Reception",
				url: "https://youtu.be/y2gGEY3sEbQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Murder on the Owl Express",
				url: "https://youtu.be/szog4XxsPTo",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Mafia HQ",
				url: "https://youtu.be/LnelrYbmCRQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST  - So, What's The Plan?",
				url: "https://youtu.be/kxII1d2ZdeQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Picture Perfect (Remix)",
				url: "https://youtu.be/pedMb-6oA3M",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Subcon Forest",
				url: "https://youtu.be/aFsS_65zz4Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Badge Seller",
				url: "https://youtu.be/4EEVXtLIraw",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Conductor's Train",
				url: "https://youtu.be/lI2noF2P1x8",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Scootin' Through Mafia Town",
				url: "https://youtu.be/T8xvrjck3pk",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Heating Up Mafia Town",
				url: "https://youtu.be/IYK5pG-hW_I",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - A New Friend in Mafia Town",
				url: "https://youtu.be/cSCzixSYeFw",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Dead Bird Studio Basement",
				url: "https://youtu.be/H2vwu2i4ouM",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Subcon Village (Remix)",
				url: "https://youtu.be/tf7eJqleI9U",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Mafia Boss' Big Showdown (Remix)",
				url: "https://youtu.be/7q1TvTjTd0g",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Ratings Are In",
				url: "https://youtu.be/DXN8tnErII0",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - No More Mafia Boss",
				url: "https://youtu.be/ZNp3RNE4794",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Subcon Village",
				url: "https://youtu.be/nJj8x2brfgI",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Tick Tock",
				url: "https://youtu.be/_BlvvwHjVWs",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Snatcher's Contractual Obligations",
				url: "https://youtu.be/LxzCTrF0fCc",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Turn on the Pyrotechnics",
				url: "https://youtu.be/RjZWwvME02o",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Who Dun It",
				url: "https://youtu.be/SNoYRum25JM",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Annual Bird Movie Award",
				url: "https://youtu.be/YaHFifJkndE",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Scootin' Through Subcon Forest",
				url: "https://youtu.be/-gEDZLI28I0",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Heart To Heart",
				url: "https://youtu.be/D01X8-J80iE",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Toilet Of Doom",
				url: "https://youtu.be/EOh9Twq6Lig",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Phone's Ringing",
				url: "https://youtu.be/PGjqdXoixLg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Metal Bork",
				url: "https://youtu.be/xBErysNcUjo",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - Dead Bird Studio is Closed",
				url: "https://youtu.be/IcBnWDXajjs",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Fire Spirits",
				url: "https://youtu.be/qG7-uNQUmEQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Hat in Time OST - The Subcon Caves",
				url: "https://youtu.be/_BPZOiXH_58",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "The Binding of Isaac",
		franchise: "The Binding of Isaac",
		difficulty: difficulties.EASY,
		aliases: [
			"Binding of Isaac",
			"The Binding Isaac",
			"Binding Isaac",
			"The Binding of Isac",
			"Binding of Isac",
			"The Binding of Isaac: Rebirth",
			"Binding of Isaac: Rebirth",
			"The Binding of Isaac: Afterbirth",
			"Binding of Isaac: Afterbirth",
			"The Binding of Isaac: Afterbirth+",
			"Binding of Isaac: Afterbirth+",
			"The Binding of Isaac: Repentance",
			"Binding of Isaac: Repentance",
		],
		hints: [
			"This game was developed by Edmund McMillen and Florian Himsl.",
			"It is a roguelike video game that was released in 2011.",
			"The game is inspired by the biblical story of the same name.",
			"The game features randomly generated dungeons and permadeath, meaning that when the player dies, they must start over from the beginning.",
			"The game has received multiple expansions and updates, adding new items, enemies, and challenges to the game.",
		],
		songs: [
			{
				name: "The Binding of Isaac (Rebirth) OST - Genesis 22:10 [Title]",
				url: "https://youtu.be/EqjzfarDmOM",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Everlasting Hymn [Cathedral]",
				url: "https://youtu.be/6_qNoDZJkMk",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Matricide [Mom Fight]",
				url: "https://youtu.be/EBJEHIxHuKE",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Diptera Sonata [Basement]",
				url: "https://youtu.be/iA3I2-BLCVg",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Afterbirth) OST - Morituros [Hush Fight]",
				url: "https://youtu.be/rbflsmpA69c",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Crusade [Boss Fight]",
				url: "https://youtu.be/xrQ3vnd6hYY",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Hericide [Satan Fight]",
				url: "https://youtu.be/Ivk5NTXuDHI",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Infanticide [Isaac Fight]",
				url: "https://youtu.be/dcrpyes-dTc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Ventricide [Womb Fight]",
				url: "https://youtu.be/eCW3hHhN8V4",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - Ambush [Boss Rush]",
				url: "https://youtu.be/hh70sL1lGAM",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Binding of Isaac (Rebirth) OST - The Calm [Boss Defeated]",
				url: "https://youtu.be/9Xq4TZD-fi8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Delirium",
				url: "https://youtu.be/8mp3gNFN61Y",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil 3: Nemesis",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"Resident Evil 3",
			"Resident Evil Nemesis",
			"Resident Evil 3 Nemesis",
			"RE3",
			"RE Nemesis",
			"RE3 Nemesis",
			"Resident Evil III",
			"Resident Evil III Nemesis",
			"Resident Evil Three",
			"Resident Evil Three Nemesis",
		],
		hints: [
			"This game is a survival horror game.",
			"It was released in 1999 for the PlayStation.",
			"The game is set in Raccoon City, a fictional city in the United States.",
			"The main antagonist of the game is a creature called Nemesis, which relentlessly pursues the player throughout the game.",
			"The game was remade and released in 2020 with updated graphics and gameplay mechanics.",
		],
		songs: [
			{
				name: "Resident Evil 3: Nemesis OST - The City of Ruin",
				url: "https://youtu.be/ipW5ARYXMfU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Watch Your Back",
				url: "https://youtu.be/Lb7IIBnsHl0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Unstoppable Nemesis",
				url: "https://youtu.be/jkUimGS2krg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Valediction",
				url: "https://youtu.be/lYypimHpNO8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Unfortunate Event",
				url: "https://youtu.be/6pRiN-PReEM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Doomed City",
				url: "https://youtu.be/OJonreu2v_U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Worst Scenario",
				url: "https://youtu.be/vX2ztys91jw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Park",
				url: "https://youtu.be/eUJMaTZ2Tgo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Front Hall",
				url: "https://youtu.be/1OU-3ru-1Jo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The First Floor",
				url: "https://youtu.be/Kk9ugffayXc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Traitor",
				url: "https://youtu.be/Pwdk78LY_Dc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Clock Tower",
				url: "https://youtu.be/kIp-jZ8kg2Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Hospital",
				url: "https://youtu.be/Vy_iknQ2UlI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Nemesis Final Metamorphosis",
				url: "https://youtu.be/j5TJGyhsP8Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Staffs and Credits",
				url: "https://youtu.be/CkQflddDg4o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The City Without Hope",
				url: "https://youtu.be/SUEww5AYSW4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Nemesis' Theme",
				url: "https://youtu.be/0KqffiEc3zk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Last Argument",
				url: "https://youtu.be/Srx319Nal8g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Great Novelist",
				url: "https://youtu.be/24Njg-s10pA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Nemesis Doesn't Give Up",
				url: "https://youtu.be/Jd8C4IQTvJ0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Grave Digger",
				url: "https://youtu.be/bYpLN1XeCMs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Never Give up the Escape",
				url: "https://youtu.be/R9EO1wOltC0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - The Disused Plant",
				url: "https://youtu.be/ynQje8WGMs0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Missle Approaching",
				url: "https://youtu.be/o4APYJokSUI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - No Rest for the Wicked",
				url: "https://youtu.be/vqZXAtfD9eA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Hellish Agony",
				url: "https://youtu.be/s2Vguw5ZZyc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Reward and Results",
				url: "https://youtu.be/Zs7ekwouRus",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Nemesis Again",
				url: "https://youtu.be/dUdLGNiM0bI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Nothing But a Pawn",
				url: "https://youtu.be/jFVVv9kOkcg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Menacing Nemesis",
				url: "https://youtu.be/z7aWPKgIRjQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Nicholai's Theme",
				url: "https://youtu.be/vnbY7-q2rAU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Meeting Brad",
				url: "https://youtu.be/8KxyrYVGQyM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 3: Nemesis OST - Hero Time",
				url: "https://youtu.be/-SrhzQWcTB8",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil 0",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"Resident Evil Zero",
			"Resident Evil 0: HD Remaster",
			"Resident Evil 0 HD",
			"Resident Evil 0 Remastered",
			"Resident Evil 0: Remake",
			"RE0",
			"RE Zero",
		],
		hints: [
			"This game is a prequel to a popular survival horror franchise.",
			"It was originally released for the Nintendo GameCube in 2002.",
			"The game features two playable characters, Rebecca Chambers and Billy Coen, who must work together to survive.",
			"The game introduces a new gameplay mechanic where players must manage two characters at once, switching between them to solve puzzles and fight enemies.",
			"The game was remastered and re-released in 2016 for modern consoles and PC, featuring updated graphics and new gameplay options.",
		],
		songs: [
			{
				name: "Resident Evil Zero - Training Facility Main Theme [EXTENDED] Music",
				url: "https://youtu.be/eBdVOLOwj7E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - SAVE REB [EXTENDED] Music",
				url: "https://youtu.be/eFeFjBIz0tE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Uneasiness [EXTENDED] Music",
				url: "https://youtu.be/Kcwp-KLglBQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Centipede [EXTENDED] Music",
				url: "https://youtu.be/1zEMuwD0BXs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - ZOMBIE DOG [EXTENDED] Music",
				url: "https://youtu.be/eoDOM4F4nHY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Rest [EXTENDED] Music",
				url: "https://youtu.be/yViY2HjQ7gQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Chapel Main Theme [EXTENDED] Music",
				url: "https://youtu.be/xDn9Awzr8gU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Marcus' Memories [EXTENDED] Music",
				url: "https://youtu.be/NfDH7Mom5GA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Chapel III [EXTENDED] Music",
				url: "https://youtu.be/WeK_UuSRozQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - 1st ZOMBIE [EXTENDED] Music",
				url: "https://youtu.be/V58HG5029KM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Training Facility III [EXTENDED] Music",
				url: "https://youtu.be/L8cKlqK26EY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - LEECHMAN-1 [EXTENDED] Music",
				url: "https://youtu.be/r6p_UK30Sr4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Lullaby 1 Music",
				url: "https://youtu.be/sw78JWkoRfY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Dormitory Main Theme [EXTENDED] Music",
				url: "https://youtu.be/wK0jhdU1j6w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - ZERO Music",
				url: "https://youtu.be/W2Moekvqjjg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Training Facility II [EXTENDED] Music",
				url: "https://youtu.be/A7bTL0GqPw8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - SCP-BATTLE [EXTENDED] Music",
				url: "https://youtu.be/Z6DxVLb9hhA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Training Facility IV [EXTENDED] Music",
				url: "https://youtu.be/HDUo2EsIyp0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Dormitory ~ Chapel [EXTENDED] Music",
				url: "https://youtu.be/2r2Vwmy1aEA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Invitation Music",
				url: "https://youtu.be/ZJ6KhZzjMow",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Spasm and Curve [EXTENDED] Music",
				url: "https://youtu.be/ZwldEZ-ZAQg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Encounter Music",
				url: "https://youtu.be/ANqDOv6MP9o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Chess [EXTENDED] Music",
				url: "https://youtu.be/y-A2ciehuVs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - ED-ZOMBIE [EXTENDED] Music",
				url: "https://youtu.be/F57i2L1v74k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - In the Cage Room Music",
				url: "https://youtu.be/yqDkFVjctVc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - LEECHMAN-2 [EXTENDED] Music",
				url: "https://youtu.be/uBOfojU_4IM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Chapel II [EXTENDED] Music",
				url: "https://youtu.be/Z3vSPRo3ahE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Zero - Assassin's Dagger Music",
				url: "https://youtu.be/iOHO1nQ6-PA",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil 5",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"Resident Evil 5",
			"Resident Evil Five",
			"RE5",
			"RE 5",
			"Resi Evil 5",
			"Resi Evil Five",
			"Resident of Evil 5",
			"Resident of Evil Five",
			"Resident Evil V",
		],
		hints: [
			"This game is a part of a popular horror video game franchise.",
			"It was released in 2009 for multiple platforms including PlayStation, Xbox, and PC.",
			"The game is set in Africa and features two main characters, Chris Redfield and Sheva Alomar.",
			"The game features both single-player and co-op modes.",
			"The game received mixed reviews upon release, with some critics praising the graphics and gameplay while others criticized the story and lack of innovation.",
		],
		songs: [
			{
				name: "Resident Evil 5 Original Soundtrack - 21 - Executioner",
				url: "https://youtu.be/3nQSfyYmoHo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 02 - Opening -Chris's Arrival- (Original Ver.)",
				url: "https://youtu.be/RuYySBbXKfU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 11 - Majini II",
				url: "https://youtu.be/UMQ2WlCLJ9c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 03 - Item Box",
				url: "https://youtu.be/Yz_HdQCCOdY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 19 - Result",
				url: "https://youtu.be/ESa8yCDWuRU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 14 - Majini III",
				url: "https://youtu.be/munGvaFKdd0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 04 - New Fear",
				url: "https://youtu.be/uxtmXVLw26Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 29 - Burning with Anger",
				url: "https://youtu.be/8YChQUjRbG4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 40 - Evil Mutation",
				url: "https://youtu.be/R0M7aO5fG4Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 07 - The Town",
				url: "https://youtu.be/bWdFuuvf0cE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 09 - Majini I",
				url: "https://youtu.be/Rz2Gmt0RSvE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 33 - Majini IV",
				url: "https://youtu.be/tXvozNFEKGs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 17 - An Emergency (Digital Ver)",
				url: "https://youtu.be/gsKZCiylJPw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 25 - Flying Nightmare",
				url: "https://youtu.be/Eoc0zOSWNuo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 34 - Majini V",
				url: "https://youtu.be/xuindQm6cS0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 08 - First Encounter",
				url: "https://youtu.be/qyiiwqe4wvE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 49 - Gigantic Attack",
				url: "https://youtu.be/oQ7_8GaK-bU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 10 - Hospitality",
				url: "https://youtu.be/jKDJibabIeU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 26 - Pursuer and The Pursued",
				url: "https://youtu.be/iVcBBVndnGc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 15 - A Piece of the Puzzle",
				url: "https://youtu.be/V9xxwKYO10g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 43 - Majini VI",
				url: "https://youtu.be/KfTCgpXB9rY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 38 - Majini's Trap I",
				url: "https://youtu.be/GuxLhV2dqTE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 22 - The Crisis ～Reinforcements Arrive",
				url: "https://youtu.be/DPiUbvsO32g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 31 - Shadows of the Past",
				url: "https://youtu.be/vd0j-9lVKfo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 23 - Voice of The Darkness",
				url: "https://youtu.be/iaBeRTeTfJc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 24 - Terror from Above",
				url: "https://youtu.be/KuFah_B6n-k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 18 - The Storage Facility",
				url: "https://youtu.be/pg8hCfp37Mw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 45 - Excella and Wesker",
				url: "https://youtu.be/P1fPFbMdFDM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 37 - Get Out!",
				url: "https://youtu.be/KNo3ONCRmrU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 28 - Grand Resurgence",
				url: "https://youtu.be/CsL4rDYuHS0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 32 - Eerie Stillness",
				url: "https://youtu.be/j5kuSr-ImdM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 39 - The Patrol Boat",
				url: "https://youtu.be/8H8FX22AQHE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 42 - Ancient Noise",
				url: "https://youtu.be/Un7VlyjEnDo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 30 - Delta Team's Distress ~New Decision",
				url: "https://youtu.be/6Q9dyFbIRg4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 47 - The Claw",
				url: "https://youtu.be/iEJvpLQdu0A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 44 - Majini's Trap II",
				url: "https://youtu.be/YCUyI-7IxTo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 50 - The Enigma",
				url: "https://youtu.be/dqhsijIiiBQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 35 - Unite but",
				url: "https://youtu.be/9ZLMP4dPOiM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 41 - A New Clue",
				url: "https://youtu.be/FAxK0caekxo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 46 - Underground Garden",
				url: "https://youtu.be/ITXkqtD-mY4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 5 Original Soundtrack - 48 - Huge Facility -And then",
				url: "https://youtu.be/ipkDiM0jKcI",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"RE",
			"Resident Evil 1",
			"Resident Evil 2",
			"Resident Evil 3",
			"Resident Evil 4",
			"Resident Evil 5",
			"Resident Evil 6",
			"Resident Evil 7",
			"Resident Evil Village",
			"Biohazard",
			"Biohazard 1",
			"Biohazard 2",
			"Biohazard 3",
			"Biohazard 4",
			"Biohazard 5",
			"Biohazard 6",
			"Biohazard 7",
			"Biohazard Village",
		],
		hints: [
			"This game was first released in 1996.",
			"It is a survival horror game that takes place in a zombie-infested world.",
			"The game was developed by Capcom, a Japanese video game company.",
			"The game features a variety of puzzles that the player must solve to progress through the story.",
			"The game has spawned numerous sequels, spin-offs, and adaptations, including movies, comics, and novels.",
		],
		songs: [
			{
				name: "Resident Evil Soundtrack 1. Prologue & Main Title -  Marco Beltrami",
				url: "https://youtu.be/jA964ue-aps",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 3. Special Squad Enters The Mansion - Marco Beltrami",
				url: "https://youtu.be/kKMm1DdnTSM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 5. Underground Station - Marco Beltrami",
				url: "https://youtu.be/vBybW_vS6ZE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 6. Revealing The Hive - Marco Beltrami",
				url: "https://youtu.be/ZnCQGXeXcI0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 11. Undead Shootout - Marco Beltrami",
				url: "https://youtu.be/1ZbAQTioMy8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 9. Defense Mechanism - Marco Beltrami",
				url: "https://youtu.be/xA9bjslxheM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 7. Secret Lab Discovery - Marco Beltrami",
				url: "https://youtu.be/us6-p95k2Rw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 8. The Corridor / Hacking In - Marco Beltrami",
				url: "https://youtu.be/Q6XFOV7_-WE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 10. Red Queen Hologram - Marco Beltrami",
				url: "https://youtu.be/3YIf9lmEOIQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 25. Theme From Resident Evil - Marco Beltrami",
				url: "https://youtu.be/IyEU77UaDeo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 13. Mutant Dogs - Marco Beltrami",
				url: "https://youtu.be/l0tFkK8kIjg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 14. Alice Kicks Ass - Marco Beltrami",
				url: "https://youtu.be/XqFcgKvGVGg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 24. Raccoon City Hospital - Marco Beltrami",
				url: "https://youtu.be/VjXt63pqUgw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 20. Attacked In The Tunnels - Marco Beltrami",
				url: "https://youtu.be/AK9Znk57t7E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 23. Matt Taken Away - Marco Beltrami",
				url: "https://youtu.be/05PZ8o2u0HU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 19. Alice's Reboot Plan - Marco Beltrami",
				url: "https://youtu.be/QF962jS4JDw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 22. Licker On The Train - Marco Beltrami",
				url: "https://youtu.be/lEv_KF-yg-A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 17. Matt And Alice Talk - Marco Beltrami",
				url: "https://youtu.be/x_f0wa0o1cw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Soundtrack 21. Spencer The Saboteur - Marco Beltrami",
				url: "https://youtu.be/STc_-9l664M",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil 6",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"Resident Evil 6",
			"RE6",
			"Resident Evil VI",
			"REVI",
			"Resident Evil Six",
			"RE Six",
			"Resident Evil 6th",
			"Resident Evil Sixteen",
			"Resident Evil 6: The Final Chapter",
			"Resident Evil 6: Apocalypse",
			"Resident Evil 6: Extinction",
			"Resident Evil 6: Afterlife",
		],
		hints: [
			"This game is a part of a popular survival horror franchise.",
			"It was released in 2012 for multiple platforms including PlayStation 3, Xbox 360, and PC.",
			"The game features multiple playable characters, each with their own unique storyline.",
			"The game takes place in various locations around the world, including China and the United States.",
			"The game received mixed reviews from critics, with some praising its action-packed gameplay while others criticized its departure from the series' survival horror roots.",
		],
		songs: [
			{
				name: "Main Theme - Ost",
				url: "https://youtu.be/j21ioZfa9EQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Life or Death - Ost",
				url: "https://youtu.be/zLSWhexoEX0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Invasion of Darkness (Leon) - Ost",
				url: "https://youtu.be/MXmYIOlsicQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Prelude - Ost",
				url: "https://youtu.be/ZQWrVUkJ58g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Invasion of Darkness (Chris) - Ost",
				url: "https://youtu.be/h1XhD3SIXFM",
				difficulty: difficulties.EASY,
			},
			{
				name: "First Zombie Attack - Ost",
				url: "https://youtu.be/Ha_-XpvaA7A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Run! - Ost",
				url: "https://youtu.be/IS2QyU6fXJk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Death of a President - Ost",
				url: "https://youtu.be/X0F4MTCH2Bg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Results (Leon) - Ost",
				url: "https://youtu.be/uLhQAxv6VsE",
				difficulty: difficulties.EASY,
			},
			{
				name: "From Whence Hell Came - Lepotitsa - Ost",
				url: "https://youtu.be/I180rLqYp6M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Collections - Ost",
				url: "https://youtu.be/fqYWExujWFA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Conflict - Ost",
				url: "https://youtu.be/SoJcmiWsn64",
				difficulty: difficulties.EASY,
			},
			{
				name: "Trouble with Women - Ost",
				url: "https://youtu.be/YKEtQ9AOCvA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Heading for Quad Tower - Ost",
				url: "https://youtu.be/h_8ydZXKxfo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ancient Blood - Ost",
				url: "https://youtu.be/wx0zT_5qeIw",
				difficulty: difficulties.EASY,
			},
			{
				name: "New Purpose - Ost",
				url: "https://youtu.be/R7Zna3uApeQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Results (Extra Content) - Ost",
				url: "https://youtu.be/Api7JhhVFM0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Back for More - Ost",
				url: "https://youtu.be/mZ2SsWKls0A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Pull Up! - Ost",
				url: "https://youtu.be/3Mqv1Mxf3DI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Floating Nightmare - Ost",
				url: "https://youtu.be/_EZQ59FNhoc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Silent Party - Ost",
				url: "https://youtu.be/k759fTVXPM8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Underground Nightmare - Ost",
				url: "https://youtu.be/AaRrOZBastQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "No Way Out - Ost",
				url: "https://youtu.be/eJUhx7fzQ-A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Through the Fatal Gas, Requiem Theme - Ost",
				url: "https://youtu.be/9FiV9JF69Tw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Kith and Kin - Ost",
				url: "https://youtu.be/9Z2m04b2HnQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Escape from the Tower - Ost",
				url: "https://youtu.be/uJ8jbYFpqbM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Emergency Situation II - Ost",
				url: "https://youtu.be/Gzwvv0Se6TM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Campus - Ost",
				url: "https://youtu.be/J7neCJ8gEj0",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Town - Ost",
				url: "https://youtu.be/wRUS17O--7c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Emergency Situation I - Ost",
				url: "https://youtu.be/Dx7r7sU0ROs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Leon vs. Chris - Ost",
				url: "https://youtu.be/fX-25EzmcR4",
				difficulty: difficulties.EASY,
			},
			{
				name: "You Won’t Be Missed - Ost",
				url: "https://youtu.be/Mf_YNOXXXqM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sudden Intimacy, Crossover - Ost",
				url: "https://youtu.be/S8Sv9THJuO0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Searching For… - Ost",
				url: "https://youtu.be/whPc5HIdkyw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Pull the Throttle! (Airplane) - Ost",
				url: "https://youtu.be/a2vsyRmdIQQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Brzak (Final) - Ost",
				url: "https://youtu.be/-8qiz3s7LUQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gas Station - Ost",
				url: "https://youtu.be/3KGFf6b6eO0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deborah’s Transformation I - Ost",
				url: "https://youtu.be/4UfgZVe24ls",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deborah’s Transformation II - Ost",
				url: "https://youtu.be/qqbDKm-JXAY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gun Shop - Ost",
				url: "https://youtu.be/y6waIR7wJ8w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Swarm of Bombs - Ost",
				url: "https://youtu.be/hADCsWRiZfI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Underground Lab - Ost",
				url: "https://youtu.be/OhrLC-E6-Jo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Brzak - Ost",
				url: "https://youtu.be/T5W8CcK8p3g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Fearsome Foe - Ost",
				url: "https://youtu.be/DormjngRMi4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bus Escape - Ost",
				url: "https://youtu.be/d8aBUcHlPLk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cavern - Ost",
				url: "https://youtu.be/ISYXDCeRHAk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil 2",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"RE2",
			"Resident Evil II",
			"Resident Evil Two",
			"Resident Evil 2 Remake",
			"RE2 Remake",
			"Resident Evil II Remake",
			"Resident Evil Two Remake",
			"Resident Evil 2: Remake",
			"RE2: Remake",
			"Resident Evil II: Remake",
			"Resident Evil Two: Remake",
		],
		hints: [
			"This game was released in 1998 for the PlayStation.",
			"It is a survival horror game that takes place in a zombie-infested city.",
			"The game features two playable characters, each with their own unique storylines.",
			"The game introduced the \"zapping system,\" where the player's actions in one character's story affect the other character's story.",
			"The game was remade in 2019 with updated graphics and gameplay mechanics.",
		],
		songs: [
			{
				name: "Resident Evil 2 - Ada's Theme [EXTENDED] Music",
				url: "https://youtu.be/5ISfVnl5QLY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Underground Laboratory [EXTENDED] Music",
				url: "https://youtu.be/KGccd19Gfsc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Front Hall [EXTENDED] Music",
				url: "https://youtu.be/Nm6nEwD4SF4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Basement of the Police Station [EXTENDED] Music",
				url: "https://youtu.be/0HZ_1W7MGa4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The First Floor [EXTENDED] Music",
				url: "https://youtu.be/40lMU4EIw3U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Marshalling Yard (The First Half) [EXTENDED] Music",
				url: "https://youtu.be/6JaiJxNhPvc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Escape from Laboratory [EXTENDED] Music",
				url: "https://youtu.be/lZSojT3vLsg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Beginning of Story Music",
				url: "https://youtu.be/2ZgrSzfTTRk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Raccoon City [EXTENDED] Music",
				url: "https://youtu.be/Ah1dbeyoTIA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Secure Place [EXTENDED] Music",
				url: "https://youtu.be/u-R3iQ5d83g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Second Malformation of 'G [EXTENDED] Music",
				url: "https://youtu.be/eY5j2fzNBBY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Second Floor [EXTENDED] Music",
				url: "https://youtu.be/KdzjkLydfH0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Leon With Claire [EXTENDED] Music",
				url: "https://youtu.be/BatU73K9ucA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Marshalling Yard (The Latter Half) [EXTENDED] Music",
				url: "https://youtu.be/mhtOtXsiWdo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Nothing More to do Here [EXTENDED] Music",
				url: "https://youtu.be/U2aTScd9PbQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Third Malformation of 'G [EXTENDED] Music",
				url: "https://youtu.be/2h-zIdB2jG0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The First Malformation of 'G [EXTENDED] Music",
				url: "https://youtu.be/UnhpTyX6HvU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Library [EXTENDED] Music",
				url: "https://youtu.be/5KEHOU3ChN8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Annette's Recollection Music",
				url: "https://youtu.be/ePjVxqZhqFo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Sherry's Theme [EXTENDED] Music",
				url: "https://youtu.be/CesTSEXua6w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Normal End Title Music",
				url: "https://youtu.be/zh2biRuPApQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Prologue Music",
				url: "https://youtu.be/UF4mYv4WagM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Special End Title Music",
				url: "https://youtu.be/67L0k3qDnRc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Credit Line of Whole Staff Music",
				url: "https://youtu.be/5YcFzdkXzVg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Mother [EXTENDED] Music",
				url: "https://youtu.be/0j6ca05YLX4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Left Alone? [EXTENDED] Music",
				url: "https://youtu.be/rbgbdIT3Gso",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - T'-B [EXTENDED] Music",
				url: "https://youtu.be/SGpi3HdVICQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Good Bye Leon [EXTENDED] Music",
				url: "https://youtu.be/E1ebTEETd2o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - T'-A [EXTENDED] Music",
				url: "https://youtu.be/CysB4FfDURg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Drove the Passengers to be the Living Dead [EXTENDED] Music",
				url: "https://youtu.be/S1B2Wl_LCGs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - And After That... [EXTENDED] Music",
				url: "https://youtu.be/pku894JiK0Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Screaming Target [EXTENDED] Music",
				url: "https://youtu.be/QG7Falw5Mqk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - The Buildup of Suspense [EXTENDED] Music",
				url: "https://youtu.be/1n0G2reg-1Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Weapons Don't Give Us Relief [EXTENDED] Music",
				url: "https://youtu.be/Pv7eqvnwW8g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Is Ada Spy! [EXTENDED] Music",
				url: "https://youtu.be/vK9NYjyUlM8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Falling Victim to the Ex-Neighbors [EXTENDED] Music",
				url: "https://youtu.be/6oHC9109qZw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - One More Kiss Music",
				url: "https://youtu.be/xxZ28KzQWDk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Madness Under the Mask [EXTENDED] Music",
				url: "https://youtu.be/KhZgsknaWs4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Prologue - To Know the True End Music",
				url: "https://youtu.be/YyYIIc7jEEI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Hope Against Hope [EXTENDED] Music",
				url: "https://youtu.be/-rzHuXIMAdo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Who's That Lady? [EXTENDED] Music",
				url: "https://youtu.be/bvvakVujS7U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Credit Line Music",
				url: "https://youtu.be/BF7iNVSHsZY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Above the Blood Pool [EXTENDED] Music",
				url: "https://youtu.be/kyxi1VszT6k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - Destined to be Malformed [EXTENDED] Music",
				url: "https://youtu.be/FnGvG_1ItZw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil 2 - His Final Scoop Music",
				url: "https://youtu.be/Evq7owdyY8s",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil 4",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"Resident Evil 4",
			"Resident Evil Four",
			"RE4",
			"RE 4",
			"Resi 4",
			"Resi Four",
			"Resident Evil IV",
			"Resident Evil Fourteenth",
			"Resident Evil Four-teenth",
			"Resident Evil 4th",
		],
		hints: [
			"This game was released in 2005.",
			"It is a survival horror game that takes place in a rural village in Europe.",
			"The game was developed and published by Capcom.",
			"The game features a third-person perspective and a unique aiming system that allows players to target specific body parts of enemies.",
			"The game has been widely praised for its gameplay mechanics, story, and graphics, and has been ported to numerous platforms, including the Nintendo Switch and PlayStation 4.",
		],
		songs: [
			{
				name: "The Drive ~ First Contact - Resident Evil 4",
				url: "https://youtu.be/AxxoBZzPC9U",
				difficulty: difficulties.EASY,
			},
			{
				name: "End of Umbrella - Resident Evil 4",
				url: "https://youtu.be/hNQ7Li2vfis",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ganado I - Resident Evil 4",
				url: "https://youtu.be/TCK1HbYAyLo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Serenity - Resident Evil 4",
				url: "https://youtu.be/c6yFmx2ABWg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ganado II - Resident Evil 4",
				url: "https://youtu.be/87stZSjx5Sg",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Ruined Village - Resident Evil 4",
				url: "https://youtu.be/lHBnfg4UfI0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ganado III - Resident Evil 4",
				url: "https://youtu.be/0zqRViZxrC0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Save Theme - Resident Evil 4",
				url: "https://youtu.be/2Kwvrg2RDrU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Infiltration - Resident Evil 4",
				url: "https://youtu.be/51vhPVZjWH0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Echo in the Night - Resident Evil 4",
				url: "https://youtu.be/8EzApWjjNAs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Del Lago - Resident Evil 4",
				url: "https://youtu.be/TGktH-uFmhQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Back Up - Resident Evil 4",
				url: "https://youtu.be/w6So65vGQxQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Noche - Resident Evil 4",
				url: "https://youtu.be/q9DTPiiQpd4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ganado IV - Resident Evil 4",
				url: "https://youtu.be/b7igWMYcC60",
				difficulty: difficulties.EASY,
			},
			{
				name: "El Gigante - Resident Evil 4",
				url: "https://youtu.be/h8kQrpIbbzc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bitores Mendez - Resident Evil 4",
				url: "https://youtu.be/KsqQIYT2000",
				difficulty: difficulties.EASY,
			},
			{
				name: "Garrador - Resident Evil 4",
				url: "https://youtu.be/XQk-PM0ud68",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cold Sweat - Resident Evil 4",
				url: "https://youtu.be/yIBeHeDKq5o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hard Road to the Castle - Resident Evil 4",
				url: "https://youtu.be/R-5c3VM3eVU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Target Practice - Resident Evil 4",
				url: "https://youtu.be/OGDswXwR-y4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Catapult - Resident Evil 4",
				url: "https://youtu.be/vlkdM3JQTg4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Central Hall - Resident Evil 4",
				url: "https://youtu.be/cSpUh9CM9s0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Novistadors - Resident Evil 4",
				url: "https://youtu.be/NqWMVRwmb18",
				difficulty: difficulties.EASY,
			},
			{
				name: "Regenerador - Resident Evil 4",
				url: "https://youtu.be/x36KdrjIio4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ganado V - Resident Evil 4",
				url: "https://youtu.be/bJwRL_w3kXE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Agony - Resident Evil 4",
				url: "https://youtu.be/CF61aRUY35I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Evil Malaise - Resident Evil 4",
				url: "https://youtu.be/KPdTa1nzZIY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Salazar - Resident Evil 4",
				url: "https://youtu.be/REPrqU7jQyw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Krauser - Resident Evil 4",
				url: "https://youtu.be/paeuPc7cQS4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Final Battle - Resident Evil 4",
				url: "https://youtu.be/z0TtEabSCtY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bad Vibes - Resident Evil 4",
				url: "https://youtu.be/bwsPbzEual0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tower of Death - Resident Evil 4",
				url: "https://youtu.be/y5L35r3Tw20",
				difficulty: difficulties.EASY,
			},
			{
				name: "Verdugo - Resident Evil 4",
				url: "https://youtu.be/3dz0k38G0rI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sorrow [Ending Credits] - Resident Evil 4",
				url: "https://youtu.be/U0AWYdR5zto",
				difficulty: difficulties.EASY,
			},
			{
				name: "Path to Closure - Resident Evil 4",
				url: "https://youtu.be/HDng5f7Ddd8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Death From Above - Resident Evil 4",
				url: "https://youtu.be/pTxsEr-hu4Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Mercenaries Ada - Resident Evil 4",
				url: "https://youtu.be/HGK5ZRhbIWE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Crazy Cultist Drivers - Resident Evil 4",
				url: "https://youtu.be/iwQUQs2z-DA",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Mercenaries Leon - Resident Evil 4",
				url: "https://youtu.be/wyZhttuCIcA",
				difficulty: difficulties.EASY,
			},
			{
				name: "U-3 - Resident Evil 4",
				url: "https://youtu.be/8zk9rRmI2A4",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Mercenaries Wesker - Resident Evil 4",
				url: "https://youtu.be/kdW35vqPCA0",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Mercenaries Hunk - Resident Evil 4",
				url: "https://youtu.be/0Iz4JRBnl4g",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Mercenaries - Resident Evil 4",
				url: "https://youtu.be/a_cLxOLNr6E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Horizon - Resident Evil 4",
				url: "https://youtu.be/2Fj6nXdESpo",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Escape - Resident Evil 4",
				url: "https://youtu.be/E54vwrBK5cQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Result - Resident Evil 4",
				url: "https://youtu.be/cxGjT5LJjEc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Mercenaries Krauser - Resident Evil 4",
				url: "https://youtu.be/-rEPGXjaAtg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assignment Ada - Resident Evil 4",
				url: "https://youtu.be/osGTtARJlJs",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil - Code: Veronica",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"Resident Evil Code Veronica",
			"Resident Evil CV",
			"RE Code Veronica",
			"RE CV",
			"Resident Evil - CV",
			"Resident Evil Veronica",
			"Resident Evil Veronica X",
			"RE Veronica",
			"RE Veronica X",
			"Resident Evil Code Veronica X",
		],
		hints: [
			"This game is a survival horror game.",
			"It was released in the year 2000.",
			"The game was initially released for the Sega Dreamcast console.",
			"The game's story follows Claire Redfield, a character from a popular video game franchise, as she searches for her brother in a mysterious prison.",
			"The game was later re-released on other platforms, including the PlayStation 2 and Xbox 360.",
		],
		songs: [
			{
				name: "Resident Evil Code Veronica - Soundtrack -  Opening Claire",
				url: "https://youtu.be/oBHnR-9RuUU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Prologue",
				url: "https://youtu.be/Q7vIvPco6LQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - A Moment of Relief",
				url: "https://youtu.be/hfQENhHlpiI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - The Palace of Insane",
				url: "https://youtu.be/k1gYFdwTKgI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Death Siege",
				url: "https://youtu.be/o6w0dzWGq0c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Thrown Into Despair",
				url: "https://youtu.be/U5SJi1a2Tr0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - The Suspended Doll",
				url: "https://youtu.be/HlngCsMn8aY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Putrid Smell",
				url: "https://youtu.be/0iWURCs2KtU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Piano Roll",
				url: "https://youtu.be/Zy_0vVGPsy0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Induction",
				url: "https://youtu.be/BCxC6c141nU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Through the Scope",
				url: "https://youtu.be/aMSh2STh-P8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Lachrymal",
				url: "https://youtu.be/LlspoNqrazQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Greetings",
				url: "https://youtu.be/tj_WOF1XB7Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - A State of Emergency",
				url: "https://youtu.be/zgPfggByFAc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Hot Rescue",
				url: "https://youtu.be/em7769SLfdc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Entrapment",
				url: "https://youtu.be/1J_89XJEx3U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - The Theme of Tyrant 3 (Version A)",
				url: "https://youtu.be/WpDWe9WbH1Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Pandora 's Box",
				url: "https://youtu.be/Tu98LPw5ivY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Midnight Sun",
				url: "https://youtu.be/afhOVHenCKc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack -  Here Comes the Knight",
				url: "https://youtu.be/MPWKX3tApXE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - The Ending of the Beginning",
				url: "https://youtu.be/jEG2aQ4YcGo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - The Theme of Nosferatu",
				url: "https://youtu.be/bLo8VuqlGWY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - One Man Show",
				url: "https://youtu.be/EwylMYO1rlg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - Blanc",
				url: "https://youtu.be/pI2okQQBJBY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - The Secret Door",
				url: "https://youtu.be/0qOvwDDcCQw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - As You Wish",
				url: "https://youtu.be/RzwyOkZwSSw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Resident Evil Code Veronica - Soundtrack - I Need to Know",
				url: "https://youtu.be/jFREjz3xxOs",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Resident Evil Village",
		franchise: "Resident Evil",
		difficulty: difficulties.EASY,
		aliases: [
			"Resident Evil 8",
			"Resident Evil VIII",
			"Resident Evil Village",
			"Resident Evil  Village",
			"Resident Evil: Village",
			"Resident Evil: VILLAGE",
			"RE Village",
			"RE8",
			"RE VIII",
			"Biohazard Village",
			"Biohazard 8",
			"Biohazard VIII",
			"Biohazard: Village",
			"Biohazard: VILLAGE",
		],
		hints: [
			"This game is the eighth main installment in a popular survival horror franchise.",
			"The game was released in 2021 for multiple platforms including PlayStation 5, Xbox Series X/S, and PC.",
			"The game takes place a few years after the events of the previous game in the series, Resident Evil 7: Biohazard.",
			"The game features a new protagonist named Ethan Winters who is searching for his kidnapped daughter in a mysterious village.",
			"The game has received critical acclaim for its graphics, gameplay, and story, and has been praised for its return to the series' horror roots.",
		],
		songs: [
			{
				name: "Yearning for Dark Shadows",
				url: "https://youtu.be/wpp_1J2jyjs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Descent into the Village",
				url: "https://youtu.be/EAph4kH4PTw",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Final Movement",
				url: "https://youtu.be/c7opH26BQio",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eradicating Evil",
				url: "https://youtu.be/JrJz9swDkvQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ripples in the Calm",
				url: "https://youtu.be/pj5Fg5AEbxw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Village of Shadows",
				url: "https://youtu.be/F1Xqgn4_1lw",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Moment's Respite I",
				url: "https://youtu.be/ijSuwNQXvhI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bloodthirsty",
				url: "https://youtu.be/cz27_3J5k4U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Out of Control",
				url: "https://youtu.be/bzol52MG38A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Rose",
				url: "https://youtu.be/mW51vi8WGLc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Duke's Emporium",
				url: "https://youtu.be/AecszQL_wzM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Monstrosity",
				url: "https://youtu.be/vctV8zpqj0E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Remember",
				url: "https://youtu.be/aSXqGxz5-yg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Promenons-nous dans les bois",
				url: "https://youtu.be/YURSUr3egDU",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Bad Feeling",
				url: "https://youtu.be/vT3ic74VnIU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Crisis",
				url: "https://youtu.be/15D8cvF-JQY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Acid Rain",
				url: "https://youtu.be/j4sfyKg4rTQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Treading Water",
				url: "https://youtu.be/ipSUS6VeUWg",
				difficulty: difficulties.EASY,
			},
			{
				name: "She's Not Here",
				url: "https://youtu.be/2Et9deUUjFc",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Moment's Respite II",
				url: "https://youtu.be/BlFvJHuGLRw",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Hag",
				url: "https://youtu.be/3t2ucWxRQXg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wandering the Dark",
				url: "https://youtu.be/fJDI-IG8hHI",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Path",
				url: "https://youtu.be/842y3Huc7OU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Propelled",
				url: "https://youtu.be/hGaPRsWGsgY",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Tomb Raider",
		franchise: "Tomb Raider",
		difficulty: difficulties.EASY,
		aliases: [
			"Tomb Raider",
			"Tomb Raiders",
			"Tomb Raiding",
			"Tomb Raider: Definitive Edition",
			"Tomb Raider: Anniversary",
			"Tomb Raider: Legend",
			"Tomb Raider: Underworld",
			"Tomb Raider: Chronicles",
			"Tomb Raider: The Last Revelation",
			"Tomb Raider: Angel of Darkness",
			"Lara Croft: Tomb Raider",
			"Tomb Raider (2013)",
			"Tomb Raider (2018)",
			"Tomb Raider I",
			"Tomb Raider II",
			"Tomb Raider III",
			"Tomb Raider IV",
			"Tomb Raider V",
			"Tomb Raider VI",
			"Tomb Raider 1",
			"Tomb Raider 2",
			"Tomb Raider 3",
			"Tomb Raider 4",
			"Tomb Raider 5",
			"Tomb Raider 6",
		],
		hints: [
			"This game was first released in 1996.",
			"The main character is a female archaeologist who travels the world in search of ancient artifacts.",
			"The game was developed by Core Design and published by Eidos Interactive.",
			"The game features a mix of puzzle-solving, exploration, and combat.",
			"The game has spawned multiple sequels and spin-offs, as well as a movie franchise starring Angelina Jolie and Alicia Vikander.",
		],
		songs: [
			{
				name: "Tomb Raider 1 Music 1 - Main Theme HD",
				url: "https://youtu.be/YaBvHqMWyxI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 5 - Background Soundtrack HD",
				url: "https://youtu.be/Zw-2XZ5TDgI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 2 - Background Soundtrack HD",
				url: "https://youtu.be/w2Cicz8NOMg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 7 - Background Soundtrack HD",
				url: "https://youtu.be/pfzszoM8uN0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 3 - Background Soundtrack (Main Theme) HD",
				url: "https://youtu.be/C_1HbM9B7cU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 9 - Background Soundtrack HD",
				url: "https://youtu.be/A_tt9zNgoSY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 6 - Background Soundtrack HD",
				url: "https://youtu.be/LP1yVVMkQDk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 4 - Background Soundtrack HD",
				url: "https://youtu.be/KWUpyJdAg5g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 18 - Background Soundtrack HD",
				url: "https://youtu.be/AJRU2Cyhzb8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider 1 Music 19 - Background Soundtrack HD",
				url: "https://youtu.be/svFGLQ9K0J8",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Tomb Raider II",
		franchise: "Tomb Raider",
		difficulty: difficulties.EASY,
		aliases: [
			"Tomb Raider 2",
			"Tomb Raider II: Starring Lara Croft",
			"Lara Croft Tomb Raider II",
			"Tomb Raider 2: The Dagger of Xian",
			"Tomb Raider II The Dagger of Xian",
			"Tomb Raider 2 Dagger of Xian",
			"Tomb Raider II Dagger of Xian",
			"TR2",
			"TR II",
		],
		hints: [
			"This game was released in 1997.",
			"It is an action-adventure game featuring a female protagonist.",
			"The game is set in various locations around the world, including China, Venice, and Tibet.",
			"The game features a variety of puzzles that the player must solve in order to progress.",
			"The game introduced new moves and abilities for the protagonist, such as the ability to climb walls and swing on ropes.",
		],
		songs: [
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Main Theme",
				url: "https://youtu.be/DpVayAU-iiE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Classical Lara",
				url: "https://youtu.be/S_e54fja8tw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Lara Plays In The Snow",
				url: "https://youtu.be/ALXgyclMge4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Incident (Glory Of Nature)",
				url: "https://youtu.be/wXCN8XbSpSg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Bad-Ass Lara Croft",
				url: "https://youtu.be/REopnJkFDXQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Background (Chambers)",
				url: "https://youtu.be/czSz__BWB1M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Incident (Hold It)",
				url: "https://youtu.be/jhrXo4X7n0Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Background (Tibetan Chants)",
				url: "https://youtu.be/8Do70k7KTM4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Background (The Dragon)",
				url: "https://youtu.be/xi3EQuLjSM4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Background (Underwater)",
				url: "https://youtu.be/qLM6WRTFF_A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Background (Caverns)",
				url: "https://youtu.be/yvdwGiKh54U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Background (Industry At Sea)",
				url: "https://youtu.be/orYkF3sau5I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider II: Starring Lara Croft Ost - Background (Caverns)",
				url: "https://youtu.be/i2gAy4PuZOo",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Tomb Raider III",
		franchise: "Tomb Raider",
		difficulty: difficulties.EASY,
		aliases: [
			"Tomb Raider 3",
			"Tomb Raider III Adventures of Lara Croft",
			"Tomb Raider III: Adventures of Lara Croft",
			"Tomb Raider: The Adventures of Lara Croft",
			"TR3",
			"TR III",
			"Lara Croft Tomb Raider III",
		],
		hints: [
			"This game was released in the late 90s.",
			"It is an action-adventure game featuring a female protagonist.",
			"The game was developed by Core Design and published by Eidos Interactive.",
			"The game takes place in various locations around the world, including India, London, and Nevada.",
			"The game introduced new moves and abilities for the protagonist, such as crawling and monkey swinging, and also featured multiple endings depending on the player's choices.",
		],
		songs: [
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - The Puzzle Element",
				url: "https://youtu.be/E9ItrdOmfjQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - Main Theme",
				url: "https://youtu.be/ir8NapPtA94",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - Something Spooky Is In That Jungle",
				url: "https://youtu.be/NkGyEwaE2uM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - No Waiting Around (Part 1)",
				url: "https://youtu.be/6C25NVoPfA4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - The Cavern Sewers",
				url: "https://youtu.be/JbKLwsp2Zy0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - And So On",
				url: "https://youtu.be/KcOMF0y-Or4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - No Waiting Around (Part 2)",
				url: "https://youtu.be/w97yz0Mj1W8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - Geordie Bob",
				url: "https://youtu.be/uxeyceylBH4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - Tony (The Loon)",
				url: "https://youtu.be/BRKWhrXMh7w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - A Long Way Up",
				url: "https://youtu.be/Xu5BmaGFfj0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - The Greedy Mob",
				url: "https://youtu.be/46kcoUCqPlw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - No Waiting Around (Part 3)",
				url: "https://youtu.be/gTvVbE3BZrM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - There Be Butterflies Here (Part 1)",
				url: "https://youtu.be/pKkq4eIrXYQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider III: Adventures Of Lara Croft Ost - Meteorite Cavern",
				url: "https://youtu.be/NRvW9L0TPx8",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Tomb Raider (2013)",
		franchise: "Tomb Raider",
		difficulty: difficulties.EASY,
		aliases: [
			"Tomb Raider 2013",
			"Tomb Raider Reboot",
			"Tomb Raider Rebooted",
			"Tomb Raider: A Survivor is Born",
			"Tomb Raider: Survival Edition",
			"Tomb Raider: Definitive Edition",
			"Tomb Raider: Game of the Year Edition",
			"Tomb Raider (2013)",
		],
		hints: [
			"This game is a reboot of a popular video game franchise that first debuted in the 90s.",
			"The game follows the adventures of a female archaeologist who is searching for a lost civilization.",
			"The game was developed by Crystal Dynamics, the same studio behind the Legacy of Kain series.",
			"The game features a crafting system that allows players to create new items and weapons from materials found in the game world.",
			"The game received critical acclaim for its storytelling, graphics, and gameplay mechanics, and was followed by two sequels.",
		],
		songs: [
			{
				name: "Tomb Raider (2013) A Survivor Is Born (Soundtrack OST)",
				url: "https://youtu.be/hhr8Xw6JcWk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Adventure Found Me (Soundtrack OST)",
				url: "https://youtu.be/TU76IwfthQo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) The Scavenger's Den (Soundtrack OST)",
				url: "https://youtu.be/TsfRhKE5iP8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) The Tomb Raider (Soundtrack OST)",
				url: "https://youtu.be/j9gtO9S5PKE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) A Call For Help (Soundtrack OST)",
				url: "https://youtu.be/KtOz83VGFLo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Scaling the Ziggurat (Soundtrack OST)",
				url: "https://youtu.be/-bJCm0TJ5uw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Exploring the Island (Soundtrack OST)",
				url: "https://youtu.be/eHLSIBwztd0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) The Ritual (Soundtrack OST)",
				url: "https://youtu.be/6rNZRqjYspI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) First Blood (Soundtrack OST)",
				url: "https://youtu.be/WpJfEGE16go",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Paying Respects (Soundtrack OST)",
				url: "https://youtu.be/gBXEG7Ql-Nk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) The Oni (Soundtrack OST)",
				url: "https://youtu.be/pm7PXhdXKhU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Reaching Roth (Soundtrack OST)",
				url: "https://youtu.be/MEjtHRYaKOE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Infiltrating the Bunker (Soundtrack OST)",
				url: "https://youtu.be/bTt8boL65mc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Entering Himiko's Tomb (Soundtrack OST)",
				url: "https://youtu.be/EN5D0G-Z6v8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) On the Beach (Soundtrack OST)",
				url: "https://youtu.be/jVrU4l9FeXg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) The Descent (Soundtrack OST)",
				url: "https://youtu.be/8RGQ2lhDrhI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) The One (Soundtrack OST)",
				url: "https://youtu.be/1Qh7UZMBqKk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) The Scavenger's Camp (Soundtrack OST)",
				url: "https://youtu.be/UctkD0BQluc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Secret of the Island (Soundtrack OST)",
				url: "https://youtu.be/zU9b5gj-O3o",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Raider (2013) Whitman's Test (Soundtrack OST)",
				url: "https://youtu.be/xi5JLWkoSTc",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Rise of the Tomb Raider",
		franchise: "Tomb Raider",
		difficulty: difficulties.EASY,
		aliases: [
			"Rise of Tomb Raider",
			"Tomb Raider Rise",
			"Tomb Raider: Rise of the",
			"Rise of the Raider",
			"Tomb Raider: Rise",
			"Raider of the Tomb: Rise",
			"Rise of the Tomb",
			"Tomb Raider 2",
			"Tomb Raider II",
			"ROTTR",
			"Tomb Raider: ROTTR",
			"Rise of the Tombraider",
		],
		hints: [
			"This game is the sequel to a 2013 reboot of a popular video game franchise.",
			"It follows the adventures of a female archaeologist who is searching for a lost city in Siberia.",
			"The game features a crafting system that allows the player to create weapons and tools to aid in their exploration.",
			"The game has a day-night cycle and dynamic weather system that affects gameplay.",
			"The game was released in 2015 for Xbox One and Xbox 360, and later for PC and PlayStation 4.",
		],
		songs: [
			{
				name: "\"The Car Chase\" ('Rise of the Tomb Raider' trailer score) by James Horner [2015] [Excerpt]",
				url: "https://youtu.be/IK7hb-6iGxs",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Rise of the Tomb Raider\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/DI-Zy46vlsI",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Cistern\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/q8BFRZGvNPQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"London\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/GN8BMLNdOj0",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Do What You Must\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/Z3RIYvAc4UI",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Xenocide [Excerpt/Variant]\" ('Rise of the Tomb Raider' trailer score) by Brand X Music [2015]",
				url: "https://youtu.be/gRI0ipBfVdQ",
				difficulty: difficulties.EASY,
			},
			{
				name: 'New "Rise of the Tomb Raider" music by Bobby Tahouri [2015]',
				url: "https://youtu.be/qG68BRjsric",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Prophet's Tomb\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/6PaW0HrhRNs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Rise of the Tomb Raider Official Soundtrack Preview by Bobby Tahouri [2015]",
				url: "https://youtu.be/M3_R7Ymbwkw",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Blood In The Snow\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/Fx1BIcur-zo",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Hidden Truth\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/6OG7oBD6g80",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Siberia It Is Then\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/1eknWUaIk8g",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Observatory\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/GTl3qWj51Po",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Reckoning\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/xKJ7HxlOCfY",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Locating The Source\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/vkXIAc7W2mQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Whispers In The Dark\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/wp5W-tzant8",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Expedition\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/66pyZRL5cvo",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Revelations\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/DUvu36HS3Ik",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Echoes of the Past\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/seH5-ZIRBy0",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Soviet Facility\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/7bFUwTqteyE",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Atlas\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/ivXtaXa7Fck",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Execution\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/-lj4DGFNc3E",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Deathless Prophet\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/W2hK14dJyyc",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Something Else Happened\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/GxKaW9wjKX0",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Trinity's Plan\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/kdHqxg5zLqg",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Prisoner\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/9LVk5wx7J14",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Meet The Remnants\" ('Rise of the Tomb Raider' Official Soundtrack) by Bobby Tahouri [2015]",
				url: "https://youtu.be/wXjxAALqGTU",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Shadow of the Tomb Raider",
		franchise: "Tomb Raider",
		difficulty: difficulties.EASY,
		aliases: [
			"Shadow Tomb Raider",
			"Shadow of Tomb Raider",
			"Tomb Raider Shadow",
			"Tomb Raider: Shadow",
			"Shadow of the Tomb",
			"Shadow of the Raider",
			"Tomb Raider: Shadow of the Tomb",
			"Tomb Raider: Shadow of the Raider",
			"Shadow of the Tombraider",
			"Tombraider Shadow",
			"Tombraider: Shadow of the Tomb",
			"Tombraider: Shadow of the Raider",
		],
		hints: [
			"This game is the third installment in a rebooted video game franchise.",
			"It follows the adventures of a famous female archaeologist and adventurer.",
			"The game is set in South America and features a dense jungle environment.",
			"The game introduces new gameplay mechanics such as underwater exploration and stealth takedowns.",
			"The game's story focuses on the protagonist's efforts to prevent a Mayan apocalypse and features multiple endings.",
		],
		songs: [
			{
				name: "\"Goodbye Paititi\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/sjmbnnsntYU",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Lara's Dream (aka Croft Manor)\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/n81B-m6EI3A",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Overture (Obsession/Path of the Stars/Lara's Theme)\" (SOTTR soundtrack) by Brian D'Oliveira",
				url: "https://youtu.be/xl-lU42Odlc",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Baptism of Fire\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/4--r5WA55xo",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Paititi (City of the Serpent)\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/j4m0qdjybB4",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Ruins at Cozumel\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/DOQDU0ywu-Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Innocent Death\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/GsTdG9sJOEg",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Death of the Sun\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/9O3FjWZ47nk",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"One With The Jungle\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/TXKnsBgNubw",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Sacrifice\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/wdzW8gUMKsk",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Trinity Pursuit\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/Oj8i34-zozI",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Cenote\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/yBh16DLe-NI",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Hope\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/NPnXJDYPl7k",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"The Chosen\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/zrH4G9nB4uc",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Trinity Confrontation - Dr. Dominguez\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira",
				url: "https://youtu.be/Q6H9tayAWF0",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Creation and Destruction\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/rnxHV_NwEuk",
				difficulty: difficulties.EASY,
			},
			{
				name: "\"Return To Paititi\" ('Shadow of the Tomb Raider' soundtrack) by Brian D'Oliveira [2018]",
				url: "https://youtu.be/RvqhrHrtTbQ",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "God of War",
		franchise: "God of War",
		difficulty: difficulties.EASY,
		aliases: [
			"GoW",
			"God of War (2005)",
			"God of War (2018)",
			"God of War 4",
			"GOW IV",
			"God of War PS4",
			"God of War PS5",
			"God of War Ascension",
			"God of War Chains of Olympus",
			"God of War Ghost of Sparta",
			"God of War Betrayal",
			"God of War Ragnarok",
		],
		hints: [
			"This game was first released in 2005 for the PlayStation 2.",
			"It is an action-adventure game that is heavily inspired by Greek mythology.",
			"The game follows the story of Kratos, a Spartan warrior who seeks revenge against the gods of Olympus.",
			"The game features a unique combat system that allows players to chain together combos and perform brutal finishing moves.",
			"The game has spawned several sequels and spin-offs, including a recent reboot that takes place in Norse mythology.",
		],
		songs: [
			{
				name: "God of War | God of War OST",
				url: "https://youtu.be/mMGtda8mTlo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Memories of Mother | God of War OST",
				url: "https://youtu.be/fD12ncnQ-RY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ashes | God of War OST",
				url: "https://youtu.be/xdQeqIWmAbc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Lullaby of the Giants | God of War OST",
				url: "https://youtu.be/MQ93_g3hlW0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Echoes of an Old Life | God of War OST",
				url: "https://youtu.be/F5PMgBH-SfU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Witch of the Woods | God of War OST",
				url: "https://youtu.be/9vY1_ktUbKU",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Dragon | God of War OST",
				url: "https://youtu.be/vJ840kU38pE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deliverance | God of War OST",
				url: "https://youtu.be/UO7j_OGDl7s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Valkyries | God of War OST",
				url: "https://youtu.be/jBAvxY2JUkc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Peaks Pass | God of War OST",
				url: "https://youtu.be/xNUeGUiKQPE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Salvation | God of War OST",
				url: "https://youtu.be/Onx-S0uRs78",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Giant's Prayer | God of War OST",
				url: "https://youtu.be/MBOOhdl_I8o",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Summit | God of War OST",
				url: "https://youtu.be/WzJJSYpOSmc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Magni and Modi | God of War OST",
				url: "https://youtu.be/UWpInxQ4OIw",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Ninth Realm | God of War OST",
				url: "https://youtu.be/bkBszQxnUUs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Epilogue | God of War OST",
				url: "https://youtu.be/FgndZuNya4I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Memories of Mother (Farewell to Faye Version) | God of War OST",
				url: "https://youtu.be/8VPikMrSgHY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mimir | God of War OST",
				url: "https://youtu.be/sWZz-85_FM0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Stone Mason | God of War OST",
				url: "https://youtu.be/s1jPi9tuDk4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Helheim | God of War OST",
				url: "https://youtu.be/gdPKyfUN4Nc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Reach of Your Godhood | God of War OST",
				url: "https://youtu.be/PBzlA9BvZUY",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Healing | God of War OST",
				url: "https://youtu.be/0cqNEvql3GY",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "God of War II",
		franchise: "God of War",
		difficulty: difficulties.EASY,
		aliases: [
			"God of War 2",
			"God of War II: Divine Retribution",
			"God of War II: Divine Punishment",
			"God of War II: Divine Vengeance",
			"God of War 2: Divine Retribution",
			"God of War 2: Divine Punishment",
			"God of War 2: Divine Vengeance",
			"GoW II",
			"GoW 2",
		],
		hints: [
			"This game was released in the mid-2000s.",
			"It is an action-adventure game that follows the story of a Spartan warrior seeking revenge against the gods of Olympus.",
			"The game was developed by Santa Monica Studio and published by Sony Computer Entertainment.",
			"The game features epic boss battles and puzzles that require the player to use their wits and combat skills.",
			"The game was critically acclaimed and won several awards, including Game of the Year from several publications.",
		],
		songs: [
			{
				name: "The Bathhouse (Extended) | God Of War II Soundtrack ♫",
				url: "https://youtu.be/6oIZhkLcAm0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Theseus  |Ω| God Of War II Soundtrack (Unreleased)",
				url: "https://youtu.be/xUrfDKU6SzA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Flight Of The Pegasus (Extended - 5:29) |Ω| God Of War II Soundtrack ♫",
				url: "https://youtu.be/Yr0e8AOqoJo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Athens Warehouse - God of War 1 & 2 Soundtrack",
				url: "https://youtu.be/hYNjUDY7JaU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Chains Of Torment -Ω- God Of War II Soundtrack ♫",
				url: "https://youtu.be/tL9az5BZfYk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Destiny -Ω- God Of War II & III Soundtrack ♫ (Pursing Destiny - extended)",
				url: "https://youtu.be/xJdqQjOPRII",
				difficulty: difficulties.EASY,
			},
			{
				name: "Pursuing Destiny Calm - God of War 2 Soundtrack",
				url: "https://youtu.be/4IkS99fKtfY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Crossing A Chasm -Ω- God Of War Soundtrack ♫",
				url: "https://youtu.be/QudKleQd6yw",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 2 soundtrack - Cerberus Bastard",
				url: "https://youtu.be/bSaVU0TUc-M",
				difficulty: difficulties.EASY,
			},
			{
				name: "First Zeus Fight - God of War 2 Soundtrack",
				url: "https://youtu.be/ejvgOhO1D4k",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 2 soundtrack - Creatures of Nightmare",
				url: "https://youtu.be/-EwgYk8XzAk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Pursuing Destiny Combat - God of War 2 Soundtrack",
				url: "https://youtu.be/BBoroY_s66U",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 2 soundtrack - The way of the gods",
				url: "https://youtu.be/wt8Q1mfc1ro",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 2 soundtrack - Auditorium of Atropos",
				url: "https://youtu.be/2K3p_5xMlNQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War II - Death of Kratos (OST)",
				url: "https://youtu.be/RhZWpaPa3sw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Duel With Perseus | God Of War II Soundtrack",
				url: "https://youtu.be/KvvPDQPdRoI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Fall of Helios - God of War 2 Soundtrack",
				url: "https://youtu.be/I6Llrz78_68",
				difficulty: difficulties.EASY,
			},
			{
				name: "An Audience with Cronos (calm version) - God of War 2 Soundtrack",
				url: "https://youtu.be/Nte3OjqI5M4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Exploring the Isle (in game version 1) - God of War 2 Soundtrack",
				url: "https://youtu.be/RG78nZwlvKE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Entering the Lair of the Titan (An Audience With Cronos short version) - God of War 2 Soundtrack",
				url: "https://youtu.be/WdagadQOBpw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Steeds Of Time -Ω- God Of War II Soundtrack ♫",
				url: "https://youtu.be/e0_68NkzzVw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Rhodes Suspense (version 1) - God of War 2 Soundtrack",
				url: "https://youtu.be/pOVHXi_40pQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 2 soundtrack - Battle of Sirens",
				url: "https://youtu.be/jkCKjvVwFSc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Steeds of Time Cutscene - God of War 2 Soundtrack",
				url: "https://youtu.be/1FIKIdHLpWM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gorgons in Typhon's Prision - God of War 2 Soundtrack",
				url: "https://youtu.be/NHYfOvhYRqI",
				difficulty: difficulties.EASY,
			},
			{
				name: "An Audience With Cronos (in-game version) - God of War 2 Soundtrack",
				url: "https://youtu.be/2FOadbJsKyE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Return to the Hand Cavern - God of War 2 Soundtrack",
				url: "https://youtu.be/LwPUoflCQBw",
				difficulty: difficulties.EASY,
			},
			{
				name: "After Rhea Cutscene  - God of War 2 Soundtrack",
				url: "https://youtu.be/XSkM27UzcfI",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 2 soundtrack - Battle of the Titan",
				url: "https://youtu.be/x5L06EZA0oA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dark Odyssey - God of War 2 Soundtrack",
				url: "https://youtu.be/XTcKAASWNj0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wraiths of Asphodel - God of War 2 Soundtrack",
				url: "https://youtu.be/GrqVEWDaJYU",
				difficulty: difficulties.EASY,
			},
			{
				name: "The summit of Sacrifice",
				url: "https://youtu.be/cocpxNHktsg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Arena of the Fates - God of War 2 Soundtrack",
				url: "https://youtu.be/NK3Bus8cswI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Breath Of The Titan -Ω- God Of War II Soundtrack ♫",
				url: "https://youtu.be/lwfShjRI62k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Exploring the Isle (in game version 2) - God of War 2 Soundtrack",
				url: "https://youtu.be/dGcrqC5-_zs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bog of Lost Souls (in game version) - God of War 2 Soundtrack",
				url: "https://youtu.be/DjzeO_sPsx4",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Barbarian King Returns (in game version) - God of War 2 Soundtrack",
				url: "https://youtu.be/aLEvT6DrAdg",
				difficulty: difficulties.EASY,
			},
			{
				name: "The End Begins (in-game version) - God of War 2 Soundtrack",
				url: "https://youtu.be/zNCQahZU6BQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Barbarian King First Stage - God of War 2 Soundtrack",
				url: "https://youtu.be/88lHRHHsHfA",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Glory of Sparta (Combat version) - God of War 2 Soundtrack",
				url: "https://youtu.be/HlZ2YlCXgW0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Colossus of Rhodes (in-game version) - God of War 2 Soundtrack",
				url: "https://youtu.be/DGqDtQht_gY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Colossus Combat - God of War 2 Soundtrack",
				url: "https://youtu.be/azcJPvEUIBA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Heart of the Colossus - God of War 2 Soundtrack",
				url: "https://youtu.be/OLmfR_UcQuc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Glory of Sparta (Suspense version 1) - God of War 2 Soundtrack",
				url: "https://youtu.be/P3IAAzcQUTE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Eastern Ramparts - God of War 2 Soundtrack",
				url: "https://youtu.be/Bi6hDPzbsKo",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Glory of Sparta (Suspense version 2) - God of War 2 Soundtrack",
				url: "https://youtu.be/xa-rcEOXDso",
				difficulty: difficulties.EASY,
			},
			{
				name: "Typhon Mountain (in-game version) - God of War 2 Soundtrack",
				url: "https://youtu.be/feEKWkfhack",
				difficulty: difficulties.EASY,
			},
			{
				name: "Isle Combat (Perseus & Zeus Fight Theme) - God of War 2 Soundtrack",
				url: "https://youtu.be/591wZSNdU1g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Battle For The Skies (in-game version) - God of War 2 Soundtrack",
				url: "https://youtu.be/-3x86A-7xfk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "God of War III",
		franchise: "God of War",
		difficulty: difficulties.EASY,
		aliases: [
			"God of War 3",
			"GoW III",
			"God of War Three",
			"God of War III Remastered",
			"GoW 3",
			"God of War III: Remastered",
			"God of War 3 Remastered",
			"GoW III Remastered",
			"God of War III: Ultimate Edition",
			"GoW 3 Ultimate Edition",
			"God of War 3 Ultimate Edition",
		],
		hints: [
			"This game is an action-adventure game.",
			"It was released in 2010 exclusively for the PlayStation 3.",
			"The game is the fifth installment in the God of War series and the third chronologically.",
			"The game is set in Greek mythology and follows the story of Kratos, a Spartan warrior who seeks revenge on the gods who betrayed him.",
			"The game features epic boss battles, brutal combat, and stunning visuals that showcase the power of the PlayStation 3.",
		],
		songs: [
			{
				name: "God of War III Overture",
				url: "https://youtu.be/1vmjzPSLbCg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Poseidon (8 mins) | God Of War III Soundtrack ♫",
				url: "https://youtu.be/dmcjo8pGMI0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Call to Arms",
				url: "https://youtu.be/GScsABtFefs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Revenge Falling",
				url: "https://youtu.be/GM8p5gbVydE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Main Menu Theme - God of War 3 Soundtrack",
				url: "https://youtu.be/kB1_mcTiOYs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Poseidon's Wrath (no choir version) - God of War 3 Soundtrack",
				url: "https://youtu.be/7okVMIcOgWk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gaia Vs  Poseidon | God Of War III Soundtrack",
				url: "https://youtu.be/k9On194iXuo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Tomb Of Ares -Ω- God Of War III Soundtrack ♫",
				url: "https://youtu.be/1XCuhH_ousI",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 2 soundtrack - Battle of Atropos",
				url: "https://youtu.be/SdWrV96NbQs",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Leviathan (full) -Ω- God Of War III Soundtrack ♫",
				url: "https://youtu.be/FAwA-1nQumA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Door Of Olympia |Ω| God Of War III Soundtrack ♫",
				url: "https://youtu.be/6mix3vpqTwU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cliffs of Olympus - God of War 3 Soundtrack",
				url: "https://youtu.be/m7SHTnZaduI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Melody of Pandora - God of War 3 Soundtrack",
				url: "https://youtu.be/wg_5xkOK1Vg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Heart Of Gaia -Ω- God Of War III Soundtrack ♫",
				url: "https://youtu.be/mWcB1O-o3-E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Exploring the Isle (in game version 3) - God of War 2 Soundtrack",
				url: "https://youtu.be/vCVhspoZ35E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Athena ~ Blades Of Exile | God Of War III Soundtrack",
				url: "https://youtu.be/SwECEOyqsHo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Depths Of Hades | God Of War III Soundtrack",
				url: "https://youtu.be/HrPT6tOYk64",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Kraken (version 1) - God of War 2 Soundtrack",
				url: "https://youtu.be/X5OvYJaDv0Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Retrieving The Blade | God Of War III Soundtrack (Unreleased)",
				url: "https://youtu.be/zipjU68BOFI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Entrance to Ares' Tomb - God of War 3 Soundtrack",
				url: "https://youtu.be/eLT_bd-8ZDk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Rapture of War (First Fight Theme) - God of War 3 Soundtrack",
				url: "https://youtu.be/zxNbUbvfc40",
				difficulty: difficulties.EASY,
			},
			{
				name: "Rage of Sparta (in-game version) - God of War 3 Soundtrack",
				url: "https://youtu.be/u708YtaSRcA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Drums in Realm of Hades - God of War 3 Soundtrack",
				url: "https://youtu.be/a7kV8jCabIE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Duel With Hades (calm version) - God of War 3 Soundtrack",
				url: "https://youtu.be/EDpUktzLmEc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Trials of Erebus - God of War 3 Soundtrack",
				url: "https://youtu.be/2zEW8Y1kFlI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bow of Apollo - God of War 3 Soundtrack",
				url: "https://youtu.be/h1G8eucbOI8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Labor of Destruction (Peirithous' room version) - God of War 3 Soundtrack",
				url: "https://youtu.be/J3UTV6cfuvM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Peirithous' Chamber - God of War 3 Soundtrack",
				url: "https://youtu.be/Lr5ilCBDuZU",
				difficulty: difficulties.EASY,
			},
			{
				name: "God of War 3 Soundtrack - The Cave of Olympia",
				url: "https://youtu.be/cvAQw42wdc0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Gaia in Olympia - God of War 3 Soundtrack",
				url: "https://youtu.be/FIICDYcKA-s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Psyche sequence - God of War 3 Soundtrack",
				url: "https://youtu.be/Q_HvSmOkzlU",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Three Judges (in game version) - God of War 3 Soundtrack",
				url: "https://youtu.be/W7Swvdd5QnI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hades' Defeat - God of War 3 Soundtrack",
				url: "https://youtu.be/OGVQuddICf8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hades' Palace - God of War 3 Soundtrack",
				url: "https://youtu.be/1yaHfkvNREo",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Forge of Hephaestus (in-game version 1) - God of War 3 Soundtrack",
				url: "https://youtu.be/A11AaCxewe4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hounds of Hades - God of War 3 Soundtrack",
				url: "https://youtu.be/1cZX86vzebE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Entry of the Hades' Palace - God of War 3 Soundtrack",
				url: "https://youtu.be/rcxvb4CQ_jw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cliffs of Olympus (drums-only version) - God of War 3 Soundtrack",
				url: "https://youtu.be/5bEqbL8PvJo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Return to the Forge - God of War 3 Soundtrack",
				url: "https://youtu.be/fLUpHiuNiPs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Anthem of the Dead (in-game version) - God of War 3 Soundtrack",
				url: "https://youtu.be/0SsbdlPc7F4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Brothers of Blood (drums-only version) - God of War 3 Soundtrack",
				url: "https://youtu.be/zujbwFMJbo0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Duel With Hades (in-game version) - God of War 3 Soundtrack",
				url: "https://youtu.be/twju-rs0w0M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Labor of Destruction (Army of Sparta version) - God of War 3 Soundtrack",
				url: "https://youtu.be/yJsOdxRdV8k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Depths of Hades Combat (in-game version) - God of War 3 Soundtrack",
				url: "https://youtu.be/rDu-S8E1bn8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Wading Through the River Styx - God of War 3 Soundtrack",
				url: "https://youtu.be/qJG-p3heR2Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Three Judges (drums-only version) - God of War 3 Soundtrack",
				url: "https://youtu.be/PuWlCg3xmwo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Olympia Centaur - God of War 3 Soundtrack",
				url: "https://youtu.be/3KHk9tL_7Bk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Arena 5 (drums-only version) - God of War 3 Soundtrack",
				url: "https://youtu.be/zYLQ3K7dyUQ",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "God of War: Ascension",
		franchise: "God of War",
		difficulty: difficulties.EASY,
		aliases: [
			"God of War Ascension",
			"God of War: Ascend",
			"God of War: Ascending",
			"God of War: The Ascension",
			"God of War: Ascended",
			"God of War: Ascendancy",
			"God of War: Rise to Ascension",
			"God of War: Ascension's Rise",
			"God of War: Ascension's Fury",
			"God of War: Ascension Unleashed",
		],
		hints: [
			"This game is a prequel to a popular video game series.",
			"It was released in 2013 exclusively for the PlayStation 3.",
			"The game features a multiplayer mode in addition to its single-player campaign.",
			"The story follows the protagonist Kratos as he seeks to break his bond with the god of war, Ares.",
			"The game received mixed reviews upon release, with some critics praising its visuals and combat system, while others criticized its lack of innovation and repetitive gameplay.",
		],
		songs: [
			{
				name: "God Of War: Ascension Soundtrack | 04 | Warrior's Truth",
				url: "https://youtu.be/71weZEtyR_A",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 25 | Madness Of The Fury Queen",
				url: "https://youtu.be/8gV_2ZCE3qA",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 06 | Awakening The Hecatonchires",
				url: "https://youtu.be/PgeZszJezR0",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 01 | Primordial Rage",
				url: "https://youtu.be/MlKG3P4kL7s",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 02 | Bound By Blood",
				url: "https://youtu.be/wIq0H1x3gNI",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 03 | Ghosts Of Kirra",
				url: "https://youtu.be/4Z19m84po4U",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 16 | Streets Of Sparta",
				url: "https://youtu.be/IZVqaildAwE",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 27 | Oath Keeper's Gift",
				url: "https://youtu.be/YMmmciNebWo",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 08 | Temple Carnage",
				url: "https://youtu.be/4hZpHSZSw6o",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 05 | Temptation Of The Flesh",
				url: "https://youtu.be/ZnELwt4BabU",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 11 | Temple Of Delphi",
				url: "https://youtu.be/_VuFGs0ubGc",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 26 | The Marked One",
				url: "https://youtu.be/EVlw99NVjpU",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 09 | Ascension",
				url: "https://youtu.be/q3S4LKDgskI",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 07 | Aletheia's Last Vision",
				url: "https://youtu.be/TZvhtzV0wDw",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 13 | The False Prophet",
				url: "https://youtu.be/bZvXRPJjirY",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 19 | Prison Of The Damned",
				url: "https://youtu.be/prbzNntzQho",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 15 | Blood On The Canyon Walls",
				url: "https://youtu.be/zWlOZ8zs86c",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 22 | Trial Of Archimedes",
				url: "https://youtu.be/jaHT558rp0Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 10 | Visions Of Ruin",
				url: "https://youtu.be/Sx__dLKzSNg",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 14 | Shadow Revealed",
				url: "https://youtu.be/2x9ttCtOAKg",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 24 | The Final Offer",
				url: "https://youtu.be/D2GUAhr170w",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 12 | A Touch Of Insanity",
				url: "https://youtu.be/t7NSPLlIiBU",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War : Ascension Soundtrack | 18 | The Son's Betrayal",
				url: "https://youtu.be/cyfffqVlL0g",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 17 | Tribute To Apollo",
				url: "https://youtu.be/CP4Ou0UTBVQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 23 | Python's Path",
				url: "https://youtu.be/0QLoJwTGWIk",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 21 | A Warning Too Late",
				url: "https://youtu.be/xc_16Hptqts",
				difficulty: difficulties.EASY,
			},
			{
				name: "God Of War: Ascension Soundtrack | 20 | Martyr's Chamber",
				url: "https://youtu.be/93SYKaASS8c",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "God of War (2018)",
		franchise: "God of War",
		difficulty: difficulties.EASY,
		aliases: [
			"God of War 4",
			"God of War PS4",
			"God of War (PS4)",
			"God of War 2018",
			"GoW (2018)",
			"God of War 4 (2018)",
			"God of War (2018) PS4",
			"God of War (New)",
			"God of War Reboot",
		],
		hints: [
			"This game is a reboot of a popular video game franchise that started in 2005.",
			"It is an action-adventure game that features a third-person perspective.",
			"The game is set in a world inspired by Norse mythology.",
			"The game features a new combat system that emphasizes strategy and timing.",
			"The game received critical acclaim for its storytelling, graphics, and gameplay, and won several awards including Game of the Year.",
		],
		songs: [
			{
				name: "God of War | God of War OST",
				url: "https://youtu.be/mMGtda8mTlo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Memories of Mother | God of War OST",
				url: "https://youtu.be/fD12ncnQ-RY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ashes | God of War OST",
				url: "https://youtu.be/xdQeqIWmAbc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Lullaby of the Giants | God of War OST",
				url: "https://youtu.be/MQ93_g3hlW0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Echoes of an Old Life | God of War OST",
				url: "https://youtu.be/F5PMgBH-SfU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Witch of the Woods | God of War OST",
				url: "https://youtu.be/9vY1_ktUbKU",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Dragon | God of War OST",
				url: "https://youtu.be/vJ840kU38pE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deliverance | God of War OST",
				url: "https://youtu.be/UO7j_OGDl7s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Valkyries | God of War OST",
				url: "https://youtu.be/jBAvxY2JUkc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Peaks Pass | God of War OST",
				url: "https://youtu.be/xNUeGUiKQPE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Salvation | God of War OST",
				url: "https://youtu.be/Onx-S0uRs78",
				difficulty: difficulties.EASY,
			},
			{
				name: "A Giant's Prayer | God of War OST",
				url: "https://youtu.be/MBOOhdl_I8o",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Summit | God of War OST",
				url: "https://youtu.be/WzJJSYpOSmc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Magni and Modi | God of War OST",
				url: "https://youtu.be/UWpInxQ4OIw",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Ninth Realm | God of War OST",
				url: "https://youtu.be/bkBszQxnUUs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Epilogue | God of War OST",
				url: "https://youtu.be/FgndZuNya4I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Memories of Mother (Farewell to Faye Version) | God of War OST",
				url: "https://youtu.be/8VPikMrSgHY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mimir | God of War OST",
				url: "https://youtu.be/sWZz-85_FM0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Stone Mason | God of War OST",
				url: "https://youtu.be/s1jPi9tuDk4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Helheim | God of War OST",
				url: "https://youtu.be/gdPKyfUN4Nc",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Reach of Your Godhood | God of War OST",
				url: "https://youtu.be/PBzlA9BvZUY",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Healing | God of War OST",
				url: "https://youtu.be/0cqNEvql3GY",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Assassin's Creed",
		franchise: "Assassin's Creed",
		difficulty: difficulties.EASY,
		aliases: [
			"Assassin's Creed",
			"Assassins Creed",
			"Assassin Creed",
			"Assassins Creed",
			"Assassin's Creed I",
			"Assassins Creed I",
			"Assassin's Creed 1",
			"Assassins Creed 1",
			"AC",
			"AC1",
			"Assassin's Creed Origins",
			"Assassins Creed Origins",
			"Assassin's Creed Odyssey",
			"Assassins Creed Odyssey",
			"Assassin's Creed Valhalla",
			"Assassins Creed Valhalla",
			"AC Origins",
			"AC Odyssey",
			"AC Valhalla",
		],
		hints: [
			"This game was first released in 2007.",
			"It is an action-adventure game that takes place in historical settings.",
			"The game's protagonist is a member of a secret society of assassins.",
			"The game features a unique parkour system that allows the player to climb and traverse buildings in a seamless way.",
			"The game has spawned numerous sequels and spin-offs, and has become one of the most popular video game franchises of all time.",
		],
		songs: [
			{
				name: "01 - Opening Select Screen - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/yOVWnGQRXo0",
				difficulty: difficulties.EASY,
			},
			{
				name: "49 - Access The Animus Part 1-Red in the Face - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/TL10cCrT6rY",
				difficulty: difficulties.EASY,
			},
			{
				name: "03 - Solomons Temple - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/qc5Ah4YM30M",
				difficulty: difficulties.EASY,
			},
			{
				name: "02 - D.N.A Select Screen - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/MQ5HUI7eVeo",
				difficulty: difficulties.EASY,
			},
			{
				name: "07 - Masyaf - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/9dicDLvojWc",
				difficulty: difficulties.EASY,
			},
			{
				name: "05 - The Creed - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/XWDYuTyWAVw",
				difficulty: difficulties.EASY,
			},
			{
				name: "09 - Masyaf Fight or Flight Red in the Face - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/95jDylAOsBQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "04 - Spill the Beans - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/hgWydO4o0f4",
				difficulty: difficulties.EASY,
			},
			{
				name: "08 - Masyaf Fight or Flight Yellow Belly - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/hO6vxBBCU2A",
				difficulty: difficulties.EASY,
			},
			{
				name: "35 - Jerusalem Fight or Flight-Red in the Face - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/CAq_nKNfA-Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "10 - Masyaf- Under Siege Part 1 - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/HSi3vArclwg",
				difficulty: difficulties.EASY,
			},
			{
				name: "23 - Damascus Fight or Flight-Red in the Face - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/2INHYwaXXi8",
				difficulty: difficulties.EASY,
			},
			{
				name: "18 - Damascus - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/oaHUpnQ3Lgc",
				difficulty: difficulties.EASY,
			},
			{
				name: "17 - Masyaf Horse Ride - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/cfCgFFxIXME",
				difficulty: difficulties.EASY,
			},
			{
				name: "19 - Assassin's H.Q - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/t7enKnGns4U",
				difficulty: difficulties.EASY,
			},
			{
				name: "11 - Masyaf- Under Siege Part 2 - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/-CgLymZDbjY",
				difficulty: difficulties.EASY,
			},
			{
				name: "15 - Kingdom 1 - Assassins Creed 1 Original Soundtrack OST",
				url: "https://youtu.be/fagPp_UxNuw",
				difficulty: difficulties.EASY,
			},
			{
				name: "32 - Jerusalem - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/tE-kdhgEUS0",
				difficulty: difficulties.EASY,
			},
			{
				name: "27 - Dirty Deeds-Acre - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/w5_0uXClsQc",
				difficulty: difficulties.EASY,
			},
			{
				name: "29 - Acre Fight or Flight-Red in the Face - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/2W3vSjgMRyM",
				difficulty: difficulties.EASY,
			},
			{
				name: "21 - Dirty Deeds-Damascus - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/I2JQqnCuU24",
				difficulty: difficulties.EASY,
			},
			{
				name: "37 - Jerusalem Horse Ride - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/f47lPvf0Rlk",
				difficulty: difficulties.EASY,
			},
			{
				name: "22 - Damascus Fight or Flight-Yellow Belly - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/4JnoGoANut8",
				difficulty: difficulties.EASY,
			},
			{
				name: "50 - Access The Animus Part 2-Yellow Belly - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/OmbQ9_zEwto",
				difficulty: difficulties.EASY,
			},
			{
				name: "16 - Kingdom 2 - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/qh745oLqCLk",
				difficulty: difficulties.EASY,
			},
			{
				name: "26 - Acre - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/BJ3g0Lcvcpc",
				difficulty: difficulties.EASY,
			},
			{
				name: "14 - Office Space - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/kFo_2pxT9kQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "51 - Access The Animus Part 3-On High Alert - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/276dh39b7-w",
				difficulty: difficulties.EASY,
			},
			{
				name: "25 - Damascus Horse Ride - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/Mx7uzFXi3_4",
				difficulty: difficulties.EASY,
			},
			{
				name: "12 - Masyaf- Under Siege Part 3 - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/mxX4a-nsuNE",
				difficulty: difficulties.EASY,
			},
			{
				name: "13 - Masyaf- Under Siege Part 4 - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/GoRnX2qJeO0",
				difficulty: difficulties.EASY,
			},
			{
				name: "28 - Acre Fight or Flight-Yellow Belly - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/Qw7MaD4s8fc",
				difficulty: difficulties.EASY,
			},
			{
				name: "24 - Tamir - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/wbLagRE3Fzg",
				difficulty: difficulties.EASY,
			},
			{
				name: "34 - Jerusalem Fight or Flight-Yellow Belly - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/wqFtFhLmmXQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "31 - Acre Horse Ride - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/SLMGn5MgK34",
				difficulty: difficulties.EASY,
			},
			{
				name: "33 - Dirty Deeds-Jerusalem - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/yGCJCrG-Pqg",
				difficulty: difficulties.EASY,
			},
			{
				name: "46 - Return to Masyaf Part 2 Some thing is rotten in Denmark - Assassins Creed 1 Soundtrack OST",
				url: "https://youtu.be/cMy4NwJybL4",
				difficulty: difficulties.EASY,
			},
			{
				name: "36 - Talal - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/ncYuZO3VIvA",
				difficulty: difficulties.EASY,
			},
			{
				name: "38 - Abul Nuqoud - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/R-D_2Q7JZtY",
				difficulty: difficulties.EASY,
			},
			{
				name: "43 - Arsuf - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/BmbfprDEQtU",
				difficulty: difficulties.EASY,
			},
			{
				name: "44 - Robert de Sable - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/R_44LEAsDKk",
				difficulty: difficulties.EASY,
			},
			{
				name: "39 - William - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/MWllPToWBew",
				difficulty: difficulties.EASY,
			},
			{
				name: "47 - Return to Masyaf Part 3 - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/Cf__jkl2YKU",
				difficulty: difficulties.EASY,
			},
			{
				name: "40 - Majd Addin - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/SPLnxSuQtmE",
				difficulty: difficulties.EASY,
			},
			{
				name: "42 - Jubair Al Hakim - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/1q6k14pUaoo",
				difficulty: difficulties.EASY,
			},
			{
				name: "41 - Sibrand - Assassins Creed 1 Original Soundtrack OST Full",
				url: "https://youtu.be/tGhiGY15rWI",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Assassin's Creed II",
		franchise: "Assassin's Creed",
		difficulty: difficulties.EASY,
		aliases: [
			"Assassin's Creed 2",
			"Assassins Creed II",
			"Assassin Creed 2",
			"Assassins Creed 2",
			"AC II",
			"AC 2",
			"Assassin's Creed II: Discovery",
			"Assassins Creed II Discovery",
			"Assassin Creed II Discovery",
			"AC II Discovery",
			"AC2 Discovery",
		],
		hints: [
			"This game was released in 2009.",
			"It is an action-adventure game set in Renaissance Italy.",
			"The game's protagonist is a member of a secret society of assassins.",
			"The game features an open-world environment that allows players to explore cities like Florence, Venice, and Rome.",
			"The game's story revolves around a conspiracy involving the powerful and influential Medici family.",
		],
		songs: [
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Ezio's Family (Track 03)",
				url: "https://youtu.be/FSVHx23ByhM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Venice Rooftops (Track 02)",
				url: "https://youtu.be/X9geXVAOFDg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Earth (Track 01)",
				url: "https://youtu.be/dXmaNjuwdd8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Dreams of Venice (Track 13)",
				url: "https://youtu.be/2UVi5Pzjjs0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Home In Florence (Track 05)",
				url: "https://youtu.be/ztTjQB89v6U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Flight Over Venice 1 (Track 11)",
				url: "https://youtu.be/A0L4gvq-8f0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Tour of Venice (Track 10)",
				url: "https://youtu.be/uPY5uu4SntI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Florence Tarantella (Track 04)",
				url: "https://youtu.be/VeS7PxGeJJI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST /  Jesper Kyd - Sanctuary (Track 19)",
				url: "https://youtu.be/dBYK2IvSNSM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Venice Escape (Track 17)",
				url: "https://youtu.be/X2QjMpTdkQE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Flight Over Venice 2 (Track 22)",
				url: "https://youtu.be/zhjyS_tgB7A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Approaching Target 1 (Track 06)",
				url: "https://youtu.be/vJuzv8aMzBU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Leonardo's Inventions, Pt. 1 (Track 15)",
				url: "https://youtu.be/CSYp33F_0Ss",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Home of the Brotherhood (Track 14)",
				url: "https://youtu.be/Hk3LniOvkU0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Venice Fight (Track 08)",
				url: "https://youtu.be/zQHAe3jt36I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Approaching Target 2 (Track 07)",
				url: "https://youtu.be/r4E4dbhyn08",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - The Madam (Track 20)",
				url: "https://youtu.be/bwjh4UQ2Wwc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Back In Venice (Track 12)",
				url: "https://youtu.be/pOIBF-eIUEQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Florence Escape (Track 09)",
				url: "https://youtu.be/q7F9ZAN0W-U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Venice Combat Low (Track 16)",
				url: "https://youtu.be/qwHHX1Du8U8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Venice Combat (Track 26)",
				url: "https://youtu.be/-51_oLom9xE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Chariot Chase (Track 29)",
				url: "https://youtu.be/ut6zu53-d3U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Approaching Target 3 (Track 21)",
				url: "https://youtu.be/NipZFlauZ8E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - The Plague (Track 30)",
				url: "https://youtu.be/SBkblz-0XKE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Ezio In Florence (Track 23)",
				url: "https://youtu.be/uC-KitQ9gpI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Wetlands Escape (Track 32)",
				url: "https://youtu.be/BKttd9ztJjI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Leonardo's Inventions, Pt. 2 (Track 33)",
				url: "https://youtu.be/3xvMKl_IvN4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Night Mission In Venice (Track 28)",
				url: "https://youtu.be/YuyAdaMCmYk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Darkness Falls In Florence (Track 18)",
				url: "https://youtu.be/T9DX00yKnP0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Wetlands Combat (Track 31)",
				url: "https://youtu.be/JU2xgyZdC2Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Hideout (Track 34)",
				url: "https://youtu.be/HoY1cYJ9-0A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Stealth (Track 25)",
				url: "https://youtu.be/fXXopuGFOXY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Notorious (Track 27)",
				url: "https://youtu.be/dg6RjgjS-qQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - Venice Industry (Track 24)",
				url: "https://youtu.be/C-_G0gysPwA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed 2 OST / Jesper Kyd - The Animus 2.0 (Track 35)",
				url: "https://youtu.be/DBT-3TMtdRQ",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Assassin's Creed Brotherhood",
		franchise: "Assassin's Creed",
		difficulty: difficulties.EASY,
		aliases: [
			"Assassin's Creed: Brotherhood",
			"AC Brotherhood",
			"Assassin's Creed 2.5",
			"Assassin's Creed: Rome",
			"Assassin's Creed: Brotherhood of Assassins",
			"Brotherhood of Assassins",
			"AC Brotherhood of Assassins",
			"Assassin's Creed: Brotherhood's Creed",
			"Assassin's Creed: Brotherhoodhood",
			"Assassin's Creed: Brotherhoodhood of Assassins",
		],
		hints: [
			"This game is part of a popular video game franchise that started in 2007.",
			"It is an action-adventure game that takes place in historical settings.",
			"The game was released in 2010 and is the third main installment in the series.",
			"The game is set in Rome during the Renaissance period and features a new multiplayer mode.",
			'The game introduces a new feature called "Brotherhood" where the player can recruit and train other assassins to help them in missions.',
		],
		songs: [
			{
				name: "Assassin's Creed Brotherhood OST - The Brotherhood Escapes (Track 05)",
				url: "https://youtu.be/bbxtiTtvOW0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - City of Rome (Track 02)",
				url: "https://youtu.be/QkUfTArwlS4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Master Assassin (Track 01)",
				url: "https://youtu.be/DfDfYaGPnvM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Echoes of the Roman Ruins (Track 09)",
				url: "https://youtu.be/ccJIOyXKO90",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Villa Under Attack (Track 08)",
				url: "https://youtu.be/sxryBvLAsac",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Countdown (Track 13)",
				url: "https://youtu.be/aU3RJPzkw74",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Cesare Borgia (Track 03)",
				url: "https://youtu.be/n0euOuBJ8ZM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST -Flags of Rome (Track 04)",
				url: "https://youtu.be/FQjx_oOc_2I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Brotherhood of the Assassins (Track 06)",
				url: "https://youtu.be/mzQZmeXQvUM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Borgia - The Rulers of Rome (Track 14)",
				url: "https://youtu.be/HKsNepQ2DwE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Apple Chamber (Track 20)",
				url: "https://youtu.be/GA8DYWgM9UA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - The Pantheon (Track 07)",
				url: "https://youtu.be/mTdh0QWnJnA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Borgia Tower (Track 10)",
				url: "https://youtu.be/_1I8w2_oY84",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Desmond Miles (Track 18)",
				url: "https://youtu.be/U7WawL_VLA0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Fight of the Assassins (Track 17)",
				url: "https://youtu.be/5nphj-eKJro",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Borgia Occupation (Track 11)",
				url: "https://youtu.be/miM1V0V4lqc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Battle in Spain (Track 16)",
				url: "https://youtu.be/P8zKEYMgkY0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Roman Underworld (Track 12)",
				url: "https://youtu.be/7N4tlQDQhmc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - Ezio Confronts Lucrezia (Track 15)",
				url: "https://youtu.be/AnAkzSjhq2Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin's Creed Brotherhood OST - VR Room (Track 19)",
				url: "https://youtu.be/Jkk92QbZOuo",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Assassin's Creed III",
		franchise: "Assassin's Creed",
		difficulty: difficulties.EASY,
		aliases: [
			"Assassin's Creed 3",
			"Assassins Creed III",
			"AC III",
			"AC 3",
			"Assassin Creed 3",
			"Assassin's Creed Three",
			"Assassins Creed 3",
		],
		hints: [
			"This game was released in 2012.",
			"It is an action-adventure game set during the American Revolution.",
			"The game features a new protagonist named Connor, who is of Native American and British descent.",
			"The game introduces naval combat, allowing players to engage in ship-to-ship battles on the high seas.",
			"The game's story involves a conflict between the Assassins and the Templars, two secret societies fighting for control of humanity's future.",
		],
		songs: [
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Fight Club (Track 17)",
				url: "https://youtu.be/1HE4OFoezVg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Trouble in Town (Track 09)",
				url: "https://youtu.be/juv5sfc-HrQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Assassin's Creed III Main Theme (Track 01)",
				url: "https://youtu.be/n5q1ObIH5pk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Connor's Life (Track 08)",
				url: "https://youtu.be/vqQ0DIeRaF0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Modern Assassin (Track 14)",
				url: "https://youtu.be/vu-_P_Bq1RQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Freedom Fighter (Track 05)",
				url: "https://youtu.be/ZfyvrR5ReWA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - An Uncertain Present (Track 02)",
				url: "https://youtu.be/HLFVzImOL0E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Through the Frontier (Track 07)",
				url: "https://youtu.be/RtDyQfNf2Dw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Assassin's Creed III Main Theme Variation (Track 25)",
				url: "https://youtu.be/5WNi7k1vLd8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Welcome to Boston (Track 04)",
				url: "https://youtu.be/0VmHeugfNXA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Escape in Style (Track 03)",
				url: "https://youtu.be/6NtJZGjaWxA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - HomeStead (Track 11)",
				url: "https://youtu.be/5W1KdR9Dhbc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - A Bitter Truth (Track 06)",
				url: "https://youtu.be/i4O1ouo1coo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - What Came Before (Track 24)",
				url: "https://youtu.be/fLo63UeV_mU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Temple Secrets (Track 19)",
				url: "https://youtu.be/9EJGBx9ujWw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Desmond's Destiny (Track 15)",
				url: "https://youtu.be/MlOVD5iTPy8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Beer and Friends (Track 20)",
				url: "https://youtu.be/PBw1Zyhod7Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Eye of the Storm (Track 18)",
				url: "https://youtu.be/KsgpP67hA7w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - The Battle of Breed's Hill (Track 12)",
				url: "https://youtu.be/9ZUCkEaSf5A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Farewell (Track 10)",
				url: "https://youtu.be/WqkiUypYOSU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Wild Instincts (Track 23)",
				url: "https://youtu.be/12W3F3H1zw0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - The Aquila (Track 16)",
				url: "https://youtu.be/N2JIByYimZI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Battle at Sea (Track 21)",
				url: "https://youtu.be/iSYTOjyPYn0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Speck of Dust (Track 13)",
				url: "https://youtu.be/rdeqnzMGYKs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Assassin’s Creed 3 / Lorne Balfe - Breaching the Walls (Track 22)",
				url: "https://youtu.be/6F8rQbGXlvc",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Uncharted 4: A Thief's End",
		franchise: "Uncharted",
		difficulty: difficulties.EASY,
		aliases: [
			"Uncharted 4",
			"Uncharted: A Thief's End",
			"Uncharted 4: Thief's End",
			"Uncharted 4 A Thief's End",
			"Uncharted: Thief's End",
			"Uncharted 4: The Thief's End",
			"Uncharted 4 The Thief's End",
			"Uncharted: A Thief's Conclusion",
			"Uncharted 4: A Thief's Conclusion",
			"Uncharted 4: The Final Heist",
			"Uncharted: The Final Heist",
			"Uncharted 4: The Last Job",
			"Uncharted: The Last Job",
		],
		hints: [
			"This game is a part of a popular action-adventure video game series.",
			"The game was released in 2016 and is the fourth main installment in the series.",
			"The game follows the story of a treasure hunter and his allies as they search for a lost pirate treasure.",
			"The game features a variety of gameplay mechanics, including exploration, puzzle-solving, and third-person shooting.",
			"The game received critical acclaim for its story, characters, graphics, and gameplay, and won several awards, including Game of the Year.",
		],
		songs: [
			{
				name: "Uncharted 4: A Thief's End - OST - Cut to the Chase",
				url: "https://youtu.be/PwXHKdrRJFc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - A Thief's End",
				url: "https://youtu.be/5aCSqosrGvw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - The Twelve Towers",
				url: "https://youtu.be/nidjCSfIz3w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - New Devon",
				url: "https://youtu.be/2TXJs3QRPJQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - A Normal Life",
				url: "https://youtu.be/2i4U_lbQ17k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Brother's Keeper",
				url: "https://youtu.be/pA5BbkX8drY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Lure of Adventure",
				url: "https://youtu.be/2A6pBQL6Gxg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - For Better or Worse",
				url: "https://youtu.be/xFUqNcLpqGw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Epilogue",
				url: "https://youtu.be/MTk5th7gR1g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - No Escape",
				url: "https://youtu.be/dKVd2yq3aV8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Race to Libertalia",
				url: "https://youtu.be/W6uCO_rWuh8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Reunited",
				url: "https://youtu.be/2JN5uveeF00",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Those Who Prove Worthy",
				url: "https://youtu.be/oV9MYfp8Gxo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - The Brothers Drake",
				url: "https://youtu.be/PWnmSthnzSU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - One Last Time",
				url: "https://youtu.be/a8t4sLgYkZg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Sic Parvis Magna",
				url: "https://youtu.be/5RAjoYffqFE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Once a Thief",
				url: "https://youtu.be/SxdgPdEF9Aw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - The Grave of Henry Avery",
				url: "https://youtu.be/Ultk1Ls_neQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Meet Me in Paradise",
				url: "https://youtu.be/pn9cPZaAyOA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Marooned",
				url: "https://youtu.be/RvWZ4FvYi-4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Hidden in Plain Sight",
				url: "https://youtu.be/Z8YPS7Dh9Uw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - The Thieves of Libertalia",
				url: "https://youtu.be/FmjIBzruH-E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - At Sea",
				url: "https://youtu.be/Felh54JcDS8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 4: A Thief's End - OST - Avery’s Descent",
				url: "https://youtu.be/wl0Wf_2vR0I",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Uncharted 3: Drake's Deception",
		franchise: "Uncharted",
		difficulty: difficulties.EASY,
		aliases: [
			"Uncharted 3",
			"Uncharted Drake's Deception",
			"Uncharted Three",
			"Uncharted Three Drake's Deception",
			"Uncharted 3 Drake's",
			"Uncharted 3 Deception",
			"Uncharted Three Deception",
			"Drake's Deception",
			"Uncharted: Drake's Deception",
			"Uncharted: Three Drake's Deception",
		],
		hints: [
			"This game is a part of a popular action-adventure video game series.",
			"It was released in 2011 exclusively for PlayStation 3.",
			"The game features the protagonist Nathan Drake, who is a treasure hunter and adventurer.",
			"The game takes place in various locations around the world, including the Rub' al Khali desert and a French chateau.",
			"The game won several awards for its graphics, story, and gameplay, including the BAFTA Award for Best Game.",
		],
		songs: [
			{
				name: "Uncharted 3: Drake's Deception [OST] #02: Atlantis of the Sands",
				url: "https://youtu.be/qw8bL1hzoyo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #01: Nate s Theme 3.0",
				url: "https://youtu.be/IQ3Nrt2q_Xc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #03: The Setup",
				url: "https://youtu.be/pjxWuEgsWHA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #05: Bazaar Brawl",
				url: "https://youtu.be/vXoHffL5lbg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #04: Small Beginnings",
				url: "https://youtu.be/tPKw14BkVGw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #07: Badlands",
				url: "https://youtu.be/layosXCSx4A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #06: The Settlement",
				url: "https://youtu.be/980HM5QaKqQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #08: As Above, So Below",
				url: "https://youtu.be/f8cQFIPbMxM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #09: Iram of the Pillars",
				url: "https://youtu.be/gXiXb57g45A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #12: Mind Games",
				url: "https://youtu.be/0yxPiVa_x94",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #13: Sink or Swim",
				url: "https://youtu.be/GqZfyCSN2nk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #10: Arachnophobia",
				url: "https://youtu.be/9Tzip9Pmm68",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #15: Boarding Party",
				url: "https://youtu.be/_Zb3CKaqeUA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #11: The London Underground",
				url: "https://youtu.be/JSk6Sn8HBJ0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #16: Second-Story Work",
				url: "https://youtu.be/bGG6MCnAzHQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #19: Shootout",
				url: "https://youtu.be/RXxDfjl0nWA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #22: Museum Bust",
				url: "https://youtu.be/V5qd01Rel0A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #14: The Empty Quarter",
				url: "https://youtu.be/4JtFZ3r1TP8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #17: Maritime Malfeasance",
				url: "https://youtu.be/0gezyl6n2CE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #24: The Caravan",
				url: "https://youtu.be/faIqlsANGM0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #30: The Rub al Khali",
				url: "https://youtu.be/f8kyII1SFgU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #29: Cruisin for a Bruisin",
				url: "https://youtu.be/Ik4uUHZCsIM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #20: Oh No Chateau",
				url: "https://youtu.be/Fh-EaHzxGLA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #31: The Streets of Ubar",
				url: "https://youtu.be/DcjrMR3yWNI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #18: Drake's Return",
				url: "https://youtu.be/mHeUkVfLF2U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #25: Pursuit",
				url: "https://youtu.be/TgRw2yN-pbA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #21: Science and Magic",
				url: "https://youtu.be/EaaQK_GIxgA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #37: Ambushed",
				url: "https://youtu.be/9s-M3nQG_4I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #42: The Streets of Yemen",
				url: "https://youtu.be/ET3IrY7aVag",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #43: Stowaway",
				url: "https://youtu.be/VkxcTlGiNYg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #23: Searching for Sully",
				url: "https://youtu.be/0Zk3IwIEG4Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #35: Dreamers of the Day",
				url: "https://youtu.be/pDmF0ipbb9I",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #27: East End Boys",
				url: "https://youtu.be/bJeYC7-Cnp0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #33: Secret Order",
				url: "https://youtu.be/_tzLWcoIZYY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #39: Reckless",
				url: "https://youtu.be/X2ZoGNzKykE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #44: Iram of the Pillars - Powerplay (Bricker Remix)",
				url: "https://youtu.be/61QPrnqrxIA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #26: Something Better",
				url: "https://youtu.be/cbVsIZot6z4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #32: Reckless - Powerplay (Thorn Remix)",
				url: "https://youtu.be/pIKDKcq0mPo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #41: Nowhere to Run",
				url: "https://youtu.be/k27h25FB-p4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #40: A Plane to Catch",
				url: "https://youtu.be/yUtpiHel-38",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #28: Marlowe, I Presume?",
				url: "https://youtu.be/DsLCTMG09Es",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #38: Abducted",
				url: "https://youtu.be/Ia8QcQjfJnU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #36: Science and Magic - Powerplay (Buresh Remix)",
				url: "https://youtu.be/p0SPKDYQqLY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted 3: Drake's Deception [OST] #34: Marlowe's Revenge",
				url: "https://youtu.be/AYop_7N-bdo",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Uncharted 2: Among Thieves",
		franchise: "Uncharted",
		difficulty: difficulties.EASY,
		aliases: [
			"Uncharted Among Thieves",
			"Uncharted 2",
			"Uncharted 2 Among Thieves",
			"Uncharted II",
			"Uncharted II Among Thieves",
			"Uncharted: Among Thieves",
			"Uncharted: Among Thieves 2",
			"Uncharted: Among Thieves II",
			"Uncharted: Among Thieves Two",
		],
		hints: [
			"This game was released in 2009.",
			"It is an action-adventure game featuring a treasure hunter as the main character.",
			"The game was developed by Naughty Dog, the same studio behind the popular game series The Last of Us and Crash Bandicoot.",
			"The game features a multiplayer mode where players can compete against each other in various game modes.",
			"The game won numerous awards, including Game of the Year at the 2009 Game Awards.",
		],
		songs: [
			{
				name: "35. Tree of Life - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/koHvMAbzG-4",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Nate\'s Theme 2.0" (Main Theme)',
				url: "https://youtu.be/5-Z23q7ZLEU",
				difficulty: difficulties.EASY,
			},
			{
				name: "7. The Dig - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/RW0MaCC09zQ",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Reunion" (Trailer Theme)',
				url: "https://youtu.be/wmKaP082FYE",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "The City\'s Secret"',
				url: "https://youtu.be/ETCT1ETTMiY",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Bustin\' Chops"',
				url: "https://youtu.be/ILtJJ2uKH04",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Marco Polo"',
				url: "https://youtu.be/zJAg-HiRpjw",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Desperate Times"',
				url: "https://youtu.be/nkU9uwZXEGs",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Breaking and Entering"',
				url: "https://youtu.be/soKcoemNdrE",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "The Monastery"',
				url: "https://youtu.be/zIT4JJrdyLI",
				difficulty: difficulties.EASY,
			},
			{
				name: "22. Siege - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/iaLzumrw2UQ",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Helicopter And Tank"',
				url: "https://youtu.be/whWwpd5CPbc",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Cornered"',
				url: "https://youtu.be/hmDDZY84GSA",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "A Rock And A Hard Place"',
				url: "https://youtu.be/ecbCXTNBfWs",
				difficulty: difficulties.EASY,
			},
			{
				name: "34. Mystic Warriors - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/rG7j65K0FJQ",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Cat and Mouse"',
				url: "https://youtu.be/3xIr_ssvplU",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Warzone"',
				url: "https://youtu.be/A6EudvGVatg",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Train Wrecked"',
				url: "https://youtu.be/siEnWoHKRO0",
				difficulty: difficulties.EASY,
			},
			{
				name: "24. The Monastery, Part 1 - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/Krru8Ez554g",
				difficulty: difficulties.EASY,
			},
			{
				name: "9. Urban Warfare - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/kk4GUMIWdVI",
				difficulty: difficulties.EASY,
			},
			{
				name: "21. Heart of Ice - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/KQAxT6Y8GAg",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Take That!"',
				url: "https://youtu.be/vjoHPHdP-jQ",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Refuge"',
				url: "https://youtu.be/kfmDjSrsU0U",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Among Thieves"',
				url: "https://youtu.be/dVZzlLzzDJo",
				difficulty: difficulties.EASY,
			},
			{
				name: "20. Fightin' Time - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/7eBkuOTDWek",
				difficulty: difficulties.EASY,
			},
			{
				name: "32. Sticks and Stones - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/LbOQHwmqbZo",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "The Gates of Shambhala"',
				url: "https://youtu.be/OGUhxYDKj0U",
				difficulty: difficulties.EASY,
			},
			{
				name: "26. The Monastery, Part 2 - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/Iq8GOunvH88",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "The Heist"',
				url: "https://youtu.be/5tul1VSiHBs",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Tunnel Vision"',
				url: "https://youtu.be/24N-o51miio",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "The Road to Shambhala"',
				url: "https://youtu.be/elUjpHwbHhw",
				difficulty: difficulties.EASY,
			},
			{
				name: "30. Broken Paradise, Part 2 - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/qAsjwbWkbBY",
				difficulty: difficulties.EASY,
			},
			{
				name: "29. Broken Paradise, Part 1 - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/0FoTn4S51js",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Brutal Combo Mambo"',
				url: "https://youtu.be/3wltz06djhI",
				difficulty: difficulties.EASY,
			},
			{
				name: 'Uncharted 2: Among Thieves Soundtrack - "Broken Paradise"',
				url: "https://youtu.be/wDlt-29AwM4",
				difficulty: difficulties.EASY,
			},
			{
				name: "27. Bridge of Perils - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/6GR0ttdyQJ8",
				difficulty: difficulties.EASY,
			},
			{
				name: "23. Past Tense - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/xGiYCNfpbQk",
				difficulty: difficulties.EASY,
			},
			{
				name: "31. Keep Moving - Uncharted 2 Extended Soundtrack",
				url: "https://youtu.be/03AcqZs4wmY",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Uncharted: Drake's Fortune",
		franchise: "Uncharted",
		difficulty: difficulties.EASY,
		aliases: [
			"Uncharted",
			"Uncharted Drake's Fortune",
			"Drake's Fortune",
			"Uncharted: DF",
			"Uncharted: Drakes Fortune",
			"Uncharted: Drake Fortune",
			"Uncharted: Drake's Fortunate",
			"Uncharted: Drake's Fortune Remastered",
			"Uncharted: Drake's Fortune HD",
			"Uncharted: Drake's Legacy",
			"Uncharted: Fortune of Drake",
			"Uncharted: Drake's Adventure",
		],
		hints: [
			"This game was released in 2007.",
			"It is an action-adventure game that follows the story of a treasure hunter named Nathan Drake.",
			"The game was developed by Naughty Dog, the same studio behind the popular game series Crash Bandicoot and The Last of Us.",
			"The game features a mix of platforming, puzzle-solving, and third-person shooting gameplay.",
			"The game received critical acclaim for its engaging story, likable characters, and cinematic presentation, and spawned a successful franchise with several sequels.",
		],
		songs: [
			{
				name: "Uncharted: Drake's Fortune [OST] #01: Nate's Theme",
				url: "https://youtu.be/1OEyASR5C5U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #03: Sir Francis Drake",
				url: "https://youtu.be/3Whh8USsn7w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #08: Unlocking the Past",
				url: "https://youtu.be/RhqWpAJz-7E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #17: Drake's Elegy",
				url: "https://youtu.be/aFArQuYsZro",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #02: Grave Robbing",
				url: "https://youtu.be/nxbLUZwkNRg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #21: Uncharted - The Eldorado",
				url: "https://youtu.be/6_ZTzku08lY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #04: The Search for El Dorado",
				url: "https://youtu.be/d5jtB_SZEaA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #05: Uncharted Island",
				url: "https://youtu.be/mJtDHLUmGJQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #16: The Bunker",
				url: "https://youtu.be/H0RvA6QxXIc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #09: Drowned City",
				url: "https://youtu.be/imCTytCWKnw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #19: Showdown",
				url: "https://youtu.be/vN2Sn7odcjg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #06: Plane-wrecked",
				url: "https://youtu.be/Vy3OKcdQ4og",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #13: Treasure Vault",
				url: "https://youtu.be/SIiMfhZBwV4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #10: Trapped",
				url: "https://youtu.be/8594Am1lbWk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #20: Uncharted Theme",
				url: "https://youtu.be/P0k_Rl9183Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #07: The Fortress",
				url: "https://youtu.be/9SFPaQpJxis",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #12: Sanctuary",
				url: "https://youtu.be/9ioAVDbygLM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #15: Unwelcome Guests",
				url: "https://youtu.be/IJYaGSRRorY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #11: Heading Upriver",
				url: "https://youtu.be/BbJVZkLcmxs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #18: El Goddamn Dorado",
				url: "https://youtu.be/48j-syPZiLc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Uncharted: Drake's Fortune [OST] #14: A Bitter End",
				url: "https://youtu.be/b7QbYLULN2w",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Halo 4",
		franchise: "Halo",
		difficulty: difficulties.EASY,
		aliases: [
			"Halo IV",
			"Halo Four",
			"Halo 4: Forward Unto Dawn",
			"Halo 4: FUD",
			"Halo 4: FT",
			"Halo 4: Infinity",
			"Halo 4: INFTY",
			"Halo 4: The Reclaimer Saga",
			"Halo 4: TRS",
		],
		hints: [
			"This game is a first-person shooter.",
			"It is the seventh installment in a popular video game franchise.",
			"The game was developed by 343 Industries, a studio created specifically to work on this franchise.",
			"The game features a new enemy faction known as the Prometheans, in addition to the classic Covenant enemies.",
			"The game's campaign mode features a story that focuses heavily on the relationship between the protagonist, Master Chief, and his AI companion, Cortana.",
		],
		songs: [
			{
				name: "Halo 4 OST - 117",
				url: "https://youtu.be/PUrsOQanozo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Arrival",
				url: "https://youtu.be/miwmCI7VS58",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Green and Blue",
				url: "https://youtu.be/QBHxDMSlrdg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Revival",
				url: "https://youtu.be/Etksc3mrIQU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - To Galaxy",
				url: "https://youtu.be/x_oKF0uA7pk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Nemesis",
				url: "https://youtu.be/ctZhKWviOuc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Awakening",
				url: "https://youtu.be/9Oj41t-UES0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Belly of the Beast",
				url: "https://youtu.be/vX5VI0GgO5U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Requiem",
				url: "https://youtu.be/kcuddfEvwtw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Legacy",
				url: "https://youtu.be/Zq5WfR4K3zA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Haven",
				url: "https://youtu.be/zYVGXMWkr7w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Faithless",
				url: "https://youtu.be/zzyr_ZooBqo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Solace",
				url: "https://youtu.be/SKuJ2SLTYE4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Immaterial",
				url: "https://youtu.be/83MWUk_0sew",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 OST - Ascendancy",
				url: "https://youtu.be/Hlxco4irGl8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Wreckage",
				url: "https://youtu.be/oms7rs_Br-0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 Bonus Tracks - Never Forget",
				url: "https://youtu.be/yJVpF0b23O8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Atonement",
				url: "https://youtu.be/1wm8gk3Doj4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 Bonus Tracks - Desecration",
				url: "https://youtu.be/jUtkgmsVNr8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Never Forget (Midnight Version)",
				url: "https://youtu.be/qcRAnXVeFyc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Aliens",
				url: "https://youtu.be/lTv0-jCjUIM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Mantis",
				url: "https://youtu.be/m5lvDzALrso",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Sacrifice",
				url: "https://youtu.be/qzgex4RCzb0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Gravity",
				url: "https://youtu.be/QxvGxLRPSp8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Intruders",
				url: "https://youtu.be/ycUGUHZv39g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Pylons",
				url: "https://youtu.be/06ZPHg-2CkI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Majestic",
				url: "https://youtu.be/hOzJ6e4vDZU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - This Armour",
				url: "https://youtu.be/LYa9dBBMV0c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Push Trough",
				url: "https://youtu.be/rEOY1vZfhbI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Convoy",
				url: "https://youtu.be/G-OT_g0EWmk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Escape",
				url: "https://youtu.be/hkihFCrMiTA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Kantele Bow",
				url: "https://youtu.be/bvXd6y1dVdI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Lasky's Theme",
				url: "https://youtu.be/Q1HeWatTU6U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - To Galaxy (Extended Version)",
				url: "https://youtu.be/k4SaHWtWJyw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Cloud City",
				url: "https://youtu.be/SVO4AmcRNWA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Foreshadow",
				url: "https://youtu.be/p7D5SAhevUo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 4 [Original Soundtrack Vol. 2] - Swamp",
				url: "https://youtu.be/kZk_ENO54i4",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Halo 5: Guardians",
		franchise: "Halo",
		difficulty: difficulties.EASY,
		aliases: [
			"Halo 5",
			"Halo Guardians",
			"Halo 5 Guardians",
			"Halo V Guardians",
			"Halo 5: Gaurdians",
			"Halo 5: Guardian",
			"Halo Five Guardians",
			"Halo Five: Guardians",
			"Halo 5 Gaurdians",
			"Halo V: Guardians",
			"Halo 5 - Guardians",
		],
		hints: [
			"This game is a first-person shooter.",
			"It is the fifth main installment in a popular video game franchise.",
			"The game was developed by 343 Industries and published by Microsoft Studios.",
			"The game features a new protagonist, Spartan Jameson Locke, alongside the series' iconic protagonist, Master Chief.",
			"The game's multiplayer mode includes new features such as Warzone, a large-scale battle mode with AI-controlled enemies and objectives.",
		],
		songs: [
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 02 Walk Softly",
				url: "https://youtu.be/5Wb77PPaGKY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 02 Light Is Green",
				url: "https://youtu.be/cIjFzQRvkKQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 01 Halo Canticles",
				url: "https://youtu.be/LkTHGtRLj5s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 14 Crossed Paths",
				url: "https://youtu.be/ELyrPQd0XBQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 07 Scavengers",
				url: "https://youtu.be/S6A6DNIKYVA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 03 Kamchatka",
				url: "https://youtu.be/6HOTSDdMhfI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 07 Crypt",
				url: "https://youtu.be/WZ5Ic4N-tEU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 05 The Trials",
				url: "https://youtu.be/hBwjlVNgHik",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 09 Meridian Crossing",
				url: "https://youtu.be/PpoDJqWQIY4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 14 Osiris Suite, Act 3",
				url: "https://youtu.be/R7kDsuq0yng",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 04 Return To The Fold",
				url: "https://youtu.be/CRlyjmKs8sI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 21 Covenant Prayers",
				url: "https://youtu.be/PzCWEn86VXY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 05 Rock And Ice",
				url: "https://youtu.be/m452g13Pw-E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 10 Blue Team",
				url: "https://youtu.be/bZaZqdmDRlI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 -  20 Warrior World",
				url: "https://youtu.be/_t68xu3M_-s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 06 Argent Moon",
				url: "https://youtu.be/nYMo_m7uiNo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 08 In Absentia",
				url: "https://youtu.be/9VOOkTMdSrM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 23 Sentry Battle",
				url: "https://youtu.be/5_RjyjloHvA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 10 Unearthed",
				url: "https://youtu.be/TQ0gt_SMsK0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 04 Dominion",
				url: "https://youtu.be/gBS327FzNIE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2  - 11 Jameson Locke",
				url: "https://youtu.be/meMgUSDslA4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 13 Cavalier",
				url: "https://youtu.be/zlUWnUzpzSA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 12 Osiris Suite, Act 1",
				url: "https://youtu.be/FIWJrnTHvrw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 01 Advent",
				url: "https://youtu.be/5TmTWZrkr5Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 15 Osiris Suite, Act 4",
				url: "https://youtu.be/s26CwWhoyOE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 11 Unconfirmed Reports",
				url: "https://youtu.be/ToHQz8jRgpA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 08 End Game",
				url: "https://youtu.be/EbPxKqGU8PM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 15 Untethered",
				url: "https://youtu.be/fMwOxNp-q08",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 13 Osiris Suite, Act 2",
				url: "https://youtu.be/GWSCJxr-FHM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 19 Honor's Song",
				url: "https://youtu.be/Sv8bJ2ZtYJg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 12 Keeper of Secrets",
				url: "https://youtu.be/v0Xxub6D_Sk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 16 Skeleton Crew",
				url: "https://youtu.be/oz3KatqLNzc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 22 Cloud Chariot",
				url: "https://youtu.be/x9iCfrsKLMM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 18 Enemy of my Enemy",
				url: "https://youtu.be/gjbr_L9NuNE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 17 Siren Song",
				url: "https://youtu.be/kuwHqhIU2Ws",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 03 Genesis",
				url: "https://youtu.be/sPo-MipU8yY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD1 - 24 Worldquake",
				url: "https://youtu.be/UVwwM3GBH3w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 5 Guardians Original Soundtrack CD2 - 06 Sentinel Song",
				url: "https://youtu.be/_gI18-YUjM0",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Halo 2",
		franchise: "Halo",
		difficulty: difficulties.EASY,
		aliases: [
			"Halo II",
			"Halo Two",
			"Halo 2nd",
			"H2",
			"HII",
			"Halo 2: Anniversary",
			"Halo 2: Remastered",
			"Halo 2: Classic",
			"Halo 2: HD",
			"Halo 2: Master Chief Collection",
		],
		hints: [
			"This game was released in 2004 as a sequel to a popular first-person shooter game.",
			"It was developed by Bungie Studios and published by Microsoft Game Studios.",
			"The game features a campaign mode where players take on the role of Master Chief, a super soldier fighting against an alien race known as the Covenant.",
			'The game introduced new multiplayer modes, including the popular "Team Slayer" and "Capture the Flag."',
			"The game was critically acclaimed and considered one of the best games of its time, with praise for its graphics, gameplay, and story.",
		],
		songs: [
			{
				name: "Blow Me Away",
				url: "https://youtu.be/wbJ7XnYtprM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo Theme Mjolnir Mix",
				url: "https://youtu.be/0JQt8VKgizg",
				difficulty: difficulties.EASY,
			},
			{
				name: "High Charity Suite",
				url: "https://youtu.be/gFcykog09ds",
				difficulty: difficulties.EASY,
			},
			{
				name: "Heretic, Hero",
				url: "https://youtu.be/wOzK0VwWWhk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Peril",
				url: "https://youtu.be/qXTbQ7mpF-w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Unyielding",
				url: "https://youtu.be/hxykZkuUgis",
				difficulty: difficulties.EASY,
			},
			{
				name: "Unforgotten",
				url: "https://youtu.be/bO4paIkAKIc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Follow (1st Movement of the Odyssey)",
				url: "https://youtu.be/57w2FPoiPWk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Reclaimer",
				url: "https://youtu.be/kOsRTqGK-JQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Delta Halo Suite",
				url: "https://youtu.be/YuvLtuxAQr4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Impend",
				url: "https://youtu.be/RDefC7G3L4Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mombasa Suite",
				url: "https://youtu.be/QzWIyDiaLoI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ghosts of Reach",
				url: "https://youtu.be/HlKzycsoWe8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Epilogue",
				url: "https://youtu.be/yokmgNwP19g",
				difficulty: difficulties.EASY,
			},
			{
				name: "In Amber Clad",
				url: "https://youtu.be/z0MOZgTmEQA",
				difficulty: difficulties.EASY,
			},
			{
				name: "The Last Spartan",
				url: "https://youtu.be/l3BUd7yZiUY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Heavy Price Paid",
				url: "https://youtu.be/2vBcvdpAGVE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cairo Suite",
				url: "https://youtu.be/JRfEniZtYxY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Sacred Icon Suite",
				url: "https://youtu.be/i0nGuVz4uK4",
				difficulty: difficulties.EASY,
			},
			{
				name: "2nd Movement of the Odyssey",
				url: "https://youtu.be/gMXwpQTR_C4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Flawed Legacy",
				url: "https://youtu.be/4QAVlaulEho",
				difficulty: difficulties.EASY,
			},
			{
				name: "Prologue",
				url: "https://youtu.be/NcNE1OPGz74",
				difficulty: difficulties.EASY,
			},
			{
				name: "Earth City",
				url: "https://youtu.be/AVssiMCMVK4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Mausoleum Suite",
				url: "https://youtu.be/gfWv4yMo68U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Finale",
				url: "https://youtu.be/OZGJaiqzRss",
				difficulty: difficulties.EASY,
			},
			{
				name: "4th Movement of the Odyssey",
				url: "https://youtu.be/A0N7_NJfs9U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Never Surrender",
				url: "https://youtu.be/z92gBC5GVGw",
				difficulty: difficulties.EASY,
			},
			{
				name: "High Charity",
				url: "https://youtu.be/7O4-aONmPfE",
				difficulty: difficulties.EASY,
			},
			{
				name: "3rd Movement of the Odyssey",
				url: "https://youtu.be/nDr50gaIwyA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Connected",
				url: "https://youtu.be/ICyWLzh9BA0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Remembrance",
				url: "https://youtu.be/bZ6SwvvO0bw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Ancient Machine",
				url: "https://youtu.be/EwYk6dS6RC4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Orbit of Glass",
				url: "https://youtu.be/u1NNRt4cNOY",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Halo 3",
		franchise: "Halo",
		difficulty: difficulties.EASY,
		aliases: [
			"Halo Three",
			"Halo III",
			"Halo 3: ODST",
			"Halo 3: Recon",
			"Halo 3: Mythic",
			"Halo 3: Anniversary",
			"Halo 3: Master Chief Collection",
			"H3",
			"HIII",
		],
		hints: [
			"This game was released in 2007.",
			"It is a first-person shooter game developed by Bungie Studios.",
			"The game is the third installment in a popular video game franchise.",
			"The game features a multiplayer mode that allows players to compete against each other online.",
			"The game's campaign mode concludes the story arc of the main character, Master Chief, and his fight against an alien alliance known as the Covenant.",
		],
		songs: [
			{
				name: "Halo 3 OST - Gravemind",
				url: "https://youtu.be/xGzXCw8THmQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Luck",
				url: "https://youtu.be/UbMxGrTVovg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Follow Our Brothers",
				url: "https://youtu.be/a0FMIAdzx_k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Released",
				url: "https://youtu.be/BJAfrL889CQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - One Final Effort",
				url: "https://youtu.be/5b8zZmSZC_0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - This is the Hour",
				url: "https://youtu.be/ZqTdByrdh5U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - This is Our Land",
				url: "https://youtu.be/vWUNMs6xMas",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Last of the Brave",
				url: "https://youtu.be/t74nS_wddyE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Finish the Fight",
				url: "https://youtu.be/voCyz6aSMXk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Infiltrate",
				url: "https://youtu.be/XhAjqJxk6go",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Behold a Pale Horse",
				url: "https://youtu.be/zJUuMk18sqQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Farthets Outpost",
				url: "https://youtu.be/_KeI0-0hbJI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Greatest Journey",
				url: "https://youtu.be/4Q0Jbv6ciRU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Honorable Intentions",
				url: "https://youtu.be/ieMVzNKM47Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Never Forget",
				url: "https://youtu.be/OOHXjgEY_RQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Wake Me When You Need Me",
				url: "https://youtu.be/1XbqrI4IaeU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Out of Shadow",
				url: "https://youtu.be/DCCHhDkFaEU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Roll Call",
				url: "https://youtu.be/fCecybn2aZI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Brutes",
				url: "https://youtu.be/ChTaYGgJFh0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Three Gates",
				url: "https://youtu.be/d0zr33BwWMg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - To Kill a Demon",
				url: "https://youtu.be/Alp6GCgk44g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Dread Intrusion",
				url: "https://youtu.be/yhN5s1DFGv8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Tribute",
				url: "https://youtu.be/kghQc3Mc7UY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Halo Reborn",
				url: "https://youtu.be/zGdCBe9rQRw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Black Tower",
				url: "https://youtu.be/q_UZnGb7Cj8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - No More Dead Heroes",
				url: "https://youtu.be/OhkuYus2r8Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Keep What You Steal",
				url: "https://youtu.be/KEKdHtn2YHI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Edge Closer",
				url: "https://youtu.be/4ZrFVkS-Ya4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - LvUrFR3NZ",
				url: "https://youtu.be/P4tEHl_P98E",
				difficulty: difficulties.EASY,
			},
			{
				name: "Halo 3 OST - Choose Wisely",
				url: "https://youtu.be/I08lFVkCiMc",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Dead Space",
		franchise: "Dead Space",
		difficulty: difficulties.EASY,
		aliases: [
			"DeadSpace",
			"Dead-Space",
			"Dead_Space",
			"Dead Space 1",
			"Dead Space One",
			"Dead Space I",
			"Dead Space 2",
			"Dead Space Two",
			"Dead Space II",
			"Dead Space 3",
			"Dead Space Three",
			"Dead Space III",
		],
		hints: [
			"This game was released in 2008.",
			"It is a survival horror game set in space.",
			"The game was developed by Visceral Games, which has since been shut down by its parent company, EA.",
			"The game features a unique weapon called the Plasma Cutter, which can sever limbs from enemies.",
			"The game was critically acclaimed for its atmosphere, story, and gameplay, and spawned two sequels.",
		],
		songs: [
			{
				name: "Deadspace soundtrack 1: Dead Space Theme",
				url: "https://youtu.be/irnSaMbsb4w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 3: The Necromorphs Attack",
				url: "https://youtu.be/LvjO-UhCyHw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 2: Welcome Aboard the U.S.G. Ishimura",
				url: "https://youtu.be/_nVkHXTeiOg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 8: The Leviathan",
				url: "https://youtu.be/r1YT8isX-tE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 4: Fly Me to the Aegis Seven Moon",
				url: "https://youtu.be/UgGivQIWpg0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 10: Entering Zero-G",
				url: "https://youtu.be/iVW4svdv1L4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 16: The Hive Mind",
				url: "https://youtu.be/OqF-K1kQm-8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 5: Severed Limbs Are Hazardous Waste",
				url: "https://youtu.be/ty0CIZISvr0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 7: I Left My Heart In Med Lab 3",
				url: "https://youtu.be/-0Y8CmeXp7Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 9: Cyanide Systems Offline",
				url: "https://youtu.be/gmo1SsSjBVY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 17: Escape from the Planet of the Red",
				url: "https://youtu.be/7-ZdAQp5afw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 6: Nicole's Farewell",
				url: "https://youtu.be/RsQ4a8jS_vI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 11: I've Got You Devolving Under My Skin",
				url: "https://youtu.be/99jd8yWXhuQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 15: Do Not Vomit - Do Not Shout",
				url: "https://youtu.be/qvR7QnYSU2U",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 13:  Plasma Cutters Are Your Friend",
				url: "https://youtu.be/LiPuS2pET5M",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 14: The Cost of Living Is On the Rise",
				url: "https://youtu.be/QMEqfXYjyvM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace soundtrack 12: Manuel Survival Mode Seven",
				url: "https://youtu.be/hBZQxjw0gS8",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Dead Space 2",
		franchise: "Dead Space",
		difficulty: difficulties.EASY,
		aliases: [
			"Dead Space II",
			"Dead Space Two",
			"Dead Space 2: Severed",
			"Dead Space 2 Severed",
			"Dead Space 2: Extraction",
			"Dead Space 2 Extraction",
			"Dead Space II: Severed",
			"Dead Space II Severed",
			"Dead Space II: Extraction",
			"Dead Space II Extraction",
		],
		hints: [
			"This game is a sequel to a popular survival horror game.",
			"It was released in 2011 for Xbox 360, PlayStation 3, and PC.",
			"The game takes place on a space station called the Sprawl.",
			"The main character, Isaac Clarke, is an engineer who must fight off hordes of alien monsters known as Necromorphs.",
			'The game features a unique mechanic called "strategic dismemberment," where players must target specific limbs of the Necromorphs to defeat them.',
		],
		songs: [
			{
				name: "Deadspace 2 soundtrack 01: Isaac, Are You There",
				url: "https://youtu.be/0I4roQE9KNQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 03: Hospital Escape",
				url: "https://youtu.be/p6gDCDmXGdk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 02: Padded Room With A View",
				url: "https://youtu.be/XFVR6Tsbo7s",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 18: Lacrimosa",
				url: "https://youtu.be/86Nyu2H2lzo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 06: It Had To Be Unitology",
				url: "https://youtu.be/1l2I9S7CxPw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 15: Canonical Aside",
				url: "https://youtu.be/9FYFfUHb_MM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 05: Fear Of Flying",
				url: "https://youtu.be/_58U9E52mTI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 17: Convergence Delayed",
				url: "https://youtu.be/AwTt7mbJlmA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 14: The Government Sector",
				url: "https://youtu.be/NcSzeFo_fuI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 16: War And Pieces",
				url: "https://youtu.be/HbbMRFJMlEQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 04: The Cassini Towers",
				url: "https://youtu.be/zoJSvs0dhB4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 08: Titan Station Elementary",
				url: "https://youtu.be/ai_3GmBvTNw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 10: East Of The Sun And West Of The Solar Array",
				url: "https://youtu.be/o25RClvJElo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 07: Isaac Get Your Gun",
				url: "https://youtu.be/QA1zw9RSX8w",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 09: Class Dismissed",
				url: "https://youtu.be/AJFFuMDogXg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 11: Administering Control",
				url: "https://youtu.be/3_ZO0T99YOE",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 12: Start Spreading The Limbs",
				url: "https://youtu.be/ZcxtUq7SSHg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Deadspace 2 soundtrack 13: You Go To My Head.avi",
				url: "https://youtu.be/5_N3AVsEznw",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Dead Space 3",
		franchise: "Dead Space",
		difficulty: difficulties.EASY,
		aliases: [
			"Dead Space III",
			"Dead Space Three",
			"Dead Space 3",
			"DeadSpace 3",
			"DeadSpace III",
			"DeadSpace Three",
			"DS3",
			"DS III",
			"DS Three",
			"Dead Space: The Third",
			"Dead Space Three: The Awakening",
			"Dead Space 3: The Awakening",
			"Dead Space 3: The Return",
			"Dead Space 3: The Final Chapter",
		],
		hints: [
			"This game is a third-person shooter.",
			"It was released in 2013 and is the third installment in a popular horror game franchise.",
			"The game takes place on a frozen planet called Tau Volantis.",
			"The game features a cooperative multiplayer mode that allows players to team up and fight against the game's enemies together.",
			"The game received mixed reviews upon release, with some critics praising its graphics and gameplay, while others criticized its focus on action over horror.",
		],
		songs: [
			{
				name: "Dead Space 3 - Cry of the Ancients (Soundtrack OST)",
				url: "https://youtu.be/ENmU2ZVASNI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - 200 Years Ago, On an Icy Planet... (Soundtrack OST)",
				url: "https://youtu.be/OIhDw_Lb0fw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Moon Crash (Soundtrack OST)",
				url: "https://youtu.be/qZTFVW5yjG0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - A Broken Past (Soundtrack OST)",
				url: "https://youtu.be/wIrHPu4x67A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Lunar Express (Soundtrack OST)",
				url: "https://youtu.be/LAz-8UsYK30",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - The Quick and the Dead (Soundtrack OST)",
				url: "https://youtu.be/cUXmgIaxdrk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Convergence (Soundtrack OST)",
				url: "https://youtu.be/twPtVVtkvh4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - 60 Seconds Over Tau Volantis (Soundtrack OST)",
				url: "https://youtu.be/_elYHgW3-xM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Rosetta Suite (Soundtrack OST)",
				url: "https://youtu.be/1hTZH0jSR18",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Vomit Comet (Soundtrack OST)",
				url: "https://youtu.be/ou3osFklOi0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Spaced Out and Frantic (Soundtrack OST)",
				url: "https://youtu.be/EJaqvAFbyGs",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Graffiti Speaks (Soundtrack OST)",
				url: "https://youtu.be/SiRtzEHaWS4",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Apoplexia (Soundtrack OST)",
				url: "https://youtu.be/XX-bRnOmVM8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - The Fiery Room (Soundtrack OST)",
				url: "https://youtu.be/CdG9Apq4Uws",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Knee Deep (Soundtrack OST)",
				url: "https://youtu.be/0DAeTsjCBYw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Buckell Down (Soundtrack OST)",
				url: "https://youtu.be/BI4BIcHKFtw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - The Ascent (Soundtrack OST)",
				url: "https://youtu.be/ft7SsxYNWQA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - The Nexus (Soundtrack OST)",
				url: "https://youtu.be/UgBbgUj9U3g",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Mountains of Madness (Soundtrack OST)",
				url: "https://youtu.be/PpnsZyB9GXU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - In Tents (Soundtrack OST)",
				url: "https://youtu.be/pTx9P4heiAI",
				difficulty: difficulties.EASY,
			},
			{
				name: "Dead Space 3 - Into the Stomach (Soundtrack OST)",
				url: "https://youtu.be/f547Q-XTPOk",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Hollow Knight",
		franchise: "Hollow Knight",
		difficulty: difficulties.EASY,
		aliases: [
			"Hollow Knight",
			"Hollow Knights",
			"Hallow Knight",
			"Hallow Knights",
			"Hollow Night",
			"Holo Knight",
			"Holo Knights",
			"Hollo Knight",
			"Hollo Knights",
			"Hollow Knight's",
			"Hollow Nights",
		],
		hints: [
			"This game was released in 2017.",
			"It is a 2D action-adventure game.",
			"The game is set in a vast, interconnected world filled with insects and other creatures.",
			"The game features challenging combat and platforming, as well as a deep lore and story to uncover.",
			"The game was developed by an indie studio called Team Cherry and has received critical acclaim for its art style, music, and gameplay.",
		],
		songs: [
			{
				name: "Lace (Silksong OST Sample)",
				url: "https://youtu.be/zRs58D34OLY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Nightmare King (Hollow Knight: The Grimm Troupe)",
				url: "https://youtu.be/Mq8E_1LkoAc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Grimm (Hollow Knight: The Grimm Troupe)",
				url: "https://youtu.be/qmsjvBivRkU",
				difficulty: difficulties.EASY,
			},
			{
				name: "15 Pure Vessel (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/35pUQDrKy5A",
				difficulty: difficulties.EASY,
			},
			{
				name: "Truth, Beauty and Hatred (Hollow Knight: Hidden Dreams)",
				url: "https://youtu.be/zidGo704SvI",
				difficulty: difficulties.EASY,
			},
			{
				name: "10 Daughter of Hallownest (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/o5_nMrARi-k",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hollow Knight OST - Sealed Vessel",
				url: "https://youtu.be/ze0Rk-m0w2A",
				difficulty: difficulties.EASY,
			},
			{
				name: "04 The Grimm Troupe (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/Xnc4wSuKvuo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Bonebottom (Silksong OST Sample)",
				url: "https://youtu.be/e6b-lWhn8pg",
				difficulty: difficulties.EASY,
			},
			{
				name: "12 Sisters of Battle (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/4yxgEsS8ogM",
				difficulty: difficulties.EASY,
			},
			{
				name: "09 Gods & Glory (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/UjBTtNU27Ec",
				difficulty: difficulties.EASY,
			},
			{
				name: "White Defender (Hollow Knight: Hidden Dreams)",
				url: "https://youtu.be/EVuSps67I9w",
				difficulty: difficulties.EASY,
			},
			{
				name: "05 Nightmare King (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/GGhZsiRCvYc",
				difficulty: difficulties.EASY,
			},
			{
				name: "01 Hive Knight (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/RVyJmhiJjA8",
				difficulty: difficulties.EASY,
			},
			{
				name: "08 Pale Court (Hollow Knight: Gods & Nightmares)",
				url: "https://youtu.be/LCYP9L2FfQg",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hollow Knight OST - Hornet",
				url: "https://youtu.be/7xkM8mWC4Kk",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hollow Knight OST - Mantis Lords",
				url: "https://youtu.be/Lp5M2BAXwSo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hollow Knight OST - City of Tears",
				url: "https://youtu.be/MJDn70jh1V0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hollow Knight OST - Radiance",
				url: "https://youtu.be/SkD5Ceo8KAo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Hollow Knight OST - Greenpath",
				url: "https://youtu.be/fWquuWkHVP4",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Celeste",
		franchise: "Celeste",
		difficulty: difficulties.EASY,
		aliases: ["Celest", "Celesta", "Celestia", "Celestial", "Celestine", "Celestyn", "Celesti", "Celesté", "Céleste"],
		hints: [
			"This game was released in 2018.",
			"It is a platformer game with a retro-style pixel art aesthetic.",
			"The game follows a young woman named Madeline as she climbs a mountain called Celeste.",
			"The game features challenging gameplay that requires precise platforming skills and quick reflexes.",
			"The game also explores themes of mental health and self-discovery through its story and characters.",
		],
		songs: [
			{
				name: "[Official] Celeste Original Soundtrack - 03 - Resurrections",
				url: "https://youtu.be/1rwAvUvvQzQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 08 - Scattered and Lost",
				url: "https://youtu.be/0etenwnI1wo",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 18 - Reach for the Summit",
				url: "https://youtu.be/iDVM9KED46Q",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 16 - Confronting Myself",
				url: "https://youtu.be/b_oEDGONSc4",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 02 - First Steps",
				url: "https://youtu.be/N8OHSXvneOE",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 11 - Quiet and Falling",
				url: "https://youtu.be/FjG0ivBT4lQ",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 01 - Prologue",
				url: "https://youtu.be/Ctuo3ws3EKs",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 04 - Awake",
				url: "https://youtu.be/BFVyvGmwlmk",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 15 - Reflection",
				url: "https://youtu.be/QfhUSYq7jEs",
				difficulty: difficulties.EASY,
			},
			{
				name: "[Official] Celeste Original Soundtrack - 06 - Checking In",
				url: "https://youtu.be/fOzvP1I5tLU",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
	{
		name: "Cuphead",
		franchise: "Cuphead",
		difficulty: difficulties.EASY,
		aliases: [
			"Cup Head",
			"Cup-Head",
			"Cuphead Game",
			"Cuphead Video Game",
			"Cuphead: Don't Deal with the Devil",
			"Cuphead: Don't Deal with the Devil Game",
			"Cuphead: Don't Deal with the Devil Video Game",
			"Cuphead: The Delicious Last Course",
			"Cuphead: The Delicious Last Course Game",
			"Cuphead: The Delicious Last Course Video Game",
		],
		hints: [
			"This game was inspired by 1930s cartoons and features a unique art style.",
			"It was developed by Studio MDHR and released in 2017.",
			"The game is known for its challenging difficulty level and boss battles.",
			"The soundtrack of the game was composed by Kristofer Maddigan and features jazz and big band music.",
			"The game was nominated for several awards and won Best Independent Game at The Game Awards 2017.",
		],
		songs: [
			{
				name: "Cuphead OST - Floral Fury [Music]",
				url: "https://youtu.be/qD54sROmeIM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Carnival Kerfuffle [Music]",
				url: "https://youtu.be/XORwfYUH23Y",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Murine Corps [Music]",
				url: "https://youtu.be/E8e19xlb7mM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Botanic Panic [Music]",
				url: "https://youtu.be/-uH2_sPJuLw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Die House [Music]",
				url: "https://youtu.be/P3UguXUvECM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - The King's Court [Music]",
				url: "https://youtu.be/KsReWI83IC8",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Clip Joint Calamity [Music]",
				url: "https://youtu.be/BoNDM-0PMjM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - High Sea Hi-Jinx [Music]",
				url: "https://youtu.be/pt6R-_-aEzY",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Railroad Wrath [Music]",
				url: "https://youtu.be/5y1lp540t_c",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Aviary Action [Music]",
				url: "https://youtu.be/wSRAdi1wVW0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Threatin' Zeppelin [Music]",
				url: "https://youtu.be/vMbGOlMvmFU",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Ruse Of An Ooze [Music]",
				url: "https://youtu.be/saZ0ZKE8sdo",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Fiery Frolic [Music]",
				url: "https://youtu.be/U7v2e_piJUc",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Junkyard Jive [Music]",
				url: "https://youtu.be/I4VD4OwUhDw",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Sugarland Shimmy [Music]",
				url: "https://youtu.be/elAG4FsjkuA",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Dramatic Fanatic [Music]",
				url: "https://youtu.be/foaw2arHA50",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Honeycomb Herald [Music]",
				url: "https://youtu.be/Qc11_jkOKx0",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Funfair Fever [Music]",
				url: "https://youtu.be/rBU8wRCnaUM",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Inkwell Isle One [Music]",
				url: "https://youtu.be/osRSZaCswds",
				difficulty: difficulties.EASY,
			},
			{
				name: "Cuphead OST - Introduction [Music]",
				url: "https://youtu.be/edpbsFvypK0",
				difficulty: difficulties.EASY,
			},
		],
		images: [],
	},
];

export default games;
