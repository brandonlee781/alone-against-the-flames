<template>
  <Navbar></Navbar>
  <router-view :key="$route.fullPath"/>
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
