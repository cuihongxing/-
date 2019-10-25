import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Cart from '@/components/cart'
import Me from '@/components/me'
import Clis from '@/components/clis'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', component: Home },
    { path: '/cart', component: Cart }, 
    { path: '/me', component: Me },  
    { path: '/clis', component: Clis }  
    
  ]
})
