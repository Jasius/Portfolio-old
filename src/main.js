// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'

Vue.config.productionTip = false
Vue.use(VueTinyLazyloadImg)
Vue.use(require('vue-moment'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
