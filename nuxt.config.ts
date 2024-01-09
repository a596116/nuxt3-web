// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './build'

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
    },
  ],

  build: {
    transpile: ['vue-notion', 'prismjs'],
  },
  telemetry: false,
  // modules
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-lodash',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
  ],
  // sitemap: sitemap,

  // css
  css: ['~/assets/sass/tailwind.scss', 'animate.css/animate.min.css', '~/assets/sass/app.scss'],
  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'y7pfXihCI46HENtaw918zrV39v0ne45d4Usvpy9e7-8',
        },
        { name: 'robots', content: 'index,follow' },
        { name: 'googlebot', content: 'index,follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: `浩呆,浩呆前端,王教勛,王教勛前端,王浩呆,haodai,wanghaodai,前端工程師,網頁,浩呆部落格,浩呆Blog,twhaodai`,
        },
        {
          name: 'keywords',
          content: `浩呆,浩呆前端,王教勛,王教勛前端,王浩呆,haodai,wanghaodai,前端工程師,網頁,浩呆部落格,浩呆Blog,twhaodai`,
        },
        { property: 'og:title', content: `王浩呆` },
        { property: 'og:description', content: `熱愛技術的網頁前端工程師` },
        { property: 'og:image', content: `https://i.imgur.com/1zlVant.png` },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // robots: {
  //   rules: [
  //     {
  //       UserAgent: '*',
  //       Disallow: '/',
  //     },
  //   ],
  // },

  // vite
  vite: createViteConfig(),

  runtimeConfig: createRuntimeConfig(),
})
