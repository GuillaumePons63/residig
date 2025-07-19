import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/*.md'
    }),
    index: defineCollection({
      type: 'page',
      source: '*.md'
  }),
}})