const {MessageEmbed} = require("discord.js")
const db = require("quick.db")

module.exports = {
	name: "pay",
	category: "economy",
	run: async (client, message, args) => {

		message.delete()

		let user = message.mentions.members.first()

		let member = db.fetch(`user.balance.${message.author.id}`)

		if (!user) {
			return message.channel.send(`You forgot to mention sombody to pay!`)
		}
		if (!args[1]) {
			return message.channel.send(`You forgot to set an amount that you want to pay.`)
		}
		if (message.content.includes('-')) {
			return message.channel.send(`You can not pay someone negative money!`)
		}
		if (member < args[1]) {
			return message.channel.send(`That's more money that you have got in your balance. Try a lower pay amount.`)
		}

		message.channel.send(`
Paying user: <@!${message.author.id}>
Receiving User: <@!${user.id}>

Received Amount: ${args[1]}
		`)
		db.add(`user.balance.${user.id}`, args[1])
		db.subtract(`user.balance.${message.author.id}`, args[1])
	}
}