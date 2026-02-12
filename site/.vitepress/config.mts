import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FatMax",
  description: "Tools, creations & information",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
      { icon: 'github', link: 'https://github.com/fat-max' }
    ]
  }
})
