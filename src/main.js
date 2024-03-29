import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.config.productionTip = false


new Vue({
  
  router,
  render: h => h(App)
}).$mount('#app')
