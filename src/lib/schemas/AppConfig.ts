import { Static, t } from 'elysia'

export const AppConfig = t.Object({
  /** An object containing the necessary properties for interacting with my MongoDB cluster. */
  mongo: t.Object({
    /** The full URL for connecting to the MongoDB cluster. */
    url: t.String({
      title: 'MongoDB URL',
      description: 'The URL of the MongoDB database.',
      default: 'mongodb://localhost:27017',
    }),

    /** The name of the MongoDB database to use. */
    dbName: t.String({
      title: 'MongoDB Database Name',
      description: 'The name of the MongoDB database.',
      default: 'notifications',
    }),

    /** The name of the MongoDB collection to store notifications. */
    dbCollection: t.String({
      title: 'MongoDB Collection Name',
      description: 'The name of the MongoDB collection to store notifications.',
      default: 'notifications',
    }),
  }),

  /** An object containing the necessary properties for interacting with Discord. */
  discord: t.Object({
    /** The URL for my primary Discord Webhook that receives notifications/events. */
    webhookUrl: t.String({
      title: 'Discord Webhook URL',
      description: 'The URL of the Discord webhook to send notifications to.',
      default: 'https://discord.com/api/webhooks/...',
    }),
  }),
})

export type AppConfig = Static<typeof AppConfig>

export function getConfig(): AppConfig {
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
  const mongoDbCollection = process.env.MONGODB_COLLECTION
  const mongoDbName = process.env.MONGODB_NAME || 'notigate'
  const mongoUrl = process.env.MONGODB_URL || process.env.MONGO_URL

  if (!mongoUrl) throw new Error('No MongoDB URL located...')
  if (!mongoDbName) throw new Error('No MongoDB database name located...')
  if (!mongoDbCollection) throw new Error('No MongoDB collection name located...')
  if (!discordWebhookUrl) throw new Error('No Discord webhook URL located...')

  return {
    mongo: {
      url: mongoUrl,
      dbName: mongoDbName,
      dbCollection: mongoDbCollection,
    },
    discord: {
      webhookUrl: discordWebhookUrl,
    },
  }
}
