import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
{
  path: '/category',
  name: '',
  component: RouterView,
  meta: {
    title: '分类'
  },
  children: [
    {
      path: 'list',
      name: 'categoryList',
      component: () => import('@/views/category/index.vue'),
      meta: {
        title: '分类列表'
      }
    }
  ]
}

export default routes
