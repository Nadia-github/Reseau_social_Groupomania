

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import * as VueRouter from 'vue-router'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
      {
      path: '/',
      name: 'connexion',
      component: connexion
      },
      {
          path: '/inscription',
      name: 'inscription',
      component: inscription
      }
    ]
  })

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
