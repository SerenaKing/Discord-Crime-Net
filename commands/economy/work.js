const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
const ms = require("ms")

module.exports  = {
	name: "work",
	category: "economy",
	aliases: ["job"],
	run: async (client, message, args) => {

		message.delete()

		let timeout = 86400000
		let daily = await db.fetch(`user.daily.${message.author.id}`)

		if (daily !== null && timeout - (Date.now() - daily) > 0) {
			let time = ms(timeout - (Date.now() - daily));

			message.channel.send(`You have to wait ~24 hours before using this command again!`)
		} else if (args.slice(0).join(' ') == "Mall Crasher") {
			if (db.get(`bot.difficulty.Normal`)) {
				const condition = [
					"You have completed the mission!",
					"You have failed the mission!"
				]

				let conrand = Math.floor((Math.random() * condition.length))
				let con = condition[conrand]

				// const randomAmount = Math.floor(Math.random() * 10000) + 1
				const randomAmount = [
					"20000",
					"19000",
					"15000",
					"24599",
					"10274",
					"9052",
					"2053",
					"1024",
					"92",
					"10593"
				]

				// Success
				if (con === "You have completed the mission!") {
					const embed = new MessageEmbed()
						.setTitle(`Succesfully completed the heist! | Mall Crasher`)
						.setColor("GREEN")
						.setDescription(`You have earned: ${randomAmount}`)
						.setFooter(message.author.tag, message.author.displayAvatarURL())
					message.channel.send(embed)

					db.add(`user.balance.${message.author.id}`, randomAmount)
					db.set(`user.daily.${message.author.id}`, Date.now())
				} else if (con === "You have failed the mission!") {
					const embed2 = new MessageEmbed()
					.setTitle(`Failed the heist!`)
					.setColor("RED")
					.setDescription(`You didn't earn anything!`)
					.setFooter(message.author.tag, message.author.displayAvatarURL())
				message.channel.send(embed2)

				// db.add(`user.balance.${message.author.id}`, randomAmount)
				db.set(`user.daily.${message.author.id}`, Date.now())
				}
			} else if (db.get(`bot.difficulty.Hard`)) {

			} else if (db.get(`bot.difficulty.VeryHard`)) {

			} else if (db.get(`bot.difficulty.Overkill`)) {

			} else if (db.get(`bot.difficulty.Mayhem`)) {

			} else if (db.get(`bot.difficulty.DeathWish`)) {

			} else if (db.get(`bot.difficulty.DeathSentence`)) {

			}
		} else if (args[0] == "") {

		}
	}
}