import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const getSideBar = (): any => {
  const generatedSidebar = generateSidebar([
    {
      documentRootPath: '/src',
      resolvePath: '/',
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      hyphenToSpace: true,
      keepMarkdownSyntaxFromTitle: true,
    },
  ]);
  return generatedSidebar ?? [];
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "C'est la Vue",

  description: "VitePress CMS with TypeScript Support",
 
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
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: getSideBar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
