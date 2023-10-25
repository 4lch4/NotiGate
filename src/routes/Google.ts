import { logger } from '@4lch4/backpack'
import axios from 'axios'
import { Elysia, t } from 'elysia'
import { DiscordWebhookPayload } from '../lib'

const PostBodySchema = t.Partial(
  t.Object({
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
        labels: t.Unknown(),
      }),
      metadata: t.Object({
        system_labels: t.Unknown(),
        user_labels: t.Unknown(),
      }),
      policy_name: t.String(),
      policy_user_labels: t.Unknown(),
      documentation: t.String(),
      condition: t.Object({
        name: t.String(),
        displayName: t.String(),
        conditionThreshold: t.Object({
          aggregations: t.Array(
            t.Object({
              alignmentPeriod: t.String(),
              perSeriesAligner: t.String(),
            })
          ),
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
  })
)

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
      try {
        const webhookPayload: DiscordWebhookPayload = { content: ctx.body.incident?.summary || 'Unknown summary' }
        const webhookRes = await axios.post(
          'https://discord.com/api/webhooks/1166505611052204093/GZO5tyUP_h-trvc0SzpifDkWmqnEyF3l4lKDgZ00vCfiLwn3w3FW8PF4w7fyA3areCtZ',
          webhookPayload
        )

        logger.log('success', `[GoogleRoutes#POST]: Request sent to Discord Webhook...`, {
          body: ctx.body,
          webhookPayload,
          webhookRes: {
            data: webhookRes.data,
            status: webhookRes.status,
            statusText: webhookRes.statusText,
            headers: webhookRes.headers,
            config: webhookRes.config,
          },
        })
      } catch (error) {
        logger.error(`[GoogleRoutes#POST]: Error sending request to Discord Webhook...`, error)
      }
    },
    {
      body: PostBodySchema,
    }
  )
