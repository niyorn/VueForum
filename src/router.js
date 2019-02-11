import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/PageHome'
import ThreadShow from '@/views/PageThreadShow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    }
  ]
})
