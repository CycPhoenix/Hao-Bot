const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const loadCommands = require('./commands/load-commands')
const commandBase = require('./commands/command-base')

client.on('ready', async () => {
    console.log(`${client.user.username} Is Online!`)

    client.user.setActivity('On Development', { type: 'PLAYING' })
    
    commandBase.loadPrefixes(client)
    loadCommands(client)
})

client.login(config.token)