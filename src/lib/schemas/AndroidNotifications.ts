import { Static, t } from 'elysia'

const TransformToEmpty = (val: string) => (val.startsWith('%evtprm') ? undefined : val)

/**
 * A TypeBox schema for the body of an Android notification sent to the
 * `/android` route from my Android device via Tasker.
 */
export const NotificationBody = t.Object({
  ownerApplication: t
    .Transform(
      t.String({
        title: 'Owner Application ID',
        description:
          'The application ID of the application that sent the notification. If no value is available then Tasker will send the default value of `%evtprm1`.',
        default: '%evtprm1',
      })
    )
    .Decode(TransformToEmpty)
    .Encode(val => val || '%evtprm1'),
  title: t
    .Transform(
      t.String({
        title: 'Title',
        description:
          'The title of the notification. If no value is available then Tasker will send the default value of `%evtprm2`.',
        default: '%evtprm2',
      })
    )
    .Decode(TransformToEmpty)
    .Encode(val => val || '%evtprm2'),
  text: t
    .Transform(
      t.String({
        title: 'Text',
        description:
          'The text of the notification. If no value is available then Tasker will send the default value of `%evtprm3`.',
        default: '%evtprm3',
      })
    )
    .Decode(TransformToEmpty)
    .Encode(val => val || '%evtprm3'),
  subtext: t
    .Transform(
      t.String({
        title: 'Subtext',
        description:
          'The subtext of the notification. If no value is available then Tasker will send the default value of `%evtprm4`.',
        default: '%evtprm4',
      })
    )
    .Decode(TransformToEmpty)
    .Encode(val => val || '%evtprm4'),
  messages: t
    .Transform(
      t.String({
        title: 'Messages',
        description:
          'Any messages associated with the notification. If no value is available then Tasker will send the default value of `%evtprm5`.',
        default: '%evtprm5',
      })
    )
    .Decode(TransformToEmpty)
    .Encode(val => val || '%evtprm5'),
  otherText: t
    .Transform(
      t.String({
        title: 'Other Text',
        description:
          'The other text of the notification. If no value is available then Tasker will send the default value of `%evtprm6`.',
        default: '%evtprm6',
      })
    )
    .Decode(TransformToEmpty)
    .Encode(val => val || '%evtprm6'),
  category: t
    .Transform(
      t.String({
        title: 'Category',
        description:
          'The category of the notification. If no value is available then Tasker will send the default value of `%evtprm7`.',
        default: '%evtprm7',
      })
    )
    .Decode(TransformToEmpty)
    .Encode(val => val || 'evtprm7'),
  newOnly: t
    .Transform(
      t.String({
        title: 'New Only Flag',
        description:
          'Whether or not the New Only flag is set. If no value is available then Tasker will send the default value of `%evtprm8`.',
        default: '%evtprm8',
        pattern: 'true|false',
      })
    )
    .Decode(val => {
      if (val === '%evtprm8') return undefined
      return val === 'true'
    })
    .Encode(val => (val ? 'true' : 'false')),
})

export type NotificationBody = Static<typeof NotificationBody>
