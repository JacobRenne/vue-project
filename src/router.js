import { createRouter, createWebHashHistory } from 'vue-router'

import Library from './views/Library.vue'
import Search from './views/Search.vue'


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        component: Library,
        path: '/'
    },
    {
        component: Search,
        path: '/search'
    },
  ]
})