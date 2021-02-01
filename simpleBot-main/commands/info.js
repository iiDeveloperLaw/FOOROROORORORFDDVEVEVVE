const d = require('discord.js')
module.exports = {
    aliases: ['info', 'infoo'],
    run: async (client, message, args) => {
        
        const embed = new d.MessageEmbed()
        .setTitle(`info command`)
        .setDescription(`Lona bot was maded over a few months and it a really good bot!`)
        .setColor(`BLUE`)
        return message.channel.send(embed)
    }
}