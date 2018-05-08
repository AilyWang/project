import {INDEXDATAURL} from "../URL/test"
export default class Test{
  static getAside(cb){
    fetch(INDEXDATAURL).then((response)=>{
      response.json().then((data)=>{
        cb(data.aside);
      })
    })
  }
 
}