import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(require('vue-moment'));

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'https://api.stage.capusta.space/v1/cabinet/protected',
      headers: {
        'Authorization': 'Bearer 5d370094-57a7-4476-ace4-4f29bfa43d44'
      }
    })
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
