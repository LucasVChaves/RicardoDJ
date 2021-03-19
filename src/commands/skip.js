const playSong = require("./play").playSong;

const execute = (bot, msg, args) => {
     const queue = bot.queues.get(msg.guild.id);
     if (!queue) {
          return msg.reply("Tem nenhuma música tocando não man.");
     }
     queue.songs.shift();
     bot.queues.set(msg.guild.id, queue);
     playSong(bot, msg, queue.songs[0]);

     msg.channel.send(`A faixa atual foi pulada brother! ⏭️`);
};

module.exports = {
     name: "skip",
     help: "Pula para a próxima música",
     execute,
};