<template>
  <div class="whitespace-pre-wrap mb-2" v-html="descriptionText"></div>

  <div class="wrapper">
    <button class="success-link" @click="$emit('update:step', roll.succeed)">
      {{ roll.successText || 'Success' }}
    </button>

    <button class="fail-link" @click="$emit('update:step', roll.fail)">
      {{ roll.failText || 'Failure' }}
    </button>

    <button v-if="roll.fumble" class="fumble-link" @click="$emit('update:step', roll.fumble)">
      {{ 'Fumble' }}
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { defineComponent, computed, PropType } from 'vue';
import { StoryRoll } from '@/story/story';


export default defineComponent({
  name: 'StoryStepRoll',
  props: {
    roll: {
      type: Object as PropType<StoryRoll>
    }
  },
  setup(props) {
    const descriptionText = computed(() => {
      let str = 'Make a ';
      if (props.roll?.text) return props.roll.text
      const diff = props.roll?.difficulty
      const roll = props.roll?.skill || props.roll?.characteristic

      if (diff) {
        str += `${diff} `
      }

      str += `${roll} roll.`
      return str
    })
    return { descriptionText }
  },
});
</script>

<style lang="scss" scoped>
.success-link,
.fail-link,
.fumble-link {
  @apply w-full bg-transparent font-semibold
         py-2 px-4 mb-3 border rounded;

  &:hover {
    @apply text-white border-transparent;
  }
}

@screen md {
  .wrapper {
    @apply w-full flex flex-row;

    a {
      @apply w-1/2
    }
  }
}

@screen sm {
  .wrapper {
    @apply flex-no-wrap;
  }
}
.success-link {
  @apply text-green-300 border-green-300 mr-1;

  &:hover {
    @apply bg-green-500;
  }
}
.fail-link {
  @apply text-red-300 border-red-300;

  &:hover {
    @apply bg-red-500;
  }
}

.fumble-link {
  @apply text-orange-800 border-orange-800;

  &:hover {
    @apply bg-red-900;
  }
}
</style>
