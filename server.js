const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
client.login(process.env.BOT_TOKEN);


var activateCharacter = '-';


client.on('message', message => {
	if (checkActivateCharacter(message)) checkCommand(message);
});

function checkActivateCharacter(message) {
	var firstCharacter = message.content.charAt(0);
	if(firstCharacter == activateCharacter) return true; else return false;
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
		case "bruh":
			bruhCommand(message);
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

	author.createDM().then((dmChannel) => {
		dmChannel.send("```-cluck : sends a random Chuck quote\n " +
			"-cuck : sends a random Chuck meme\n -dick : sends a random picture\n " + 
			"-douglett : posts a link to the douglett website\n -bruh : bruh\n" +
			"-shitpost : shitpost shitpost shitpost\n -beter : does :b:eter approve?\n```");
	});
	channel.send("@" + author.username + " check your DM's you sexy twink! ;^)");
}

function shitpost(message) {
	shitpostCommand(message);
	dankMeme(message);
}

function shitpostCommand(message) {
	var random = getRandomInt(shitposts.length);
	if(message.channel.nsfw)
	dickCommand(message);
	else message.channel.send(shitposts[random]);
}

function beterCommand(message) {
	if(getRandomInt(2)) message.channel.send('https://i.imgur.com/lEz4HPQ.jpg'); 
	else message.channel.send('https://i.imgur.com/Nt4uia9.jpg');
}

function bruhCommand(message) {
	if (message.member.voice.channel) {
		message.member.voice.channel.join().then(connection => {
			const dispatcher = connection.play(
				ytdl('https://www.youtube.com/watch?v=2ZIpFytCSVc',
				{ filter: 'audioonly' })
			);
			dispatcher.on('finish', () => {
				dispatcher.destroy();
			});
		});
	} else {
		message.reply('Join voice pussy!');
	}
}

function dankMeme(message) {
	if (getRandomInt(100) == 19) 
	message.author.createDM().then((dmChannel) => {
		dmChannel.send("Hey FUCKER, say GOODNIGHT!");
		dmChannel.send("https://i.ytimg.com/vi/AZYErjxUqyE/hqdefault.jpg");
	}); 
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max))
}


