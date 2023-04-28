<template>
  <ContentDoc>
    <template #default="{ doc }">
      <Header>
        <Title :text="doc.title" />
      </Header>
      <Section>
        <ContentRenderer :value="doc" />
      </Section>
    </template>
    <template #empty>
      <h1>Post in empty</h1>
    </template>
    <template #not-found>
      <Error :code="404" wrap />
    </template>
  </ContentDoc>
</template>
