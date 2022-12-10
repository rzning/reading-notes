/**
 * 有序或无序列表
 */
export type ListElem = {
  list: string[]
  tag?: 'ul' | 'ol'
  /**
   * 是否倒序
   */
  reversed?: boolean
  /**
   * 编号起始值
   */
  start?: number
  /**
   * 编号类型
   */
  type?:
    | 'none'
    | 'disc'
    | 'circle'
    | 'square'
    | 'decimal'
    | 'lower-roman'
    | 'upper-roman'
    | 'lower-greek'
    | 'lower-alpha'
    | 'upper-alpha'
    | 'armenian'
    | 'georgian'
}

type OrArr<T> = T | T[]

/**
 * 原始单元格内容
 */
export type RawTableCellContent = OrArr<string | ListElem>

/**
 * 原始单元格
 */
export type RawTableCell = {
  content: RawTableCellContent
  tag?: 'th' | 'td'
  /**
   * 单元格可横跨的列数
   */
  colspan?: number
  /**
   * 单元格可横跨的行数
   */
  rowspan?: number
}

/**
 * 原始表格行
 */
export type RawTableRow = (RawTableCellContent | RawTableCell)[]

/**
 * 单元格内容
 */
export type TableCellContent = (string | ListElem)[]

/**
 * 单元格
 */
export type TableCell = {
  tag: 'th' | 'td'
  content: TableCellContent
  colspan?: number
  rowspan?: number
}

/**
 * 表格行
 */
export type TableRow = TableCell[]

/**
 * 表格列配置
 */
export type TableColumn = {
  /**
   * 横跨的列数
   */
  span: number
  /**
   * 所在列每个单元格文本的水平对齐方式
   *
   * - td:nth-child(an+b) { text-align }
   * - 其中 a 为表的总列数， b 为列在表中的序数位置
   */
  align?: 'left' | 'right' | 'center'
  /**
   * 指定列每个单元格中的文本的垂直对齐方式
   *
   * - vertical-align
   */
  valign?: 'baseline' | 'middle' | 'top' | 'bottom'
}

/**
 * 原始表格列配置
 */
export type RawTableColumn = number | Partial<TableColumn>
