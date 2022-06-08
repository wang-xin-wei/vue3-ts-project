import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
{
  path: '/goods',
  name: '',
  component: RouterView,
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'list',
      name: 'goodsList',
      component: () => import('@/views/goods/index.vue'),
      meta: {
        title: '商品列表'
      }
    }
  ]
}

export default routes
