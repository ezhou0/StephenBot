const { execute } = require("./play");

module.exports={
    name: 'help',
    description: 'commands list',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#79029b')
        .setTitle('Help')
        .setDescription('Here is a list of commands for StephenBot')
        .addFields(
            {name: '!play', value: 'add your search argument after'},
            {name: '!skip', value: 'skips to next song in queue'},
            {name: '!stop', value: 'skips remaining songs and leaves'}
        )
    }



}