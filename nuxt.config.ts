// https://nuxt.com/docs/api/configuration/nuxt-config
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

const lifecycle = process.env.npm_lifecycle_event
export default defineNuxtConfig({
    ssr: true,

    // typescripts
    typescript: {
        strict: true,
        typeCheck: true,
    },

    // plugins
    // plugins: ['~/plugins/element-plus'],

    // css
    css: ['~/assets/sass/app.scss'],


    // build
    build: {
        transpile: ['@headlessui/vue']
    },

    // modules
    modules: [
        '@intlify/nuxt3',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'unplugin-icons/nuxt',
        '@nuxt/content',
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

    // vite
    vite: {
        // need add declare from xxx.d.ts
        define: {
            // __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
        },
        ssr: {
            // noExternal: ['element-plus'],
        },

        plugins: [
            // AutoImport({
            //     resolvers: [ElementPlusResolver({ importStyle: 'sass', ssr: true })], // 注意ssr配置参数
            // }),
            Components({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),], // 全自动按需引入naive-ui组件
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
