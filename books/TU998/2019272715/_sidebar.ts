import { SidebarConfigArray } from 'vuepress'

const sidebar: SidebarConfigArray = [
  './',
  {
    text: '一、职业道德',
    collapsible: false,
    children: ['chapter_1_1', 'chapter_1_2']
  },
  {
    text: '二、消防工作概述',
    children: ['chapter_2_1']
  },
  {
    text: '三、燃烧和火灾'
  },
  {
    text: '四、建筑消防'
  },
  {
    text: '五、电气消防'
  },
  {
    text: '六、消防设施'
  },
  {
    text: '七、初起火灾处置'
  },
  {
    text: '八、计算机基础'
  },
  {
    text: '九、相关法律法规'
  }
]

export default sidebar
