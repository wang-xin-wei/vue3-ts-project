import { createApp } from 'vue'
import App from './App.vue'

//  router and store
import router from '@/router/index'
import { store, key } from './store'

//  global style
import './styles/index.scss'

// normalize.css
import 'normalize.css'

// 解决使用ELMessage 和 ELMessageBox 不能显示提示内容的问题
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

// 使用svg icon
import svgIcon from '@/components/svgIcon/iconIndex.vue'
import 'virtual:svg-icons-register'

// 使用mock
import { setupProdMockServer } from '../mock'
if (process.env.NODE_ENV === 'development') {
  setupProdMockServer()
}

//  init and mount
createApp(App)
  .use(router)
  .use(store, key)
  .component('svg-icon', svgIcon)
  .mount('#app')
