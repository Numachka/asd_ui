import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoggedOut from "../views/LoggedOut.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import Information from "../views/Information";
import CaredDetails from "../views/CaredDetails";

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'LoggedOut',
    component: LoggedOut
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/caredDetails',
    name: 'CaredDetails',
    component: CaredDetails
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
