<template>
  <component :is="tag" :colspan="colspan" :rowspan="rowspan">
    <template v-for="(item, index) of content" :key="index">
      <span v-if="typeof item === 'string'" v-text="item"></span>
      <component v-else :is="item.tag" :type="item.type" :reversed="item.reversed" :start="item.start">
        <li v-for="(litem, lindex) of item.list" :key="lindex" v-text="litem"></li>
      </component>
    </template>
  </component>
</template>

<script setup lang="ts">
import { reactive, readonly, toRefs } from 'vue'
import { TableCell } from './types/largeTable.js'

const props = defineProps<{
  value: TableCell
}>()

const value = readonly(reactive(props.value))
const { tag, content, colspan, rowspan } = toRefs(value)
</script>
