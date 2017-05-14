<template>  
    <div class="loginWrapper">
        <div id="login">
            <div class="img"></div>
         <div class="infowrapper">
             <div class="name">
            <span class="num"><icon name="peopleIcon" scale="3"></icon></span><input v-model="dataInfo.num"  placeholder="请输入工号" type="text" class="passValue"></input>
        </div>
        <div class="name">
            <span class="pass"><icon name="pass" scale="2.5"></icon></span><input v-model="dataInfo.pass"  placeholder="请输入密码" type="password" class="passValue"></input>
        </div>
        </div>
        <div class="btn">
            <el-button  @click="login" type="success">登&nbsp;&nbsp;&nbsp;录</el-button>
        </div>
         </div>
        <div class="zhuce" @click="zhuce">立即注册</div>
    </div>
    </div>
</template>
<script>
import * as api from '../pro/api'
import Vue from 'vue';
import Icon from 'vue-svg-icon/Icon.vue';
// Icon.inject('activity');
export default{
     components: {
        Icon,
    },
        data(){
            return{
                dataInfo:{
                    num:'',
                    pass:'',
                    passensure:''
                }
            } 
        },
        
        methods:{
            login() {
                var query = {
                    num: this.dataInfo.num,
                    pass: this.dataInfo.pass
                }
                api._post({ url: 'login', data: query}).then((result) => {
                    if(result.data.code == 200) {
                       alert('登陆成功');
                    var num =query.num;
                    window.localStorage.clear('num');
                    window.localStorage.setItem('num',num);
                    //让页面强制刷新一遍
                    window.location=('http://localhost:8080/home');
                    } else {
                       alert('登陆失败，请重新登陆');
                    }
                }).catch((err) => {
                    console.log(err);
                })
            },
            zhuce(){
                this.$router.push({ name: 'zhuce'})
            }
            
        },
}
</script>
<style scoped>

.loginWrapper{
    width: 100%;
    height: 100%;
    position:fixed; 
    top: 0;
    left: 0;
background-color: #2f4050;
}
    #login{
        width: 380px;
        height: 280px;
        padding-top:100px;
        padding-left: 30px;
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #fff;
        border-radius: 5px;
        
    }
    .img{
         width: 130px;
        height: 130px;
        position:absolute;
        top: 0;
        left: 35%;
        transform:translateY(-50%);
        background:url("../assets/xscf.jpg") no-repeat center;
        background-size:contain;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: #fff;
        border:2px solid #eee;
    }
    .nameValue{
    width: 200px;
    height: 40px;
    float:left;
    }
    .name{
    width: 350px;
    height: 40px;
    margin-bottom:20px;
}

.infowrapper{
    position: relative;
}
  .infowrapper   span{
    display: block;
    /*float:left;*/
    width: 100px;
    text-align: center;
    line-height: 40px;
    position:absolute;
    
}
.infowrapper   .num{
    top: 6px;
    left: -25px;
}
.infowrapper   .pass{
    top: 65px;
    left: -25px;
}
    .btn{
        width: 350px;

      position: absolute;
        top: 245px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;  
    }
    .el-button--success{
        width: 100%;
        /*background-color: blue;*/
    }
    .zhuce{
        height: 40px;
        width: 200px;

        position: absolute;
        top: 335px;
        left: 400px;
       right: 0px;
        bottom: 0;
        margin: auto;  
        /*font-size:16px;*/
        color:#13ce66;
    }
    .passValue{
        display: block;
        height: 36px;
        border: 1px solid #bfcbd9;
        /*width: 100%;*/
        border-radius: 4px;
        width: 300px;
        margin: auto;
        padding-left:40px;
        /*background-color: #fff;*/
    }
</style>