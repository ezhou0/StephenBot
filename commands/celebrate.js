module.exports = {
    name: 'RIP',
    aliases:['RIP'],
    description: 'RIP Stephen, the OG bot',
    execute(message, args, cmd, bot, Discord) {
        const ripEmbed = new Discord.MessageEmbed()
            .setColor('#808000')
            .setTitle('RIP STEPHEN')
            .setDescription('Rest in peace Stephen, the best music bot. Bless him for gracing us with his presence.')
            
        message.channel.send(ripEmbed);
    }

}