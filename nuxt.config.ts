// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
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
