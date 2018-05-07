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


client.on('message', message => {
	if (checkActivateCharacter(message)) {
		checkCommand(message);
	}

});

function checkActivateCharacter(message) {
	var firstCharacter = message.charAt(0);
	
	if(firstCharacter == activateCharacter) {
		return true;
	}
	return false;
}

function checkCommand(message) {
	var command = message.slice(1);
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
		case ":b:eter":
			beterCommand(message);
			break;
		default:
			commandNotFound(message);
	}
}

function cluckCommand(message) {
	var randomInt = getRandomInt(quotes.length());
	message.channel.send(quotes[randomInt]);
}

function cuckCommand(message) {
	var randomInt = getRandomInt(chuckImages.length());
	message.channel.send(chuckImages[randomInt]);
}

function dickCommand(message) {
	message.channel.send("I like dick, no homo");
}

function douglettCommand(message) {
	message.channel.send('https://i.imgur.com/Nt4uia9.jpg');
	message.channel.send('PLEASE VISIT MY WEBSITE');
	message.channel.send('https://www.douglett.com');
}

function commandNotFound(message) {
	message.channel.send("That's not a command you slut");
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