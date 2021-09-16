const ms = require('ms');

module.exports = {
    name: 'timeout',
    description: "This is a this will time someone out",
    execute(message, args)
    {
        if(!message.member.roles.cache.has('427236558362640384'))
        {
            message.channel.send('Silence, ' + message.member.displayName + '! I will not take orders from the likes of you!');
            return;
        }

        const target = message.mentions.users.first();
        if(target)
        {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Timeout');

            let memberTarget = message.guild.members.cache.get(target.id);
            
            if(!args[1])
            {
                message.channel.send('Please apply a duration i.e. 30s');
                return;
            }else if (!ms(args[1]))
            {
                message.channel.send('Please enter valid syntax: j!timeout <target> <value>');
                return;
            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
            setTimeout(function()
            {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);

            }, ms(args[1]));

        } else
        {
            message.channel.send('Cant find that member!')
        }

    }
}