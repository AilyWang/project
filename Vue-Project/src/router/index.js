import Vue from 'vue'
import Router from 'vue-router'
import SystemHomepage from "@/pages/systemhome/systemhomepage";
import SystemModule from "@/components/systemhomes/systemmoddle/systemmodule";
import LoginBg from "@/pages/login/login";
import ForeGround from "@/pages/foreground/foreground";
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
    }
  ]
});
