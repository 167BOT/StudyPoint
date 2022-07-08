const Command = require('../commands/Command.js')

/**
 * @param {String} name El nombre del evento
 * @param {Boolean} disable Para saber si el evento está desactivado
 * @param {Boolean} on Para que el evento se pueda reproducir varias veces
 * @param {Boolean} once Para que el evento solo se pueda reproducir una vez
 * @param {Function} execute La función del evento
 * @function execute Para poder correr el evento
 */

module.exports = {
  name: "messageCreate",
  disable: false,
  on: true,
  once: false,
  execute: (client, message) => {
    let prefix = process.env.PREFIX,
        data = new Command(client, message, prefix)

    if (data.author.bot) return;
    if (!data.content.startsWith(prefix)) return;

    let command = client.commands.find(cmd => 
      cmd.name == data.command ||
      Array.isArray(cmd.alias) && 
      cmd.alias.includes(data.command)
    )

    if (!command) return;
    if (command.admin && data.author.id !== "702481362904678521") return;
    if (command.disable) return
    else command.execute(data);
  },
};
