// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app:
    {
        
        head:
        {
            meta: [
                {
                    name: 'referrer',
                    content: 'no-referrer-when-downgrade',
                },
            ]
        }
    },
    runtimeConfig: 
    {
        // Private keys are only available on the server
        apiSecret: '123',
        // Public keys that are exposed to the client
        public: 
        {
            baseURL: process.env.NUXT_PUBLIC_API_BASE || '/api'
        }
    },
    css: 
    [
        '~/app/index.scss',
    ],
    modules: [
        '@pinia/nuxt',
        'nuxt-swiper',
        'nuxt-icon',
        '~/modules/home/module',
        '~/modules/anime/module',
        '~/modules/auth/module',
    ],
    plugins: 
    [
        { src: '~/plugins/click-outside.ts' },
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
