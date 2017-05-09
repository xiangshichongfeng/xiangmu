import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home.vue'
import Course from '@/components/Course/course.vue'
import EditCourse from '@/components/Course/edit.vue'
import InfoPro from '@/components/InfoPro/infopro.vue'
import InfoSelect from '@/components/InfoSelect/infoselect.vue'
import User from '@/components/user.vue'
import selectInfo from '@/components/InfoSelect/select.vue'
import Login from '@/components/login.vue'
import Zhuce from '@/components/zhuce.vue'




Vue.use(Router);

export default new Router({
  mode: 'history',
  history: true,
  saveScrollPosition: false, // 不保存滚动位置
  routes: [
    {path: '/', redirect: "/Login"},
    {path: '/zhuce', name: "zhuce",component: Zhuce,meta:{title:"登陆注册"}},
    {path: '/login',name: 'login',component: Login,meta:{title:"登陆注册"}},
    {path: '/home',name: 'home',component: Home,meta:{title:"首页"}},
    {path: '/home/user',name: 'user',component: User,meta:{title:"个人中心"}},
    {path: '/course',name: 'course',component: Course,meta:{title:"课程管理"}},
    {path: '/course/edit/:id',name: 'edit',component: EditCourse,meta:{title:"编辑材料"}},
    {path: '/infoselect/select',name: 'select',component: selectInfo,meta:{title:"编辑信息"}},
    {path: '/infoselect',name: 'infoselect',component: InfoSelect,meta:{title:"信息查询"}},
    {path: '/infopro',name: 'infopro',component: InfoPro,meta:{title:"网上选课"}},
  ]


})



