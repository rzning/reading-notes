const sidebar = require('./sidebar')

module.exports = {
  title: '读书笔记 - rzning.com',
  description: '阮振宁的日常读书笔记',
  base: '/',
  port: '8090',
  dest: 'dist',
  themeConfig: {
    nav: [
      {
        text: 'Rzning Home Page',
        link: 'http://rzning.com/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/rzning/reading-notes'
      }
    ],
    sidebarDepth: 2,
    // displayAllHeaders: true,
    sidebar
  }
}
