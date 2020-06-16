<template>
  <div>
    <!--顶部-->
    <div id="header">
      <div class="center-box clear-fix">
          <div class="header-logo float-left">
          <span>
             家庭理财
          </span>
          </div>
          <div class="header-menu float-left">
              <ul>
                <li>网站首页</li>
                <li>品牌栏目</li>
                <li>嘉宾阵容</li>
                <li>今日观点</li>
                <li>理财商城</li>
                <li>VIP直播</li>
              </ul>
          </div>
          <div class="header-search-box float-left">
            <el-input  placeholder="请输入内容" size="small"></el-input>
          </div>
          <div class="header-search-btn float-left">
              <el-button type="danger" size="small">搜索</el-button>
          </div>
      </div>
    </div>
    <nuxt/>
    <!--底部-->
    <div id="footer">
      <div class="center-box">
        <div class="footer_link">
          <ul class=" clear-fix">
            <li>关于我们</li>
            <li>关于我们</li>
            <li>合作伙伴</li>
            <li>客服电话</li>
          </ul>
        </div>
        <div class="footer_second">
          <ul class=" clear-fix">
            <li>公司介绍</li>
            <li>媒体矩阵</li>
            <li>合作伙伴</li>
            <li>客服热线：400-655-5088</li>
          </ul>
        </div>
        <div class="copyright"><span>首华财经 版本所有</span></div>
        <div class="size-info">
          <p>&COPY;家庭理财 Copyright  2014-2020
          <span>&nbsp;|&nbsp;</span>
          <a href="http://www.beian.miit.gov.cn/" target="_blank" style="color:white">辽ICP备16013640号</a>
          <span>&nbsp;|&nbsp;</span>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21010202000737" target="_blank" style="color:white">辽公网安备 21010202000737号</a>
          </p>
        </div>
      </div>


    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#header{
  box-shadow: 0 5px 10px #d4d4d4;
  background: #fff;
  height: 70px;
}
#footer {
  background-color: #c9302c;
}
.copyright{
  text-align: center;
  color: #fff;
  line-height: 30px;
}
.size-info{
  text-align: center;
  color: #fff;
  line-height: 30px;
  padding-bottom: 40px;
}
.footer_link li{
  float: left;
  color: #fff;
  line-height: 30px;
  padding-left: 10px;
  padding-right:10px ;
  margin-left: 10px;
  margin-top: 0px;
}

.footer_link ul{
  list-style: none;
  text-align: center;
}

.footer_link {
  padding-top: 40px;
}

.footer_second li{
  float: left;
  color: #fff;
  line-height: 30px;
  padding-left: 10px;
  padding-right:10px ;
  margin-left: 10px;
}

.footer_second ul{
  list-style: none;
  text-align: center;
}

.header-menu li:hover{
  background: #fe9900;
}
.menu-active{
  background: #fe9900;
}

.header-search-box{
  margin-left: 20px;
}

.header-search-box .el-input{
  width: 300px;
}
.header-search-btn{
  margin-left: 20px;
}


.header-search-btn .el-button--danger{
   width: 100px;
}
.header-search-box,.header-search-btn{
  line-height: 70px;
}

.float-left{
  float: left;
}

.clear-fix{
  zoom: 1;
  overflow: auto;
}
.header-menu li{
  cursor: pointer;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  float: left;
  line-height: 70px;
  padding-left: 15px;
  padding-right:15px ;
}
.header-menu ul{
  list-style: none;
}
.header-logo{
  line-height: 70px;
  font-size: 24px;
  font-weight: 600;
  color: #c9302c;
}
.center-box{
   width: 1140px;
   margin: 0 auto;

}
</style>

