import { reactive, provide, inject, readonly } from 'vue'

interface State {
  state: { textSize: number; };
  incrementTextSize: () => void;
}

export const stateSymbol = Symbol('state')
export const createState = (): State => {
  const state = reactive({ textSize: 1 })
  const incrementTextSize = () => {
    if ((state.textSize + 1) > 3) {
      state.textSize = 0
    } else {
      state.textSize++
    }
  }

  return {
    incrementTextSize,
    state: readonly(state)
  }
}

export const useState = () => inject<State>(stateSymbol)
export const provideState = () => provide(
  stateSymbol,
  createState()
)