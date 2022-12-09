import { SidebarConfigArray } from 'vuepress'

const sidebar: SidebarConfigArray = [
  './',
  {
    text: 'Contents',
    collapsible: false,
    children: [
      { link: 'chapter01', text: '第一章 介绍' },
      { link: 'chapter02', text: '第二章 什么是模式' },
      { link: 'chapter03', text: '第三章 模式状态测试' },
      { link: 'chapter04', text: '第四章 设计模式的结构' },
      { link: 'chapter05', text: '第五章 编写设计模式' },
      { link: 'chapter06', text: '第六章 反模式' },
      { link: 'chapter07', text: '第七章 设计模式类别' },
      { link: 'chapter08', text: '第八章 设计模式分类' },
      { link: 'chapter09', text: '第九章 JavaScript 设计模式' }
    ]
  },
  {
    text: 'Patterns',
    collapsible: false,
    children: [{ link: 'pattern01', text: 'Constructor 构造器模式' }]
  }
]

export default sidebar
