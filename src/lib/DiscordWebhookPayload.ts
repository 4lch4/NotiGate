/** This type represents the shape of an object that is sent to a Discord Webhook. */
export type DiscordWebhookPayload = {
  content: string
  embeds?: DiscordEmbed[]
  username?: string
  avatar_url?: string
  thread_name?: string
  flags?: number
}

export type DiscordEmbed = {
  title?: string
  description?: string
  url?: string
  color?: number
  fields?: DiscordField[]
  author?: DiscordAuthor
  footer?: DiscordFooter
  timestamp?: string
  image?: DiscordImage
  thumbnail?: DiscordImage
}

export type DiscordAuthor = {
  name: string
  url: string
  icon_url: string
}

export type DiscordField = {
  name: string
  value: string
  inline?: boolean
}

export type DiscordFooter = {
  text: string
  icon_url: string
}

export type DiscordImage = {
  url: string
}
