import { defineUserConfig, defaultTheme } from 'vuepress'
import { useRegisterComponentsPlugin } from './components/registerComponents.js'
import sidebar from './sidebar.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '读书笔记 - rzning.com',
  description: '阮振宁的日常读书笔记',
  base: '/',
  port: 8090,
  dest: 'dist',
  plugins: [useRegisterComponentsPlugin],
  theme: defaultTheme({
    colorMode: 'auto',
    colorModeSwitch: true,
    home: '/',
    navbar: [
      {
        text: 'Rzning Home Page',
        link: 'http://rzning.com/'
      }
    ],
    repo: 'rzning/reading-notes',
    sidebar,
    sidebarDepth: 2
  })
})
