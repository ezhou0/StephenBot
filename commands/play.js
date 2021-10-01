const ytdl = require("ytdl-core");
const ytSearch = require('yt-search');

const queue = new Map();


module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    async execute(message, args, cmd, bot, Discord){
        const voice_channel = message.member.voice.channel;
        if(!voice_channel) return message.channel.send('You must be in a channel to execute this command.');
        const permssions = voice_channel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send("You don't have the correct permissions");
    }
    
}