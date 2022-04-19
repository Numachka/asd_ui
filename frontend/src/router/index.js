import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound";
import MainMenu from '../views/MainMenu.vue'
import LoggedOut from "../views/LoggedOut.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import Introduction from "../views/Introduction";
import Explanation from "../views/Explanation";
import Details from "../views/Details";
import IntroQuestions from "../views/IntroQuestions";
import Questions from "../views/Questions";
import Magic from "../views/Magic";
import Result from "../views/Result";


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
    component: Register,
    children: [
      {name:'Introduction', path: 'introduction', component: Introduction},
      {name:'Explanation',path: 'explanation', component: Explanation},
      {name:'Details',path: 'details', component: Details},
      {name:'IntroQuestions',path: 'intro-questions', component: IntroQuestions},
      {name:'Questions',path: 'Questions', component: Questions},
      {name:'Magic',path: 'Magic', component: Magic},
      {name:'Result',path: 'Result', component: Result},
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
