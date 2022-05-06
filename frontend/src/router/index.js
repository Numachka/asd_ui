import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound";
import MainMenu from '../views/MainMenu.vue'
import LoggedOut from "../views/LoggedOut.vue";
import Login from "../views/Login";
import Register from "../views/RegisterView";
import Introduction from "../views/Register1_Introduction";
import Explanation from "../views/Register2_Explanation";
import Details from "../views/Register3_Details";
import IntroQuestions from "../views/Register4_IntroQuestions";
import Questions from "../views/Register5_Questions";
import Magic from "../views/Register6_Magic";
import Result from "../views/Result";
import Settings from "../views/Settings";
import Profile from "../views/Profile";
import UserInterface from "../views/UserInterface";
import Credits from "../views/Profile";


const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/main-menu',
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
    component: Register,
    children: [
      {name:'Introduction', path: 'introduction', component: Introduction},
      {name:'Explanation',path: 'explanation', component: Explanation},
      {name:'Details',path: 'details', component: Details},
      {name:'IntroQuestions',path: 'intro-questions', component: IntroQuestions},
      {name:'Questions',path: 'questions', component: Questions},
      {name:'Magic',path: 'magic', component: Magic},
      {name:'Result',path: 'result', component: Result},
    ],
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    children: [
      {name:'Profile', path: 'profile', component: Profile},
      {name:'Credits', path: 'credits', component: Credits},
      {name:'UserInterface', path: 'user-interface', component: UserInterface},
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
