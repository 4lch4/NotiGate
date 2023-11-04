import { logger } from '@4lch4/backpack'
import { Elysia } from 'elysia'

export const GitHubRoutes = new Elysia({ name: 'GitHub-Routes' })
  .get(
    '/github',
    async ctx => {
      logger.info(`[GitHubRoutes]: ctx.body...`, ctx.body)
      logger.info(`[GitHubRoutes]: ctx.query...`, ctx.query)
      logger.info(`[GitHubRoutes]: ctx.params...`, ctx.params)
      logger.info(`[GitHubRoutes]: ctx.headers...`, ctx.headers)
    },
    {
      detail: {
        description: 'This route is for notifications from GitHub and processing them.',
        summary: 'GitHub Notification Route',
        tags: ['Notification'],
      },
    }
  )
  .post(
    '/github',
    async ctx => {
      logger.info(`[GitHubRoutes]: ctx.body...`, ctx.body)
      logger.info(`[GitHubRoutes]: ctx.query...`, ctx.query)
      logger.info(`[GitHubRoutes]: ctx.params...`, ctx.params)
      logger.info(`[GitHubRoutes]: ctx.headers...`, ctx.headers)
    },
    {
      detail: {
        description: 'This route is for notifications from GitHub and processing them.',
        summary: 'GitHub Notification Route',
        tags: ['Notification'],
      },
    }
  )
