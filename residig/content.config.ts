import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/*.md',
      schema: z.object({
        isInNav: z.boolean().optional()
      })
    }),
    index: defineCollection({
      type: 'page',
      source: '*.md',
      
    }),
  }
})