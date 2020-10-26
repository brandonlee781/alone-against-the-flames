import { reactive, provide, inject, readonly } from 'vue'

interface Store {
  state: { textSize: number;};
  incrementTextSize: () => void;
  
}

export const stateSymbol = Symbol('state')
export const createState = (): Store => {
  const state = reactive({
    textSize: 1,
  })
  const incrementTextSize = () => {
    if ((state.textSize + 1) > 3) {
      state.textSize = 0
    } else {
      state.textSize++
    }
  }

  return {
    state: readonly(state),
    incrementTextSize,
  }
}

export const useState = () => inject<Store>(stateSymbol)
export const provideState = () => provide(
  stateSymbol,
  createState()
)