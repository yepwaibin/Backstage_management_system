import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegisterApp } from './global'
// import './service/axios_demo'
import hyRequest from './service'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
app.use(globalRegisterApp)
app.use(store)
app.use(router)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
