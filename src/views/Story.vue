<template>
  <div class="wrapper">
    <StoryStepText :text="currentStep.text"/>

    <StorySkillUp
      v-if="currentStep.skillUp"
      :skill="currentStep.skillUp.skill"
      :text="currentStep.skillUp.text"
    />

    <div class="mt-3">
      <template v-for="(change, index) in currentStep.attributeChange" :key="`change-${index}`">
        <StoryAttrChange :change="change" />
      </template>
    </div>

    <div class="mt-3">
      <template v-for="(roll, index) in currentStep.rolls" :key="`roll-${index}`">
        <StoryStepRoll :roll="roll" />
      </template>
    </div>

    <div class="mt-3">
      <template v-for="(option, index) in currentStep.options" :key="`option-${index}`">
        <StoryStepOption :index="index + 1" :text="option.text" :goto="option.goto" />
      </template>
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
    const route = useRoute();
    const { step } = route.params;
    const currentStep = story.find(s => s.id === (+step || 1));
    return { story, currentStep };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 8px;
}
</style>
