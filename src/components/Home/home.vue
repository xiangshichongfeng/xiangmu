<template>
    <div class="home">
        <div class="left">
            <div class="topTips">
                学院新闻
                <a href="###">更多<i class="el-icon-d-arrow-right more"></i></a>
            </div>
            <ul>
                <li>巢湖学院圆满完成驻村扶贫工作队选派工作   <span>2017-4-28</span></li>
                <li>巢湖学院圆满完成驻村扶贫工作队选派工作   <span>2017-4-28</span></li>
                <li>巢湖学院圆满完成驻村扶贫工作队选派工作   <span>2017-4-28</span></li>
                <li>巢湖学院圆满完成驻村扶贫工作队选派工作   <span>2017-4-28</span></li>
                <li>巢湖学院圆满完成驻村扶贫工作队选派工作   <span>2017-4-28</span></li>
            </ul>
        </div>
        <div class="right">
             <div class="topTips">
                院部动态
                <a href="###">更多<i class="el-icon-d-arrow-right more"></i> </a>
            </div>
            <ul>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕  <span>2017-4-28</span></li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕  <span>2017-4-28</span></li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕   <span>2017-4-28</span></li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕   <span>2017-4-28</span></li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕   <span>2017-4-28</span></li>
            </ul>
        </div>
        <div class="center">
            <div class="topTips">
                通知公告
            </div>
            <ul>
                <li>关于2017年“五一”国际劳动节学校放假</li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕</li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕</li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕</li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
                 <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
                <li>巢湖学院节能降耗月知识竞答大赛圆满落幕 </li>
            </ul>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.home{
    position:relative;
}
.more{
    font-size:12px;
}
.left{
    width:63%;
    height: 250px;
    /*background-color:red;*/
    padding-right:10px;
    margin-bottom:10px;
    box-sizing: border-box;
    float: left;
    border-radius: 10px;
    position:relative;
}
.left .topTips,.right .topTips{
    width: 100%;
    height: 40px;
    font:400 16px/40px "microsoft yahei";
    text-indent:20px;
    float:left;
    box-sizing: border-box;
    border:1px solid #fff;
}
.left ul,.right ul{
    /*width: 100%;*/
    height: 200px;
    /*background-color: red;*/
    margin-top:40px;
    background-color:#fff;
}
.left ul li,.right ul li{
    width: 97%;
    height: 40px;
    padding-left:20px;
    font:400 14px/40px "microsoft yahei";
    position:relative;
}
.left ul li:nth-child(1) span,.right ul li:nth-child(1) span{
    position:absolute;
    top: 0;
    right: 0;
}
.left ul li span,.right ul li span{
    width: 100px;
    display: block;
    float:right;
    line-height: 40px;
    text-align: left;
}
.left  a, .right a{
    width: 17%;
    height: 40px;
    float:right;
    text-align: left;
    font:400 16px/40px "microsoft yahei";
    color:#000;
    /*border-radius: 10px;*/
}
.center{
    width: 35%;
    height: 500px;
    /*background-color:pink;*/
    position:absolute;
    top: 0;
    right:20px;
    /*border-radius: 10px;*/
    /*float:right;*/
}
.center .topTips{
    width: 100%;
    height: 40px;
    font:400 16px/40px "microsoft yahei";
    text-indent:20px;
    float:left;
    box-sizing: border-box;
    border:1px solid #fff;
}
.center ul{
    /*width: 100%;*/
    /*height: 200px;*/
    /*background-color: red;*/
    margin-top:40px;
    background-color:#fff;
}
.center ul li{
    width: 100%;
    height: 40px;
    padding-left:20px;
    font:400 14px/40px "microsoft yahei";
    position:relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.right{
    width:63%;
    height: 250px;
    /*background-color:pink;*/
    border-right: 10px solid #f4f6f8;
    box-sizing: border-box;
    float: left;
    border-radius: 10px;
}
</style>