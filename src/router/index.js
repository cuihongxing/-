import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import ClassIfy from '@/views/classify/classify'
import Shop from '@/views/shop/shop'
import Me from '@/views/me/me'
import Route from '@/views/home/route'
import Bargain from '@/components/baragain/bargain'
import Sign from '@/components/sign/sign'
import Sele from '@/components/sele/sele'
import NewSele from '@/components/sele/newSele'
import Gift from '@/components/gift/gift'
import ClassItem from '@/components/classify/classify-item'
import Detail from '@/components/classify/classify-detail'
import Login from '@/components/login/login'
import Register from '@/components/login/register'
import Site from '@/components/site/site'
import Purchase from '@/components/purchase/purchase'
import Pay from '@/components/purchase/pay'
import SiteItem from '@/components/site/site-item'
import Xxx from '@/components/home/xxx'

Vue.use(Router)

let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Route,
      children: [
        {
          path:'',
          component:Home,
          meta:{
            title: '首页'
          }
        },
        {
          path: 'classify',
          component: ClassIfy,
          meta:{
            title: '分类'
          }
        },
        {
          path: 'shop',
          component: Shop,
          meta:{
            title: '购物车'
          }
        },
        {
          path: 'me',
          component: Me,
          meta:{
            title: '个人'
          }
        }
      ]
    },
    {
      path: '/bargain',
      component: Bargain
    },{
      path: '/sign',
      component: Sign
    },
    {
      path: '/sele',
      component: Sele
    },
    {
      path: '/special/:id?',
      name: 'special',
      component: NewSele
    },
    {
      path: '/gift',
      component: Gift
    },
    {
      path: '/classitem/:id?',
      component: ClassItem
    },
    {
      path: '/detail/:id?',
      component: Detail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/site',
      name: 'site',
      component: Site
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: Purchase,
      meta: {
        token:localStorage.getItem('token')
      }
    },
    {
      path: '/siteitem',
      component: SiteItem
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/xxx',
      component: Xxx
    }
  ]
})


  //全局 前置 钩子
router.beforeEach((to, from, next) => {
    let isLogin = localStorage.getItem('token');
    if(isLogin){
      
      next()
    }else{
        //如果没有token值跳转登录页面
        // if (to.path === '/login') {
        //   next()
        // } else {
        //   next('/login')
        // }
        next({to:'/ligon'})
    }
})


export default router
