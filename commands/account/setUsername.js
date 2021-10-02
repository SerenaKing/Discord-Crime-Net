const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
    name: "setUsername",
    category: "account",
    aliases: ["setname"],
    run: async (client, message, args) => {

        message.delete()

        const desc = args.join(" ")

        // if (desc == "")

        let test = db.get(`user.username.${message.author.id}`)

        if (!test) {
            db.set(`user.username.${message.author.id}`, desc);
        } else {
            db.delete(`user.username.${message.author.id}`), db.set(`user.username.${message.author.id}`, desc);
        }

        message.author.send(`Your username should've been updated!
It has been updated to.

\`\`\`
${db.get(`user.username.${message.author.id}`)}
\`\`\`
        `)
    }
}