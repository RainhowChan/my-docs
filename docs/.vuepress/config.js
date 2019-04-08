module.exports = {
  title: '涵弈萝卜头',
  description: 'Just playing around',
  serviceWork: true,
  themeConfig: {
    nav: [
      {
        text: '前端', items: [
          { text: 'Web基础', link: '/web/base/' },
          { text: 'Vue', link: '/web/vue/' },
          { text: 'Angular', link: '/web/angular/' },
          { text: 'React', link: '/web/react/' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'Node', link: '/node/' },
          { text: 'Python', link: '/python/' },
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'Mysql', link: '/mysql/' },
          { text: 'Redis', link: '/redis/' },
          { text: 'Elasticsearch', link: '/elasticsearch/' },
        ]
      },
      {
        text: '运维', link: '/operation/'
      },
      { text: '随笔', link: '/about/' },
      { text: '关于', link: '/about/' }
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}