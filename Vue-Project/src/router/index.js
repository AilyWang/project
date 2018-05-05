import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import sourceManage from '@/components/qiao/sourceManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sourceManage',
      name: 'sourceManage',
      component: sourceManage
    }
  ]
})
