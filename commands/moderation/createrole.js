const Discord = require('discord.js');

module.exports = {
 name: 'createrole',
 category: 'moderation',
 description: "Create a role in your server easily!",
 aliases: ["crole", "newrole", "nrole"],
 usage: "<hex color code (#000000 for none)> <Role name>",
 run: async(client, message, args) => {
 const server = message.guild;
 const rolename = args.slice(1).join(" ");
 const rolecolor = args[0];
 if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.reply("Sorry you do not have **Manage Roles** permission!");
 if(message.author.bot) return;
 if(!rolename) return message.reply("Please provide a name for the role!");
 server.createRole({
   name: rolename,
   color: rolecolor
})
message.channel.send(`:white_check_mark: ***Successfully created role __${rolename}__!***`)
}
}
