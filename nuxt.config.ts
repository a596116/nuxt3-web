// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
    ssr: true,

    // typescripts
    typescript: {
        strict: true,
        typeCheck: true,
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt', './type.d.ts'],
            },
        },
    },

    // plugins
    // plugins: ['~/plugins/element-plus'],

    // css
    css: ['~/assets/sass/app.scss', '~/assets/sass/mode/dark.scss', '~/assets/sass/mode/light.scss'],


    // build
    build: {
        transpile: ['@headlessui/vue']
    },

    // modules
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'unplugin-icons/nuxt',
        '@nuxt/content',
        '@intlify/nuxt3',
    ],


    // auto import components
    components: true,

    // app config
    app: {
        // global transition
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head: {
            meta: [
                { name: 'google-site-verification', content: '77iFFXtD8szKWL5Xw9f9-SqeomLzmPFbwAWp_GrXLrY' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: `浩呆前端` },
                { name: 'description', content: `熱愛技術的前端小白` },
                { name: 'keywords', content: `浩呆,浩呆前端,王教勛,王教勛前端` },
                { property: 'og:title', content: `浩呆前端` },
                { property: 'og:description', content: `熱愛技術的前端小白` },
                { property: 'og:image', content: `https://upload.cc/i1/2023/02/08/tHrl3G.png` },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        }
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
    vite: {
        // need add declare from xxx.d.ts
        define: {
            // __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
        },
        plugins: [
            Components({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),],
            }),
        ],
        // 解决在开发模式下降低 naive-ui 引起的打包缓慢
        // optimizeDeps: {
        //     include:
        //         process.env.NODE_ENV === 'development'
        //             ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
        //             : [],
        // },
    },

    // content
    content: {
        documentDriven: true,
        markdown: {
            mdc: true,
        },
        highlight: {
            theme: 'github-dark',
        },
    },
})
