import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound";
import Home from '../views/Home.vue'
import LoggedOut from "../views/LoggedOut.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import Register1 from "../views/Register1";
import Register2 from "../views/Register2";
import Register3 from "../views/Register3";
import Register4 from "../views/Register4";
import Register5 from "../views/Register5";
import Register6 from "../views/Register6";
import Register7 from "../views/Register7";

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
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
    path: '/register4',
    name: 'Register4',
    component: Register4
  },
  {
    path: '/register5',
    name: 'Register5',
    component: Register5
  },
  {
    path: '/register6',
    name: 'Register6',
    component: Register6
  },
  {
    path: '/register7',
    name: 'Register7',
    component: Register7
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
