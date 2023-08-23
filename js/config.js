// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.webp";

// Center logo?
// 'true' or 'false'
var l_centerLogo = true;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "Jazz.XZPY.xyz";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = true;

// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "abstract.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/alice.jpg",
	"backgrounds/images/alice02.jpg",
	"backgrounds/images/alice03.jpg",
        "backgrounds/images/alice04.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = false;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 15;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "Mayahem Temple.ogg", name: "Banjo-Tooie - Mayahem Temple"},
	{ogg: "White Ice.ogg", name: "Bomberman 64 - White Ice"},
	{ogg: "Submission Plaza Medley.ogg", name: "Check Mii Out Channel - Submission Plaza Medley"},
	{ogg: "Field of Hopes and Dreams.ogg", name: "Deltarune - Field of Hopes and Dreams"},
	{ogg: "Humming the Bassline.ogg", name: "Jet Set Radio - Humming the Bassline"},
	{ogg: "Mt. Red a Symbol of Thrill …for Red Mountain.ogg", name: "Sonic Adventure - Mt. Red a Symbol of Thrill"},
	{ogg: "Sand Hill.ogg", name: "Sonic Adventure - Sand Hill"},
	{ogg: "Windy and Ripply …for Emerald Coast.ogg", name: "Sonic Adventure - Windy and Ripply"},
	{ogg: "and… Fish Hits!.ogg", name: "Sonic Adventure - and… Fish Hits!"},
	{ogg: "Twinkle Cart.ogg", name: "Sonic Adventure - Twinkle Cart"},
	{ogg: "Pleasure Castle …for Twinkle Park.ogg", name: "Sonic Adventure - Pleasure Castle"},
	{ogg: "Egg Carrier - A Song That Keeps Us On The Move.ogg", name: "Sonic Adventure - A Song That Keeps Us On The Move"},
	{ogg: "Run Through the Speed Highway …for Speed Highway.ogg", name: "Sonic Adventure - Run Through the Speed Highway"},
	{ogg: "General Offensive …for Sky Deck.ogg", name: "Sonic Adventure - General Offensive"},
	{ogg: "Theme of “E-102γ”.ogg", name: "Sonic Adventure - Theme of “E-102γ”"},
	{ogg: "Letz Get This Party Started …for CHAO Race Entrance.ogg", name: "Sonic Adventure - Letz Get This Party Started"},
	{ogg: "Bad Taste Aquarium …for Hot Shelter.ogg", name: "Sonic Adventure - Bad Taste Aquarium"},
	{ogg: "Red Barrage Area …for Hot Shelter.ogg", name: "Sonic Adventure - Red Barrage Area"},
	{ogg: "The Dreamy Stage …for Casinopolis.ogg", name: "Sonic Adventure - The Dreamy Stage"},
	{ogg: "Blue Star …for Casinopolis.ogg", name: "Sonic Adventure - Blue Star"},
	{ogg: "Challange!! for Another Aim.ogg", name: "Sonic Adventure - Challange!! for Another Aim"},
	{ogg: "Crank the Heat Up!! …for Final Egg.ogg", name: "Sonic Adventure - Crank the Heat Up!!"},
	{ogg: "Boss CHAOS ver.6.ogg", name: "Sonic Adventure - Boss CHAOS ver.6"},
	{ogg: "Calm After the Storm …Egg Carrier -the ocean-.ogg", name: "Sonic Adventure - Calm After the Storm"},
	{ogg: "Be Cool, Be Wild and Be Groovy …for Icecap.ogg", name: "Sonic Adventure - Be Cool, Be Wild and Be Groovy"},
	{ogg: "Lost Colony.ogg", name: "Sonic Adventure 2 - Lost Colony"},
	{ogg: "Noki Bay.ogg", name: "Super Mario Sunshine - Noki Bay"},
	{ogg: "Factory Stage.ogg", name: "Marvel vs. Capcom 2 - Factory Stage"},
	{ogg: "Toad's Turnpike.ogg", name: "Mario Kart 64 - Toad's Turnpike"},
	{ogg: "Lon Lon Ranch.ogg", name: "The Legend of Zelda: Ocarina of Time - Lon Lon Ranch"},
	{ogg: "Dire, Dire Docks.ogg", name: "Super Mario 64 - Dire, Dire Docks"},
	{ogg: "Games-Manuals.ogg", name: "Sonic Mega Collection - Games & Manuals"},
	{ogg: "Options-Extras.ogg", name: "Sonic Mega Collection - Options & Extras"},
	{ogg: "Battle! (Gym Leader).ogg", name: "Pokémon Sword and Shield - Battle! (Gym Leader)"},
	{ogg: "Deep Sea Zone, Act 1.ogg", name: "Sonic Robo Blast 2 - Deep Sea Zone, Act 1"},
	{ogg: "Castle Eggman Zone, Act 2.ogg", name: "Sonic Robo Blast 2 - Castle Eggman Zone, Act 2"},
	{ogg: "Arid Canyon Zone, Act 1.ogg", name: "Sonic Robo Blast 2 - Arid Canyon Zone, Act 1"},
	{ogg: "Race Against Metal Sonic.ogg", name: "Sonic Robo Blast 2 - Race Against Metal Sonic"},
	{ogg: "World 1 - Jungle.ogg", name: "Super Monkey Ball 2 - World 1: Jungle"},
	{ogg: "World 5 - Amusement Park.ogg", name: "Super Monkey Ball 2 - World 5: Amusement Park"},
	{ogg: "World 10 - Dr. Bad Boon's Base.ogg", name: "Super Monkey Ball 2 - World 10: Dr. Bad Boon's Base"},
	{ogg: "Targets!.ogg", name: "Super Smash Bros. Melee - Targets!"},
	{ogg: "Cryptic Relics.ogg", name: "Ape Escape - Cryptic Relics"},
	{ogg: "Molten Lava (t-rex).ogg", name: "Ape Escape - Molten Lava (T-Rex)"},
	{ogg: "Snowy Mammoth.ogg", name: "Ape Escape - Snowy Mammoth"},
	{ogg: "Stadium Attack.ogg", name: "Ape Escape - Stadium Attack"},
	{ogg: "Time Station.ogg", name: "Ape Escape - Time Station"},
	{youtube: "https://www.youtube.com/watch?v=Q8DGFuM9Z3A", name: "Diddy Kong Racing - Darkmoon Caverns"},
	{youtube: "https://www.youtube.com/watch?v=vvqV6sAYva0", name: "Bomberman - Bomberman Theme [cover by clairebun]"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 12;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Enjoy the server",
	"Have fun",
	"Ya like jazz?",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 15000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1500;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//============ Do not edit anything below this line ============
var checkConfigFile = function() {
	return true;
};