import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vuetify from 'vuetify'
import Projects from '@/components/Projects'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    path: '/projects',
    name: 'Projects',
    component: Projects
    }
  ]
})
