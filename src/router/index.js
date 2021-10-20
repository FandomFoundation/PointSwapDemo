import Vue from 'vue'
import VueRouter from 'vue-router'

import MobileDetect from 'mobile-detect'

Vue.use(VueRouter)

var md = new MobileDetect(window.navigator.userAgent)

const p = md.mobile() ? 'm' : 'p'

const routes = () => new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/' + p + '/Home')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/' + p + '/Login')
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: () => import('@/views/' + p + '/Signup')
    },
    {
      path: '/Signout',
      name: 'Signout',
      component: () => import('@/views/' + p + '/Signout')
    },
    {
      path: '/Authorization',
      name: 'Authorization',
      component: () => import('@/views/' + p + '/Authorization')
    },
    {
      path: '/Swap',
      name: 'Swap',
      component: () => import('@/views/' + p + '/Swap')
    },
    {
      path: '/SwapResult',
      name: 'SwapResult',
      component: () => import('@/views/' + p + '/SwapResult')
    }

  ]
})

export default routes()
