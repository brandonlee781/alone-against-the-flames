import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/tailwind.css'
import router from './router'

import { stateSymbol, createState } from './store';
import {
  stateSymbol as investigatorStateSymbol,
  createInvestigatorState
} from './store/investigator';

createApp(App)
  .use(router)
  .provide(stateSymbol, createState())
  .provide(investigatorStateSymbol, createInvestigatorState())
  .mount('#app')
