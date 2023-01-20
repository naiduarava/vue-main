import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignUp from '../views/SignUp.vue'
import ToDo from '../components/ToDo.vue'
const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/ToDo',
    name: 'ToDo',
    component: ToDo
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router