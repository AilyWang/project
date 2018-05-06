import Vue from 'vue'
import Router from 'vue-router'
import CommonHeader from '@/components/commons/commonHeader'
import CommonFooter from '@/components/commons/commonFooter'
import CommonAside from '@/components/commons/commonAside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "CommonHeader",
      component: CommonHeader
    },
    {
      path: "/foot",
      name: "CommonFooter",
      component: CommonFooter
    },
    {
      path: "/aside",
      name: "CommonAside",
      component: CommonAside
    }
  ]
});
