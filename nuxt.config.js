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
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap'
                }
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
