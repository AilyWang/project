
export default {
    state:{
        num:0
    }, //定义需要共享的状态
    mutations:{
        "inc":(state,args)=>{
            // console.log(args )
            state.num = args
            // console.log(state.num)

        }
    }, //store用来修改state中的状态值的地方
    actions:{ //ajax
        "add":(store,playload)=>{
            var promise = new Promise((resolve)=>{
                store.commit("inc",playload)
            },(reject)=>{

            },(notice)=>{

            })

        },
        "del":(store,num)=>{

        }
    },//用来接收外部事件的请求,筛选条件-〉commit mutations
    getters:{
        "getNum":(state)=>{
            return state.num
        }
    }//用来获取处理好的状态的地方(新的状态)
}