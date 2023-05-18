
import 'virtual:svg-icons-register'
import svgIcon from '~/components/global/SvgIcon.vue'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('svg-icon', svgIcon)
})