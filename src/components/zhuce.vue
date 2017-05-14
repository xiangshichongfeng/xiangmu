<template>  
    <div class="loginWrapper">
        <div id="login">
            <div class="img"></div>
         <div class="name">
            <span>工号：</span><input v-model="dataInfo.num"  placeholder="请输入内容" class="nameValue"></input>
        </div>
        <div class="name">
            <span>密码：</span><input v-model="dataInfo.pass" type="password"  placeholder="请输入内容" class="nameValue"></input>
        </div>
        <div class="name">
            <span>确认密码：</span><input v-model="dataInfo.passensure" type="password"  placeholder="请输入内容" class="nameValue"></input>
        </div>
        <div class="btn">
            <el-button  @click="register" type="success">注&nbsp;&nbsp;&nbsp;册</el-button>
        </div>
    </div>
    </div>
</template>
<script>
import * as api from '../pro/api'
export default{
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
        register() {
            if(this.dataInfo.num.length == 0 || this.dataInfo.pass.length == 0 ||
                this.dataInfo.passensure.length == 0) {
                alert('填入信息不完整，请重新输入');
                return;
            }
            var query = {
                num: this.dataInfo.num,
                pass: this.dataInfo.pass
            }
            api._post({ url: 'register', data: query}).then((result) => {
                if(result.data.code == 200) {
                   alert('注册成功，请登陆');
                   this.$router.push({ name: 'login'})
                } else {
                   alert('注册失败，请重新注册');
                }
            }).catch((err) => {
               console.log(err);
           })
        }
    }
        
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
    border: 1px solid #bfcbd9;
        /*width: 100%;*/
        border-radius: 4px;
    }
    .name{
    width: 350px;
    height: 40px;
    margin-bottom:20px;
}
    span{
    display: block;
    float:left;
    width: 100px;
    text-align: center;
    line-height: 40px;
}
    .btn{
        width: 200px;

      position: absolute;
        top: 300px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;  
    }
    .el-button--success{
        width: 100%;
        /*background-color: blue;*/
    }
</style>