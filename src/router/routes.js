// router/routes.js - Router configuration
import { useAuthStore } from 'stores/auth'

const routes = [
  {
    path: '/',
    redirect: '/protected',
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      authStore.checkAuth()

      if (authStore.isAuthenticated) {
        next('/protected')
      } else {
        next()
      }
    },
  },
  {
    path: '/protected',
    component: () => import('pages/ProtectedPage.vue'),
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      authStore.checkAuth()

      if (authStore.isAuthenticated) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/login',
  },
]

export default routes
