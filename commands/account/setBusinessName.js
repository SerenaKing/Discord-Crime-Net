const db = require("quick.db")

module.exports = {
    name: "setBusinessName",
    category: "account",
    aliases: ["setcompany", "setbusiness"],
    run: async (client, message, args) => {

        message.delete()

        const desc = args.join(" ")

        let test = db.get(`business.name.${message.author.id}`)

        if (!test) {
            db.set(`business.name.${message.author.id}`, desc);
        } else {
            db.delete(`business.name.${message.author.id}`), db.set(`business.name.${message.author.id}`, desc);
        }

        message.author.send(`Your Bussiness name should've been updated!
It has been updated to.

\`\`\`
${db.get(`business.name.${message.author.id}`)}
\`\`\`
        `)
    }
}