const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', async () => {
    console.log(`${client.user.username} Is Online!`)

    client.user.setActivity('On Development', { type: 'PLAYING' })

    command(client, 'vote', (message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        message.reply('Vote Link:\nhttps://docs.google.com/forms/d/e/1FAIpQLSd6CYW2z6Tz76nF4nk4zLR3Gd598H2d-ReLSDHyLi8UtFTsLA/viewform?usp=sf_link')
    })
})

client.login(process.env.token)