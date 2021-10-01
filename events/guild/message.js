require('dotenv').config();

module.exports = (Discord, bot, message) => {
    const prefix = process.env.prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = bot.commands.get(cmd);
    if(command) command.execute(bot, message, args, Discord);

    try{
        command.execute(message, args, cmd, bot, Discord);
    }catch(err){
        message.reply("There was an error executing this command.");
        console.log(err);
    }
}