<template>
  <section class="container">
    <div class="center-box">
      <div id="recommend-category-box">
        <ul class="recommend-menu clear-fix" >
          <li :class="item.favorites_id !==currentFavoriteId?'float-left':'float-left recommend-menu-active' " v-for="(item,index) in categories "
              :key="index"  @click="onCategoryClick(item)">{{item.favorites_title}}</li>
          <li class="float-right back-top el-icon-upload2">

          </li>
        </ul>
      </div>
      <div id="recommend-context-list-box" v-loading="loading">
        <div class="recommend-context-title">
          <span v-html="currentCategory"></span>
        </div>
        <div class="recommend-context-list clear-fix">
          <div class="recommend-context-item float-left" v-for="(item,index) in context.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item" :key="index">
            <div class="recommend-item-cover">
              <img :src="item.pict_url">
            </div>
            <div class="recommend-item-title">
              <a  v-text="item.title" :href="item.coupon_click_url!==null?item.coupon_click_url:item.click_url" target="_blank">
              </a>
            </div>
            <div class="recommend-item-info">
                 <a v-if="item.coupon_click_url!==null" class="buy-btn" :href="item.coupon_click_url" target="_blank">领券购买</a>
                 <span class="recommend-original " v-text="item.coupon_click_url===null?'晚了，无优惠券':'原价'+item.zk_final_price"></span>
            </div>
             <span class="recommend-coupon-info" v-if="item.coupon_info!==null" v-text="item.coupon_info"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '../utils/api';
export default {
  data(){
    return {
             loading:false
           }
  },
  methods: {
    onCategoryClick(item){
      this.currentFavoriteId=item.favorites_id;
      this.currentCategory=(item.favorites_title.split('').join('<em>/</em>'));
      //加载内容
      this.loadContentByCategory(item.favorites_id);
    },
    loadContentByCategory(favoriteId){
      this.loading=true;
      this.context.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item.legth=0;
      this.context.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item=[];
       api.getRecommendContextByProxy(favoriteId).then(result=>{
         if(result.code === 10000){
           this.loading=false;
           this.context=result.data;
         }

       })
    }
  },
  mounted(){
     let listBox=document.getElementById("recommend-context-list-box");
     if(listBox){
       listBox.style.minHeight=document.documentElement.clientHeight+"px";
     }
  },
  async asyncData() {

    let categoryResult = await api.getRecommendCategories();


      if(categoryResult.code === 10000){
        //请求分类
        let currentId=categoryResult.data[0].favorites_id;
        let contentResult = await api.getRecommendContext(currentId);
        let titleArray=categoryResult.data[0].favorites_title.split('');
         if(contentResult.code  === 10000){
           return {
             categories: categoryResult.data,
             context:contentResult.data,
             currentCategory:titleArray.join('<em>/</em>'),
             currentFavoriteId:currentId
              };
         }

      }else{
        //请求失败
      }

  }
}
</script>

<style>
  .recommend-menu-active {
    border-bottom:#c9302c 2px solid;
    color:#c9302c !important;

  }
#recommend-category-box ul > li:hover {
    color:#c9302c;
  }

  #recommend-context-list-box{
    margin-top: 80px;
    box-shadow: 0 5px 10px #d4d4d4;
  }
  .recommend-context-title em{
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 400;
    font-size: 16px;
  }
  .recommend-context-title span{
    font-size: 20px;
    font-weight: 600;
    color: #4d555d;
    font-style: normal;
    margin: 0 3px;
  }
  .recommend-context-title{
     text-align: center;
     margin-bottom: 30px;
  }

  .recommend-coupon-info{
    position: absolute;
    background: #c9302c;
    color:#fff;
    right: 12px;
    top:20px;
    padding: 5px 10px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .recommend-item-title a {
    margin-top: 10px;
    text-decoration: none;
    color: #47494e;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .buy-btn{
    text-decoration: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #f56c6c;
    border: 1px solid #f56c6c;
    color: #FFF;
    background-color: #F56C6C;
    border-color: #F56C6C;

  }
  .recommend-original{
    margin-left: 10px;
    color: #ebb563;
    font-weight: 600;
  }
  .recommend-item-info{

    margin-top: 10px;
  }
  .recommend-item-title{
    margin-top: 10px;
    text-decoration: none;
    color: #47494e;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .recommend-context-item {
    width: 265px;
    height:370px;
    box-shadow: 0 5px 10px #d4d4d4;
    background: #fff;
    padding: 10px 10px;
    margin: 10px;
    position: relative;
  }

  .recommend-item-cover img{
    border-radius: 5px;
    width: 243px;
    height:243px;
  }
#recommend-category-box li{
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    color: #8c8c8c;
    cursor:pointer;
  }

#recommend-category-box{
  height: 60px;
  line-height: 58px;
  position: fixed;
  z-index: 1000;
  width: 1140px;
  top:90px;
  background: #fff;
  box-shadow: 0 5px 10px #d4d4d4;
  margin-bottom: 30px;
}

  #recommend-category-box ul{
  list-style: none;
}
</style>

