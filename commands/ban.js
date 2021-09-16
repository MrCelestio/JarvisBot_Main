module.exports = {
    name: 'ban',
    description: "This is a ban command",
    execute(message, args){
        if(message.member.roles.cache.has('427236558362640384')){

            do 
            {
                target = args.shift();
                message.channel.send('Banning ' + target + '! Peace nerd ');

            }while(args.length > 0);

        }else{

            message.channel.send('Silence, ' + message.member.displayName + '! I will not take orders from the likes of you!');

        }


    }
}