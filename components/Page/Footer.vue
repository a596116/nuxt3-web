<template>
  <footer class="text-hd-white bg-hd-black border-t border-gray-50/[0.2] lg:border-gray-900/10">
    <section
      class="border-hd-white mx-auto flex w-full max-w-7xl flex-1 flex-col space-x-20 border-b px-4 pb-4 lg:w-[80%] lg:px-8">
      <div class="flex w-full flex-col pt-2 text-center text-xs md:flex-row">
        <article class="flex flex-col items-start gap-1">
          <span class="text-sm">聯絡資訊</span>
          <Anchor :href="`tel:${footer.tel}`" :text="footer.tel" />
          <Anchor :href="`mailto:${footer.email}`" :text="footer.email" />
        </article>
        <article class="ml-auto flex items-center gap-2">
          <Anchor
            v-for="item of footer.link"
            :key="item.icon"
            :href="item.url"
            class="hover:scale-105">
            <svg-icon :name="item.icon" class="h-8 w-8"></svg-icon>
          </Anchor>
        </article>
      </div>
    </section>
    <div class="my-2 w-full text-center">
      {{ footer.copyright }}
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { footer } from '~/content/footer'
</script>
