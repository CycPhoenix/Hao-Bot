const mongo = require('../../mongo')
const punishmentLogSchema = require('../../schemas/punishment-log-schema')

module.exports = {
    commands: ['punishmentlogs', 'punishlogs', 'pl'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: "<Target user's @>",
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments) => {
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('Please specify someone to load punishments for.')
            return
        }

        const { guild } = message
        const { id } = target

        await mongo().then(async (mongoose) => {
            try {
                const results = await punishmentLogSchema.find({
                    guildId: guild.id,
                    userId: id,
                })

                let reply = 'Previous punishments:\n\n'

                for (const result of results) {
                    reply += `${result.command} was ran at ${new Date(
                        result.createdAt
                    ).toLocaleTimeString()}\n\n`
                }

                message.reply(reply)
            } finally {
                mongoose.connection.close()
            }
        })
    },
}