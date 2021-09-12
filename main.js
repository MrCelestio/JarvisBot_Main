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

    if(command == 'ping' || command == 'pong'){
        Client.commands.get('ping').execute(message,command);
        
        
    }

    if(command == 'ban'){

        do 
        {
            target = args.shift();
            message.channel.send('Banning ' + target + '! Peace nerd ');
        }while(args.length > 0);
    }
})
Client.login('ODg1MjYwMjk5OTc0ODgxMjkw.YTkc5g.LsjxvSUyvVU_tnHbgeHeb6_lOYk');