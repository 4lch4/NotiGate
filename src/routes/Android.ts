import { logger } from '@4lch4/backpack'
import { DBUtil, getConfig } from '@lib/index.js'
import { NotificationBody } from '@schemas/AndroidNotifications.js'
import { Elysia } from 'elysia'

const dbUtil = new DBUtil(getConfig().mongo.url)

/**
 * This route is for receiving notifications from my Android device and syncing
 * and/or storing them.
 */
export const AndroidRoute = new Elysia()
  /**
   * As the JSON body from my phone can technically be invalid and contain new lines in values, this
   * `onParse` will replace new lines with a literal `\n` so that the JSON can be parsed.
   */
  .onParse(async ({ request }, contentType) => {
    if (contentType === 'application/json') {
      const text = await request.text()
      const cleanedText = text.replaceAll(/"\n*"/g, '\\n')
      const parsedText = JSON.parse(cleanedText)
      logger.debug(`[AndroidRoute#onParse]: cleanedText = ${cleanedText}`)
      logger.debug(`[AndroidRoute#onParse]: parsedText = ${JSON.stringify(parsedText)}`)

      return JSON.parse(cleanedText)
    }
  })
  .post(
    '/android',
    async ({ body }) => {
      try {
        logger.debug(`[AndroidRoute#post]: POST request received...`, { body })

        const dbRes = await dbUtil.storeAndroidNotification(body)

        return dbRes
      } catch (error) {
        logger.error(`[AndroidRoute#post]: Error storing notification in DB...`, error)

        return error
      }
    },
    {
      body: NotificationBody,
      detail: {
        description:
          'This route is for notifications from my Android device and storing them in the NotiGate DB.',
        summary: 'Android Notification Route',
        tags: ['Notification'],
      },
    }
  )
