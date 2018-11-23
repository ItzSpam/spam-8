const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "506799927561814017"; // ايدي السررفر
var channel = "506934154169024536";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})



 
















 

 

client.login(process.env.BOT_TOKEN)
