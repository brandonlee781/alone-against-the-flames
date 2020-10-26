<template>
  <Navbar></Navbar>
  <div class="mt-16">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import { defineComponent} from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  }
});

</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
