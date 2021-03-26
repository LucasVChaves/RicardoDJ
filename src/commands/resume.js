const execute = (bot, msg, args) => {
     const queue = bot.queues.get(msg.guild.id);
     if (!queue) {
          return msg.reply("Tem nenhuma música tocando não man.");
     }
     queue.dispatcher.resume();
     msg.channel.send(`A fila foi despausada. O show tem que continuar! ▶️`);

     console.log(`Resume command used in "${msg.guild.name}"`);
};

module.exports = {
     name: "resume",
     help: "Continua a reprodução de música atual",
     execute,
};