import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FatMax",
  description: "Tools, creations & information",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/logo-dark.svg', dark: '/logo-light.svg' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
            text: 'Pyrotechnic compositions',
            items: [
              {
                text: 'Burst',
                link: '/pyrotechnics/burst',
              },
              {
                text: 'Primes',
                link: '/pyrotechnics/primes',
              },
              {
                text: 'Stars',
                link: '/pyrotechnics/stars',
              },
            ]
          },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {
            text: 'Markdown Examples',
            link: '/markdown-examples'
          },
          {
            text: 'Runtime API Examples', link: '/api-examples'
          },
          {
            text: 'Pyrotechnic compositions',
            items: [
              {
                text: 'Burst',
                link: '/pyrotechnics/burst',
              },
              {
                text: 'Primes',
                link: '/pyrotechnics/primes',
              },
              {
                text: 'Stars',
                link: '/pyrotechnics/stars',
              },
            ]
          },
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fat-max' },
      { icon: 'youtube', link: 'https://www.youtube.com/@xmaxlev' },
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
  }
})
