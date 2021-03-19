const execute = (bot, msg, args) => {
     const queue = bot.queues.get(msg.guild.id);
     if (!queue) {
          return msg.reply("Tem nenhuma música tocando não man.");
     }
     queue.dispatcher.pause();
     msg.channel.send(`A fila foi pausada!⏸️`);
};

module.exports = {
     name: "pause",
     help: "Pausa a reprodução de música atual",
     execute,
};