import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VCH Wiki',
  description: 'My personal documentation',
  head: [
    ['meta', { property: 'og:title', content: 'VCH Wiki' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:description', content: 'My personal documentation' }],
    ['meta', { property: 'og:url', content: 'https://vchychuzhko.github.io/wiki' }],
    ['meta', { property: 'og:image', content: 'https://vchychuzhko.github.io/wiki/og.jpg' }],
    ['meta', { property: 'og:image:type', content: 'image/jpeg' }],
    ['meta', { property: 'og:image:height', content: '200' }],
    ['meta', { property: 'og:image:width', content: '200' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/wiki/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/wiki/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/wiki/apple-touch-icon-180x180.png', sizes: '180x180' }],
  ],
  transformPageData({ title, description, frontmatter }) {
    if (!title || !description) return

    frontmatter.head ??= []
    frontmatter.head.push(
      ['meta', { property: 'og:title', content: title + ' | VCH Wiki' }],
      ['meta', { property: 'og:description', content: description }],
    )
  },
  base: '/wiki/',
  srcExclude: ['**/README.md', '**/LICENSE.md'],
  ignoreDeadLinks: 'localhostLinks',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/introduction' },
      { text: 'Commands', link: '/commands/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Selfhosted', link: '/selfhosted/' },
    ],

    sidebar: {
      '/commands/': [
        {
          text: 'Commands',
          link: '/',
          base: '/commands',
          items: [
            { text: 'Linux', link: '/linux' },
            { text: 'Git', link: '/git' },
            { text: 'Docker', link: '/docker' },
            { text: 'Docker Hub', link: '/docker-hub' },
            { text: 'Magento', link: '/magento' },
          ]
        },
      ],
      '/tools/': [
        {
          text: 'Tools',
          link: '/',
          base: '/tools',
          items: [
            { text: 'Magento Cloud', link: '/magento-cloud' },
            { text: 'AWS & Kubernetes', link: '/kubernetes' },
          ]
        },
      ],
      '/selfhosted/': [
        {
          text: 'Selfhosted',
          link: '/',
          base: '/selfhosted',
          items: [
            { text: 'Docker', link: '/docker' },
            { text: 'Portainer', link: '/portainer' },
            { text: 'Jellyfin', link: '/jellyfin' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vchychuzhko/wiki' }
    ],

    outline: 'deep',

    editLink: {
      pattern: 'https://github.com/vchychuzhko/wiki/blob/master/:path',
      text: 'View this page on GitHub',
    },

    lastUpdated: true,

    footer: {
      copyright: 'Copyright © 2026 Vladyslav Chychuzhko',
    },
  }
})
