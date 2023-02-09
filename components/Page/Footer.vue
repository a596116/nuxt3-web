<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import p from './../../package.json'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer class="border-t bg-gray-50 bg-opacity-10 dark:border-gray-50/[0.2] lg:border-gray-900/10">
    <section class="max-w-8xl mx-auto flex w-full flex-1 space-x-20 px-4 lg:px-8">
      <div class="flex w-full items-center py-4 text-center md:text-left">
        <div class="mb-1">
          {{ app.name }}
        </div>
        <div class="ml-3 text-xs text-gray-600 dark:text-gray-400">
          Copyright © 2023 <a :href="app.author.link">{{ app.author.name }}</a
          >. 版權所有，請勿抄襲 <span class="text-red-500">❤</span>
          <!-- <div class="flex flex-col items-center space-x-2 md:float-right md:flex-row">
            <span class="text-center md:text-right">
              design by <a href="https://github.com/viandwi24">浩呆</a>
            </span>
            <span class="block rounded bg-blue-500 px-1 py-0.5 text-xs text-white">
              {{ p.devDependencies.nuxt }}
            </span>
          </div> -->
        </div>
      </div>
    </section>
  </footer>
</template>
