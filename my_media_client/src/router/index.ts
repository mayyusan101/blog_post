import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/homePage',
    name: 'HomePage',
    component : () => import('../views/HomePage.vue')
  },
  {
    path: '/newDetails/:newId',
    name: 'NewDetails',
    props: true,
    component: () => import('../views/NewDetails.vue')
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/contactPage',
    name: 'ContactPage',
    component: () => import('../views/ContactPage.vue')
  },
  {
    path: '/registerPage',
    name: 'RegisterPage',
    component: () => import('../views/RegisterPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
