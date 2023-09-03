import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  name: 'user-module',
  configKey: 'user-module',
  setup (options: any, nuxt: Nuxt) {

    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components')
      })
    })

    // Auto register composables
    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'user-register',
        path: '/register',
        file: resolve(__dirname, './pages/RegisterPage.vue'),
      }),
      pages.push({
        name: 'user-login',
        path: '/login',
        file: resolve(__dirname, './pages/LoginPage.vue'),
      }),
      pages.push({
        name: 'user-profile',
        path: '/profile/:id',
        file: resolve(__dirname, './pages/UserProfilePage.vue'),
      })
      pages.push({
        name: 'user-settings',
        path: '/settings',
        file: resolve(__dirname, './pages/SettingsPage.vue'),
      })
    })

    // Pinia store modules are auto imported
  }
})