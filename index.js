
const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

// const token ='ODkyODk2NzA3MzI5Nzk0MDU4.YVTk3A.4MUmpHoD-mBkkwIaeI1ZMJK9Wwk';

bot.on('ready', ()=>{
    console.log('RIP Stephen');
});

bot.on('message',()=>{
    if(msg.content === 'hello'){
        msg.replay('hello');
    }
});

bot.login(process.env.token);