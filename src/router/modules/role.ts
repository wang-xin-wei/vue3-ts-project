import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
{
  path: '/role',
  name: '',
  component: RouterView,
  meta: {
    title: '角色'
  },
  children: [
    {
      path: 'list',
      name: 'roleList',
      component: () => import('@/views/role/index.vue'),
      meta: {
        title: '角色列表'
      }
    }
  ]
}

export default routes
