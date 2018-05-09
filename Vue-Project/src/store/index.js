
//如何创建一个项目级中央仓库 center store

// 1.存储公共状态
// 2.能够根据外部的事件来修改状态
// 3.有机制把这个新的状态通知给所有的组件,更新自已组件的view

import Vue from "vue";
import Vuex from "vuex"

Vue. use(Vuex)
import counter from "./modules/counter"

//step2: 通过vuex来创建一个中央仓库
export default new Vuex.Store({
    modules:{
        counter
    }
})