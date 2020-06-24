<template>
  <div class="center-box clear-fix">
    <div class="discovery-context-box">
      <div class="discovery-left-part float-left">
         <ul>
           <li :class="currentCategoryId===item.id?'discovery-category-active':'discovery-category'" v-for="(item,index) in categoriesList " :key="index"><span  v-text="item.title"></span></li>
         </ul>
      </div>
      <div class="discovery-center-part float-left">
        这个是中间
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
    async asyncData() {
      let categoriesResult = await api.getCategories();
      if(categoriesResult.code === api.SUCCESS_CODE) {
        //根据推荐，拿分类内容
        let  categoriesList=categoriesResult.data;
        let  recommendItem=categoriesList[0];
        let  currentCategoryId=recommendItem.id;
        let  contentResultData = await api.getCategoriesContext(currentCategoryId,1);
        if(contentResultData.code===api.SUCCESS_CODE){
          //console.log(contentResultData.data)
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
    height: 1000px;
    background: antiquewhite;
}
.discovery-right-part{
     width: 280px;
     margin-left: 10px;
     height: 500px;
     background: #89ffaa;
}
</style>
