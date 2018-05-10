import Vue from 'vue';
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
import DepartmentManagement from '../pages/InstantChat/DepartmentManagement';
import UserManagement from '../pages/InstantChat/UserManagement';

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
    }
  ]
});
