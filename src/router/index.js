import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Terms from '@/views/TermsConditions.vue'
import Privacy from '@/views/PrivacyView.vue'
import redefine from '@/views/redefine.vue'
import We from '../views/We.vue'
import learning from '../views/learning.vue'
import experience from '../views/Experience.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/Privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/redefine',
      name: 'redefine',
      component: redefine
    },
    {
      path: '/about',
      name: 'we',
      component: We
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: experience
    },
  ]
})

export default router
