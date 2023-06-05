// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from "./build"

export default defineNuxtConfig({
    ssr: true,

    // typescripts
    typescript: {
        strict: true,
        typeCheck: false,
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt', '~/type.d.ts'],
            },
        },
    },

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
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@intlify/nuxt3',
        'nuxt-lodash',
        '@vueuse/nuxt',
        // 'nuxt-simple-sitemap',
        // '@nuxtjs/sitemap',
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
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: `浩呆前端` },
                { name: 'description', content: `熱愛技術的前端小白` },
                { name: 'keywords', content: `浩呆,浩呆前端,王教勛,王教勛前端,王浩呆` },
                { property: 'og:title', content: `浩呆前端` },
                { property: 'og:description', content: `熱愛技術的前端小白` },
                { property: 'og:image', content: `https://upload.cc/i1/2023/02/08/tHrl3G.png` },
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

    // vite
    vite: createViteConfig(),

    runtimeConfig: createRuntimeConfig(),

})
