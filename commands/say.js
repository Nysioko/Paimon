module.exports = {
	name: "say",
	description: "say",
    execute(client, message, args) {
        const say = args.join(" ");
        if (message.author.id != "650432748275892253") {
            message.channel.send("Oh... I'm sorry but this command doesn't exist");
        }
        else {
            message.delete({setTimeout: 1});
            message.channel.send(`${say}`);
        }
    }
}