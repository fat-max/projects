import Tailwind from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vitepress";

const url = 'https://fatmax.se';
const currentDir = dirname(fileURLToPath(import.meta.url));
const componentsDir = resolve(currentDir, "theme", "components");

const pyroData = {
  text: "Pyro data",
  items: [
    {
      text: "Compositions",
      items: [
        {
          text: "Burst",
          link: "/pyro/burst",
        },
        {
          text: "Primes",
          link: "/pyro/primes",
        },
        {
          text: "Stars",
          link: "/pyro/stars",
        },
      ],
    },
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FatMax",
  description: "Tools, creations & information",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['meta', { name: 'twitter:site', content: '@QwertyLevin' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:site_name', content: 'FatMax' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  srcDir: "site",
  cleanUrls: true,
  sitemap: {
    hostname: url,
  },
  transformPageData(pageData) {
    const canonicalUrl = `${url}${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: "/logo-dark.svg",
      dark: "/logo-light.svg",
      alt: "fatmax.se",
    },
    nav: [
      {
        text: "Home",
        link: "/",
      },
      pyroData,
    ],

    sidebar: [pyroData],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/fat-max" },
      { icon: "youtube", link: "https://www.youtube.com/@xmaxlev" },
    ],
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026'
    }
  },
  vite: {
    plugins: [
      Tailwind(),
      Components({
        dirs: [componentsDir],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: resolve(currentDir, "components.d.ts"),
      }),
    ],
    // output: {
    //   manualChunks: {
    //     three: ['three'],
    //   }
    // }
  }
});
