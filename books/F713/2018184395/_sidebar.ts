import { SidebarConfigArray } from 'vuepress'

const sidebar: SidebarConfigArray = [
  './',
  {
    text: 'Contents',
    collapsible: false,
    children: [
      { link: 'chapter01', text: '第一章 引言' },
      { link: 'chapter02', text: '第二章 比特币' },
      { link: 'chapter03', text: '第三章 以太坊' },
      { link: 'chapter04', text: '第四章 企业级区块链' },
      { link: 'chapter05', text: '第五章 Quorum' }
    ]
  }
]

export default sidebar
