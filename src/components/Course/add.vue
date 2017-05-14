<template>
   <div class="edit">
        <div class="name">
            <span>教学材料名称：</span><el-input  v-model="name" placeholder="请输入内容" class="nameValue"></el-input>
        </div>
        <div class="name">
            <span>教学材料数量：</span><el-input  v-model="num" placeholder="请输入内容" class="nameValue"></el-input>
        </div>
         <div class="name">
            <span>难易程度：</span>
            <el-checkbox-group v-model="checkList" class="check">
                <el-checkbox label="初级" value='初级'></el-checkbox>
                <el-checkbox label="中级" value='中级'></el-checkbox>
                <el-checkbox label="高级" value='高级'></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="name">
            <span>所属院系：</span>
            <select class="select" v-model='yuanxi' placeholder="请选择">
              <option  v-for="u in options" >
                {{u}}
              </option>
            </select>
        </div>
        <el-button  @click="addMaterial" type="success" class="saveBtn">保存</el-button>
   </div>
</template>
<script>
 import * as api from '../../pro/api'
 const cityOptions = ['初级','中级','高级'];
  export default {
    methods: {
      addMaterial() {
        var query = {
            name: this.name,
            num: this.num,
            nanyi: this.checkList,
            xueyuan: this.yuanxi
        }
        api._post({ url: 'material/add', data: query}).then((result) => {
            if(result.data.code == 200) {
               alert(result.data.msg);
               window.location.href = '/course';
            } else {
               alert(result.data.msg);
            }
         }).catch((err) => {
            console.log(err);
        })
      }
    },

    data() {
      return {
        name:"",
        num:"",
        checkList: [],
        yuanxi: "信息工程学院",
        options: [
          '信息工程学院',
          '外语学院',
          '化生学院',
          '文教学院',
          '艺术学院'
        ],
       
      };
    }
  };
</script>
<style scoped>
.edit{
    width: 100%;
    height: 300px;
    background-color: #fff;
    position:relative;
    padding-top:20px;
    box-sizing:border-box;
}
.edit .name{
    width: 350px;
    height: 40px;
    /*background-color: red;*/
    /*position:absolute;
    top: -124px;
    left: -200px;
    right: 0;
    bottom: 0;
    margin: auto;*/
    margin-left:250px;
    margin-top:10px;
}
.name span{
    display: block;
    float:left;
    width: 100px;
    text-align: center;
    line-height: 40px;
}
.name .nameValue{
    width: 150px;
    height: 40px;
    float:left;
}
.name .check{
    padding-top:10px;
    width: 200px;
    float:left;
}
.name .select{
    /*padding-top:10px;*/
    width: 200px;
    float:left;
}
.saveBtn{
    margin-left:60%;
    margin-top:20px;
}
</style>