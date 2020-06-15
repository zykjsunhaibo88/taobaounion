import request from './http'
export default {
  getCategories(){
    return request.requestGet('https://shop.sunofbeach.net/union/shop/discovery/categories')
  },
  getCategoriesContext(materialId,page){
    return request.requestGet("https://shop.sunofbeach.net/union/shop/discovery/"+materialId+"/"+page)
  }
}
