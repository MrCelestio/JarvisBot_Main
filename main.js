const Discord = require('discord.js');

const Client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS"]});

const prefix = 'j!';

const fs = require('fs');

Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}

Client.once('ready',() => {
    console.log('JarvisBot is ready and online!')
})

Client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping' || command === 'pong'){
        Client.commands.get('ping').execute(message,command);
        
        
    }else if(command === 'ban')
    {
        Client.commands.get('ban').execute(message, args);

    }else if(command === 'rules')
    {
        Client.commands.get('rules').execute(message, args, Discord);

    }else if(command === 'mute')
    {

        Client.commands.get('mute').execute(message, args);
    }else if(command === 'unmute')
    {

        Client.commands.get('unmute').execute(message, args);
    }else if(command === 'timeout')
    {

        Client.commands.get('timeout').execute(message, args);
    }
})
Client.login('');