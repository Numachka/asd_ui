import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/application/NotFound";
import MainMenu from '../views/application/MainMenu.vue'
import LoggedOut from "../views/application/LoggedOut.vue";
import Login from "../views/application/Login";
import Register from "../views/userCreation/Register";
import Introduction from "../views/userCreation/Register1_Introduction";
import Explanation from "../views/userCreation/Register2_Explanation";
import Details from "../views/userCreation/Register3_Details";
import IntroQuestions from "../views/userCreation/Register4_IntroQuestions";
import Questions from "../views/userCreation/Register5_Questions";
import Magic from "../views/userCreation/Register6_Magic";
import Settings from "../views/settings/Settings";
import Profile from "../views/settings/Settings1_Profile";
import UserInterface from "../views/settings/Settings2_UserInterface";
import Credits from "../views/settings/Settings1_Profile";


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
