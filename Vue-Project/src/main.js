// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
<<<<<<< HEAD
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
=======
import $ from "jquery"
>>>>>>> 11f8de274f94a3c9c2300c230f6bb25dbaafaae0
=======
Vue.use(router)
import $ from "jquery"
import Vuex from "vuex"
Vue.use(Vuex)
import store from "./store"
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
   render(h){
        return h(App)
    }
})
