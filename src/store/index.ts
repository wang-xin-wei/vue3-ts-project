import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  token: string,
  isCollapse: boolean
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      token: '',
      isCollapse: false
    }
  },
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
