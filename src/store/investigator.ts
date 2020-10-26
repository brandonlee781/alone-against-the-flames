import { reactive, provide, inject, readonly } from 'vue'

import Charactersitics from '@/story/characterstics';
import Attributes from '@/story/attributes';
import Skills from '@/story/skills';

export interface InvestigatorState {
  info: {
    name: string;
    occupation: string;
    age: string;
    sex: string;
    residence: string;
    birthplace:string;
  };
  charactersitics: {
    [key: string]: number;
  };
  attributes: {
    [key: string]: number;
  }
  skills: {
    [key: string]: number;
  }
}

type InfoKey = keyof InvestigatorState["info"]
interface InvestigatorStore {
  state: InvestigatorState;
  setCharacteristic: (char:string, value: number) => void;
  setAttribute: (attr:string, value: number) => void;
  setSkill: (skill:string, value: number) => void;
  setInfo: (info:InfoKey, value: string) => void;
}

export const stateSymbol = Symbol('investigatorState')
export const createInvestigatorState = (): InvestigatorStore => {
  const stateSkills: { [key:string]: number } = {}
  Object.keys(Skills).forEach(skill => {
    stateSkills[skill] = 0;
  })
  const state = reactive<InvestigatorState>({
    info: {
      name: '',
      occupation: '',
      age: '',
      sex: '',
      residence: '',
      birthplace: ''
    },
    charactersitics: {
      [Charactersitics.STR]: 0,
      [Charactersitics.DEX]: 0,
      [Charactersitics.INT]: 0,
      [Charactersitics.CON]: 0,
      [Charactersitics.APP]: 0,
      [Charactersitics.POW]: 0,
      [Charactersitics.SIZ]: 0,
      [Charactersitics.EDU]: 0,
    },
    attributes: {
      [Attributes.HIT_POINTS]: 0,
      [Attributes.SANITY_POINTS]: 0,
      [Attributes.LUCK_POINTS]: 0,
      [Attributes.MAGIC_POINTS]: 0,
    },
    skills: stateSkills
  })

  const setCharacteristic = (char: string, value: number) => {
    state.charactersitics[char] = value
  }
  const setAttribute = (attr: string, value: number) => {
    state.attributes[attr] = value
  }
  const setSkill = (skill: string, value: number) => {
    state.skills[skill] = value
  }
  const setInfo = (info: InfoKey, value: string) => {
    state.info[info] = value
  }

  return {
    state: readonly(state),
    setCharacteristic,
    setAttribute,
    setSkill,
    setInfo,
  }
}

export const useState = () => inject<InvestigatorStore>(stateSymbol)
export const provideState = () => provide(
  stateSymbol,
  createInvestigatorState()
)