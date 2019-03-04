import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/PageHome'
import ThreadShow from '@/views/PageThreadShow'
import Forum from '@/views/PageForum'
import Category from '@/views/PageCategory'
import NotFoundPage from '@/views/NotFound'
import Profile from '@/views/PageProfile'

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
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },

    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },

    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      props: true
    },

    {
      path: '/me/edit',
      name: 'ProfileEditor',
      component: Profile,
      props: {edit: true}
    },

    {
      path: '*',
      name: 'NotFound',
      component: NotFoundPage
    }
  ]
})
