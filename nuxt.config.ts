// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from "./build"

export default defineNuxtConfig({
    ssr: true,

    // typescripts
    // typescript: {
    //     strict: true,
    //     typeCheck: false,
    //     tsConfig: {
    //         compilerOptions: {
    //             strict: true,
    //             types: ['@pinia/nuxt', '/types/type.d.ts'],
    //         },
    //     },
    // },

    components: [
        {
            global: true,
            path: '~/components/',
            pathPrefix: false,
            extensions: ['.vue'],
        }
    ],
    // css
    css: [
        '~/assets/sass/app.scss',
        '~/assets/sass/tailwind.css',
        'animate.css/animate.min.css',
        'element-plus/dist/index.css',
    ],


    build: {
        transpile: ["vue-notion", "prismjs"],
    },
    telemetry: false,
    // modules
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@intlify/nuxt3',
        'nuxt-lodash',
        '@vueuse/nuxt',
        '@nuxt/image-edge',
        '@nuxtjs/robots'
    ],
    // sitemap: sitemap,

    // app config
    app: {
        // global transition
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head: {
            meta: [
                { name: 'google-site-verification', content: 'HVPSQ5axRBDcKliZ0EImWpYUZqoO60djgGGj9nEC6Kc' },
                { name: 'robots', content: 'index,follow' },
                { name: 'googlebot', content: 'index,follow' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: `浩呆前端` },
                { name: 'description', content: `熱愛技術的前端小白` },
                { name: 'keywords', content: `浩呆,浩呆前端,王教勛,王教勛前端,王浩呆,haodai,wanghaodai,前端工程師,網頁` },
                { property: 'og:title', content: `浩呆前端` },
                { property: 'og:description', content: `熱愛技術的網頁前端工程師` },
                { property: 'og:image', content: `https://i.imgur.com/1zlVant.png` },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    // localization - i18n config
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'zh',
            fallbackLocale: 'zh',
            availableLocales: ['en', 'zh'],
        },
    },
    robots: {
        rules: [
            {
                UserAgent: '*',
                Disallow: '/'
            }
        ]
    },

    // vite
    vite: createViteConfig(),

    runtimeConfig: createRuntimeConfig(),

})
