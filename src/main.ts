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

//  init and mount
createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app')
