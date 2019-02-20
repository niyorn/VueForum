import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/PageHome'
import ThreadShow from '@/views/PageThreadShow'
import Forum from '@/views/PageForum'
import NotFoundPage from '@/views/NotFound'

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
    },

    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },

    {
      path: '*',
      name: 'NotFound',
      component: NotFoundPage
    }
  ]
})
