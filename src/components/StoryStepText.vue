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

<script lang="ts">
import { useState } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  props: {
    text: {
      type: String,
      default: '',
    }
  },
  setup() {
    const state = useState()
    const textSize = computed(() => state?.state.textSize)
    return { textSize }
  }
});
</script>

<style lang="scss" scoped>
.step-text {
  @apply font-body text-left whitespace-pre-wrap;
  max-width: 100vw;
}
</style>
