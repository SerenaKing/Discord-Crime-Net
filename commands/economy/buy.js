const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
	name: "buy",
	category: "economy",
	run: async (client, message, args) => {

		message.delete()

		let messageAuthor = db.fetch(`user.balance.${message.author.id}`)
		let skillAuthor = db.fetch(`user.skillpoints.${message.author.id}`)
		

		if (args[0] == "Suit") {
			message.channel.send(`You have bought the **Basic Suit**!`)
			db.subtract(`user.balance.${message.author.id}`, 0)
			await db.set(`items.suit.${message.author.id}`, "<:CHECKED:881140761356292096>")
		} else if (args.slice(0).join(' ') == "Light Body Armor") {
			if (messageAuthor < 2000) return message.channel.send(`You don't have the \`2.000\` required to buy this!`)
			message.channel.send(`You have bought **Light Body Armor**!`)
			db.subtract(`user.balance.${message.author.id}`, 2000)
			await db.set(`items.lba.${message.author.id}`, "<:CHECKED:881140761356292096>")
		} else if (args.slice(0).join(' ') == "Full Body Armor") {
			if (messageAuthor < 60000) return message.channel.send(`You don't have the \`60.000\` required to buy this!`)
			if (db.fetch(`skills.ironman.${message.author.id}`) == null) {
				return message.channel.send(`You don't have the required \`Iron Man\` Skill to buy this!.`)
			} else if (db.fetch(`skills.ironman.${message.author.id}`, "<:CHECKED:881140761356292096>")) {
				message.channel.send(`You have bought **Full Body Armor**!`)
				await db.set(`items.fba.${message.author.id}`, "<:CHECKED:881140761356292096>")
				await db.subtract(`user.balance.${message.author.id}`, 60000)
			}
		} else if (args.slice(0).join(" ") == "Iron Man") {
			if (skillAuthor < 18) return message.channel.send(`You don't have the required \`18\` Skill Points to buy this!`)
			if (skillAuthor > 18 || skillAuthor == 18) {
				message.channel.send(`You bought the \`Iron Man\` Skill!`)
				db.subtract(`user.skillpoints.${message.author.id}`, 18)
				await db.set(`skills.ironman.${message.author.id}`, "<:CHECKED:881140761356292096>")
			}
		} else {
			message.channel.send(`That is not an item in our store. Please use \`CN!store\` to see the full list! *Case Sensitive*`)
		} 
	}
}

// You don't have the \`Iron Man\` Skill required to buy this.