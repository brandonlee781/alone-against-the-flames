<template>
  <nav id="nav">
    <div class="flex items-center">
      <button class="nav-button" @click="isOpenLeft = !isOpenLeft">
        <DiceD20Icon fill="#efefef" />
      </button>
    </div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpenLeft = false"
        v-show="isOpenLeft"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpenLeft = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside :class="{ 'drawer-right': true, 'open': isOpenLeft }">
      <span class="flex w-full items-center p-4 border-b">
        <button class="nav-button" @click="isOpenLeft = false">
          <CloseIcon fill="#efefef" />
        </button>
      </span>

      <span class="flex w-full items-center p-4 border-b">
        <span class="text-lg text-white">
          Current Roll: 
          <Loader v-if="isRolling" />
          <span v-else>
            {{ currentRoll }}
          </span>
        </span>
      </span>


      <span class="flex flex-wrap w-full justify-center items-center p-4 border-b">
        <button class="roll-buton" @click="roll(2)">
          <DiceD2Icon fill="#efefef" />
          <span>Roll D2</span>
        </button>
        <button class="roll-buton" @click="roll(3)">
          <DiceD3Icon fill="#efefef" />
          <span>Roll D3</span>
        </button>
        <button class="roll-buton" @click="roll(4)">
          <DiceD4Icon fill="#efefef" />
          <span>Roll D4</span>
        </button>
        <button class="roll-buton" @click="roll(6)">
          <DiceD6Icon fill="#efefef" />
          <span>Roll D6</span>
        </button>
        <button class="roll-buton" @click="roll(8)">
          <DiceD8Icon fill="#efefef" />
          <span>Roll D8</span>
        </button>
        <button class="roll-buton" @click="roll(10)">
          <DiceD10Icon fill="#efefef" />
          <span>Roll D10</span>
        </button>
        <button class="roll-buton" @click="roll(100)">
          <DiceMultIcon fill="#efefef" />
          <span>Roll D100</span>
        </button>
      </span>
    </aside>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import CloseIcon from '@mdi/svg/svg/close.svg'
import DiceD2Icon from '@mdi/svg/svg/dice-2-outline.svg';
import DiceD3Icon from '@mdi/svg/svg/dice-3-outline.svg';
import DiceD4Icon from '@mdi/svg/svg/dice-d4-outline.svg';
import DiceD6Icon from '@mdi/svg/svg/dice-d6-outline.svg';
import DiceD8Icon from '@mdi/svg/svg/dice-d8-outline.svg';
import DiceD10Icon from '@mdi/svg/svg/dice-d10-outline.svg';
import DiceD20Icon from '@mdi/svg/svg/dice-d20-outline.svg';
import DiceMultIcon from '@mdi/svg/svg/dice-multiple-outline.svg';

import Loader from './Loader.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Loader,
    DiceD20Icon,
    DiceD10Icon,
    DiceD6Icon,
    DiceD4Icon,
    DiceD8Icon,
    DiceD2Icon,
    DiceD3Icon,
    DiceMultIcon,
    CloseIcon,
  },
  setup() {
    const isOpenLeft = ref(false);
    const isRolling = ref(false);
    const currentRoll = ref<number | null>(null);
    watch(isOpenLeft, () => {
      if (isOpenLeft.value) document.body.style.setProperty("overflow", "hidden");
      else document.body.style.removeProperty("overflow");
    }, {
      immediate: true
    })

    const roll = (max: number) => {
      isRolling.value = true;
      const roll = Math.floor(Math.random() * max) + 1
      currentRoll.value = roll;
      setTimeout(() => isRolling.value = false, 1000)
    } 

    return {
      isOpenLeft,
      currentRoll,
      roll,
      isRolling,
    }
  }
});
</script>

<style lang="scss" scoped>
#nav {
  @apply flex flex-row-reverse w-full items-center justify-between
         px-2 h-16 bg-transparent text-gray-700
         border-b border-gray-900 z-10;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-button {
  @apply p-2 bg-transparent border-transparent;
  &:focus {
    @apply outline-none;
  }
}

.roll-buton {
  @apply flex flex-col items-center p-2 bg-transparent border-transparent text-white text-xs;
  &:focus {
    @apply outline-none;
  }
}

.drawer-right {
  @apply transform top-0 right-0 w-64 bg-white
         fixed h-full overflow-auto ease-in-out
         transition-all translate-x-full duration-300 z-30
         bg-gray-800;

  &.open {
    @apply translate-x-0
  }
}
</style>
