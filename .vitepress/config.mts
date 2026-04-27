import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VCH Wiki',
  description: 'My personal documentation',
  srcExclude: ['**/README.md', '**/LICENSE.md'],
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
  }
})
