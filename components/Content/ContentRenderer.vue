<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    default: '',
  },
})

const { data } = await useAsyncData(props.path, () => queryContent(props.path).findOne())
</script>

<template>
  <Wrapper>
    <Header>
      <Title :text="pageTitle" class="capitalize" />
    </Header>
    <Section>
      <ContentRenderer :value="data" />
    </Section>
  </Wrapper>
</template>
