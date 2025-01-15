import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import WorksView from './views/WorksView.vue'
import WorkView from './views/WorkView.vue'

const routes = [
  { inMenu: true, path: '/', component: HomeView, name: "home", },
  { inMenu: true, path: '/about', component: AboutView, name: "about", },
  { inMenu: true, path: '/works', component: WorksView, name: "works", },
  { inMenu: false, path: '/work/:id', component: WorkView, name: "work", },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router