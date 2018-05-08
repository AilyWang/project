import Vue from 'vue'
import Router from 'vue-router'
import SystemHomepage from "@/pages/systemhome/systemhomepage";
import SystemModule from "@/components/systemhomes/systemmoddle/systemmodule";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "SystemHomepage",
      component: SystemHomepage
    },
    {
      path: "/system",
      name: "SystemModule",
      component: SystemModule
    }
  ]
});
