import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router,//挂载路由对象
  render: h => h(App),
}).$mount('#app')
