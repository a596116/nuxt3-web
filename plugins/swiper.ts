import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.css'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueAwesomeSwiper)
})
