<template>
  <div class="step-text" v-html="text"></div>
</template>

<script setup="props" lang="ts">
declare const props: { // eslint-disable-line
  text: string
}
</script>

<style lang="scss" scoped>
.step-text {
  @apply font-body text-left whitespace-pre-wrap;
  max-width: 100vw;
  font-size: 14px;
}
</style>
