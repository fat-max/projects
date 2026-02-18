import Tailwind from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vitepress";

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
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  srcDir: "site",
  cleanUrls: true,
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
