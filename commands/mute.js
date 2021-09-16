module.exports = {
    name: 'mute',
    description: "This is a mute command",
    execute(message, args)
    {
        if(message.member.roles.cache.has('427236558362640384'))
        {
            message.channel.send('Silence, ' + message.member.displayName + '! I will not take orders from the likes of you!');
            return;
        }
        
        const target = message.mentions.users.first();
        if(target)
        {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
        } else
        {
            message.channel.send('Cant find that member!')
        }

    }
}