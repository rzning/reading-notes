import { SidebarConfigArray } from 'vuepress'

const sidebar: SidebarConfigArray = [
  './',
  {
    text: 'Wastelands',
    collapsible: false,
    children: [
      { link: 'preface', text: '序' },
      { link: 'fiction01', text: '一切混乱的终结' },
      { link: 'fiction02', text: '回收' },
      { link: 'fiction03', text: '面包与炸弹' },
      { link: 'fiction04', text: '进镇出镇记' },
      { link: 'fiction05', text: '沙渣之族' },
      { link: 'fiction06', text: '隧道暗且长' },
      { link: 'fiction07', text: '等待微风号' },
      { link: 'fiction08', text: '永不绝望' },
      { link: 'fiction09', text: '系统管理员照看世界' },
      { link: 'fiction10', text: '最后的原生生物' },
      { link: 'fiction11', text: '末日一瞥' }
    ]
  }
]

export default sidebar
