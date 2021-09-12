module.exports = {
    name: 'ping',
    description: "This is a ping command",
    execute(message,command){

        if(command == 'ping'){
            
            message.channel.send('pong!');

        }else{

            message.channel.send('ping!');
        }
    }
}