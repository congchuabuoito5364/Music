const MessageEmbed = require('discord.js')
module.exports = {
    name: "invite",
    aliases: ["add"],
    description: "Invite the Bot to your Server",
    edesc: "Invite command",
    execute(message, args, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#ffe700")
            .setTitle("Invite Global Music")
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=901992836050870304&permissions=8&scope=bot`)
            .setTimestamp()

            message.channel.send(newEmbed);
    }
}
