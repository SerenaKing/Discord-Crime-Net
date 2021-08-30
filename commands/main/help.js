const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "help",
	category: "main",
	run: (client, message, args) => {

		message.delete()

		const embed = new MessageEmbed()
			.setTitle(`Crime.net | Help Offer`)
			.setColor("BLUE")
			.setDescription(`
\`\`\` Main Commands \`\`\`
help - Will show you this exact embed.
\`\`\` Economy Commands \`\`\`
buy - Will buy an item from the store.
pay - Pays out a different user.
store - View items you can buy.
work - Do a quick job to get some cash.
\`\`\` Account Commands \`\`\`
inventory - Shows which items you have bought.
profile - Show you are a different users profile.
removeDescription - Removes your current account Description.
setBusinessName - Sets your business name. (To remove set a different name)
SetDescription - Set an account description.
setUsername - Sets a username. (to remove set a different username)
\`\`\` Other Commands\`\`\`
			`)
			.setFooter(message.author.tag, message.author.displayAvatarURL())
			.setTimestamp()
		message.channel.send(`<@!${message.author.id}> You requested help?`, embed)
	}
}