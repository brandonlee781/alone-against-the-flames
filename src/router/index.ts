import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Story from '../views/Story.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/alone/:step',
    name: 'Story',
    component: Story
  },
  {
    path: '/',
    redirect: '/alone/1'
  },
  {
    path: '/alone',
    redirect: '/alone/1'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
