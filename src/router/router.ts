import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeScreen from '@/views/HomeScreen.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/home', component: HomeScreen},

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
