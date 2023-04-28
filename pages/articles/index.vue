<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.articles.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.articles.description'),
    },
  ],
}))
</script>

<template>
  <Wrapper>
    <ContentList v-slot="{ list }" path="/articles">
      <Section v-for="article in list" :key="article._path">
        <div
          class="flex space-x-6 rounded border border-gray-900/10 p-5 hover:no-underline dark:border-gray-50/[0.2]">
          <div class="mt-1 w-[100px] text-right text-slate-600 dark:text-gray-400">
            <div>{{ article.date }}</div>
            <Anchor
              class="flex items-center justify-end space-x-1 text-sm"
              :href="`https://www.github.com/${article.author}`">
              <icon-mdi:github-face class="text-xs" />
              <span>{{ article.author }}</span>
            </Anchor>
          </div>
          <Anchor
            class="flex w-[calc(100%-100px)] cursor-pointer flex-col p-4 transition hover:bg-gray-50 hover:bg-opacity-10 sm:rounded-2xl md:col-span-3 md:mx-0"
            :to="article._path">
            <div class="text-xl font-semibold text-slate-800 dark:text-gray-50">
              {{ article.title }}
            </div>
            <div class="mb-1 text-slate-700 dark:text-gray-300">
              {{ article.description }}
            </div>
            <div class="flex">
              <section class="text-primary-500 flex items-center space-x-1 text-sm text-green-300">
                <span>{{ $t('others.learn_more') }}</span>
                <icon:ic:baseline-arrow-right-alt class="text-sm" />
              </section>
            </div>
          </Anchor>
        </div>
      </Section>
    </ContentList>
  </Wrapper>
</template>
