import Vue from 'vue';
import Router from 'vue-router'
import DepartmentManagement from '../pages/InstantChat/DepartmentManagement';
import UserManagement from '../pages/InstantChat/UserManagement';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/DepartmentManagement',
      name: 'DepartmentManagement',
      component: DepartmentManagement
    },
    {
      path: '/UserManagement',
      name: 'UserManagement',
      component: UserManagement
    }
  ]
})
