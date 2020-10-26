import { reactive } from 'vue'

import Charactersitics from '@/story/characterstics';
import Attributes from '@/story/attributes';
import Skills from '@/story/skills';

interface InvestigatorState {
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

export const createInvestigatorState = () => {
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
  const setInfo = (info: keyof InvestigatorState["info"], value: string) => {
    state.info[info] = value
  }
}