import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
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
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
