// 通过扩展 RouteMeta 接口来给meta字段添加typescript支持
import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    // 每个路由都必须声明
    title: string
  }
}
