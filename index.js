
const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

// const token ='ODkyODk2NzA3MzI5Nzk0MDU4.YVTk3A.4MUmpHoD-mBkkwIaeI1ZMJK9Wwk';

// bot.on('ready', ()=>{
//     console.log('RIP Stephen');
// });

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(bot, Discord);
});

bot.login(process.env.token);


