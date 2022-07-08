/**
 * @param {String} name El nombre del evento
 * @param {Boolean} disable Para saber si el evento está desactivado
 * @param {Boolean} on Para que el evento se pueda reproducir varias veces
 * @param {Boolean} once Para que el evento solo se pueda reproducir una vez
 * @param {Function} execute La función del evento
 * @function execute Para poder correr el evento
 */

module.exports = {
  name: 'ready',
  disable: false,
  on: true,
  once: false,
  execute: (client) => {
    console.log(
      'Listo para aprender'
    )
  }
}