<script setup lang="ts">
import { computed } from 'vue'
import { data } from "../../data/entries.data";

const props = defineProps<{
  filter?: string | string[]
}>()

const entries = computed(() => {
  return data.entries.filter(filter)
})

function filter(entry) {
  if (!props.filter) return true;

  const tags = Array.isArray(entry.frontmatter.tags) ? entry.frontmatter.tags : [entry.frontmatter.tags]
  const filterTags = Array.isArray(props.filter) ? props.filter : [props.filter]
  const intersection = tags.filter(tag => filterTags.includes(tag));

  return intersection.length
}
</script>

<template>
  <div v-if="data.entries" class="VPFeatures">
    <div class="containerd">
      <div class="items">
        <div v-for="entry in entries" :key="entry.url" class="item">
          <FMEntry :title="entry.frontmatter.title" :image="entry.frontmatter.img"
            :details="entry.frontmatter.description" :link="entry.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {

  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {

  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
