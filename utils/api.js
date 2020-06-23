import request from './http'

export const baseUrl="https://shop.sunofbeach.net/union/shop/";
export const baseUrlUp="http://139.9.118.128:8991/";

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
  },
  getRecommendContextByProxy(categoryId){
    return request.requestGet("/union/recommend/"+categoryId)
  },
  // 首页轮播图
  advList(){
    return request.requestPost(baseUrlUp+"course/api/adv/info/list")
  }
}
