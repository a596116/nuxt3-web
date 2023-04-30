<script lang="ts" setup>
// composable
const { t } = useLang()

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
  <Wrapper class="flex flex-1" :top="false">
    <Home />
  </Wrapper>
</template>

<style lang="scss" scoped></style>
