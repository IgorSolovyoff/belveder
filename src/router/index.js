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
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/catalog.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test_page.vue')
    },

  ]
})
