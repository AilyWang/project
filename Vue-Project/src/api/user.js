import {_get} from "./fetchBase"



//basic class 基类

export const getUser = ()=>{
    let req = {
        url:"api/users",
        data:[]
    }
    return _get(req)
}
