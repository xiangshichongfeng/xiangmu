<template>
    <div class="userEdit">
   <div class="user">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name" >
    <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
  </el-form-item>
  <el-form-item label="学号/工号" prop="region" required>
    <el-input v-model="ruleForm.num" placeholder="请输入学号或者工号"></el-input>
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
<el-form-item label="活动区域" prop="belong" required>
    <el-select v-model="ruleForm.belong" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="详细介绍" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div></div>
</template>
<script>
  export default {
    data() {
      return {
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
          belong:[ { required: true, message: '请选择活动区域', trigger: 'change' }],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
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