require('dotenv').config();

const { Client, Intents, Collection } = require("discord.js"),
      intents = 32767;
      client = new Client({
          intents: intents
      });

client.commands = new Collection();

const commandHandler = require('./handlers/commands.js'),
      eventHandler = require('./handlers/events.js');

eventHandler(client);// => execute events!
commandHandler(client);// => execute commands!

client.login(process.env.TOKEN)