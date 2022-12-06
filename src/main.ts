import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import './service/axios_demo'

console.log(process.env.NODE_ENV, process.env.VUE_APP_BASE_URL)

createApp(App).use(store).use(router).use(globalRegister).mount('#app')
