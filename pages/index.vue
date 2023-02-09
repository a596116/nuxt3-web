<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.index.title')),
  meta: [
    {
      name: 'description',
      content: '浩呆前湍開發',
    },
  ],
}))
</script>

<template>
  <PageWrapper class="flex flex-1" :top="false">
    <!-- <PageSection class="flex flex-1 flex-col items-center"> -->
    <!-- <div class="md:w-5/8 z-10 flex flex-1 flex-col"> -->
    <Home />
    <!-- </div> -->
    <!-- </PageSection> -->
  </PageWrapper>
</template>

<style lang="scss" scoped></style>
