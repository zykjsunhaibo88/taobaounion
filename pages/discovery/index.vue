<template>
  <div class="center-box clear-fix">
    <div class="discovery-context-box">
      <div class="discovery-left-part float-left">
         <ul>
           <li :class="currentCategoryId===item.id?'discovery-category-active':'discovery-category'" v-for="(item,index) in categoriesList " :key="index"><span  v-text="item.title"></span></li>
         </ul>
      </div>
      <div class="discovery-center-part float-left">
        <div class="discovery-content-item clear-fix" v-for="(item, index) in contentList" :key="index">
          <div class="item-left-cover float-left">
            <el-image
              style="width: 180px; height: 180px"
              :src="item.pict_url"></el-image>
          </div>
          <div class="item-right-info float-left">
            <div class="item-title">
              <span v-text="item.title"></span>
            </div>
            <div class="prise-info">
              <span class="original-prise" v-text="'原价：'+item.zk_final_price+'元'"></span>
              <span class="off-prise">券后价：<span v-text="to2Bit(item.zk_final_price-item.coupon_amount)"></span></span>
            </div>
            <div class="sell-info">
              <span v-text="item.volume"></span>
              <span>·</span>
              <span>人购买</span>
            </div>
            <el-button class="discovery-buy-btn" type="danger" size="small">领券购买</el-button>
          </div>
        </div>
      </div>
      <div class="discovery-right-part  float-left">
        这个是右边
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../utils/api';
  export default {
    methods:{
      to2Bit(num){
       return num.toFixed(2);
      }
    },
    async asyncData() {
      let categoriesResult = await api.getCategories();
      if(categoriesResult.code === api.SUCCESS_CODE) {
        //根据推荐，拿分类内容
        let  categoriesList=categoriesResult.data;
        let  recommendItem=categoriesList[0];
        let  currentCategoryId=recommendItem.id;
        let  contentResultData = await api.getCategoriesContext(currentCategoryId,1);
        if(contentResultData.code===api.SUCCESS_CODE){

          return{
            categoriesList,
            currentCategoryId,
            contentList:contentResultData.data
          }
        }
      }

    }
  }
</script>
<style>
  .original-prise{

  }
  .off-prise{
    color: orangered;
  }
  .item-right-info{
    margin-left:10px ;
  }
  .item-title {
     font-size: 22px;
     color: #47494e;
     font-weight: 600;
     max-width: 500px;
  }

  .item-left-cover img{
    border-radius: 5px;
  }
  .discovery-content-item{
     background:#fff;
     box-shadow: 0 5px 10px #d4d4d4;
     margin-bottom: 10px;
     padding: 10px;
     position: relative;
  }
  .discovery-category-active{
     background: #ff4500;
     color: #fff;
  }
  .discovery-left-part li:hover{
    background: #ff4500;
    color: #fff;
  }
.discovery-left-part li{
  width: 105px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  text-align: center;
}
  /*1140 分三份 第一份左边 120，第二部分中间，第三部分右边*/
.discovery-context-box{
    margin-top: 20px;
}
.discovery-left-part{
  width: 105px;
  margin-right: 10px;
  margin-left: 5px;
  background: #fff;
  box-shadow: 0 5px 10px #d4d4d4;
  padding-top: 10px;
  padding-bottom: 10px;
}
.discovery-center-part{
    width: 710px;
    margin-left: 10px;
    margin-right: 10px;
}
.discovery-right-part{
     width: 280px;
     margin-left: 10px;
     height: 500px;
     background: #89ffaa;
}

  .prise-info{
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .sell-info{
    margin-top: 10px;
    margin-bottom: 10px;
    color: #47494e;
    font-size: 16px;
  }
  .discovery-buy-btn {
    position: absolute;
    bottom:20px;
    right:20px;
  }
</style>
