<script lang="ts" setup>
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
</script>

<template>
  <div class="">{{ $t('pages.index.title') }}</div>
</template>

<style lang="scss"></style>
