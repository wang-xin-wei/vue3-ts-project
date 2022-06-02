/* eslint-disable no-unused-vars */

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
//  使用自定义 State
import { State } from './store/index'

//  在模板中可以使用$store
declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
