<template>
  <div class="w-full rounded overflow-hidden shadow-lg border border-white my-2">
    <div class="p-4">
      <div class="flex items-center font-bold text-left text-md mb-2">
        <span>
          <StarIcon fill="#efefef"/>
        </span>
        <span class="pl-3" v-html="displayText"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import StarIcon from '@mdi/svg/svg/star.svg';

export default defineComponent({
  name: 'StorySkillUp',
  components: {
    StarIcon,
  },
  props: {
    skill: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: null,
    }
  },
  setup(props) {
    const displayText = computed(() => {
      if (props.text) return props.text;
      return `You may check mark the small box beside the <span class="uppercase">${props.skill}</span> skill.`
    })
    return { displayText };
  },
});
</script>

<style lang="scss" scoped>

</style>
