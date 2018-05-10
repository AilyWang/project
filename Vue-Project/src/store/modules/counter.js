
export default {
    state:{
        num:0,
<<<<<<< HEAD
        tabData:[{  
                    name: "系统首页",
                    icon:'iconfont icon-home', 
                    isActive: true 
                }
                ]
    }, //定义需要共享的状态
    mutations:{
        "inc":(state,args)=>{
            // console.log(args )
            state.num = args
            state.tabData = args
            // console.log(state.num)

        },
        "tabDatachange":(state, amount)=>{
            state.tabData.push(amount) 
        }
=======
        pro:{}
    }, //定义需要共享的状态
    mutations:{
        "inc":(state,args)=>{
            state.num+=args
        },
        "product":(q,w)=>{
          q.pro=w;
      }
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
    }, //store用来修改state中的状态值的地方
    actions:{ //ajax
        "add":(store,playload)=>{
            var promise = new Promise((resolve)=>{
<<<<<<< HEAD
                store.commit("inc",playload)
=======
                store.commit("inc","eggsss")
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
            },(reject)=>{

            },(notice)=>{

            })
        },
        "del":(store,num)=>{

<<<<<<< HEAD
        },
        "tabDatachange":(store,value)=>{
            this.state = value
        }
    },//用来接收外部事件的请求,筛选条件-〉commit mutations
    getters:{
        "getNum":(state)=>{
            return state.num
        },
        "getTab":(state)=>{
            return state.tabData
        }
    }//用来获取处理好的状态的地方(新的状态)
}
=======
        }
    },//用来接收外部事件的请求,筛选条件-〉commit mutations
    getters:{
      "getProduct":(state)=>{
        return state.pro
      }
    }//用来获取处理好的状态的地方(新的状态)
}
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
