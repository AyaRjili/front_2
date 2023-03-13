import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HighchartsVue from 'highcharts-vue'
import store from './store'

Vue.config.productionTip = false
Vue.use<(HighchartsVue)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
