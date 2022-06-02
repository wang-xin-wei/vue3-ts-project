import { createApp } from 'vue'
import App from './App.vue'

//  router and store
import router from './router'
import { store, key } from './store'

//  global style
import './styles/index.scss'

//  init and mount
createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app')
