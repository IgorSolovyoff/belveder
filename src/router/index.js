import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/contacts.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/product.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue')
    }
  ]
})
