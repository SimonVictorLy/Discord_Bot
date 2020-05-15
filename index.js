const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzEwNjQ3NjAzODgwMjYzNzAx.Xr3iSQ.qwLbai-yjDMUWMD5Mkb-Xk3z82k';

const PREFIX = '!';

var version = '1.0.1';


bot.on('ready', ()=>{
	console.log('This bot is online!');
})


bot.on('message', message=>{
	
	// split argument inputs
	let args = message.content.substring(PREFIX.length).split(" ");
	
	switch(args[0]){
		case 'ping':
			message.channel.send('pong!');
			break;
		case 'info':
			if(args[1] === 'version'){
				message.channel.send('Version ' + version);
			}
			else{
				message.channel.send('Invalid Arguments');
			}
			break;
		case 'clear':
			if(message.member.roles.cache.some(r => r.name === "God")){
				// allowed access to command
				if(!args[1]) return message.reply('Error please define a second argument');
				message.channel.bulkDelete(args[1]);
			} 
			else {
			// not allowed access
			message.reply('Error invalid permission');
			}
			break;
			
	}
})

bot.login(token);