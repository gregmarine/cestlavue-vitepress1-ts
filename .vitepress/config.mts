import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I was thinking...",

  description: "Musings by Greg Marine",
 
  srcDir: "./src",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Last updated'
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Featured Entries',
        items: [
          { text: 'New Year, New Blog', link: '/new-year-new-blog' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ByGregMarine/blog' }
    ]
  }
})
