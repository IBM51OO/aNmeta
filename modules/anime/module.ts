import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  name: 'anime-module',
  configKey: 'anime-module',
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
        name: 'anime-list',
        path: '/anime',
        file: resolve(__dirname, './pages/index.vue'),
      }, {
        name: 'anime-detail',
        path: '/anime/:id',
        file: resolve(__dirname, './pages/_id.vue')
      })
    })

    // Pinia store modules are auto imported
  }
})