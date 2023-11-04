import { z } from 'zod'

export const PackageJSONSchema = z.object({
  name: z.string(),
  displayName: z.string(),
  version: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  homepage: z.string(),
  bugs: z.union([z.string(), z.object({ url: z.string(), email: z.string() })]),
  repository: z.union([
    z.string(),
    z.object({ type: z.string(), url: z.string(), directory: z.string().optional() }),
  ]),
  license: z.string(),
  author: z.union([
    z.string(),
    z.object({ name: z.string(), email: z.string().optional(), url: z.string().optional() }),
  ]),
  type: z.union([z.literal('module'), z.literal('commonjs')]),
  exports: z.union([
    z.string(),
    z.object({
      default: z.string().optional(),
      import: z.string().optional(),
      node: z.string().optional(),
      require: z.string().optional(),
      types: z.string().optional(),
    }),
  ]),
  main: z.string(),
  files: z.array(z.string()),
  scripts: z.any(),
  dependencies: z.any(),
  engines: z.any(),
  publishConfig: z.object({
    access: z.union([z.literal('public'), z.literal('restricted')]).optional(),
    registry: z.string().optional(),
    tag: z.string().optional(),
  }),
})

export type PackageJSON = z.infer<typeof PackageJSONSchema>
