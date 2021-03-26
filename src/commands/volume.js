const execute = (bot, msg, args) => {
     const queue = bot.queues.get(msg.guild.id);
     if (!queue) {
          return msg.reply("Tem nenhuma música tocando não man.");
     }
     const volume = Number(args.join(" "));
     if (isNaN(volume) || volume < 0 || volume > 10) {
          return msg.reply("O volume é entre 0 e 10, não inventa moda não!");
     }
     queue.dispatcher.setVolume(volume / 10);
     queue.volume = volume;
     bot.queues.set(msg.guild.id, queue);

     console.log(`Volume in "${msg.guild.name}" was changed to ${queue.volume}`);
};

module.exports = {
     name: "vol",
     help: "Ajusta o volume numa escala de 0 a 10",
     execute,
};