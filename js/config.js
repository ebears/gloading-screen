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
	{ogg: "Twinkle Cart.ogg", name: "Sonic Adventure - Twinkle Cart"},
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
	{youtube: "https://www.youtube.com/watch?v=3SjGGQuUOh4", name: "Diddy Kong Racing - Darkmoon Caverns"},
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