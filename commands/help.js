module.exports={
    name: 'help',
    description: 'commands list',
    execute(message, args, cmd, bot, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#79029b')
        .setTitle('Help')
        .setDescription('Here is a list of commands for StephenBot')
        .addFields(
            {name: '-q', value: 'add your search argument after'},
            {name: '-skip', value: 'skips to next song in queue'},
            {name: '-leave', value: 'skips remaining songs and leaves'},
            { name: '-l', value: 'displays songs in queue' }
        );
        message.channel.send(newEmbed);
    }
 
}