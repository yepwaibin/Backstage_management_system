import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegisterApp } from './global'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'

const app = createApp(App)
app.use(globalRegisterApp)
app.use(store)
app.use(router)

setupStore()
app.mount('#app')
