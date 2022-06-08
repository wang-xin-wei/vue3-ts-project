import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
{
  path: '/order',
  name: '',
  component: RouterView,
  meta: {
    title: '订单'
  },
  children: [
    {
      path: 'list',
      name: 'orderList',
      component: () => import('@/views/order/index.vue'),
      meta: {
        title: '订单列表'
      }
    }
  ]
}

export default routes
