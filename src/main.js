import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/debugger'
import { MediaRecorder } from './plugins/@cbibank/media'
import './plugins/@cbibank/media/styles/index.css'

Vue.config.productionTip = false
Vue.component('MediaRecorder', MediaRecorder)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
