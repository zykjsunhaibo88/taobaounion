<template>
  <section class="container">
    <div class="center-box">
      <div class="recommend-category-box">
        <ul class="clear-fix" >
          <li :class="index !==0?'float-left':'float-left recommend-menu-active' " v-for="(item,index) in categories " :key="index">{{item.favorites_title}}</li>
        </ul>
      </div>
      <div class="recommend-context-list-box">
        <div class="recommend-context-title">
          <span>上/班/族/早/餐</span>
        </div>
        <div class="recommend-context-list clear-fix">
          <div class="recommend-context-item float-left" v-for="(item,index) in context.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item" :key="index">
            <div class="recommend-item-cover">
              <img :src="item.pict_url">
            </div>
            <div class="recommend-item-tittle" v-text="item.title">

            </div>
            <div class="recommend-item-info">
                 <el-button type="danger">领券购买</el-button>
                 <span>原价：{{item.zk_final_price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '../utils/api';
export default {
  /*data {

  },*/
  async asyncData() {
    let categoryResult = await api.getRecommendCategories();

      if(categoryResult.code === 10000){
        //请求分类
        let contentResult = await api.getRecommendContext(categoryResult.data[0].favorites_id);
         if(contentResult.code  === 10000){
           console.log(contentResult.data);
           return {
             categories: categoryResult.data,
             context:contentResult.data
              };
         }

      }else{
        //请求失败
      }

  }
}
</script>

<style>
  .recommend-context-item {
    width: 285px;
    height:370px;
  }

  .recommend-item-cover img{
    width: 243px;
    height:243px;
  }
  .recommend-menu-active {
    border-bottom:#c9302c 2px solid;
    color:#c9302c !important;

  }
  .recommend-category-box li{
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    color: #8c8c8c;
    cursor:pointer;
  }

.recommend-category-box{
  height: 60px;
  line-height: 58px;
  margin-top: 30px;
  background: #fff;
  box-shadow: 0 5px 10px #d4d4d4;
  margin-bottom: 30px;
}

.recommend-category-box ul{
  list-style: none;
}
</style>

