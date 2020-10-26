<template>
  <div
    :class="{
      'step-text': true,
      'text-sm': textSize === 0,
      'text-base': textSize === 1,
      'text-lg': textSize === 2,
      'text-xl': textSize === 3,
    }"
    v-html="text"
  ></div>
</template>

<script setup="props" lang="ts">
import { useState } from '@/store';
import { computed } from 'vue';
declare const props: { // eslint-disable-line
  text: string
}
const state = useState()
export const textSize = computed(() => state?.state.textSize)
</script>

<style lang="scss" scoped>
.step-text {
  @apply font-body text-left whitespace-pre-wrap;
  max-width: 100vw;
}
</style>
