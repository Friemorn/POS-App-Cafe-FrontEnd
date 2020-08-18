import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Main from '../views/Main/index.vue'
import LandingPage from '../views/Main/LandingPage/LandingPage.vue'
import Home from '../views/Main/Home/Home.vue'
import History from '../views/Main/History/History.vue'

const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  redirect: '/landingpage',
  children: [
    {
      path: 'landingpage',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: 'home',
      name: 'home',
      component: Home
    },
    {
      path: 'history',
      name: 'history',
      component: History
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
