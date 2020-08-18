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

client.login("NzMzODgxNzc4MzA0OTc0OTA5.XxJmqg.xB4D-Vmjbpoh0jwYaNwAfpXcdts")
