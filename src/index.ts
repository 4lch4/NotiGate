import { logger } from '@4lch4/backpack'
import { HealthCheckRoutes, printRoutes } from '@4lch4/backpack/elysia'
import { swagger } from '@elysiajs/swagger'
import { AndroidRoute, GitHubRoutes, GoogleRoutes, TodoistRoutes } from '@routes/index.js'
import { PackageJSON } from '@schemas/PackageJSON.js'
import { Elysia } from 'elysia'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageJson = await Bun.file(join(__dirname, '..', 'package.json')).json<PackageJSON>()

const api = new Elysia({ prefix: '/api/v1', name: packageJson.displayName })

// const SwaggerDetails = {
//   info: {
//     title: packageJson.displayName!,
//     version: packageJson.version!,
//     description: packageJson.description!,
//     license: { name: packageJson.license! },
//   },
//   servers: [
//     {
//       url: 'http://localhost:3232/api/v1',
//       description: 'Localhost',
//     },
//     {
//       description: 'Production',
//       url: 'https://notigate.4lch4.io/api/v1',
//     },
//     {
//       description: 'Test',
//       url: 'https://test.notigate.4lch4.io/api/v1',
//     },
//   ],
// }

api
  .use(
    swagger({
      documentation: {
        info: {
          title: packageJson.displayName!,
          version: packageJson.version!,
          description: packageJson.description!,
          license: { name: packageJson.license! },
          contact: {
            name: '4lch4',
            email: 'hey@4lch4.email',
            url: 'https://4lch4.com',
          },
        },
        servers: [
          {
            url: 'http://localhost:4242/api/v1',
            description: 'Localhost',
          },
          {
            description: 'Test',
            url: 'https://test.notigate.4lch4.io/api/v1',
          },
          {
            description: 'Production',
            url: 'https://notigate.4lch4.io/api/v1',
          },
        ],
        tags: [
          {
            name: 'Notification',
            description: 'Routes for receiving notifications from various services.',
          },
          {
            name: 'Health',
            description: 'Routes for checking the health of the API.',
          },
        ],
      },
    })
  )
  .use(HealthCheckRoutes('/status'))
  .use(AndroidRoute)
  .use(GoogleRoutes)
  .use(GitHubRoutes)
  .use(TodoistRoutes)
  .onError(ctx => {
    logger.error(`[NotiGate#onError]: ctx.error`, ctx.error)
    logger.error(`[NotiGate#onError]: ctx.body`, ctx.body)
    logger.error(`[NotiGate#onError]: ctx.query`, ctx.query)
    logger.error(`[NotiGate#onError]: ctx.params`, ctx.params)
    logger.error(`[NotiGate#onError]: ctx.headers`, ctx.headers)
  })

api.listen(4242)

printRoutes(api.routes, { multiMethodRows: true })

logger.success(`🦊 Started listening on port 4242...`)
