import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import TimerShaft from '@/components/yuyu/timerShaft'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/s',
      name: 'TimerShaft',
      component: TimerShaft
    }
  ]
});
