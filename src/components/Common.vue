<template>
    <div id="common">
       <div class="left">
           <div class="topBanner">
               <div class="img"></div>
               <div class="name">相识重逢</div>
           </div>
           <div class="asideBanner">
                <router-link class="box" :to="{ name: 'home'}">
                   <i class="homeIcon"><icon name="home" scale="2"></icon></i> 首页
                </router-link>
                <router-link class="box" :to="{ name: 'course'}">
                    教学材料管理
                </router-link>
                <router-link class="box" :to="{ name: 'infoselect'}">
                    信息查询
                </router-link>
                <router-link class="box" :to="{ name: 'infopro'}">
                    网上选课
                </router-link>
           </div>
       </div>
       <div class="mainbanner">
            <div class="logo"></div>
            <div class="right">
                <div class="percenter">
                    <i><icon name="perIcon" scale="2"></icon></i>个人中心
                </div>
                <div class="loginout">
                    <i></i>退出
                </div>
            </div>
       </div>
       <div class="Banner">
          <div class="tips">
             <i></i> 当前位置：{{ $route.meta.title }}
          </div>
       </div>
    </div>
</template>
<script>

import Vue from 'vue';
import Icon from 'vue-svg-icon/Icon.vue';
// Icon.inject('activity');
export default{
     components: {
        Icon,
    },
}
</script>
<style scoped>
.left{
    width: 180px;
    height: 100%;
    background-color: #2f4050;
    position: fixed;
    top: 0;
    left: 0;
}
.topBanner {
  width: 180px;
  height: 170px;
  background-color: #243443;
  position:absolute;
  top: 0;
  left: 0;
  padding-top:20px;
}
.topBanner .img{
    width: 75px;
    height: 75px;
    margin:0px auto;
    background-color:pink;
    border-radius: 50%;
}
.topBanner .name{
    font-size:18px;
    line-height: 40px;
    text-align: center;
    color:#a9b0c2;
}
.asideBanner{
    width: 180px;
    height: 300px;
    /*background-color: pink;*/
    position:absolute;
    top: 230px;
    left: 0;
}
.router-link-active{
    background-color: #243443!important;
    color:#f6f6f6!important;
}
.asideBanner .box{
    width:100%;
    height:40px;
    float:left;
    box-sizing:border-box;
    color:#a9b0c2;
    font:400 16px/40px "microsoft yahei";
    padding-left:60px;
    text-decoration:none;
    /*background-color:#def;*/
    margin-bottom:10px;
    position:relative;
}
.mainbanner{
    width: 100%;
    height: 60px;
    background-color: #fff;
    margin-left:180px;
    position: fixed;
    top: 0;
    left: 0;
}
.mainbanner .logo{
    width: 200px;
    height: 60px;
    background-image: url("../assets/logo_school.png");
    background-size: contain;
    background-repeat: no-repeat;
    float:left;
}
.mainbanner .right{
    width: 200px;
    height: 60px;
    /*background-color:red;*/
    position:absolute;
    top: 0;
    right: 180px;
}
.mainbanner .right .percenter{
    width: 100px;
    height: 60px;
    /*background-color: #def;*/
    font:400 16px/60px "microsoft yahei";
    text-align: center;
    float:left;
    color: #337ab7;
}
.mainbanner .right .percenter i{
    width: 25px;
    height:25px;
    /*background-color: red;*/
    display: block;
    position: absolute;
    top: 3px;
    left: -5px;
}
.mainbanner .right .loginout{
    width: 100px;
    height: 60px;
    float:left;
    /*background-color: #def;*/
    font:400 16px/60px "microsoft yahei";
    text-align: center;
    color: #337ab7;
}
.mainbanner .right .loginout i{
    width: 25px;
    height:25px;
    background-color: red;
    display: block;
    position: absolute;
    top: 18px;
    left: 105px;
}
.Banner{
    width: 100%;
    height: 40px;
    background-color: #fff;
    font:400 16px/40px "microsoft yahei";
    padding-left:40px;
    margin-left:200px;
    position: fixed;
    border-radius:5px;
    border:1px solid #eee;
    top: 70px;
    left: 0;

}
.Banner i{
    width: 25px;
    height:25px;
    background-color: red;
    display: block;
    position: absolute;
    top: 8px;
    left: 8px;
}
.homeIcon{
    position:absolute;
    top: 2px;
    left: 35px;
}
</style>