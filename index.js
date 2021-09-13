const Discord = require('discord.js')
const server = require('./server.js')
const client = new Discord.Client();
const mySecret = process.env['DISCORD_BOT_SECRET']


// Example of a Discord Bot I'm currently learning. I love to learn to code!!!

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Command Lists
client.on("message", msg => {
  if (msg.content === "!CommandList") {
    msg.reply("!ping, !Greetings, !Goodbye")
  }
})

// Commands
client.on("message", msg => {
  if (msg.content === "!ping") {
    msg.reply("pong");
  }
})

client.on("message", msg => {
  if (msg.content === "!Greetings"){
    msg.reply("Howdy Partner! Have a wonderful day!")
  }
})

client.on("message", msg => {
  if (msg.content === "!Goodbye"){
    msg.reply("Goodbye! See you later aligator.")
  }
})

client.login(mySecret);