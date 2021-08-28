const {
    Client,
    Collection,
    MessageEmbed
} = require("discord.js");

const fs = require("fs");
const ms = require('ms')

const chalk = require("chalk")

const prefix = "CN!";
const version = "Beta 1.0";
const botconfig = require("./json/botconfig.json")

const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

const disbut = require('discord-buttons')(client);

// let test1 = ['Crime Net', 'Largest Criminal Network System', `All information is public! they eye is watching!`, `Version: ${version}`],
//     i = 0;

const activities = [
    { name: `Crime.net`, type: 'WATCHING'},
    { name: `Largest Criminal Network`, type: 'WATCHING'},
    { name: `All Crime unfold!`, type: 'WATCHING'},
    { name: `Version: ${version}`, type: 'LISTENING'}
    // { name: `Testing 😳`, type: 'CUSTOM_STATUS'}
]

client.on('ready', () => {

    // client.user.setActivity('Game', { type: "COMPETING", type: "CUSTOM_STATUS", type: "LISTENING", type: "PLAYING", type: "STREAMING", type: "WATCHING"})

    client.user.setPresence({ status: "online", activity: activities[0] });

    let activity = 1;

    setInterval(() => {
        activities[6] = { name: `CN!help | ${client.guilds.cache.size} guilds`, type: 'WATCHING' };
        activities[7] = { name: `CN!help | ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, type: 'WATCHING' }; 
        if (activity > 7) activity = 0;
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

client.login(botconfig.token);