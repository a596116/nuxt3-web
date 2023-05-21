<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer class="text-hb-Text border-t border-gray-50/[0.2] lg:border-gray-900/10">
    <section
      class="border-ec-primary mx-auto flex w-full max-w-7xl flex-1 flex-col space-x-20 border-b px-4 pb-6 lg:w-[80%] lg:px-8">
      <div class="flex w-full flex-col justify-between pt-2 text-center text-xs md:flex-row">
        <article class="flex flex-row items-center justify-center gap-5">
          <svg-icon name="logo-1" class="h-[80px] w-[80px]"></svg-icon>
        </article>

        <article class="flex items-center gap-2">
          <Anchor href="https://www.instagram.com/haodai_0621/">
            <svg-icon name="instagram" class="h-8 w-8"></svg-icon>
          </Anchor>
          <Anchor href="https://line.me/ti/p/YXi16BOO8V">
            <svg-icon name="line" class="h-8 w-8"></svg-icon>
          </Anchor>
          <Anchor href="https://github.com/a596116">
            <svg-icon name="github" class="h-8 w-8"></svg-icon>
          </Anchor>
        </article>
      </div>
    </section>
    <div class="my-4 w-full text-center">
      Copyright ⓒ 2023 王教勛(浩呆) Inc.All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss">
.aa:hover {
  path {
    color: white !important;
  }
}
</style>
