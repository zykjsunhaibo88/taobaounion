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
          <div class="float-left sidebar-container">
               <ul class="menus">
                <li class="menu-item"><a href="/"><i class="iconfont">&#xe633;</i>首页</a></li>
                <li class="menu-item"><a href="/live"><i class="iconfont">&#xe633;</i>讲堂直播课</a></li>
                <li class="menu-item"><a href="/list"><i class="iconfont">&#xe633;</i>精品推荐</a></li>
                <li class="menu-item"><a href=""><i class="iconfont">&#xe633;</i>品牌栏目</a></li>
                <li class="menu-item"><a href="/teacher"><i class="iconfont">&#xe633;</i>大咖讲师</a></li>
                <li class="menu-item"><a href="/discovery"><i class="iconfont">&#xe633;</i>我大课程</a></li>
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
    <div class="i_footer" id="footer">
      <div class="footer_content clearfix">
           <div class="footer_msg"><ul><li class="m_header">关于我们</li> <li class="m_row"></li> <li><a href="http://edu.tvlicai.com/terrace/1240165743842881538">公司介绍</a></li></ul></div><div class="footer_msg"><ul><li class="m_header">关注我们</li> <li class="m_row"></li> <li><a href="http://edu.tvlicai.com/terrace/1240167935811317761">媒体矩阵</a></li></ul></div><div class="footer_msg"><ul><li class="m_header">合作伙伴</li> <li class="m_row"></li> <li><a href="http://edu.tvlicai.com/terrace/1240170125951037442">合作伙伴</a></li></ul>
           </div>
           <div class="footer_msg"><ul><li class="m_header">联系客服</li> <li class="m_row"></li> <li>
           客服热线：400-655-5088 </li> <!----> <!----> <!----> <!----> </ul>
           </div>
       <div class="m_right">
          <div class="footer_msg">
            <ul><li class="m_header">官方微信</li> <li><img src="https://shcjtest.obs.cn-north-4.myhuaweicloud.com/lingke/system/微信.jpg" alt=""></li></ul>
          </div> <!---->
       </div>
      </div> <!---->
      <div class="copyright"><span>首华财经 版本所有</span></div>
      <div class="icp_num">
        家庭理财 Copyright  2014-2020
        <span>&nbsp;|&nbsp;</span> <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=16013640" target="_blank" class="c_ccc">辽ICP备16013640号</a> <span>&nbsp;|&nbsp;</span>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21010202000737" target="_blank" class="c_ccc"><img  alt="" class="prn_icon">&nbsp;辽公网安备 21010202000737号</a>
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
.menu-item a {
  line-height: 75px;
  display: block;
  padding-left: 27px;
  text-decoration: none;
  font-size: 14px;
  color: #333;
}
.iconfont {
  font-family: iconfont!important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.menus {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.sidebar-container {
  width: 180px;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
  border-right: 1px solid #ddd;
  overflow: auto;
}

#header{
  box-shadow: 0 5px 10px #d4d4d4;
  background: #fff;
  height: 70px;
}

.footer_content {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
  border-bottom: 1px solid #666;
}

#footer {
}

.i_footer {
  background: #333;
  padding-top: 23px;
}
.footer_content {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
  border-bottom: 1px solid #666;
}

.footer_msg {
  float: left;
  width: 160px;
}
.m_header {
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
}
.m_row {
  width: 78px;
  height: 1px;
  background: #d18f0f;
  font-size: 14px;
  margin-bottom: 15px;
  color: #fff;
}
.m_right {
  float: right;
}
.copyright {
  background: #666;
  line-height: 30px;
  text-align: center;
  color: #ccc;
  margin-top: 100px;
  font-size: 14px;
}
.icp_num {
  padding: 15px 0;
  line-height: 30px;
  text-align: center;
  color: #ccc;
  font-size: 14px;
}

.icp_num  a{
  margin: 0;
  color: #fff;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  text-decoration: none;
  background: transparent;
}


.m_header {
  color: #fff;

  margin-bottom: 10px;
}
.footer_msg img {
  width: 96px;
  height: 96px;
}

.footer_msg li {
  list-style-type:none;
  font-size: 14px;

}
.footer_msg a {
  color: #fff;
  text-decoration: none;
}



.copyright {
  background: #666;
  line-height: 30px;
  text-align: center;
  color: #ccc;
}

.header-menu li:hover{
  background: #fe9900;
}


.header-search-box{
  margin-left: 20px;
}

.header-search-box{
  width: 300px;
}
.header-search-btn{
  margin-left: 20px;
}


.header-search-btn {
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

