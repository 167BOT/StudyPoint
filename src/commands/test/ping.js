module.exports = {
  name: 'ping',
  alias: ["pong"],
  options: null,
  admin: false,
  disable: false,
  execute: ({channel} = options) => {
    channel.send('Pong!')
  }
}