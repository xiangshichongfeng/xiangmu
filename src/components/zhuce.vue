<template>  
    <div class="loginWrapper">
        <div id="login">
            <div class="img"></div>
         <div class="name">
            <span>工号：</span><el-input v-model="dataInfo.num"  placeholder="请输入内容" class="nameValue"></el-input>
        </div>
        <div class="name">
            <span>密码：</span><el-input v-model="dataInfo.pass"  placeholder="请输入内容" class="nameValue"></el-input>
        </div>
        <div class="name">
            <span>确认密码：</span><el-input v-model="dataInfo.passensure"  placeholder="请输入内容" class="nameValue"></el-input>
        </div>
        <div class="btn">
            <el-button  @click="submit" type="success">注&nbsp;&nbsp;&nbsp;册</el-button>
        </div>
    </div>
    </div>
</template>
<script>
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
            submit(){
                // if(this.dataInfo.num)
                //判断进行处理
                //跳转
                if(this.dataInfo.num == "123" && this.dataInfo.pass == "123" && this.dataInfo.passensure == "123"){
                    this.$router.push({ name: 'login'})
                }

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
    }
    .name{
    width: 350px;
    height: 40px;
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
        top: 280px;
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