const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
    name: "removeDescription",
    category: "account",
    aliases: ["removeinfo", "removedesc"],
    run: async (client, message, args) => {

        message.delete()

        let test = db.get(`desc.${message.author.id}`)

        if (test) {
            db.delete(`desc.${message.author.id}`);
            message.author.send(`Your description has been removed!`)
        } else if (!test) {
            message.author.send(`You didn't have a description in the first place.`)
        }
    }
}