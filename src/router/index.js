import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Terms from '@/views/TermsConditions.vue'
import Privacy from '@/views/PrivacyView.vue'
import redefine from '@/views/redefine.vue'
import We from '../views/We.vue'
import Experiences from '@/views/ExperienceView.vue'
import Roles from '@/views/RolesView.vue'
import learning from '../views/learning.vue'
// import MyChart from '../views/Testbar.vue'




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
      path: '/Roles',
      name: 'Roles',
      component: Roles
    },
    {
      path: '/Experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning
    },
    // {
    //   path: '/mychart',
    //   name: 'MyChart',
    //   component: MyChart
    // }
  ]
})

export default router
