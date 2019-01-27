import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewBook from './views/NewBook.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/newbook',
      name: 'newbook',
      component: NewBook
    }
  ]
})
