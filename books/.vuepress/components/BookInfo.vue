<template>
  <div class="book-info">
    <div class="container">
      <div v-if="info.cover" class="cover">
        <img :src="withBase(info.cover)" alt="book-cover" />
      </div>
      <div class="item" v-for="item of effectList" :key="item.name">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
      <div class="tags">
        <div class="tag" v-for="(tag, index) of tags" :key="index">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePageData, withBase } from '@vuepress/client'
import type { BookInfoFrontmatter, BookBaseInfoNames } from './types/bookInfo.js'

export default defineComponent({
  name: 'BookInfo',
  data() {
    const list: { name: BookBaseInfoNames; label: string }[] = [
      { name: 'name', label: '书名' },
      { name: 'original', label: '原书名' },
      { name: 'author', label: '作者' },
      { name: 'compiler', label: '编者' },
      { name: 'translator', label: '译者' },
      { name: 'publisher', label: '出版社' },
      { name: 'category', label: '分类' }
    ]
    return {
      list
    }
  },
  computed: {
    info() {
      return usePageData().value.frontmatter as BookInfoFrontmatter
    },
    effectList() {
      const info = this.info
      const result: { name: string; label: string; value: string }[] = []
      this.list.forEach((item) => {
        const value = info[item.name]
        if (value) {
          result.push({
            name: item.name,
            label: item.label,
            value
          })
        }
      })
      return result
    },
    tags() {
      const { tags } = this.info as BookInfoFrontmatter
      if (Array.isArray(tags)) {
        return tags
      }
      if (typeof tags === 'string') {
        return tags.split(' ')
      }
      return []
    }
  },
  setup() {
    return {
      withBase
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@vuepress/plugin-palette/palette';

.book-info {
  overflow: auto;
  margin: 2rem 0;
  border: 0.25rem solid var(--c-brand);
  border-radius: 0.5rem;

  .container {
    padding: 1rem 0.7rem;
    min-width: 20rem;
  }

  .cover {
    text-align: center;
  }

  .item {
    display: flex;
    margin: 0.3rem 0;
    border-bottom: 0.1rem solid var(--c-brand);
    line-height: 1.8rem;

    .label {
      flex-basis: 4rem;
      border-radius: 0.3rem 0.3rem 0 0;
      background-color: var(--c-brand);
      color: white;
      text-align: center;
      word-break: keep-all;
    }

    .value {
      flex: 1;
      padding: 0 1rem;
    }
  }

  .tags {
    padding: 0.5rem 0;
    text-align: center;

    .tag {
      display: inline-block;
      margin: 0.3rem;
      padding: 0.2rem 0.6rem;
      border-radius: 0.6rem;
      background-color: var(--c-tip);
      color: white;
      line-height: 1.5;
    }
  }

  @media (max-width: $MQMobileNarrow) {
    margin: 2rem -1.5rem;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }
}
</style>
