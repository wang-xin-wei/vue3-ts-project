import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
{
  path: '/promission',
  name: '',
  component: RouterView,
  meta: {
    title: '管理员'
  },
  children: [
    {
      path: 'list',
      name: 'userList',
      component: () => import('@/views/promission/promissionIndex.vue'),
      meta: {
        title: '管理员列表'
      }
    }
  ]
}

export default routes
