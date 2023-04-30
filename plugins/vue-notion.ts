import VueNotion, { getPageBlocks, getPageTable } from "vue-notion"
import 'prismjs'
import 'prismjs/themes/prism.css'
import 'vue-notion/src/styles.css'
import 'katex/dist/katex.min.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueNotion)

  return {
    provide: {
      notion: { getPageBlocks, getPageTable },
    },
  }
})
