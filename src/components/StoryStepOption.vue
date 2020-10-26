<template>
  <button tabindex="0" class="step-option" @click="$emit('update:step', goto)">
    {{ index }}. {{ text || 'Continue' }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StoryStepOption',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    text: {
      type: String,
      default: null
    },
    goto: {
      type: Number,
      default: null
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.step-option {
  @apply w-full bg-transparent text-blue-300
         font-semibold py-2 px-4 mb-3 border
         border-blue-300 rounded text-left;

  &:hover {
    @apply bg-blue-500 text-white border-transparent;
  }
}
</style>
