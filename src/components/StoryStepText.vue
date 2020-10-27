<template>
  <div :class="`step-text ${textClass}`" v-html="text"></div>
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
    const textClass = computed(() => {
      switch(state?.state.textSize) {
        case 0:
          return 'text-sm'
        case 2:
          return 'text-lg'
        case 3:
          return 'text-xl'
        case 1:
        default:
          return 'text-base'
      }
    })
    return { textClass }
  }
});
</script>

<style lang="scss" scoped>
.step-text {
  @apply font-body text-left whitespace-pre-wrap;
  max-width: 100vw;
}
</style>
