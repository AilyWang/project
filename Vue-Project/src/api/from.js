import {baseForm} from "../URL/URL";

export default class Fromdata {
  getData(cb){
    fetch(baseForm).then((res) => {
      res.json().then((data) => {
        cb(data);
      })
    })
  }
}
