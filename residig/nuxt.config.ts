// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/assets/main.css',
    '~/assets/css/transitions.css'
  ],
  modules: 
    ['@nuxt/content',
      ['nuxt-mail', 
      {
         message: {
           from : process.env.MAIL_TO,
        to: process.env.MAIL_TO,
      },
      smtp: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSW
        },
      },

  }], 'nuxt-component-meta', 'nuxt-studio'],
  content: {
    renderer :{
      anchorLinks: false,
      },
    experimental: { sqliteConnector: 'native'},  
    preview: {
      api: 'https://api.nuxt.studio',
      // Utile sur hébergement "custom" (o2switch) pour aider Studio à te reconnaître :
      gitInfo: {
        name: 'residig',           
        owner: 'GuillaumePons63',    
        url: 'https://github.com/GuillaumePons63/residig'
      }
    },
  },
   studio: {
    repository: {
      provider: 'github',
      owner: 'GuillaumePons63',
      repo: 'residig',
      rootDir : 'residig',
      branch: 'main', // ou 'master' / autre branche
      // rootDir: '.', // décommentez si monorepo / sous-dossier
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
    layoutTransition: { 
      name: 'layout', 
      mode: 'out-in' 
    }
  }
})
