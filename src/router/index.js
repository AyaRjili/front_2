import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import HomeView from '../views/HomeView.vue'
import PeopleVue from '../views/PeopleView.vue'
import PerformanceVue from '../views/PerformanceView.vue'

import Budget from '../views/BudgetView.vue'
import Dashboard from '../components/DashBoard.vue'
import AllView from  '../views/AllView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView,
    
  },
  {
    path: '/all',
    name: 'all',
    component: AllView,
    
  },
  
  {
    path: '/people',
    name: 'people',
    component: PeopleVue
  },
  {
    path: '/performance',
    name: 'performance',
    component: PerformanceVue
  },
  {
    path: '/budget',
    name: 'budget',
    component: Budget
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
   

    
   
    
  },
  
  {
    path: '/files',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
