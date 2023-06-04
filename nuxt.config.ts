// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000
const ONE_WEEK = ONE_DAY * 7

export default defineNuxtConfig({
    ssr: true,

    css: 
    [
        '~/app/index.scss',
    ],

    runtimeConfig: 
    {
        cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
        cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
    },

    modules: [
        // '@nuxt-alt/auth',
        '@pinia/nuxt',
        // '@nuxt-alt/http',
        'nuxt-swiper',
        'nuxt-icon',
        '~/modules/user/module',
        '~/modules/home/module',
        '~/modules/anime/module',
        
        // '@sidebase/nuxt-auth',
    ],
    // auth: {
    //     origin: 'http://anime/api',
    //     enableGlobalAppMiddleware: true
    // },
    plugins: 
    [
        { src: '~/plugins/click-outside.ts' }, 
        { src: '~/plugins/notifications-client', ssr: false }
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
