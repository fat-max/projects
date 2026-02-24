<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'

const svg = ref(null)
const size = ref(400)
const radius = computed(() => size.value / 2)
const strands = ref(16)

watch(strands, (val: number) => {
  if (val % 4 != 0) return

  svg.value.querySelectorAll('line').forEach(element => {
    element.remove()
  });

  calcLines()
})

const calcLines = () => {
  let x, y, rads, offset = 0, lines = []
  for (let i = 0; i < strands.value * 2; i++) {
    if (i == strands.value) offset = 0.2
    rads = (i / strands.value) * Math.PI * 2 + offset
    x = radius.value * Math.cos(rads)
    y = radius.value * Math.sin(rads)
    lines.push([x, y])
  }

  console.log(strands.value)
  for (let i = 0; i < strands.value; i++) {
    drawLine(lines[i], lines[strands.value + i])
  }
}

const drawLine = (start: number[], end: number[]) => {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  line.setAttribute("x1", start[0] + radius.value)
  line.setAttribute("y1", start[1] + radius.value)
  line.setAttribute("x2", end[0] * -1 + radius.value)
  line.setAttribute("y2", end[1] * -1 + radius.value)
  line.setAttribute("stroke", "black")
  line.setAttribute("stroke-width", "1")
  svg.value.appendChild(line)
}

onMounted(() => {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle.setAttribute("cx", radius.value)
  circle.setAttribute("cy", radius.value)
  circle.setAttribute("r", '10')
  circle.setAttribute("fill", 'black')
  circle.setAttribute("stroke", 'black')
  svg.value.appendChild(circle)

  calcLines()
})

</script>

<template>
  <p class="print:hidden">A tool for creating spiking templates for canister shells. Simply enter the number of strands
    you want (must be
    divisible by 4), then print it at the correct scale. A future update may include a feature to set the shell diameter
    and automatically apply it to the print layout.</p>
  <div class="flex flex-col items-center w-full">
    <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" ref="svg">
      <circle :cx="radius" :cy="radius" :r="radius - 1" fill="white" stroke="black" stroke-width="2" />
    </svg>

    <div class="flex gap-2 mt-6">
      <div>
        <label class="text-sm font-medium mb-2 block" for="strands">Strands</label>
        <input type="number" placeholder="Strands" id="strands" v-model="strands"
          class="w-full py-1.5 px-2 bg-gray-100 border border-gray-200 text-slate-800 focus:border-slate-900 text-sm outline-0 transition-all" />
      </div>
      <!-- <div>
        <label class="text-sm font-medium mb-2 block" for="size">Shell size (in.)</label>
        <input type="number" placeholder="Shell size" id="size"
          class="w-full py-1.5 px-2 bg-gray-100 border border-gray-200 text-slate-800 focus:border-slate-900 text-sm outline-0 transition-all" />
      </div> -->
    </div>
  </div>
</template>

<style>
/* @media print {
  * {
    display: none !important;
  }
} */
</style>