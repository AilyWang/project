import Vue from 'vue';
import Router from 'vue-router'
import DepartmentManagement from '../pages/InstantChat/DepartmentManagement';
import UserManagement from '../pages/InstantChat/UserManagement';
import SystemModule from "@/components/systemhomes/systemmoddle/systemmodule";
import LoginBg from "@/pages/login/login";
import ForeGround from "@/pages/foreground/foreground";
import Index from '@/pages/index'
import Endex from '@/components/systemhomes/systemecharts'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/DepartmentManagement",
      name: "DepartmentManagement",
      component: DepartmentManagement
    },
    {
      path: "/UserManagement",
      name: "UserManagement",
      component: UserManagement
    },
    {
      path: "/system",
      name: "SystemModule",
      component: SystemModule
    },

    {
      path: "/",
      name: "ForeGround",
      component: ForeGround
    },
    {
      path: "/login",
      name: "LoginBg",
      component: LoginBg
    },
    {
      path: "/index",
      name: "Index",
      component: Index
    },
    {
      path: "/endex",
      name: "Endex",
      component: Endex
    }
  ]
});
