<template>
  <table v-if="props.rows.length > 0">
    <colgroup v-if="columns.length > 0">
      <col v-for="(column, index) of columns" :key="index" :span="column.span" />
    </colgroup>
    <thead v-if="firstRow.length > 0">
      <tr>
        <LargeTableCell v-for="(item, index) of firstRow" :key="index" :value="item" />
      </tr>
    </thead>
    <tbody v-if="bodyRows.length > 0">
      <tr v-for="(row, rowIndex) of bodyRows" :key="rowIndex">
        <LargeTableCell v-for="(cell, cellIndex) of row" :key="cellIndex" :value="cell" />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import type { RawTableColumn, RawTableRow } from './types/largeTable.js'
import { getNormalizedTableColumns, getNormalizedTableRows } from './utils/largeTable.js'
import LargeTableCell from './LargeTableCell.vue'

interface LargeTableProps {
  rows: RawTableRow[]
  columns?: RawTableColumn[]
}

const props = withDefaults(defineProps<LargeTableProps>(), {
  columns: () => []
})

const rows = computed(() => getNormalizedTableRows(props.rows))

const columns = computed(() => getNormalizedTableColumns(props.columns))

/**
 * 表头行
 */
const firstRow = computed(() => {
  if (rows.value.length === 0) {
    return []
  }
  return rows.value[0]
})

/**
 * 内容行数组
 */
const bodyRows = computed(() => {
  if (rows.value.length > 1) {
    return rows.value.slice(1)
  }
  return []
})
</script>
