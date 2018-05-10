import {productDataURL} from "../URL/ApiUrl"

export default class ProductApi{
  static getProductData(cb){
    fetch(productDataURL).then((response)=>{
      response.json().then((data)=>{    
        cb(data.productMessage);
      })
    })
  }
}