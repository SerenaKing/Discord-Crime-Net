const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
    name: "profile",
    category: "account",
    description: "Shows a user profile",
    aliases: ["p"],
    run: async (client, message, args) => {

        message.delete()
        // Variables
        const mem = message.author
        const mentionedMember = message.mentions.members.first();

        // Database Fetch (Self) (Badges)
        const Norml = db.fetch(`bot.difficulty.Normal`)
        const Hard = db.fetch(`bot.difficulty.Hard`)
        const VeryHard = db.fetch(`bot.difficulty.VeryHard`)
        const OverKill = db.fetch(`bot.difficulty.Overkill`)
        const Mayhem = db.fetch(`bot.difficulty.Mayhem`)
        const DeathWish = db.fetch(`bot.difficulty.DeathWish`)
        const DeathSentance = db.fetch(`bot.difficulty.DeathSentance`)

        var desc = db.get(`desc.${mem.id}`);
    
        const em = new Discord.MessageEmbed()
        em.setTitle(`${message.author.username}'s Profile`)
        em.setDescription(`This has to be changed to something. But what?`)
        em.addField('❯ User Information', (`
~~----~~ FIB Files:
~~--~~ Username: 
~~--~~ Business:

~~----~~ Description:
${desc}
`))
        em.addField(`❯ | Difficulty`, (`
Normal: ${Norml || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614> | Hard: ${Hard || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Very Hard: ${VeryHard || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Overkill: ${OverKill || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455> | Mayhem: ${Mayhem || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595> | Death Wish: ${DeathWish || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595><:DeathSentanceSkull:881139853050396702> | : ${DeathSentance || "<:CROSSED:881140525929992193>"}
        `), true)
        em.setFooter(message.author.username, message.author.displayAvatarURL())


        /* ============================================================================================================== */


        if (!mentionedMember) return message.channel.send(em)

        // Database Fetch (Mentioned) (Badges)
        const Norml1 = db.fetch(`bot.difficulty.Normal`)
        const Hard1 = db.fetch(`bot.difficulty.Hard`)
        const VeryHard1 = db.fetch(`bot.difficulty.VeryHard`)
        const OverKill1 = db.fetch(`bot.difficulty.Overkill`)
        const Mayhem1 = db.fetch(`bot.difficulty.Mayhem`)
        const DeathWish1 = db.fetch(`bot.difficulty.DeathWish`)
        const DeathSentance1 = db.fetch(`bot.difficulty.DeathSentance`)

        const desc1 = db.get(`desc.${mem}`)
        if (desc1 === null) {
                let desc1 = 'Not set'
        }

        const emm = new Discord.MessageEmbed()
        emm.setTitle(`${mentionedMember.user.username}'s Profile`)
        emm.setDescription(`This has to be changed to something. But what?`)
        emm.addField('❯ User Information', (`
~~----~~ FIB Files:
~~--~~ Username: 
~~--~~ Business:
        
~~----~~ Description:
${desc1}
      `))
        emm.addField(`Difficulty`, (`
Normal: ${Norml1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614> | Hard: ${Hard1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Very Hard: ${VeryHard1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Overkill: ${OverKill1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455> | Mayhem: ${Mayhem1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595> | Death Wish: ${DeathWish1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595><:DeathSentanceSkull:881139853050396702> | : ${DeathSentance1 || "<:CROSSED:881140525929992193>"}
        `), true)
        emm.setFooter(mentionedMember.user.username, mentionedMember.user.avatarURL())
        if (mentionedMember) return message.channel.send(emm)
    }
}