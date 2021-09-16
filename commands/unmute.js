module.exports = {
    name: 'unmute',
    description: "This is an unmute command",
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

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else
        {
            message.channel.send('Cant find that member!')
        }

    }
}