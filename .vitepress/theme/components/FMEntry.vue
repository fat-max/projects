<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'

defineProps<{
  image?: DefaultTheme.FeatureIcon
  title: string
  details?: string
  link?: string
}>()
</script>

<template>
  <a class="VPLink link no-icon VPFeature flex items-center relative overflow-hidden" :href="link">
    <figure v-if="image" class="flex items-center justify-center pl-6 xs:pl-0 w-1/3 md:max-w-1/5">
      <img class="object-cover w-full h-full" :src="image" />
    </figure>

    <article class="box flex-1 w-fulld xs:w-autod">
      <h2 class="title" v-html="title"></h2>
      <p v-if="details" class="details" v-html="details"></p>
    </article>
  </a>
</template>

<style scoped>
.VPFeature {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.VPFeature.link:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.box> :deep(.VPImage) {
  margin-bottom: 20px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
}
</style>
