import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import promissionRoutes from './modules/promission'
import categoryRoutes from './modules/category'
import goodsRoutes from './modules/goods'
import menuRoutes from './modules/menu'
import orderRoutes from './modules/order'
import roleRoutes from './modules/role'

import nprogress from 'nprogress' // @types/nprogress
import 'nprogress/nprogress.css'

//  生命routes的ts类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/indexPage.vue'),
        meta: {
          title: '首页'
        }
      },
      promissionRoutes,
      categoryRoutes,
      goodsRoutes,
      menuRoutes,
      orderRoutes,
      roleRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/loginPage.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则

})

//  全局前置守卫
router.beforeEach((to, from) => {
  // 进度条 开始
  nprogress.start()
})

// 全局后置守卫
router.afterEach(() => {
  // 进度条 结束
  nprogress.done()
})

export default router
