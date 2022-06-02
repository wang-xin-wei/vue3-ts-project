import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

//  生命routes的ts类型
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/indexPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/indexPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则

})

export default router
