
// Load up the discord.js library
const Discord = require("discord.js");
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
	if(message.author.id=='555955826880413696') { //epic rpg id
		var descriptiontext=''
		if (message.embeds.length==1){
			descriptiontext=message.embeds[0].description
		}
		if (typeof descriptiontext =='string'){
			if (descriptiontext.startsWith('<:epicrpgarena')){
				message.channel.send('**__Arena__** <:epicrpgarena:721309296843030538> <:arenacookie:721310211830186086> <@&721290735541813268> các ngài thợ săn mau tham gia đấu trường để nhận Cookie.')
				//thay emoji id va id role arena vao dong tren
			}
		}
	}
});
client.login(process.env.BOT_TOKEN);
