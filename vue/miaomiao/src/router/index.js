import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie'
import Mine from '@/views/mine'
import Cinema from '@/views/cinema'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
  ]
})
