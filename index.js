const Discord = require("discord.js");
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
				//thai emoji id va id role arena vao dong tren
			}
		}
	}
});
client.login(process.env.token);
