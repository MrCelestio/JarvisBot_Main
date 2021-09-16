module.exports = {
    name: 'rules',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#26c3e4')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/channel/UCcH09AbkziNu41tZdTQ0UcA')
        .setDescription('This is an embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'Have fun'},
            {name: 'Rule 2', value: 'Respect others'},
            {name: 'Rule 3', value: 'Leave your problems in another server'},
            {name: 'Rule 4', value: 'Follow 1-3'}
        )
        .setImage('https://lh3.googleusercontent.com/proxy/fYB_QhW0yf7elVAoHsQigSA7biR8hoBSrSXzm9cv7X8RhfuLtmPuSXwxpjWIjNPGDqgr9YJxrnI6AssYTS1yZt9Zo-grZlM')
        .setFooter('Make sure to check out the rules channel');

        message.channel.send({ embeds: [newEmbed] });
    }
}