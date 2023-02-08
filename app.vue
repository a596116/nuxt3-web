<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
AppSetup()
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput

useHead({
  title: app.name,
  titleTemplate: '%s - 浩呆前端',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: `浩呆前端` },
    { name: 'description', content: `熱愛技術的前端小白` },
    { name: 'keywords', content: `浩呆,浩呆前端,王教勛,王教勛前端` },
    { property: 'og:title', content: `浩呆前端` },
    { property: 'og:description', content: `熱愛技術的前端小白` },
    { property: 'og:image', content: `https://upload.cc/i1/2023/02/08/tHrl3G.png` },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <Html :lang="locale">
    <Body
      class="bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200">
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
