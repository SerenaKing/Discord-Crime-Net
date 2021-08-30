const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
	name: "inventory",
	category: "account",
	aliases: ["inv"],
	run: async (client, message, args) => {

		message.delete()

		// DB Sutff
		const suit = db.fetch(`items.suit.${message.author.id}`)
		const lba = db.fetch(`items.lba.${message.author.id}`)
		const mba = db.fetch(`items.mba.${message.author.id}`)
		const hba = db.fetch(`items.hva.${message.author.id}`)
		const fba = db.fetch(`items.fba.${message.author.id}`)

		const m9 = db.fetch(`items.m9.${message.author.id}`)
		const m1911 = db.fetch(`items.m1911.${message.author.id}`)
		const deagle = db.fetch(`items.deagle.${message.author.id}`)

		const tknife = db.fetch(`items.tknife.${message.author.id}`)
		const grenade = db.fetch(`items.grenade.${message.author.id}`)
		const sgrenade = db.fetch(`items.tgrenade.${message.author.id}`)
		const c4 = db.fetch(`items.c4.${message.author.id}`)

		const ironman = db.fetch(`skills.ironman.${message.author.id}`)

		const embed = new MessageEmbed()
			.setTitle(`User Inventory`)
			.setThumbnail(client.user.displayAvatarURL())
			.setColor("GREEN")
			.setDescription(`
			`)
			.addField(`Body Armor`, `
Basic Suit: ${suit || "<:CROSSED:881140525929992193>"}
Light Body Armor: ${lba || "<:CROSSED:881140525929992193>"}
Medium Body Armor: ${mba || "<:CROSSED:881140525929992193>"}
Heavy Body Armor: ${hba || "<:CROSSED:881140525929992193>"}
Full Body Armor: ${fba || "<:CROSSED:881140525929992193>"}
`)
			.addField(`Weapons`, `
M9: ${m9 || "<:CROSSED:881140525929992193>"}
M1911: ${m1911 || "<:CROSSED:881140525929992193>"}
Desert Eagle: ${deagle || "<:CROSSED:881140525929992193>"}
`)

			.addField(`Gadgets`, `
Throwing Knife: ${tknife || "<:CROSSED:881140525929992193>"}
Grenade: ${grenade || "<:CROSSED:881140525929992193>"}
Smoke Grenade: ${sgrenade || "<:CROSSED:881140525929992193>"}
C4/Trip Mines: ${c4 || "<:CROSSED:881140525929992193>"}
`)
			.addField(`Skills`, `
Mastermind

Technician
Iron Man: ${ironman || "<:CROSSED:881140525929992193>"}

Ghost

Fugative
`)
			.setFooter(message.author.tag, message.author.displayAvatarURL())
			.setTimestamp()
		message.channel.send(embed)
	}
}