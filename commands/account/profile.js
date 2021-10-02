const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
const { createTag } = require('common-tags')

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
        const DeathSentence = db.fetch(`bot.difficulty.DeathSentence`)

        let bal = db.get(`user.balance.${mem.id}`)
        if (bal == null) {
                bal = 0
        }

        var desc = db.get(`desc.${mem.id}`);
        if (desc == null) {
                desc = "This user doesn't have a description set."
        }

        var username = db.get(`user.username.${mem.id}`);
        if (username == null) {
                username = "None Set"
        }

        var business = db.get(`business.name.${mem.id}`);
        if (business == null) {
                business = "None Set"
        }

        let skillpoints = db.get(`user.skillpoints.${mem.id}`)
        if (skillpoints == null) {
                skillpoints = 0
        }

    
        const em = new Discord.MessageEmbed()
        em.setTitle(`${message.author.username}'s Profile`)
        em.setColor("#34B5C6")
        em.setDescription(`This has to be changed to something. But what?`)
        em.addField('❯ User Information', (`
\`\`\`FBI Files:\`\`\`
**~~--~~ Username:** 
*${username}*

**~~--~~ Business:**
*${business}*

**~~----~~ Description:**
*${desc}*
`))
        em.addField(`❯ | Users Economy`, (`
<:CASH:882332283112161320> | Users Balance: ${bal}
<:Skills:882331901707321374> | Users Skill Points: ${skillpoints}
        `))
        em.addField(`❯ | Difficulty`, (`
Normal: ${Norml || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614> | Hard: ${Hard || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Very Hard: ${VeryHard || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Overkill: ${OverKill || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455> | Mayhem: ${Mayhem || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595> | Death Wish: ${DeathWish || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595><:DeathSentanceSkull:881139853050396702> | Death Sentence: ${DeathSentence || "<:CROSSED:881140525929992193>"}
        `))
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
        const DeathSentance1 = db.fetch(`bot.difficulty.DeathSentence`)

        let bal1 = db.get(`user.balance.${mentionedMember.id}`)
        if (bal1 == null) {
                bal1 = 0
        }

        let skillpoints1 = db.get(`user.skillpoints.${mentionedMember.id}`)
        if (skillpoints1 == null) {
                skillpoints1 = 0
        }

        var desc1 = db.get(`desc.${mentionedMember.id}`);
        if (desc1 == null) {
                desc1 = "This user doesn't have a description set."
        }

        var username1 = db.get(`user.username.${mentionedMember.id}`);
        if (username1 == null) {
                username1 = "None Set"
        }

        var business1 = db.get(`business.name.${mentionedMember.id}`);
        if (business1 == null) {
                business1 = "None Set"
        }

        const emm = new Discord.MessageEmbed()
        emm.setTitle(`${mentionedMember.user.username}'s Profile`)
        emm.setColor("#34B5C6")
        emm.setDescription(`This has to be changed to something. But what?`)
        emm.addField('❯ User Information', (`
\`\`\`FBI Files:\`\`\`
**~~--~~ Username:** 
*${username1}*
        
**~~--~~ Business:**
*${business1}*
        
**~~----~~ Description:**
*${desc1}*
      `))
        emm.addField(`❯ | Users Economy`, (`
Users Balance: ${bal1}
Users Skill Points: ${skillpoints1}
        `))
        emm.addField(`Difficulty`, (`
Normal: ${Norml1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614> | Hard: ${Hard1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Very Hard: ${VeryHard1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614> | Overkill: ${OverKill1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455> | Mayhem: ${Mayhem1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595> | Death Wish: ${DeathWish1 || "<:CROSSED:881140525929992193>"}
<:HardSkull:881139853109100614><:HardSkull:881139853109100614><:HardSkull:881139853109100614><:MayhemSkull:881139853004263455><:DeathWishSkull:881139852802924595><:DeathSentanceSkull:881139853050396702> | : ${DeathSentance1 || "<:CROSSED:881140525929992193>"}
        `))
        emm.setFooter(mentionedMember.user.username, mentionedMember.user.avatarURL())
        if (mentionedMember) return message.channel.send(emm)
    }
}