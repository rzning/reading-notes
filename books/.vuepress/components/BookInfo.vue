<template lang="pug">
  .book-info
    .container
      .item(v-for="item in list" :key="item.name" v-if="info[item.name]")
        .label {{ item.label }}
        .value {{ info[item.name] }}
      .tags
        .tag(v-for="tag, index in tags" :key="index") {{ tag }}
</template>

<script>
export default {
  name: 'BookInfo',
  data () {
    return {
      list: [
        { name: 'name', label: '书名' },
        { name: 'original', label: '原书名' },
        { name: 'author', label: '作者' },
        { name: 'translator', label: '译者' },
        { name: 'publisher', label: '出版社' },
        { name: 'category', label: '分类' }
      ]
    }
  },
  computed: {
    info () {
      return this.$page.frontmatter
    },
    tags () {
      const tags = this.info.tags
      if (tags) {
        return tags.split(' ')
      }
      return []
    }
  }
}
</script>

<style lang="stylus" scoped>
.book-info
  margin 2rem 0
  border .25rem solid $accentColor
  border-radius .5rem
  overflow auto
  .container
    padding 1rem .7rem
    min-width 20rem
  .item
    display flex
    border-bottom .1rem solid $accentColor
    line-height 1.8rem
    margin .3rem 0
    .label
      flex-basis 4rem
      text-align center
      color white
      background-color $accentColor
      border-radius .3rem .3rem 0 0
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
      padding .1rem .6rem
      border-radius .6rem
      color white
      background-color $tipColor
  @media (max-width $MQMobileNarrow)
    margin 2rem -1.5rem
    border-left 0
    border-right 0
    border-radius 0
</style>
