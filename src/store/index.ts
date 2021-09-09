import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'

// state 指定类型 IRootState
const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
// 对store初始化
export function setupStore() {
  // 进入login模块中，运行loadLocalLogin函数
  store.dispatch('login/loadLocalLogin')
}

// 导出自己的useStore
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
