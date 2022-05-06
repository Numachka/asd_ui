import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound";
import MainMenu from '../views/Application/MainMenu.vue'
import LoggedOut from "../views/LoggedOut.vue";
import Login from "../views/Application/Login";
import Register from "../views/UserCreation/RegisterView";
import Introduction from "../views/UserCreation/Register1_Introduction";
import Explanation from "../views/UserCreation/Register2_Explanation";
import Details from "../views/UserCreation/Register3_Details";
import IntroQuestions from "../views/UserCreation/Register4_IntroQuestions";
import Questions from "../views/UserCreation/Register5_Questions";
import Magic from "../views/UserCreation/Register6_Magic";
import Settings from "../views/Settings/Settings";
import Profile from "../views/Settings/Profile";
import UserInterface from "../views/Settings/UserInterface";
import Credits from "../views/Settings/Profile";


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
