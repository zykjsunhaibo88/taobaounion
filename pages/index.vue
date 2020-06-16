<template>
  <section class="container">
    <div class="center-box">
      <div class="recommend-category-box">
        <ul class="clear-fix" >
          <li :class="index !==0?'float-left':'float-left recommend-menu-active' " v-for="(item,index) in categories " :key="index">{{item.favorites_title}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import api from '../utils/api';
export default {
  asyncData() {
    return api.getRecommendCategories().then(result=>{
      if(result.code === 10000){
        return { categories: result.data};
      }else{
        //ToDo 处理异常
      }
    });
  }
}
</script>

<style>
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

