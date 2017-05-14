<template>
   <div class="course">
        <div class="addCourse">
            <el-button @click="handleClick"  class="addBTn" type="success">添加教学材料</el-button>
        </div>
   <el-table
    :data="tableData"
    style="width: 100%"
    border
    height="400"
    class="table" v-loading="loading"
 element-loading-text="拼命加载中..."
>
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
    <el-table-column prop="id" label="操作" >
      <template scope="scope">
        <el-button  @click="showDetail(scope.row)" type="success" size="small">查看</el-button>
        <el-button @click="editInfo(scope.row)" type="success" size="small">编辑</el-button>
        <el-button  @click="deleteMaterial(scope.row)" type="success" size="small">删除</el-button>
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
      api._post({ url: 'material/list', data: {}}).then((result) => {
        var meterialArray =  result.data.data.materials
        for(var i = 0; i < meterialArray.length; ++i) {
            var column_data = {};
            column_data.id = meterialArray[i]._id;
            column_data.name = meterialArray[i].name;
            column_data.num = meterialArray[i].num;
            column_data.sort = meterialArray[i].nanyi;
            column_data.belong = meterialArray[i].xueyuan;
            this.tableData.push(column_data);
        }
      }).catch((err) => {
         console.log(err);
      })
    },

    methods: {
      show(row) {
        this.currentId = row.id;
      },
      
      showDetail(row){
        this.$router.push('/course/info/'+row.id)
      },

      editInfo(row) {
         this.$router.push('/course/edit/'+row.id)
      },
      
      deleteMaterial(row) {
        api._post({ url: 'material/delete', data: {id: row.id}}).then((result) => {
          alert(result.data.msg);
          location.reload(); 
        }).catch((err) => {
          console.log(err);
        })
      },

      handleClick() {
       this.$router.push({ name: 'add'})
      },
    },
    data() {
      return {
        currentId: "",
        tableData: []
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