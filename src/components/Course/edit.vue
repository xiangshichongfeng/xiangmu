<template>
   <div class="edit">
        <div class="name">
            <span>教学材料名称：</span><el-input  placeholder="请输入内容" class="nameValue"></el-input>
        </div>
        <div class="name">
            <span>教学材料数量：</span><el-input  placeholder="请输入内容" class="nameValue"></el-input>
        </div>
         <div class="name">
            <span>难易程度：</span>
            <el-checkbox-group v-model="checkList" class="check">
                <el-checkbox label="初级" ></el-checkbox>
                <el-checkbox label="中级"></el-checkbox>
                <el-checkbox label="高级"></el-checkbox>
            </el-checkbox-group>
        </div>
          <div class="name">
            <span>所属院系：</span>
            <el-select class="select" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
  </el-select>
        </div>
        <el-button type="success" class="saveBtn" @click="test">保存</el-button>
   </div>
</template>
<script>
 const cityOptions = ['初级','中级','高级'];
  export default {
    data() {
      return {
        checkList: [false,false,false],
        options: [{
          value: '选项1',
          label: '信息工程学院'
        }, {
          value: '选项2',
          label: '外语学院'
        }, {
          value: '选项3',
          label: '化生学院'
        }, {
          value: '选项4',
          label: '文教学院'
        }, {
          value: '选项5',
          label: '艺术学院'
        }],
        value: ''
      };
    },
    methods:{
        test(){
            console.log(this.$route.params.id)
        }
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