// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,

    // typescripts
    typescript: {
        strict: true,
        typeCheck: true,
    },

    // css
    css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],

    // modules
    modules: [
        '@intlify/nuxt3',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],

    // auto import components
    components: true,

    // app config
    app: {
        // global transition
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
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
})
