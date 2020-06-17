import request from './http'

export const baseUrl="https://shop.sunofbeach.net/union/shop/";

export default {
  getCategories(){
    return request.requestGet(baseUrl+"discovery/categories")
  },
  getCategoriesContext(materialId,page){
    return request.requestGet(baseUrl+"discovery/"+materialId+"/"+page)
  },
  getRecommendCategories(){
    return request.requestGet(baseUrl+"recommend/categories")
  },
  getRecommendContext(categoryId){
    return request.requestGet(baseUrl+"recommend/"+categoryId)
  }
}
