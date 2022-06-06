import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { setItem, getItem } from '@/utils/storage'
import { USERINFO } from '@/utils/constants'
import type { userInfoIfc } from '@/api/types/common'
export interface State {
  isCollapse: boolean,
  userInfo: userInfoIfc | null
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      isCollapse: false,
      userInfo: getItem(USERINFO)
    }
  },
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    setUserInfo (state, payload) {
      state.userInfo = payload
      setItem(USERINFO, state.userInfo)
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
