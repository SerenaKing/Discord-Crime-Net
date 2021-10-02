const { Client, Collection, MessageEmbed } = require("discord.js")

const fs = require("fs")
const ms = require('ms')

const quickdb = require("quick.db")

const chalk = require("chalk")

const prefix = "CN!";
const version = "Beta 1.0";
// import { token } from "./json/botconfig.json"
const { token } = require("./json/botconfig.json")

const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

const disbut = require('discord-buttons')(client);

// let test1 = ['Crime Net', 'Largest Criminal Network System', `All information is public! they eye is watching!`, `Version: ${version}`],
//     i = 0; -- This didn't work. Should it work? (Old Client Activity removed)

const activities = [
    { name: `Crime.net`, type: 'WATCHING'},
    { name: `Largest Criminal Network`, type: 'WATCHING'},
    { name: `All Crime unfold!`, type: 'WATCHING'},
    { name: `Version: ${version}`, type: 'LISTENING'}
    // { name: `Testing 😳`, type: 'CUSTOM_STATUS'} -- Bots can't seem to have a custom status
]

client.on('ready', () => {

    // fs.writeFile('db.txt', JSON.stringify(quickdb.all()), function(e) {
    //     if(e) console.log(e)
    //     console.log('Success!')
    // })

    // client.user.setActivity('Game', { type: "COMPETING", type: "CUSTOM_STATUS", type: "LISTENING", type: "PLAYING", type: "STREAMING", type: "WATCHING"})
    // Define all other activity types.

    client.user.setPresence({ status: "online", activity: activities[0] });

    let activity = 1;

    setInterval(() => {
        activities[4] = { name: `CN!help | ${client.guilds.cache.size} guilds`, type: 'WATCHING' };
        activities[5] = { name: `CN!help | ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, type: 'WATCHING' }; 
        if (activity > 5) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
    }, 10000);

    setTimeout(async function () {
        console.log(chalk.white(`[${chalk.green(`INFO`)}${chalk.white(`] - Connecting...`)}`));
    }, ms('1s'));
    setTimeout(async function () {
        console.log(chalk.white(`[${chalk.green(`INFO`)}${chalk.white(`] - Logged in as: ${client.user.tag}`)}`));
    }, ms('3s'));
})

client.on('clickButton', async (button) => {

});

client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member)
        message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) command.run(client, message, args);

});

client.on("guildMemberAdd", (guildMember) => {

    if (guildMember.guild.id === "881135798223769640") {
        const welcomeChannel = guildMember.guild.channels.cache.get("881805184676798484")
        const embed = new MessageEmbed()
            .setTitle(`Crime.net | Beta Program`)
            .setColor("RED")
            .setDescription(`
Welcome, <@!${guildMember.user.id}>

You have joined the \`Crime.net\` Beta Program. 

This server is mainly for the testing of new features of the bot & other game breaking changes.
If you have been invited to this server by a developer then you're blessed by the crime.net gods because not only will you have access to special perks.
you will also be able to directly get your suggestions seen easier and have more limited access to the higher standards. We might even user your name!

- Crime.net
            `)
            .setFooter(guildMember.user.tag, guildMember.user.displayAvatarURL())
            .setTimestamp()
        welcomeChannel.send(embed)
    } else if (guildMember.guild.id === "") {
    } else {
        return
    }
})

client.login(token);