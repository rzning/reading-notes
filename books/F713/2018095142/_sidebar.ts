import { SidebarConfigArray } from 'vuepress'

const sidebar: SidebarConfigArray = [
  './',
  {
    text: 'Contents',
    collapsible: false,
    children: [
      { link: 'chapter01', text: '第一章 区块链概论' },
      { link: 'chapter02', text: '第二章 以太坊工作原理与基础' },
      { link: 'chapter03', text: '第三章 以太坊安装与开发环境配置' },
      { link: 'chapter04', text: '第四章 以太坊应用接口' }
    ]
  }
]

export default sidebar
