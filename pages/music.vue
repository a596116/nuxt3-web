<template>
  <Wrapper class="pt-[60px]">
    <client-only>
      <MusicContainer />
    </client-only>
  </Wrapper>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'music',
})
useHead(() => ({
  title: 'Music',
}))
</script>
