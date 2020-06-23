<template>
  <section class="container">
  <div class="home-center-part">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  </section>
</template>
<script>
  import api from "../../utils/api";
  export default {
    async asyncData() {
      let advListResult = await api.advList();
      console.log(advListResult);
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home-center-part {
    margin-left: 160px;
    margin-bottom: 30px;
    width: 91.5%;
    margin-right: 10px;
    float: left;
    height: 360px;
  }
</style>
