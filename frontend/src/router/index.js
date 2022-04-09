import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound";
import MainMenu from '../views/MainMenu.vue'
import LoggedOut from "../views/LoggedOut.vue";
import Login from "../views/Login";
import Register from "../views/Register";
// import Register1 from "../components/RegPage1";
import Register2 from "../views/RegPage2";
import Register3 from "../views/Register3";
import Register4 from "../views/Register4";
import Register5 from "../views/Register5";
import Register6 from "../views/Register6";
import Register7 from "../views/Register7";
import RegPage1 from "@/views/RegPage1";
import RegPage2 from "@/views/RegPage2";
import RegPage0 from "@/views/RegPage0";

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/MainMenu',
    name: 'MainMenu',
    component: MainMenu
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
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      { path: 'page0', component: RegPage0 },
      { path: 'page1', component: RegPage1 },
      { path: 'page2', component: RegPage2 }
    ],
    component: Register
  },
  // {
  //   path: '/register',
  //   name: 'Register1',
  //   component: Register1
  // },
  // {
  //   path: '/register/page2',
  //   name: 'Register2',
  //   component: Register2
  // },
  // {
  //   path: '/register',
  //   name: 'Register3',
  //   component: Register3
  // },
  // {
  //   path: '/register4',
  //   name: 'Register4',
  //   component: Register4
  // },
  // {
  //   path: '/register5',
  //   name: 'Register5',
  //   component: Register5
  // },
  // {
  //   path: '/register6',
  //   name: 'Register6',
  //   component: Register6
  // },
  // {
  //   path: '/register7',
  //   name: 'Register7',
  //   component: Register7
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
