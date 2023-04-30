import Vue3Lottie from 'vue3-lottie'

import 'vue3-lottie/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Lottie, { name: 'Vue3Lottie' })
})