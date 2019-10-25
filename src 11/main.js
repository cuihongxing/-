// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk'
import axios from 'axios'
import '@/assets/css/app'

Vue.prototype.$axios = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  
  components: { App },
  template: '<App/>'
})


function rem()
{
	document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4+"px";
}
rem();
window.onresize = rem;


