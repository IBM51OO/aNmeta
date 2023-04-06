// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    
    runtimeConfig: 
    {
        // Private keys are only available on the server
        apiSecret: '123',
        // Public keys that are exposed to the client
        public: 
        {
            apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
        }
    },

    css: 
    [
        '@/app/index.scss',
        '@/app/'
    ],
    modules: [
        '@pinia/nuxt',
        'nuxt-swiper',
        'nuxt-icon',
        '~/modules/home/module',
        '~/modules/calendar/module',
        '~/modules/anime/module',
    ],
    typescript: 
    {
        strict: true
    },
    vite: 
    {
        css: 
        {
            preprocessorOptions: 
            {
                scss: 
                {
                    additionalData: `@import "@/app/styles/vars.scss";`
                }
            }
        }
    }
})
