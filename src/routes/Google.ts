import { logger } from '@4lch4/backpack'
import axios from 'axios'
import { Elysia, t } from 'elysia'
import { DiscordWebhookPayload } from '../lib'

const UNKNOWN_STRING = 'unknown'

export const GoogleRoutes = new Elysia({ name: 'Google-Routes' })
  .get(
    '/google',
    async ctx => {
      const webhookPayload: DiscordWebhookPayload = { content: ctx.body.incident.summary }
      const webhookRes = await axios.post(process.env.DISCORD_WEBHOOK_URL!, webhookPayload)

      logger.log('success', `[GoogleRoutes#GET]: Request sent to Discord Webhook...`, {
        body: ctx.body,
        webhookPayload,
        webhookRes,
      })
    },
    {
      body: t.Object({
        version: t.String({ default: UNKNOWN_STRING }),
        incident: t.Object({
          incident_id: t.String({ default: UNKNOWN_STRING }),
          scoping_project_id: t.String({ default: UNKNOWN_STRING }),
          scoping_project_number: t.Number({ default: 0 }),
          url: t.String({ default: UNKNOWN_STRING }),
          started_at: t.String({ default: UNKNOWN_STRING }),
          ended_at: t.String({ default: UNKNOWN_STRING }),
          state: t.String({ default: UNKNOWN_STRING }),
          summary: t.String({ default: UNKNOWN_STRING }),
          apigee_url: t.String({ default: UNKNOWN_STRING }),
          observed_value: t.String({ default: UNKNOWN_STRING }),
          resource: t.Object({
            type: t.String({ default: UNKNOWN_STRING }),
            labels: t.Any(),
          }),
          resource_type_display_name: t.String({ default: UNKNOWN_STRING }),
          resource_id: t.String({ default: UNKNOWN_STRING }),
          resource_display_name: t.String({ default: UNKNOWN_STRING }),
          resource_name: t.String({ default: UNKNOWN_STRING }),
          metric: t.Object({
            type: t.String({ default: UNKNOWN_STRING }),
            displayName: t.String({ default: UNKNOWN_STRING }),
            labels: t.Any(),
          }),
          metadata: t.Any(),
          policy_name: t.String({ default: UNKNOWN_STRING }),
          policy_user_labels: t.Any(),
          documentation: t.String({ default: UNKNOWN_STRING }),
          condition: t.Any(),
          condition_name: t.String({ default: UNKNOWN_STRING }),
          threshold_value: t.String({ default: UNKNOWN_STRING }),
        }),
      }),
    }
  )
  .post(
    '/google',
    async ctx => {
      const webhookPayload: DiscordWebhookPayload = { content: ctx.body.incident.summary }
      const webhookRes = await axios.post(process.env.DISCORD_WEBHOOK_URL!, webhookPayload)

      logger.log('success', `[GoogleRoutes#POST]: Request sent to Discord Webhook...`, {
        body: ctx.body,
        webhookPayload,
        webhookRes,
      })
    },
    {
      body: t.Object({
        version: t.String({ default: UNKNOWN_STRING }),
        incident: t.Object({
          incident_id: t.String({ default: UNKNOWN_STRING }),
          scoping_project_id: t.String({ default: UNKNOWN_STRING }),
          scoping_project_number: t.Number({ default: 0 }),
          url: t.String({ default: UNKNOWN_STRING }),
          started_at: t.String({ default: UNKNOWN_STRING }),
          ended_at: t.String({ default: UNKNOWN_STRING }),
          state: t.String({ default: UNKNOWN_STRING }),
          summary: t.String({ default: UNKNOWN_STRING }),
          apigee_url: t.String({ default: UNKNOWN_STRING }),
          observed_value: t.String({ default: UNKNOWN_STRING }),
          resource: t.Object({
            type: t.String({ default: UNKNOWN_STRING }),
            labels: t.Any(),
          }),
          resource_type_display_name: t.String({ default: UNKNOWN_STRING }),
          resource_id: t.String({ default: UNKNOWN_STRING }),
          resource_display_name: t.String({ default: UNKNOWN_STRING }),
          resource_name: t.String({ default: UNKNOWN_STRING }),
          metric: t.Object({
            type: t.String({ default: UNKNOWN_STRING }),
            displayName: t.String({ default: UNKNOWN_STRING }),
            labels: t.Any(),
          }),
          metadata: t.Any(),
          policy_name: t.String({ default: UNKNOWN_STRING }),
          policy_user_labels: t.Any(),
          documentation: t.String({ default: UNKNOWN_STRING }),
          condition: t.Any(),
          condition_name: t.String({ default: UNKNOWN_STRING }),
          threshold_value: t.String({ default: UNKNOWN_STRING }),
        }),
      }),
    }
  )
