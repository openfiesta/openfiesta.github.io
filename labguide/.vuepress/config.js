module.exports = {
    title: 'Open FIESTA Lab',
    head: [
        ['link', { rel: 'icon', href: '/image/logoof.png' }],
        ['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.1.0/css/all.css` }]
        // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' }]
    ],
    base: '/',
    description: 'Lab Guidance of Open FIESTA',
    dest: 'public',
    locales: {
        '/': {
            lang: 'en-US'
        },
        '/zh/': {
            lang: 'zh-CN'
        }
    },
    plugins: [
        require('./my-plugin.js')
    ],
    globalUIComponents: [
    ],
    themeConfig:{
        logo: '/image/logoof.png',
        prevLinks: false,
        nextLinks: false,
        repo: 'https://github.com/openfiesta/openfiestalab',
        repoLabel: 'Github',
        docsDir: 'labguide',
        docsBranch: 'master',
        editLinks: true,
        locales: {
            '/': {
                nav:[
                    { text: 'Home', link: '/' },
                    {
                        text: 'Space & Lab',
                        items: [{
                                text: 'Idea Cafe',
                                link: '/labs/idea/'
                            },
                            {
                                text: 'BIO-X Lab',
                                link: '/labs/bio/'
                            },
                            {
                                text: 'Design + Space',
                                link: '/labs/iid/'
                            },
                            {
                                text: 'Studio',
                                link: '/labs/stu/'
                            },
                            {
                                text: 'Machine Room',
                                link: '/labs/machine/'
                            }
                        ]
                    },
                    {
                        text: 'Explore',
                        items: [{
                                text: 'Guidance',
                                link: '/labs/'
                            },
                            {
                                text: 'Project',
                                link: '/projects/'
                            },
                            {
                                text: 'Code of Conduct',
                                link: '/coc/'
                            },
                            {
                                text: 'GitHub Page',
                                link: 'https://github.com/openfiesta'
                            }
                        ]
                    },
                    {
                        text: 'Join us',
                        items: [
                            { text: 'Residency Program', link: '/residency/' },
                            { text: 'Event & Workshop', link: '/events/' },
                            { text: 'Student Club', link: '/club/' },
                            { text: 'Master Program', link: 'http://www.fiesta.tsinghua.edu.cn/admissions' }
                        ]
                    },
                    {
                        text: 'About',
                        items: [
                            { text: 'About Open FIESTA', link: '/about/' },
                            { text: 'timeline', link: '/timeline/'},
                            { text: 'About the website', link: '/website/' }
                        ]
                    }
                ],
                displayAllHeaders: true,
                label: 'English',
//                lastUpdated: 'Last Updated',
                sidebar: [
                    ['/coc', 'Code of Conduct'],
                    {
                        title: 'Labs',
                        path: '/labs/',
                        children: [
                            ['/labs/idea', 'Idea Cafe(J212)'],
                            ['/labs/bio', 'BIO-X Lab(J213)'],
                            ['/labs/iid', 'Design + Space(J211)'],
                            ['/labs/stu', 'Studio(J208)'],
                            ['/labs/machine', 'Machine Room(J201)']
                        ]
                    },
                    ['/learning', 'Learning'],
                    ['/projects', 'Project'],
                    ['/events', 'Event'],
                    ['/club', 'Club'],
                    ['/toolbox', 'Toolbox'],
                    ['/link', 'Friendly Link']
                ]
            },
            '/zh/': {
                nav: [
                    { text: '主页', link: '/zh/' },
                    {
                        text: '空间 & 实验室',
                        items: [{
                                text: '创意交互空间',
                                link: '/zh/labs/idea/'
                            },
                            {
                                text: '生命健康交叉实验室',
                                link: '/zh/labs/bio/'
                            },
                            {
                                text: '创新设计实验室',
                                link: '/zh/labs/stu/'
                            },
                            {
                                text: '机械加工间',
                                link: '/zh/labs/machine/'
                            }
                        ]
                    },
                    {
                        text: '探索',
                        items: [{
                                text: '空间指南',
                                link: '/zh/labs/'
                            },
                            {
                                text: '项目',
                                link: '/zh/projects/'
                            },
                            {
                                text: '行为准则',
                                link: '/zh/coc/'
                            },
                            {
                                text: 'Github',
                                link: 'https://github.com/openfiesta'
                            }
                        ]
                    }, 
                    {
                        text: '加入我们',
                        items: [
                            { text: '入驻项目', link: '/zh/residency/' },
                            { text: '开放活动', link: '/zh/events/' },
                            { text: '学生社团', link: '/zh/club/' },
                            { text: '硕士项目', link: 'http://www.fiesta.tsinghua.edu.cn/cn/admissions' }
                        ]
                    },
                    {
                        text: '关于',
                        items: [
                            { text: '关于Open FIESTA', link: '/zh/about/' },
                            { text: '时间线', link: '/zh/timeline/'},
                            { text: '关于网站', link: '/zh/website/'}
                        ]
                    },
                ],
                label: '简体中文',
//                lastUpdated: '最近更新时间',
                displayAllHeaders: true,
                sidebar: [
                    ['/zh/coc', '行为准则'],
                    {
                        title: '实验室',
                        path: '/zh/labs/',
                        children: [
                            ['/zh/labs/idea', '创新交互空间 Idea Cafe（J212)'],
                            ['/zh/labs/bio', '生命健康交叉实验室 BIO-X Lab（J213）'],
                            ['/zh/labs/iid', '创新设计实验室 Design + Space（J211）'],
                            ['/zh/labs/stu', '摄影室 Studio(J208)'],
                            ['/zh/labs/machine', '机械加工间 Machine Room(J201)']
                        ]
                    },
                    ['/zh/learning', '学习'],
                    ['/zh/projects', '项目'],
                    ['/zh/toolbox', '工具箱'],
                    ['/zh/club', '学生社团'],
                    ['/zh/events', '开放活动'],
                    ['/zh/link', '友情链接']
                ]
            }
        }
    }
}
