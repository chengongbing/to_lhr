import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../layout/Layout.vue'
import Layout from "@/layout/Layout";

const routes = [
  {
    path: '/user',
    name: 'Layout',
    component: Layout,
    // redirect:"/admin",
    children:[
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User'),
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: () => import('@/views/Notifications'),
      },
      {
        path: '/assistance',
        name:'Assistance',
        component: () => import("@/views/Assistance")
      },
      {
        path: '/assistance_yes',
        name:'AssistanceYes',
        component: () => import("@/views/AssistanceYes")
      },
      {
        path: '/assistance_no',
        name:'AssistanceNo',
        component: () => import("@/views/AssistanceNo")
      },
      {
        path: '/assistance_statistics',
        name:'AssistanceStatistics',
        component: () => import("@/views/AssistanceStatistics")
      },
      {
        path: '/secondhand',
        name:'SecondHand',
        component: () => import("@/views/SecondHand")
      },
      {
        path: '/secondhand_yes',
        name:'SecondHandYes',
        component: () => import("@/views/SecondHandYes")
      },
      {
        path: '/secondhand_no',
        name:'SecondHandNo',
        component: () => import("@/views/SecondHandNo")
      },
      {
        path: '/secondhand_statistics',
        name:'SecondHandStatistics',
        component: () => import("@/views/SecondHandStatistics")
      },
      {
        path: '/auditors',
        name:'Auditors',
        component: () => import("@/views/Auditors")
      },
      {
        path: '/student',
        name:'Student',
        component: () => import("@/views/Student")
      },
      {
        path: '/student_no',
        name:'StudentNo',
        component: () => import("@/views/StudentNo")
      },
      {
        path: '/student_yes',
        name:'StudentYes',
        component: () => import("@/views/StudentYes")
      },
      {
        path: '/personalInformation',
        name:'PersonalInformation',
        component: () => import("@/views/PersonalInformation")
      },
      {
        path: '/qqLogin',
        name:'qqLogin',
        component: () => import("@/views/qqLogin")
      },
      {
        path: '/bindQQ',
        name:'bindQQ',
        component: () => import("@/views/bindQQ")
      },
    ]
  },
  {
    path: '/',
    name:'Login',
    component: () => import("@/views/Login")
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next) => {
  if(sessionStorage.getItem("user")||to.path=== "/"){ //访问登录页或session中user不为空，访问下一步
    next();
  }else{
    next("/")   //未登录，访问下一页
  }
})
export default router
