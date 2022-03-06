import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoggedOut from "../views/LoggedOut.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import Register1 from "../views/Register1";
import Register2 from "../views/Register2";
import Register3 from "../views/Register3";
import NotFound from "../views/NotFound";

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
    path: '/register1',
    name: 'Register1',
    component: Register1
  },
  {
    path: '/register2',
    name: 'Register2',
    component: Register2
  },
  {
    path: '/register3',
    name: 'Register3',
    component: Register3
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
