// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import FMEntries from "./components/FMEntries.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(FMEntries)
    });
  },
  enhanceApp({ app, router, siteData }) {},
} satisfies Theme;
