import { logger } from '@4lch4/backpack'
import { Elysia } from 'elysia'

export const TodoistRoutes = new Elysia({ name: 'Todoist-Routes' })
  .get(
    '/todoist',
    async ctx => {
      logger.info(`[TodoistRoutes]: ctx.body...`, ctx.body)
      logger.info(`[TodoistRoutes]: ctx.query...`, ctx.query)
      logger.info(`[TodoistRoutes]: ctx.params...`, ctx.params)
      logger.info(`[TodoistRoutes]: ctx.headers...`, ctx.headers)
    },
    {
      detail: {
        description: 'This route is for receiving notifications from Todoist and processing them.',
        summary: 'Todoist Notification Route',
        tags: ['Notification'],
      },
    }
  )
  .post(
    '/todoist',
    async ctx => {
      logger.info(`[TodoistRoutes]: ctx.body...`, ctx.body)
      logger.info(`[TodoistRoutes]: ctx.query...`, ctx.query)
      logger.info(`[TodoistRoutes]: ctx.params...`, ctx.params)
      logger.info(`[TodoistRoutes]: ctx.headers...`, ctx.headers)
    },
    {
      detail: {
        description: 'This route is for receiving notifications from Todoist and processing them.',
        summary: 'Todoist Notification Route',
        tags: ['Notification'],
      },
    }
  )
