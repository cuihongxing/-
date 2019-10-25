// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/app'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk'
import Vant from 'vant';
import 'vant/lib/index.css';

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
})

Vue.use(Vant);
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


function rem()
{
	document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4+"px";
}
rem();
window.onresize = rem;
