import {baseURL} from "../URL/URL";

export class baseData {
    getData(cb){
       fetch(baseURL).then((res) => {
          res.json().then((data) => {
             cb(data);
          })
       })
    }
}
