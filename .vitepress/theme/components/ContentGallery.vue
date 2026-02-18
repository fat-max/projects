<script lang="ts" setup>
import { ref, computed } from 'vue'
import ThreeView from './ThreeView.vue'
const props = defineProps(['items'])
const selected = ref(props.items[0] ?? null)
function update(item) {
    selected.value = item
}
</script>

<template>
    <div class="items-center space-y-4">
        <div class="w-full max-w-3xl h-80 flex justify-center">
            <ThreeView v-if="selected.type == '3d'" :item="selected" />
            <img v-else :src="selected.src" class="h-full rounded-lg" :alt="selected.alt">
        </div>

        <div class="grid grid-cols-4 max-w-3xl gap-4 h-24 items-center justify-center">
            <template v-for="item in items">
                <img :src="item.src" :alt="item.alt" class="max-h-full rounded-lg" @click="update(item)" />
            </template>
        </div>
    </div>
</template>
