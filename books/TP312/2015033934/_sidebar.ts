import { SidebarConfigArray } from 'vuepress'
import { getPath } from '../../.vuepress/utils.js'

const path = getPath(import.meta.url)

const sidebar: SidebarConfigArray = [
  path('.'),
  {
    text: 'PART A : Scope & Closures',
    collapsible: false,
    children: [
      { link: path('./part_a/chapter01.md'), text: '1 作用域是什么' },
      { link: path('./part_a/chapter02.md'), text: '2 词法作用域' },
      { link: path('./part_a/chapter03.md'), text: '3 函数作用域和块作用域' }
    ]
  },
  {
    text: 'PART B : this & Object Prototypes',
    collapsible: false
  }
]

export default sidebar
