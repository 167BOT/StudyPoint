const { resolve } = require("path"),
      { readdirSync } = require("fs");

/**
 * @function commandHandler Para cargar los comandos en caché
 * @param {Object} client El cliente/bot
 */

function commandHandler(client) {
  let path = resolve(__dirname, "..", "commands"),
      regexp = new RegExp(/\.json|\.js|\.txt|\.env/gm);// => only folders!
      folders = readdirSync(path).filter(folder => !regexp.test(folder)),
      commands = client.commands
  
  for (let category of folders) {
    let files = readdirSync(
      resolve(path, category)
    ).filter(file => file.endsWith('.js'))

    for (let file of files) {
      let content = require(
        resolve(path, category, file)
      );

      content.category = category;
      commands.set(file.replace('.js', ''), content);
    }
  }
}

module.exports = commandHandler;
