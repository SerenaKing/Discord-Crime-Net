const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
    name: "setDescription",
    category: "account",
    aliases: ["setinfo", "setdesc"],
    run: async (client, message, args) => {

        message.delete()

        const desc = args.join(" ")

        let test = db.get(`desc.${message.author.id}`)

        if (!test) {
            db.set(`desc.${message.author.id}`, desc);
        } else {
            db.delete(`desc.${message.author.id}`), db.set(`desc.${message.author.id}`, desc);
        }

        message.author.send(`Your description should've been updated!
It has been updated to.

\`\`\`
${db.get(`desc.${message.author.id}`)}
\`\`\`
        `)
    }
}