const playArray = ['https://www.youtube.com/watch?v=4sx3KGrNWtw',
"https://www.youtube.com/watch?time_continue=39&v=p2spXLwZ6XI",
"https://www.youtube.com/watch?v=VKhpE-oNoGY",
"https://www.youtube.com/watch?v=VKhpE-oNoGY",
"https://www.youtube.com/watch?time_continue=5&v=Xc0EzLc7NZg"];
const chuckImages = ['https://i.imgur.com/zyma58k.jpg', 
'https://i.imgur.com/47srahM.jpg', 
'https://i.imgur.com/tFf1m5m.jpg', 
'https://i.imgur.com/Zqrhgpe.jpg',
'https://i.imgur.com/GEkFIK1.jpg', 
'https://i.imgur.com/anGKpMG.jpg', 
'https://i.imgur.com/VFI63Dk.jpg',
'https://i.imgur.com/UK9nB1o.gifv', 
'https://i.imgur.com/bDKr85K.jpg', 
'https://i.imgur.com/G8OgvgC.jpg', 
'https://i.imgur.com/OLomuTe.png', 
'https://imgur.com/aB4KoPF'];
const quotes = ["Say goodnight!",
"My coworker is a smite arena pro!",
"You guys send anime girls with dicks all the time, real traps are no different!",
"I'll be working at a bible camp this summer.",
"I'M NOT GAY I SWEAR!!!",
"I'm being ironic cmon guys",
"The recruiter promised me I'd be working cyber security", 
"Me and some guys from my dorm are gonna watch hentai together, want to join us?",
"$80 by the way!"];
const dicks = ["https://zuckablatt.tumblr.com/image/173588167083",
"https://78.media.tumblr.com/89a4cd33265a9b781ca67c347c12ec68/tumblr_p4y202E3RW1vsi5teo1_1280.jpg",
"https://78.media.tumblr.com/7d9d5ea7f9b7497b6bcfb366128dfc97/tumblr_ost5gmRUVd1wu8d09o4_1280.png",
"https://img.rule34.xxx//samples/1694/sample_3a2f1bc53e158d9e0b5808beb2845eb1.jpg?2690048",
"https://rule34.xxx//images/2421/863693b2e8b253a7a3243af8b60a47b9.png?2640651",
"https://rule34.xxx//images/1589/ee0fe2fdf09d771186b6329cf80136a3.png?2692458",
"http://ivy.paheal.net/_images/004417657867b65afaa950e0b844ecef/2450562%20-%20Aqua%20KonoSuba%3A_God%27s_Blessing_on_this_Wonderful_World%21%20Rule_63.png",
"https://i.redditmedia.com/L0povQoMQmUWbqt4WV6VqydLLckkKrgOUnKxDhK2AL8.jpg?w=543&s=82dda298950f592a1ad5ef42bdef63c0",
"https://i.imgur.com/PIXhs0j.gifv",
"https://i.imgur.com/46VOoz3.gifv",
"https://i.imgur.com/fVNOnLJ.jpg",
"https://i.redd.it/v3o29p30cti11.jpg",
"https://i.imgur.com/5jO5n1b.jpg",
"https://i.imgur.com/UbEfBb0.jpg",
"https://zuckablatt.tumblr.com/image/177127088638",
"https://78.media.tumblr.com/8b62579b15bbba0a14c2483d23ce9e44/tumblr_pcuuo3dVIX1wk56dho1_1280.jpg",
"https://78.media.tumblr.com/74d60193a1688a54d737426215a57ea8/tumblr_p8ut691meE1wo17h4o1_1280.png",
"https://zuckablatt.tumblr.com/image/175911746833",
"https://zuckablatt.tumblr.com/image/175646757023",
"https://78.media.tumblr.com/b9df20f58406fb5f2bce08a1a4e54c62/tumblr_paa74bAFuV1u4rf7ao1_640.png",
"https://78.media.tumblr.com/c8c25fdb0ba2f8508f6a93e930aa0676/tumblr_paa74bAFuV1u4rf7ao2_500.jpg",
"https://78.media.tumblr.com/7cecd2009eb56b315d47852e7e7d01e5/tumblr_paa74bAFuV1u4rf7ao3_500.jpg",
"https://78.media.tumblr.com/e4150020fdf058b0770d4b55c40a7725/tumblr_paa74bAFuV1u4rf7ao4_640.jpg",
"https://78.media.tumblr.com/05c499c448c0260327f588cfcdff876b/tumblr_paa74bAFuV1u4rf7ao5_640.jpg",
"https://78.media.tumblr.com/6aa2faf5b35319681c24647ec6010d11/tumblr_paa74bAFuV1u4rf7ao6_640.jpg",
"https://78.media.tumblr.com/a874744343a20d58905c62d4b2c874e5/tumblr_paa74bAFuV1u4rf7ao7_540.jpg",
"https://78.media.tumblr.com/345a7cee1ffc2d6a1bcca000e93bd1b6/tumblr_paa74bAFuV1u4rf7ao8_500.jpg",
"https://78.media.tumblr.com/e55347afd1e15e5bb0e802662c953065/tumblr_paa74bAFuV1u4rf7ao9_500.jpg",
"https://78.media.tumblr.com/1df623046687b49d9899552e4f7eb925/tumblr_paa74bAFuV1u4rf7ao10_640.jpg",
"https://zuckablatt.tumblr.com/image/174689676718",
"https://zuckablatt.tumblr.com/image/172753262198"];
const shitposts = ['https://imgur.com/a/USnQuic', 
'Fuck you!', 
'https://cdn.nekos.life/neko/neko_031.jpg', 
'reee',
'https://imgur.com/8TaGSXR',
'https://imgur.com/nTdhso0',
'https://imgur.com/xTWDAQt',
'https://imgur.com/1Fnd48v',
'https://imgur.com/obyoMCn',
'https://imgur.com/em6mZjZ',
'https://imgur.com/A5RvJpX',
'https://imgur.com/fLMfbo5',
'https://imgur.com/F2EKBFa',
'https://imgur.com/SR2PWau',
'https://imgur.com/cJfTi9N',
'https://imgur.com/o9bxcjB',
'https://imgur.com/Y5jsy41',
'https://imgur.com/MVw9JJ3',
'https://imgur.com/EyqcGJU',
'https://imgur.com/EyqcGJU',
'https://imgur.com/wqskmuM',
'https://imgur.com/PZXZTJC',
'https://imgur.com/tnmD4UA',
'https://imgur.com/DqQHIm4',
'https://imgur.com/oy4WvkK',
'https://imgur.com/I3WBzhv',
'https://imgur.com/mlR7h6J',
'https://imgur.com/a4jDg4h',
'https://imgur.com/eNX1Ejo',
'https://imgur.com/SoZ8vlx',
'https://imgur.com/JT4C7zG',
'https://imgur.com/JVHqVIW',
'https://imgur.com/Z4I9f1B',
'https://imgur.com/AHnDYLI',
'https://imgur.com/mfJlETD',
'https://imgur.com/zMXKwLf',
'https://imgur.com/Tu7ScSH',
'https://imgur.com/SCdljV9',
'https://imgur.com/I527yNb',
'https://imgur.com/VxsLaY3',
'https://imgur.com/m8rDW2o',
'https://imgur.com/VypuPPb',
'https://imgur.com/HlRLCzS',
'https://imgur.com/uzpCkap',
'https://imgur.com/EKJ75UI',
'https://imgur.com/ULZoIVY',
'https://imgur.com/Oci1BMx',
'https://imgur.com/LsCv68A',
'https://imgur.com/JSYWooW',
'https://imgur.com/mqAlWc1',
'https://imgur.com/qCLav1f',
'https://imgur.com/oqr6PbL',
'https://imgur.com/Ul6pHMk',
'https://imgur.com/nHdme7a',
'https://i.imgur.com/k44Wpf4.jpg',
'https://i.imgur.com/0M6ZjTC.png',
'https://i.imgur.com/LbTtsn5.png',
'https://i.imgur.com/beUNB0n.jpg',
'https://i.imgur.com/tBWgiOd.jpg',
'https://i.imgur.com/12k7XrB.jpg',
'https://i.imgur.com/aB4KoPF.png',
'https://i.imgur.com/HFUd4Ha.gifv',
'https://i.imgur.com/DV3K7NV.gifv',
'https://i.imgur.com/gAHPZ7c.gifv',
'https://i.imgur.com/GaU4f4I.gifv',
'https://i.imgur.com/IEqf52Y.gifv',
'https://i.imgur.com/md6rhUb.gifv',
'https://i.imgur.com/JEnc5P0.gifv',
'https://i.imgur.com/NLnJDGN.gifv',
'https://i.imgur.com/DeofTEW.gifv',
'https://i.imgur.com/xtPPlUj.gifv',
'https://i.imgur.com/EZoSAE3.jpg',
'https://i.imgur.com/TPiUHtH.png',
'https://i.imgur.com/VmgenoL.jpg',
'https://i.imgur.com/XsaWBg1.jpg',
'https://i.imgur.com/TGmDesy.jpg',
'https://i.imgur.com/zXj3Jda.png',
'https://i.imgur.com/nOI67JZ.png',
'https://i.imgur.com/GbanG0h.png',
'https://i.imgur.com/aKw2X4Z.jpg',
'https://i.imgur.com/NINoJyQ.png',
'https://i.imgur.com/PmDKMeT.png',
'https://i.imgur.com/qln2lxn.png',
'https://i.imgur.com/ceFnBgI.png',
'https://i.imgur.com/RAv7aMe.png',
'https://i.imgur.com/R2XcqSW.png',
'https://i.imgur.com/FselZbn.png',
'https://i.imgur.com/3A18qLl.png',
'https://i.imgur.com/Hufn2Pb.png',
'https://i.imgur.com/Ep2uLhT.png',
'https://i.imgur.com/T7qJtIH.png',
'https://i.imgur.com/JlSoA2l.png',
'https://i.imgur.com/SoZ8vlx.jpg'];