import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: image().optional(),
      lang: z.enum(['es', 'en']),
      reference: z.string().optional()
    })
})

export const collections = { blog }
