import { logger } from '@4lch4/backpack'
import { Day } from '@4lch4/backpack/vendors'
import { NotificationBody } from '@schemas/index.js'
import { MongoClient } from 'mongodb'

export class DBUtil {
  private client: MongoClient

  public constructor(dbUrl: string) {
    this.client = new MongoClient(dbUrl)
  }

  public async storeAndroidNotification(
    notification: NotificationBody,
    collection: string = 'SM-S908U'
  ) {
    logger.debug(
      `[DBUtil#storeAndroidNotification]: Storing notification in collection ${collection}...`,
      { notification }
    )

    const coll = this.client.db('android').collection(collection)

    return coll.insertOne({ ...notification, timestamp: Day().format() })
  }
}
