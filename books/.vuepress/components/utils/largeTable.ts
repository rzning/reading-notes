import type {
  ListElem,
  RawTableCell,
  RawTableCellContent,
  RawTableColumn,
  RawTableRow,
  TableCellContent,
  TableColumn,
  TableRow
} from '../types/largeTable.js'

/**
 * 是否为列表配置对象
 */
function isListElem(content: RawTableCellContent | RawTableCell): content is ListElem {
  return typeof content === 'object' && content && Array.isArray((content as ListElem).list)
}

/**
 * 格式化单元格内容
 */
function formatCellContent(content: RawTableCellContent): TableCellContent {
  const list = Array.isArray(content) ? content : [content]
  return list.map((item) => {
    if (typeof item === 'string') {
      return item
    } else if (Array.isArray(item?.list)) {
      return {
        ...item,
        tag: item.tag ?? 'ul'
      }
    }
    return ''
  })
}

/**
 * 标准化表格行数据
 */
export function getNormalizedTableRows(rows: RawTableRow[]): TableRow[] {
  return rows.map((row, index) => {
    return row.map((cell) => {
      if (typeof cell === 'string' || Array.isArray(cell)) {
        return {
          tag: index === 0 ? 'th' : 'td',
          content: formatCellContent(cell)
        }
      }
      if (isListElem(cell)) {
        return {
          tag: 'td',
          content: formatCellContent(cell)
        }
      }
      return {
        ...cell,
        tag: cell.tag ?? index === 0 ? 'th' : 'td',
        content: formatCellContent(cell.content)
      }
    })
  })
}

/**
 * 标准化表格列配置
 */
export function getNormalizedTableColumns(columns: RawTableColumn[]): TableColumn[] {
  return columns.map((column) => {
    if (typeof column === 'number') {
      return {
        span: column
      }
    }
    return {
      ...column,
      span: typeof column.span === 'number' ? column.span : 1
    }
  })
}
