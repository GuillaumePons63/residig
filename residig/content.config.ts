import { defineContentConfig, defineCollection } from "@nuxt/content"
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    pages: defineCollection({      
      type: 'page',
      source: 'pages/*.md',
  }),
    index: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    livres: defineCollection({
      type: 'page', 
      source: 'livres/*.md',
      schema: z.object({
        img: z.string().optional(),        
    }),
  }),
jeux: defineCollection({
  type: 'page', 
  source: 'jeux/*.md',
  schema: z.object({
    img: z.string().optional(),
  }),
})
},})