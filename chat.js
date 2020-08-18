const discord = require("discord.js")
const client = new discord.Client()
const alexa = require('alexa-bot-api')
var chatbot = new alexa("aw2plm")

client.on('ready', () => {
  console.log('ready') 
});

client.on('error', console.error)
client.on('message', async message => {
  if(message.author.bot) return;
  let content = message.content; 
  if(message.channel.name !== "chat-with-alex") return;
  chatbot.getReply(content).then(r => message.channel.send(r))
});

client.login("NzQyNjMwMzY4ODYzMDYwMDY5.XzI6bQ.RLjrF5CptduhXvZg6JjGvPUcktg")
