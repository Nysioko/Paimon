module.exports = {
    name: "pp",
    description: "pp",
    execute(client, message, args, command) {
            if (!message.mentions.users.size) {
                message.channel.send(`Hiaaaaaa, here is your profile picture ${message.author}:`);
                message.channel.send(`${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 256 })}`);
            }
    },
};