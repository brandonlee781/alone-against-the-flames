<template>
  <div class="w-full rounded overflow-hidden shadow-lg border border-white my-2">
    <div class="p-4">
      <div class="flex items-center font-bold text-left text-md">
        <span>
          <HeartIcon fill="#efefef"/>
        </span>
        <span class="pl-3" v-html="displayText"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { defineComponent, computed, PropType } from 'vue';
import HeartIcon from '@mdi/svg/svg/heart.svg';
import { AttrChange } from '@/story/story';

export default defineComponent({
  name: 'StoryAttrChange',
  components: {
    HeartIcon,
  },
  props: {
      change: {
        type: Object as PropType<AttrChange>,
        required: true,
      }
  },
  setup(props) {
    const displayText = computed(() => {
      if (props.change?.text) return props.change?.text;
      let points = 'points';


      if (props.change?.increase) {
        if (props.change?.increase === '1') points = 'point'
        return `You may restore ${props.change?.increase} ${props.change?.attribute} ${points}.`
      }

      if (props.change?.decrease) {
        if (props.change?.decrease === '1') points = 'point'
        return `Lose ${props.change?.decrease} ${props.change?.attribute} ${points}.`
      }

      // if (props.text) return props.text;
      // return `You may check mark the small box beside the <span class="uppercase">${props.skill}</span> skill.`
    })
    return { displayText };
  },
});
</script>

<style lang="scss" scoped>

</style>
