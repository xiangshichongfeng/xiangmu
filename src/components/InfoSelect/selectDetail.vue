<template>
    <div class="userEdit">
   <div class="user">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name" >
    <el-input v-model="ruleForm.name"  placeholder="请输入姓名"></el-input>
  </el-form-item>
  <el-form-item label="学号/工号" prop="region" required>
    <el-input v-model="ruleForm.num" :disabled="true" placeholder="请输入学号或者工号"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex" required>
    <el-radio-group v-model="ruleForm.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="出生日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="请选择出生日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
   <el-form-item label="入职日期" required>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-date-picker type="date" placeholder="请选择入职日期" v-model="ruleForm.date2" style="width: 100%;" ></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
 <el-form-item label="所属院系" prop="belong" required>
    <el-input v-model="ruleForm.belong" placeholder="请输入活动区域"></el-input>
  </el-form-item>
  <el-form-item label="详细介绍" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="cancelForm">取消</el-button>
  </el-form-item>
</el-form>
</div></div>
</template>
<script>
  import * as api from '../../pro/api'
  export default {
    beforeMount () {
      const _this = this;
      console.log(this.$route.params.id);
      this.id = this.$route.params.id;
      api._post({ url: 'member/detail', data: {id: this.id}}).then((result) => {
        var info =  result.data.info;
        this.ruleForm.name = info.name;
        this.ruleForm.num = info.xuehao;
        this.ruleForm.belong = info.activityArea;
        this.ruleForm.date1 = info.birthday;
        this.ruleForm.date2 = info.workday;
        this.ruleForm.sex= info.sex;
        this.ruleForm.desc = info.detail;
        console.log('add');
      }).catch((err) => {
         console.log(err);
      })
    },
    data() {
      return {
        id:"",
        ruleForm: {
          name: '',
          num: '',
          belong:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          sex: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          num: [
            { required: true, message: '请输入学号或者工号', trigger: 'blur' },
            { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      cancelForm() {
        this.$router.push('/infoselect');
      }
    }
  }
</script>
<style scoped>
.userEdit{
    width: 100%;
    height: 600px;
    background-color: #fff;
}
.user{
    width: 400px;
    height: 300px;
    background-color: #fff;
    position:relative;
    padding-top:20px;
    margin:auto;
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