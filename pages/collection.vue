<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.collection.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.collection.description'),
    },
  ],
}))
</script>

<template>
  <Wrapper>
    <Header>
      <Title :text="$t('pages.collection.title')" class="capitalize" />
    </Header>
    <Section>
      <ContentList v-slot="{ list }" path="/collections">
        <Section v-for="article in list" :key="article._path">
          <div class="links-wrapper">
            <div
              v-for="(group, groupId) in article.links"
              :key="`link-group-${groupId}`"
              class="link-section">
              <h2>{{ group.title }}</h2>
              <div class="link-group">
                <div
                  v-for="(item, itemId) in group.items"
                  :key="`link-${itemId}`"
                  class="link-item">
                  <div class="content">
                    <a :href="item.url" target="_blank" rel="noopener noreferrer">
                      <img :src="item.img" />
                      <span class="sitename">
                        {{ item.sitename }}
                      </span>
                      <div class="desc">
                        {{ item.desc }}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </ContentList>
    </Section>
  </Wrapper>
</template>

<style lang="scss" scoped>
@import '~/assets/sass/mixins';
@import '~/assets/sass/variables';
.links-wrapper {
  padding: 10px 0 50px;
}

.link-section {
  width: 60%;
  max-width: 745px;
  margin: 0 auto;

  h2 {
    font-weight: 400;
    font-size: 18px;
    border-left: 3px solid var(--c-text-accent);
    padding-left: 10px;
    margin-left: 5px;
    margin-top: 50px;
  }
}

.link-group {
  width: 100%;
  list-style: none;
  margin-top: 10px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 33.33%);
}

.link-item {
  margin: 4px;
  cursor: pointer;

  .content {
    border: 1px solid #3c4a5f;
    border-radius: 10px;
    padding: 13px 30px 13px 20px;
    overflow: hidden;
    @include transition(all ease 0.3s);

    a {
      text-decoration: none;

      img {
        padding: 2px;
        border-radius: 100%;
        max-width: 100%;
        float: right;
        box-shadow: inset 0 0 10px var(--c-text);
        margin-top: 5px;
        margin-right: -15px;
        width: 65px;
        height: 65px;
      }

      span.sitename {
        color: var(--c-text-accent);
        padding: 8px 0 13px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
      }

      .desc {
        color: var(--c-text-sub);
        font-size: 13px;
        padding: 10px 0;
        border-top: 1px dashed #ddd;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 15px;
      }
    }

    &:hover {
      border: 1px solid transparent;
      box-shadow: var(--box-shadow-hover);
      @include transform(translate(0px, -3px));
    }
  }
}

@media (max-width: $MQLarge) {
  .link-section {
    width: 75%;
  }
}

@media (max-width: $MQIpad) {
  .link-section {
    width: 85%;
  }

  .link-group {
    grid-template-columns: repeat(2, 49.5%);
  }
}

@media (max-width: $MQMobileNarrow) {
  .link-section {
    width: 100%;

    h2 {
      margin-left: 17px;
    }
  }

  .link-group {
    grid-template-columns: repeat(1, 100%);
  }

  .link-item {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
