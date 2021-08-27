import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'

export default createStore<IRootState>({
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