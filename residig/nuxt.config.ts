// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
           from: process.env.MAIL_TO,
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

  }]
],
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
        owner: 'u2405562098-cloud',    
        url: 'https://github.com/u2405562098-cloud/residig'
      }
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
