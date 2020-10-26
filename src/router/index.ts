import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Story from '../views/Story.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Story',
    component: Story
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
