import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Pretreatment from '@/views/Pretreatment/index.vue'
import Prediction from '@/views/Prediction/index.vue'
import Help from '@/views/Help/index.vue'
import Manage from '@/views/Manage/index.vue'
import PredictionResult from '@/views/Prediction/PredictionResultView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/pretreatment',
        component: Pretreatment
      },
      {
        path: '/prediction',
        component: Prediction
      },
      {
        path: '/help',
        component: Help
      },
      {
        path: '/predictionResult',
        component: PredictionResult
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/manage',
    component: Manage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  // 排除，没有声明角色权限的路由
  if (!to.meta.role) {
    return true
  }
  return true
})

export default router
