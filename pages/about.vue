<template>
  <PageWrapper
    class="mb-6 flex min-h-[1200px] flex-1 flex-col items-center px-4 md:min-h-full lg:px-8">
    <!-- <PageSection class="flex h-[1200px] flex-1 flex-col items-center md:h-full"> -->
    <div class="relative top-[20px] z-50 md:absolute md:top-[120px] md:left-[calc(50%-420px)]">
      <HomeIndroduce />
    </div>
    <HomeCard class="z-40" />
    <!-- </PageSection> -->
  </PageWrapper>
</template>

<script setup lang="ts">
const { t } = useLang()
// meta
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.about.title')),
  meta: [
    {
      name: 'description',
      content: '浩呆前湍開發',
    },
  ],
}))
</script>

<style scoped></style>
