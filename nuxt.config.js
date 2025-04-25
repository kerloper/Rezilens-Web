// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
    vite: {
        server: {
            port: 4000,
            strictPort: true,
        },
    },
    meta: {
        title: 'Rezilens',
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
           title: "Rezilens",
            link: [
                {
                    href: "https://fonts.cdnfonts.com/css/exo-2",
                    rel: "stylesheet"
                },
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            ],

            script: [
                {
                    async: true,
                    src: '',
                },
                {
                    innerHTML: ` `,
                    type: 'text/javascript',
                    charset: 'utf-8',
                },
            ],
        },
    },
    css: [
        '~/assets/css/main.css'
    ],
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',
        '@pinia/nuxt',
        'nuxt-swiper',
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || '/',
            baseTitle:  'Rezilens',
        },
    },
})
