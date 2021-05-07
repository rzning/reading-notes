<template lang="pug">
.book-info
  .container
    .item(v-for="item of effectList" :key="item.name")
      .label {{ item.label }}
      .value {{ item.value }}
    .tags
      .tag(v-for="(tag, index) of tags" :key="index") {{ tag }}
</template>

<script>
export default {
  name: 'BookInfo',
  data() {
    return {
      list: [
        { name: 'name', label: '书名' },
        { name: 'original', label: '原书名' },
        { name: 'author', label: '作者' },
        { name: 'compiler', label: '编者' },
        { name: 'translator', label: '译者' },
        { name: 'publisher', label: '出版社' },
        { name: 'category', label: '分类' }
      ]
    }
  },
  computed: {
    info() {
      return this.$page.frontmatter
    },
    effectList() {
      const info = this.info
      /** @type {{ name: string, label: string, value: string }[]} */
      const result = []
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
      const tags = this.info.tags
      if (Array.isArray(tags)) {
        return tags
      }
      if (typeof tags === 'string') {
        return tags.split(' ')
      }
      return []
    }
  }
}
</script>

<style lang="stylus" scoped>
.book-info
  overflow auto
  margin 2rem 0
  border .25rem solid $accentColor
  border-radius .5rem
  .container
    padding 1rem .7rem
    min-width 20rem
  .item
    display flex
    margin .3rem 0
    border-bottom .1rem solid $accentColor
    line-height 1.8rem
    .label
      flex-basis 4rem
      border-radius .3rem .3rem 0 0
      background-color $accentColor
      color white
      text-align center
      word-break keep-all
    .value
      flex 1
      padding 0 1rem
  .tags
    padding .5rem 0
    text-align center
    .tag
      display inline-block
      margin .3rem
      padding .2rem .6rem
      border-radius .6rem
      background-color $tipColor
      color white
      line-height 1.5
  @media (max-width $MQMobileNarrow)
    margin 2rem -1.5rem
    border-right 0
    border-left 0
    border-radius 0
</style>
