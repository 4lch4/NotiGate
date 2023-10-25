import { logger } from '@4lch4/backpack'
import axios from 'axios'
import { Elysia, t } from 'elysia'
import { DiscordWebhookPayload } from '../lib'

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
        version: t.String(),
        incident: t.Object({
          incident_id: t.String(),
          scoping_project_id: t.String(),
          scoping_project_number: t.Number(),
          url: t.String(),
          started_at: t.String(),
          ended_at: t.String(),
          state: t.String(),
          summary: t.String(),
          apigee_url: t.String(),
          observed_value: t.String(),
          resource: t.Object({
            type: t.String(),
            labels: t.Any(),
          }),
          resource_type_display_name: t.String(),
          resource_id: t.String(),
          resource_display_name: t.String(),
          resource_name: t.String(),
          metric: t.Object({
            type: t.String(),
            displayName: t.String(),
            labels: t.Any(),
          }),
          metadata: t.Any(),
          policy_name: t.String(),
          policy_user_labels: t.Any(),
          documentation: t.String(),
          condition: t.Object({
            name: t.String(),
            displayName: t.String(),
            conditionThreshold: t.Object({
              filter: t.String(),
              comparison: t.String(),
              thresholdValue: t.Number(),
              trigger: t.Any(),
              aggregations: t.Any(),
              duration: t.String(),
            }),
          }),
          condition_name: t.String(),
          threshold_value: t.String(),
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
        version: t.String(),
        incident: t.Object({
          incident_id: t.String(),
          scoping_project_id: t.String(),
          scoping_project_number: t.Number(),
          url: t.String(),
          started_at: t.String(),
          ended_at: t.String(),
          state: t.String(),
          summary: t.String(),
          apigee_url: t.String(),
          observed_value: t.String(),
          resource: t.Object({
            type: t.String(),
            labels: t.Any(),
          }),
          resource_type_display_name: t.String(),
          resource_id: t.String(),
          resource_display_name: t.String(),
          resource_name: t.String(),
          metric: t.Object({
            type: t.String(),
            displayName: t.String(),
            labels: t.Any(),
          }),
          metadata: t.Any(),
          policy_name: t.String(),
          policy_user_labels: t.Any(),
          documentation: t.String(),
          condition: t.Object({
            name: t.String(),
            displayName: t.String(),
            conditionThreshold: t.Object({
              filter: t.String(),
              comparison: t.String(),
              thresholdValue: t.Number(),
              trigger: t.Any(),
              aggregations: t.Any(),
              duration: t.String(),
            }),
          }),
          condition_name: t.String(),
          threshold_value: t.String(),
        }),
      }),
    }
  )
