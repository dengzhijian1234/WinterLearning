import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/main'
import recommend from '@/views/recommend'
import rank from '@/views/rank'
import singer from '@/views/singer'
import search from '@/views/search'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '',
        component: recommend
      },
      {
        path: 'recommend',
        component: recommend
      },
      {
        path: 'rank',
        component: rank
      },
      {
        path: 'singer',
        component: singer
      },
      {
        path: 'search',
        component: search
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
