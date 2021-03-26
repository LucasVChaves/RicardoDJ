const execute = (bot, msg, args) => {
     const queue = bot.queues.get(msg.guild.id);
     if (!queue) {
          return msg.reply("Tem nenhuma música tocando não man.");
     }
     queue.songs = [];
     bot.queues.set(msg.guild.id, queue);
     queue.dispatcher.end();

     msg.channel.send(`Parando o baile. Valeu!! 👋`);

     console.log(`Stop command used in "${msg.guild.name}"`);
};

module.exports = {
     name: "stop",
     help: "Para a reprodução de músicas no servidor",
     execute,
};