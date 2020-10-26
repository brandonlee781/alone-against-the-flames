import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/tailwind.css'
import router from './router'

import { stateSymbol, createState } from './store';

createApp(App).use(router).provide(stateSymbol, createState()).mount('#app')
