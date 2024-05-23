import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import We from '../views/We.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'we',
      component: We
    }
  ]
})

export default router
