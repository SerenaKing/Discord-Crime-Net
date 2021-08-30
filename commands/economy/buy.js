const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
	name: "buy",
	category: "economy",
	run: async (client, message, args) => {

		message.delete()

		let messageAuthor = db.fetch(`user.balance.${message.author.id}`)

		if (args[0] == "Suit") {
			message.channel.send(`You have bought the **Basic Suit**!`)
			db.subtract(`user.balance.${message.author.id}`, 0)
			await db.set(`items.suit.${message.author.id}`, "<:CHECKED:881140761356292096>")
		} else if (args.slice(0).join(' ') == "Light Body Armor") {
			if (messageAuthor < 2000) return message.channel.send(`You don't have the \`2000\` required to buy this!`)
			message.channel.send(`You have bought **Light Body Armor**!`)
			db.subtract(`user.balance.${message.author.id}`, 2000)
			await db.set(`items.lba.${message.author.id}`, "<:CHECKED:881140761356292096>")
		} else if (args.slice(0).join(" ") == "Full Body Armor") {
			// if (messageAuthor < 60000) 
			// 	return message.channel.send(`You don't have the \`60.000\` required to buy this!`)

			// if (db.fetch(`items.fba.${message.author.id}`, "<:CROSSED:881140525929992193>")) 
			// 	return message.channel.send(`You don't have the required skill \`Iron Man\` To buy this item!`)

			// if (db.fetch(`items.fba.${message.author.id}`, "<:CHECKED:881140761356292096>")) 
			// 	return message.channel.send(`You have succesfully bought **Full Body Armor**!`)
			// 		.then(db.set(`items.fba.${message.author.id}`, "<:CHECKED:881140761356292096>")
			// 			.then(db.subtract(`user.balance.${message.author.id}`, 60000)))
		} else {
			message.channel.send(`That is not an item in our store. Please use \`CN!store\` to see the full list! *Case Sensitive*`)
		}

	}
}