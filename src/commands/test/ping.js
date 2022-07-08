module.exports = {
  name: 'ping',
  alias: ["pong"],
  options: null,
  admin: true,
  disable: false,
  execute: ({channel} = options) => {
    channel.send('Pong!')
  }
}