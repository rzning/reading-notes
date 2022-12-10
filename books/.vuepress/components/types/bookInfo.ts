/**
 * 图书信息 Frontmatter
 */
export type BookInfoFrontmatter = {
  /**
   * 书名
   */
  name: string
  /**
   * 国际标准书号 - International Standard Book Number
   */
  ISBN: string
  /**
   * 图书在版编目 - Cataloguing In Publication
   */
  CIP: number
  /**
   * 原书名
   */
  original?: string
  /**
   * 作者
   */
  author?: string
  /**
   * 编者
   */
  compiler?: string
  /**
   * 译者
   */
  translator?: string
  /**
   * 出版社
   */
  publisher?: string
  /**
   * 分类
   */
  category?: string
  /**
   * 标签
   */
  tags?: string | string[]
  /**
   * 封面图 URL
   */
  cover?: string
}

export type BookBaseInfoNames =
  | 'name'
  | 'original'
  | 'author'
  | 'compiler'
  | 'translator'
  | 'publisher'
  | 'category'
