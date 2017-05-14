<template>
   <div class="course">
        <div class="addCourse">
            <div class="search"><el-input class="searchInput" v-model="input" placeholder="请输入内容"></el-input><el-button class="serchBtn" type="success">搜索</el-button></div>
        </div>
   <el-table
    :data="tableData"
    style="width: 100%"
    border
    height="400"
    class="table">
        <el-table-column
      prop="num"
      label="学号"
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
        <el-button @click="showDetail(scope.row)" type="success" size="small">查看</el-button>
        <el-button @click="editInfo(scope.row)" type="success" size="small">编辑</el-button>
      </template>
      </el-table-column>
  </el-table>
   </div>
</template>

<script>
  import * as api from '../../pro/api'
  export default {
    beforeMount () {
      const _this = this
      api._post({ url: 'member/list', data: {}}).then((result) => {
        var memberArray =  result.data.data.members
        console.log(result.data.data.members[0].birthday.substring(0,3));
        for(var i = 0; i < memberArray.length; ++i) {
            var column_data = {};
            column_data.id = memberArray[i]._id;
            column_data.name = memberArray[i].name;
            column_data.num = memberArray[i].xuehao;
            column_data.sex = memberArray[i].sex;
            column_data.belong = memberArray[i].activityArea;
            
            column_data.dateB = (memberArray[i].birthday!=null ? memberArray[i].birthday.substring(0,10) : null) ;
            column_data.dateJ = (memberArray[i].workday!=null ? memberArray[i].workday.substring(0,10) : null) ;
            this.tableData.push(column_data);
        }
      }).catch((err) => {
         console.log(err);
      })
    },

    methods: {
      handleClick() {
       this.$router.push({ name: 'select'})
      },

      showDetail(row){
        this.$router.push('/infoselect/info/'+row.id)
      },

      editInfo(row) {
         this.$router.push('/infoselect/select/'+row.id)
      },
    },
    data() {
      return {
        input: '',
        tableData:[]
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
    height: 75px;
    background-color: #fff;
    box-sizing: border-box;
    padding-top:5px;
    position:relative;
}
.search{
  width: 200px;
  margin-top:10px;
  margin-left:20px;
  position:relative;
}
.serchBtn{
  position:absolute;
  top: 0;
  right: 0;
}
.el-button{
  border-top-left-radius:0px; 
  border-bottom-left-radius:0px; 
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
    /*margin-top:20px;*/
}
</style>