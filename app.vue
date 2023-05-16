<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
AppSetup()
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput

useHead({
  title: app.name,
  titleTemplate: '%s | 浩呆前端',
})
</script>

<template>
  <Html :lang="locale">
    <Body class="text-hd-Text bg-white antialiased transition-colors duration-300">
      <Navbar class="lg:justify-between lg:px-[6rem] 2xl:px-[16rem]" />
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<style src="~/assets/sass/_variables.scss"></style>
