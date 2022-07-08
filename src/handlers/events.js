const { resolve } = require("path"),
      { readdirSync } = require("fs");

/**
 * @function eventHandler Para correr todos los eventos
 * @param {Object} client El cliente/bot
 */

function eventHandler(client) {
  let path = resolve(__dirname, '..', 'events'),
      files = readdirSync(path).filter(file => file.endsWith('.js'));

  for (let file of files) {
    let event = require(
      resolve(path, file)
    )

    if (event.disable) continue;
    let name = event.name;

    if (event.on) {
      client.on(name, (...args) => event.execute(client, ...args))
    } else if (event.once) {
      client.once(name, (...args) => event.execute(client, ...args))
    }
  }
}

module.exports = eventHandler;
