import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
{
  path: '/menu',
  name: '',
  component: RouterView,
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'list',
      name: 'menuList',
      component: () => import('@/views/menu/menuIndex.vue'),
      meta: {
        title: '商品列表'
      }
    }
  ]
}

export default routes
