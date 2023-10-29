<script lang="ts" setup>
import { AppSetup } from './utils/app'
AppSetup()
const locale = useState<string>('locale.setting')
const route = useRoute()

const excludeNavbars = route.path === '/linebot'

useHead({
  title: '浩呆',
  titleTemplate: '%s - 浩呆前端',
})
</script>

<template>
  <Html :lang="locale">
    <Body class="text-hd-black bg-hd-white antialiased transition-colors duration-300">
      <Navbar v-if="!excludeNavbars" class="lg:justify-between" />
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<style src="~/assets/sass/_variables.scss"></style>
