import { createRouter, createWebHistory } from 'vue-router'
import OrganizeView from '../views/OrganizeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'organize',
      component: OrganizeView
    },
    {
      path: '/things',
      name: 'things',
      component: () => import('@/views/ThingsView.vue')
    },
    {
      path: '/places',
      name: 'places',
      component: () => import('@/views/PlacesView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
    }
  ]
})

export default router
