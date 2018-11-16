// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'
import'iview/dist/styles/iview.css'
import $ from 'jquery'
window.$=$
import VueMoment from 'vue-moment'
import VueResource from 'vue-resource'



Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(iView)
Vue.use(VueMoment)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>',
  router,  //使用vue-router
  store,  //使用vuex

})
