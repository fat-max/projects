<script lang="ts" setup>
import { data } from "../../data/entries.data";

function formatTags(tags) {
    if (Array.isArray(tags)) return tags

    return [tags]
}
</script>
<template>
    <div class="grid justify-items-stretch gap-4">
        <a v-for="entry in data.entries"
            class="relative flex flex-row items-stretch min-h-24 max-h-32 overflow-hidden !no-underline !text-gray-900 shadow-sm shadow-gray-500/50 rounded-lg"
            :href="entry.url">
            <figure class="flex items-center justify-center">
                <img v-if="entry.frontmatter.img" :src="entry.frontmatter.img" :alt="entry.frontmatter.title"
                    class="object-cover w-full h-full block" />
                <img v-else src="/logo-orange.svg" :alt="entry.frontmatter.title"
                    class="object-cover w-full h-full block" />
            </figure>
            <div
                class="flex flex-col gap-2 flex-wrap flex-start flex-1 p-2 overflow-hidden text-ellipsis dark:text-white">
                <h2 class="!p-0 !m-0 !border-none !text-lg w-full">{{ entry.frontmatter.title }}</h2>
                <p class="flex-1 !p-0 !m-0 !text-sm">{{ entry.frontmatter.description }}</p>

                <div>
                    <span v-for="tag in formatTags(entry.frontmatter.tags)"
                        class="mx-1 border px-2 rounded-full text-xs font-normal">{{
                            tag
                        }}</span>
                </div>
            </div>
        </a>
    </div>

    <!-- <pre>
        {{ entries }}
    </pre> -->

    <!-- <div class="join">
        <button class="join-item btn btn-xs">1</button>
        <button class="join-item btn btn-xs btn-active">2</button>
        <button class="join-item btn btn-xs">3</button>
        <button class="join-item btn btn-xs">4</button>
    </div> -->
</template>
