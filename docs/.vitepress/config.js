export default {
  title: "Web 安全弱點掃描教學網站",
  description: "OWASP ZAP 與 Burp Suite 入門與實務指南",
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '工具介紹', link: '/intro/' },
      { text: '原理解析', link: '/concepts/' },
      { text: '實際操作', link: '/practice/' },
      { text: '線上測驗', link: '/quiz/' },
      { text: '教師專區', link: '/teacher/' }
    ],
    sidebar: [
      {
        text: '課程單元',
        items: [
          { text: '1. 工具介紹與比較', link: '/intro/' },
          { text: '2. 核心原理解析', link: '/concepts/' },
          { text: '3. 實作演練 (Juice Shop)', link: '/practice/' },
          { text: '4. 學生觀念測驗', link: '/quiz/' },
          { text: '5. 教師解答專區', link: '/teacher/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
}
