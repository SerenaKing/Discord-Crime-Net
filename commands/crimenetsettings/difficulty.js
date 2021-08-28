const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "difficulty",
    category: "Sets the current difficulty of crime net",
    aliases: ["diff", "hard"],
    run: async (client, message, args) => {

        if (message.author.id !== '871877975346405388') return;

        message.delete()

        let badge = (args[0])

        if (badge == "Normal") {
            await db.set(`bot.difficulty.Normal`, `<:CHECKED:881140761356292096>`)
            const nSuc = new Discord.MessageEmbed()
                .setDescription(`Successfully changed the difficulty to **Normal**!`)
                .setColor("BLUE")
            message.channel.send(nSuc)
            await db.set(`bot.difficulty.Hard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.VeryHard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Overkill`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Mayhem`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathWish`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathSentance`, `<:CROSSED:881140525929992193>`)

        } else if (badge == "Hard") {
            await db.set(`bot.difficulty.Hard`, `<:CHECKED:881140761356292096>`)
            const hSuc = new Discord.MessageEmbed()
                .setDescription(`Successfully changed the difficulty to **Hard**!`)
                .setColor("BLUE")
            message.channel.send(hSuc)

            await db.set(`bot.difficulty.Normal`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.VeryHard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Overkill`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Mayhem`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathWish`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathSentance`, `<:CROSSED:881140525929992193>`)
        } else if (badge == "Very Hard") {
            await db.set(`bot.difficulty.VeryHard`, `<:CHECKED:881140761356292096>`)
            const vhSuc = new Discord.MessageEmbed()
                .setDescription(`Successfully changed the difficulty to **Very Hard**!`)
                .setColor("BLUE")
            message.channel.send(vhSuc)

            await db.set(`bot.difficulty.Normal`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Hard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Overkill`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Mayhem`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathWish`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathSentance`, `<:CROSSED:881140525929992193>`)
        } else if (badge == "Overkill") {
            await db.set(`bot.difficulty.Overkill`, `<:CHECKED:881140761356292096>`)
            const oSuc = new Discord.MessageEmbed()
                .setDescription(`Successfully changed the difficulty to **Overkill**!`)
                .setColor("BLUE")
            message.channel.send(oSuc)

            await db.set(`bot.difficulty.Normal`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Hard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.VeryHard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Mayhem`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathWish`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathSentance`, `<:CROSSED:881140525929992193>`)
        } else if (badge == "Mayhem") {
            await db.set(`bot.difficulty.Mayhem`, `<:CHECKED:881140761356292096>`)
            const mSuc = new Discord.MessageEmbed()
                .setDescription(`Successfully changed the difficulty to **Mayhem**!`)
                .setColor("BLUE")
            message.channel.send(mSuc)

            await db.set(`bot.difficulty.Normal`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Hard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.VeryHard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Overkill`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathWish`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathSentance`, `<:CROSSED:881140525929992193>`)
        } else if (badge == "Death Wish") {
            await db.set(`bot.difficulty.DeathWish`, `<:CHECKED:881140761356292096>`)
            const dwSuc = new Discord.MessageEmbed()
                .setDescription(`Successfully changed the difficulty to **Death Wish**!`)
                .setColor("BLUE")
            message.channel.send(dwSuc)

            await db.set(`bot.difficulty.Normal`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Hard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.VeryHard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Overkill`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Mayhem`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathSentance`, `<:CROSSED:881140525929992193>`)
        } else if (badge == "Death Sentence") {
            await db.set(`bot.difficulty.DeathSentance`, `<:CHECKED:881140761356292096>`)
            const dsSuc = new Discord.MessageEmbed()
                .setDescription(`Successfully changed the difficulty to ****!`)
                .setColor("BLUE")
            message.channel.send(dsSuc)

            await db.set(`bot.difficulty.Normal`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Hard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.VeryHard`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Overkill`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.Mayhem`, `<:CROSSED:881140525929992193>`)
            await db.set(`bot.difficulty.DeathWish`, `<:CROSSED:881140525929992193>`)
        } else {
            message.channel.send('Error! This difficulty is not a global setting or defined!')
        }
    }
}

// Levels
/*
Normal
Hard
Very Hard
Overkill
Mayhem
Death Wish
Death Sentence

Modified: One Down
*/