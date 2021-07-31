const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')

client.on('ready', async () => {
    console.log(`${client.user.username} Is Online!`)

    client.user.setActivity('On Development', { type: 'PLAYING' })
})

client.login(config.token)