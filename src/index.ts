import { logger } from '@4lch4/backpack'
import Table from 'cli-table'
import { Elysia } from 'elysia'
import { GitHubRoutes, GoogleRoutes } from './routes'

const api = new Elysia({
  name: 'NotiGate',
  prefix: '/api/v1',
})

api
  .use(GoogleRoutes)
  .use(GitHubRoutes)
  .onError(ctx => {
    logger.error(`[NotiGate#onError]: ctx.error`, ctx.error)
    logger.error(`[NotiGate#onError]: ctx.body`, ctx.body)
    logger.error(`[NotiGate#onError]: ctx.query`, ctx.query)
    logger.error(`[NotiGate#onError]: ctx.params`, ctx.params)
    logger.error(`[NotiGate#onError]: ctx.headers`, ctx.headers)
  })

api.listen(4242)

const table = new Table({
  head: ['Path', 'Method'],
  colAligns: ['left', 'middle'],
})

for (const route of api.routes) {
  table.push([route.path, route.method.toUpperCase()])
}

console.log(`\n${table.toString()}\n`)

logger.info(`🦊 Started listening on port 4242...`)

// import { printRoutes } from '@4lch4/koa-router-printer'
// import Koa from 'koa'
// import { koaBody } from 'koa-body'
// import Helmet from 'koa-helmet'
// import { getAppConfig, logger } from './lib/index.js'
// import { getRoutes } from './routes/index.js'

// const app = new Koa()
// const config = getAppConfig()
// const { apiPort, apiName, apiVersion } = config

// app.use(Helmet())
// app.use(koaBody())

// for (const route of await getRoutes(config)) {
//   app.use(route.routes())
//   app.use(route.allowedMethods())
// }

// printRoutes(app)

// app.listen(apiPort, () => {
//   logger.info(`${apiName}-${apiVersion} has come online, listening on port ${apiPort}!`)
// })
