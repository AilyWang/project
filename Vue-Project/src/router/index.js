import Vue from 'vue';
import Router from 'vue-router'
<<<<<<< HEAD
import DepartmentManagement from '../pages/InstantChat/DepartmentManagement';
import UserManagement from '../pages/InstantChat/UserManagement';

=======
import SystemHomepage from "@/pages/systemhome/systemhomepage";
import SystemModule from "@/components/systemhomes/systemmoddle/systemmodule";
import LoginBg from "@/pages/login/login";
import ForeGround from "@/pages/foreground/foreground";
>>>>>>> 11f8de274f94a3c9c2300c230f6bb25dbaafaae0
Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
});
