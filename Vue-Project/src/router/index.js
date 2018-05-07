import Vue from 'vue'
import Router from 'vue-router'
import CommonHeader from '@/components/commons/commonHeader'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "CommonHeader",
      component: CommonHeader
    }
  ]
});
