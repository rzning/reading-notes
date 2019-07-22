module.exports = {
    title: '读书笔记 - rzning.com',
    description: '阮振宁的日常读书笔记',
    base: '/reading-notes/',
    port: '8090',
    dest: 'dist',
    themeConfig: {
        nav: [
            { text: 'Rzning Home Page', link: 'http://rzning.com/' },
            { text: 'GitHub', link: 'https://github.com/rzning/reading-notes'}
        ],
        sidebarDepth: 2,
        // displayAllHeaders: true,
        sidebar: {
            '/F713/2018095142/': [
                '',
                {
                    title: 'Contents',
                    collapsable: false,
                    children: [
                        ['chapter01', '第一章 区块链概论']
                    ]
                }
            ],
            '/F713/2018184395/': [
                '',
                {
                    title: 'Contents',
                    collapsable: false,
                    children: [
                        ['chapter01', '第一章 引言'],
                        ['chapter02', '第二章 比特币'],
                        ['chapter03', '第三章 以太坊'],
                        ['chapter04', '第四章 企业级区块链'],
                        ['chapter05', '第五章 Quorum']
                    ]
                },
            ],
            '/': false
        }
    }
}
