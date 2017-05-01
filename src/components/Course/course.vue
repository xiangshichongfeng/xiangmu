<template>
   <div class="course">
        <div class="addCourse">
            <el-button @click="handleClick"  class="addBTn" type="success">添加教学材料</el-button>
        </div>
   <el-table
    :data="tableData2"
    style="width: 100%"
    border
    height="400"
    class="table">
      <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="belong"
      label="所属院系"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sort"
      label="难易程度">
    </el-table-column>
    <el-table-column
      prop="edit"
      label="操作">
     <template scope="scope">
        <el-button @click="handleClick" type="success" size="small">查看</el-button>
        <el-button @click="handleClick" type="success" size="small">编辑</el-button>
        <el-button  type="success" size="small">删除</el-button>
      </template>
      </el-table-column>
  </el-table>
   </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
       this.$router.push({ name: 'edit'})
      }
    },
    data() {
      return {
        tableData2: [{
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
          belong: '信息工程学院',
        },{
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
           belong: '信息工程学院',
        },  {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
           belong: '信息工程学院',
        }, {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
          belong: '信息工程学院',
        }, {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
           belong: '信息工程学院',
        }, {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
           belong: '信息工程学院',
        }, {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
          belong: '信息工程学院',
        }, {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
           belong: '信息工程学院',
        }, {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
           belong: '信息工程学院',
        }, {
          name: 'javaScript基础',
          num: '22',
          sort: '中级',
           belong: '信息工程学院',
        }]
      }
    }
  }
</script>
<style scoped>
.course{
    position:relative;
}
.addCourse{
    width: 100%;
    height: 45px;
    background-color: #fff;
    box-sizing: border-box;
    position:relative;
}
.addCourse .addBTn{
    /*height: 30px;*/
    /*margin-top:5px;*/
    /*width: 60px;*/
    /*height: 30px;
    margin-top:5px;
    line-height: 30px;
    height: 25px;*/
    height: 30px;
    line-height: 8px;
    margin-right:10px;
    margin-top:8px;
    float: right;
}
.table{
    margin-top:20px;
}
</style>