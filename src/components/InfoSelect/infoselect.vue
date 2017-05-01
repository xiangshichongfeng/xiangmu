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
      prop="num"
      label="编号"
      width="150">
    </el-table-column>
      <el-table-column
      prop="name"
      label="名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="150">
    </el-table-column>
    <el-table-column
      prop="belong"
      label="所属院系"
      width="150">
    </el-table-column>
    <el-table-column
      prop="dateB"
      label="出生日期">
    </el-table-column>
    <el-table-column
      prop="dateJ"
      label="入职日期">
    </el-table-column>
    <el-table-column
      prop="edit"
      label="操作">
     <template scope="scope">
        <el-button @click="handleClick" type="success" size="small">查看</el-button>
        <el-button @click="handleClick" type="success" size="small">编辑</el-button>
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
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        },{
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        }, {
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        },{
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        }, {
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        }, {
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        },{
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        },{
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        }, {
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
        },{
          name: '李白',
          num: '1',
          sex: '男',
          belong: '信息工程学院',
          dateB:'1990-2-21',
          dateJ:'2005-9-10',
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