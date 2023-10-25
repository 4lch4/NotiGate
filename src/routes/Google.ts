import { logger } from '@4lch4/backpack'
import axios from 'axios'
import { Elysia, t } from 'elysia'
import { DiscordWebhookPayload } from '../lib'

export const GoogleRoutes = new Elysia({ name: 'Google-Routes' })
  .onError(ctx => {
    logger.error(`[GoogleRoutes#onError]: ctx.error`, ctx.error)
    logger.error(`[GoogleRoutes#onError]: ctx.body`, ctx.body)
    logger.error(`[GoogleRoutes#onError]: ctx.query`, ctx.query)
    logger.error(`[GoogleRoutes#onError]: ctx.params`, ctx.params)
    logger.error(`[GoogleRoutes#onError]: ctx.headers`, ctx.headers)
  })
  .get('/google', async ctx => {
    // const webhookPayload: DiscordWebhookPayload = { content: ctx.body.incident.summary }
    // const webhookRes = await axios.post(process.env.DISCORD_WEBHOOK_URL!, webhookPayload)

    logger.log('success', `[GoogleRoutes#GET]: Request received...`, { ctx })
  })
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
        version: t.String(),
        incident: t.Object({
          incident_id: t.String(),
          scoping_project_id: t.String(),
          scoping_project_number: t.Number(),
          url: t.String(),
          started_at: t.Number(),
          ended_at: t.Number(),
          state: t.String(),
          summary: t.String(),
          apigee_url: t.String(),
          observed_value: t.String(),
          resource: t.Object({
            type: t.String(),
            labels: t.Object({
              example: t.String(),
            }),
          }),
          resource_type_display_name: t.String(),
          resource_id: t.String(),
          resource_display_name: t.String(),
          resource_name: t.String(),
          metric: t.Object({
            type: t.String(),
            displayName: t.String(),
            labels: t.Object({
              example: t.String(),
            }),
          }),
          metadata: t.Object({
            system_labels: t.Object({
              example: t.String(),
            }),
            user_labels: t.Object({
              example: t.String(),
            }),
          }),
          policy_name: t.String(),
          policy_user_labels: t.Object({
            example: t.String(),
          }),
          documentation: t.String(),
          condition: t.Object({
            name: t.String(),
            displayName: t.String(),
            conditionThreshold: t.Object({
              filter: t.String(),
              comparison: t.String(),
              thresholdValue: t.Number(),
              duration: t.String(),
              trigger: t.Object({
                count: t.Number(),
              }),
            }),
          }),
          condition_name: t.String(),
          threshold_value: t.String(),
        }),
      }),
    }
  )
