<script lang="ts" setup>
import { ref, computed } from 'vue'
import FMThree from './FMThree.vue'

const props = defineProps(['items'])
const selected = ref(props.items[0] ?? null)

function update(item) {
    selected.value = item
}

function getThumb(item) {
    if (item.type != '3d')
        return item.src

    return '/images' + item.src.replace('.stl', '.png')
}
</script>

<template>
    <div class="items-center space-y-4">
        <div class="w-full max-w-3xl flex justify-center">
            <FMThree v-if="selected.type == '3d'" :item="selected" />
            <img v-else :src="selected.src" class="rounded-lg" :alt="selected.alt">
        </div>

        <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 max-w-3xl gap-4 items-center justify-center">
            <template v-for="item in items">
                <img :src="getThumb(item)" :alt="item.alt" class="max-h-full rounded-lg" @click="update(item)" />
            </template>
        </div>
    </div>
</template>
