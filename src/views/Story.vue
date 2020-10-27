<template>
  <div class="wrapper grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2">

    <div class="story-text sm:mb-3">
      <StoryStepText :text="currentStep.text" :textSize="3"/>
    </div>

    <div class="story-opts">
      <StorySkillUp
        v-if="currentStep.skillUp"
        :skill="currentStep.skillUp.skill"
        :text="currentStep.skillUp.text"
      />

      <StoryAttrChange
        v-for="(change, index) in currentStep.attributeChange"
        :key="`change-${index}`"
        :change="change"
      />

      <StoryStepRoll
        v-for="(roll, index) in currentStep.rolls"
        :key="`roll-${index}`"
        :roll="roll"
      />

      <StoryStepOption
        v-for="(option, index) in currentStep.options"
        :key="`option-${index}`"
        :index="index + 1"
        :text="option.text"
        :goto="option.goto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { story } from '../story/story';

import StoryStepText from '@/components/StoryStepText.vue';
import StoryStepOption from '@/components/StoryStepOption.vue';
import StoryStepRoll from '@/components/StoryStepRoll.vue';
import StorySkillUp from '@/components/StorySkillUp.vue';
import StoryAttrChange from '@/components/StoryAttrChange.vue';

export default defineComponent({
  name: 'Story',
  components: {
    StoryStepText,
    StoryStepOption,
    StoryStepRoll,
    StorySkillUp,
    StoryAttrChange,
  },
  setup() {
    document.title = 'Alone Against the Flames'
    const route = useRoute()
    const { step } = route.params
    const currentStep = story.find(s => s.id === (+step || 1))
    return { story, currentStep }
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 8px;
}
</style>
