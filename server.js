const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

var activateCharacter = '-';
var chuckImages = ['https://i.imgur.com/zyma58k.jpg', 'https://i.imgur.com/47srahM.jpg', 'https://i.imgur.com/tFf1m5m.jpg', 'https://i.imgur.com/Zqrhgpe.jpg',
'https://i.imgur.com/GEkFIK1.jpg', 'https://i.imgur.com/anGKpMG.jpg', 'https://i.imgur.com/VFI63Dk.jpg',
'https://i.imgur.com/UK9nB1o.gifv', 'https://i.imgur.com/bDKr85K.jpg', 'https://i.imgur.com/G8OgvgC.jpg', 'https://i.imgur.com/OLomuTe.png'];
var quotes = ["Say goodnight",
"my coworker is a smite arena pro",
"You guys send anime girls with dicks all the time, real traps are no different",
"I'll be working at a bible camp this summer",
"I'M NOT GAY I SWEAR!!!",
"I'm being ironic cmon guys",
"the recruiter promised me I'd be working cyber security", 
"Me and some guys from my dorm are gonna watch hentai together, want to join us?"];
var dicks = ["https://zuckablatt.tumblr.com/image/173588167083",
							"https://78.media.tumblr.com/89a4cd33265a9b781ca67c347c12ec68/tumblr_p4y202E3RW1vsi5teo1_1280.jpg",
							"https://78.media.tumblr.com/7d9d5ea7f9b7497b6bcfb366128dfc97/tumblr_ost5gmRUVd1wu8d09o4_1280.png",
							"https://img.rule34.xxx//samples/1694/sample_3a2f1bc53e158d9e0b5808beb2845eb1.jpg?2690048",
							"https://rule34.xxx//images/2421/863693b2e8b253a7a3243af8b60a47b9.png?2640651",
							"https://rule34.xxx//images/1589/ee0fe2fdf09d771186b6329cf80136a3.png?2692458",
							"http://ivy.paheal.net/_images/004417657867b65afaa950e0b844ecef/2450562%20-%20Aqua%20KonoSuba%3A_God%27s_Blessing_on_this_Wonderful_World%21%20Rule_63.png",
							"https://i.redditmedia.com/L0povQoMQmUWbqt4WV6VqydLLckkKrgOUnKxDhK2AL8.jpg?w=543&s=82dda298950f592a1ad5ef42bdef63c0",
							"https://i.imgur.com/PIXhs0j.gifv",
							"https://i.imgur.com/46VOoz3.gifv",
							"https://i.imgur.com/fVNOnLJ.jpg"
						];


client.on('message', message => {
	if (checkActivateCharacter(message)) {
		checkCommand(message);
	}
});

function checkActivateCharacter(message) {
	var firstCharacter = message.content.charAt(0);
	
	if(firstCharacter == activateCharacter) {
		return true;
	}
	return false;
}

function checkCommand(message) {
	var command = message.content.slice(1);
	switch(command) {
		case "cluck":
			cluckCommand(message);
			break;
		case "cuck":
			cuckCommand(message);
			break;
		case "dick":
			dickCommand(message);
			break;
		case "douglett":
			douglettCommand(message);
			break;
		case "shitpost":
			shitpost(message);
			break;
		case "beter":
			beterCommand(message);
			break;
		case "help":
			helpCommand(message);
			break;
		case "assemble":
			assembleCommand(message);
			break;
	}
}

function assembleCommand(message) {
	message.channel.send("@everyone ALL MEMES ASSEMBLE AT ONCE!!");
	cuckCommand(message);
}

function cluckCommand(message) {
	var randomInt = getRandomInt(quotes.length);
	message.channel.send(quotes[randomInt]);
}

function cuckCommand(message) {
	var randomInt = getRandomInt(chuckImages.length);
	message.channel.send(chuckImages[randomInt]);
}

function dickCommand(message) {
	var randomInt = getRandomInt(dicks.length);
	var channel = message.channel;
	if (channel.nsfw) {
		channel.send("I like dick, no homo");
		channel.send(dicks[randomInt]);
	} else {
		channel.send("Not in here silly! ^-^");
	}
}

function douglettCommand(message) {
	message.channel.send('https://i.imgur.com/uguR3ux.png');
	message.channel.send('PLEASE VISIT MY WEBSITE');
	message.channel.send('http://www.douglett.com');
}

function helpCommand(message) {
	var channel = message.channel;
	var author = message.author;

	author.createDM().then(dmChannel -> {
		dmChannel.send("```-cluck : sends a random Chuck quote\n -cuck : sends a random Chuck meme\n -dick : sends a random picture\n -douglett : posts a link to the douglett website\n -shitpost : shitpost shitpost shitpost\n -beter : does :b:eter approve?\n ```");
	}).catch(err);

	channel.send("@" + author.username + " check your DM's you sexy twink! ;^)");
}

function shitpost(message) {
	message.channel.send(':poop:');
}

function beterCommand(message) {
	var random = getRandomInt(2);
	if(random === 1) {
		message.channel.send('https://i.imgur.com/lEz4HPQ.jpg');
	} else {
		message.channel.send('https://i.imgur.com/Nt4uia9.jpg');
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max))
}


client.login(process.env.BOT_TOKEN);
