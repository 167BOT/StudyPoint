class Command {
  constructor(client, message, prefix) {
    this.client = client;
    this.message = message;
    this.prefix = prefix;
    this.channel = message.channel;
    this.author = message.author;
    this.guild = message.guild;
    this.images = message.attachments;
    this.member = message.member;
    this.content = message.content;

    this.args = this.content
      .trim()
      .slice(prefix.length)
      .split(" ");
    this.command = this.args
      .shift().toLowerCase();
  }
}

module.exports = Command;