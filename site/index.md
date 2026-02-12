---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FatMax"
  text: "Tools, creations & information"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
  image:
    light: /logo-light.svg
    dark: /logo-dark.svg
    alt: FatMax

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- <script setup>
import { data as entries } from './.vitepress/themes/index.data.js'

</script> -->


<a v-for="entry in entries" href="/entries/test" style="display: block; width:50%; margin: auto; padding: .75rem; border: 2px #e5e7eb solid; border-radius: 1rem;">
    <h2 style="font-size: 1.25rem; line-height: 1.75rem; font-weight: 700;">My new Article</h2>
    <small>2023-05-29</small>
    <p>Est commodi iusto et alias deleniti sed voluptatibus tempora est reprehenderit autem...</p>
</a>
