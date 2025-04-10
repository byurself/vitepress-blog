import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-blog/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  // header标签里面插入的内容
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", {
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "24f83e77-f0a9-4450-838d-fccfaff5144f"
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 网站的logo
    logo: "/logo.svg",
    // 文章右侧大纲目录
    outline: {
      level: [2, 6],
      label: "目录",
    },
    // 自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 返回顶部label
    returnToTopLabel: "返回顶部",
    // 搜索
    search: {
      provider: "local",
    },
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2025-${new Date().getFullYear()} byu_rself`,
    },
    // 文档的最后更新时间
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/byurself' }
    ]
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        // 自定义图标: https://iconify.design/
        customIcon: {
          'java': localIconLoader(import.meta.url, '../public/java.svg'),
          'python': localIconLoader(import.meta.url, '../public/python.svg'),
        },
      })
    ],
  }
})
