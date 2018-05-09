import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import publickPage from '@/pages/publicpage/publickPage'
import sourceManage from '@/components/qiao/sourceManage'
import addShadow from '@/components/qiao/addShadow'
import addShadowOptionalMsg from '@/components/qiao/addShadowOptionalMsg'
import operateTip from '@/components/qiao/operateTip'
import mustInformation from '@/components/qiao/mustInformation'
import choiceInformation from '@/components/qiao/choiceInformation'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sourceManage',
      name: 'sourceManage',
      component: sourceManage
    },
    {
      path: '/publickPage',
      name: 'publickPage',
      component: publickPage
    },
    {
      path: '/addShadowOptionalMsg',
      name: 'addShadowOptionalMsg',
      component: addShadowOptionalMsg
    },
    {
      path: '/addShadow',
      name: 'addShadow',
      component: addShadow
    },
    {
      path: '/operateTip',
      name: 'operateTip',
      component: operateTip
    },
    {
      path: '/mustInformation',
      name: 'mustInformation',
      component: mustInformation
    },
    {
      path: '/choiceInformation',
      name: 'choiceInformation',
      component: choiceInformation
    }
  ]
})
