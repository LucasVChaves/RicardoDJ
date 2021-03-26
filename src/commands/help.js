const execute = (bot, msg, args) => {
     let string = "**>------ AJUDA ------<**\n\n";
     bot.commands.forEach((command) => {
          if (command.help) {
               string += `**${process.env.PREFIX}${command.name}**: ${command.help}\n`;
          }
     });

     console.log(`Help command used in "${msg.guild.name}"`);

     return msg.channel.send(string);
};

module.exports = {
     name: "help",
     help: "Exibe a ajuda de todos os comandos",
     execute,
};