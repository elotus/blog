module.exports = {
  title: '个人文档', 
  description : '个人文档',
  base : '/blog/',
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  },
  themeConfig : {
    nav : [
        { text: '首页', link: '/' },
        { text: '深度学习', link: '/deep/' },
        { text: 'java技术', link: '/java/' },
        { text: '大数据', link: '/bigdata/' },
        { text: '关于', link: '/about/' }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    activeHeaderLinks: false,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  
}
