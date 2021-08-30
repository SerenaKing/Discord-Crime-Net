const {MessageEmbed} = require("discord.js")
const db = require("quick.db")

module.exports = {
	name: "add-money",
	category: "economy",
	aliases: ["addcash", "cashadd"],
	run: async (client, message, args) => {

		message.delete()

		if (message.author.id !== "871877975346405388") return

		if (!args[0])
			return message.channel.send(`Specify a amount to add.`)
		if (isNaN(args[0]))
			return message.channel.send(`This is not a number.`)

		let user = message.mentions.users.first() || message.author

		// message.channel.send(`Added ${args[0]} to ${user}`)

		const embed = new MessageEmbed()
			.setTitle(`Money add (By admin!)`)
			.setColor("RED")
			.setThumbnail(client.user.displayAvatarURL())
			.setDescription(`Amount: ${args[0]} has been added to: <@!${user.id}>`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
		message.channel.send(embed)
		db.add(`user.balance.${user.id}`, args[0])
	}
}