const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "store",
	category: "economy",
	run: async (client, message, args) => {
		
		message.delete()

		const embed = new MessageEmbed()
			.setTitle(`Crime.net | Store`)
			.setColor("GREEN")
			.setThumbnail(client.user.displayAvatarURL())
			.setDescription(`
\`\`\` Body Armor\`\`\`
Suit: 0
Light Body Armor: 2.000
Medium Body Armor: 15.000
Heavy Body Armor: 30.000
Full Body Armor: Requires Iron Man Skill: 60.000
\`\`\` Weapons \`\`\`
M9:
M1911:
Desert Eagle:
\`\`\` Gadgets \`\`\`
Throwing Knife:
			
Grenade:
Smoke Grenade:
			
C4/Trip Mines:		
			`)
			.setFooter(message.author.tag, message.author.displayAvatarURL())
			.setTimestamp()
		message.channel.send(embed)
	}
}

/*
---- Weapons
-- Pistols
M9
M1911
Desert Eagle

-- Sub Machine Guns
Tec-9
Uzi

-- Assault Rifles
M4
AK-47
AUG-A3

-- Shotguns
SPAS-12
AA-12

-- Snipers
Hecate II
M107

-- LMG's
M60


---- Armor
Suit
Light Body Armor
Medium Body Armor
Heavy Body Armor
Full Body Armor

--- Gadgets
Throwing Knife

Grenade
Smoke Grenade

C4/Trip Mines

*/