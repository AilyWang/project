import Vue from 'vue';
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import DepartmentManagement from '../pages/InstantChat/DepartmentManagement';
import UserManagement from '../pages/InstantChat/UserManagement';
=======
// import HelloWorld from '@/components/HelloWorld'
import publickPage from '@/pages/publicpage/publickPage'
import sourceManage from '@/components/qiao/sourceManage'
import addShadow from '@/components/qiao/addShadow'
import addShadowOptionalMsg from '@/components/qiao/addShadowOptionalMsg'
import addShadowMsgForm from '@/components/qiao/addShadowMsgForm'
import operateTip from '@/components/qiao/operateTip'
import mustInformation from '@/components/qiao/mustInformation'
import choiceInformation from '@/components/qiao/choiceInformation'
import checkProductMsg from '@/components/qiao/checkProductMsg'


>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63

=======
import SystemHomepage from "@/pages/systemhome/systemhomepage";
import SystemModule from "@/components/systemhomes/systemmoddle/systemmodule";
import LoginBg from "@/pages/login/login";
import ForeGround from "@/pages/foreground/foreground";
>>>>>>> 11f8de274f94a3c9c2300c230f6bb25dbaafaae0
=======
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910
Vue.use(Router)
export default new Router({
  routes: [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      path: '/DepartmentManagement',
      name: 'DepartmentManagement',
      component: DepartmentManagement
    },
    {
      path: '/UserManagement',
      name: 'UserManagement',
      component: UserManagement
=======
      path: "/",
      name: "SystemHomepage",
      component: SystemHomepage
    },
    {
      path: "/system",
      name: "SystemModule",
      component: SystemModule
    },
    {
      path: "/login",
      name: "LoginBg",
      component: LoginBg
    },
    {
      path: "/foreground",
      name: "ForeGround",
      component: ForeGround
>>>>>>> 11f8de274f94a3c9c2300c230f6bb25dbaafaae0
=======
      path:"/",
      redirect:"/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910
=======
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
    },
    {
      path: '/addShadowMsgForm',
      name: 'addShadowMsgForm',
      component: addShadowMsgForm
    },
    {
      path: '/checkProductMsg',
      name: 'checkProductMsg',
      component: checkProductMsg
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
    }
  ]
});
