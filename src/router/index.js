import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home.vue'
import Course from '@/components/Course/course.vue'
import AddCourse from '@/components/Course/add.vue'
import EditCourse from '@/components/Course/edit.vue'
import InfoCourse from '@/components/Course/info.vue'
import InfoPro from '@/components/InfoPro/infopro.vue'
import InfoSelect from '@/components/InfoSelect/infoselect.vue'
import SelectDetail from '@/components/InfoSelect/selectDetail.vue'
import User from '@/components//user.vue'
import selectInfo from '@/components/InfoSelect/select.vue'
import Login from '@/components/login.vue'
import Zhuce from '@/components/zhuce.vue'

Vue.use(Router);

export const router = new Router({
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
    {path: '/course/info/:id',name: 'info',component: InfoCourse,meta:{title:"材料信息"}},
    {path: '/course/edit/:id',name: 'edit',component: EditCourse,meta:{title:"编辑材料"}},
    {path: '/course/add',name: 'add',component: AddCourse,meta:{title:"添加材料"}},
    {path: '/infoselect/info/:id',name: 'selectDetail',component: SelectDetail,meta:{title:"查看信息"}},
    {path: '/infoselect/select/:id',name: 'select',component: selectInfo,meta:{title:"编辑信息"}},
    {path: '/infoselect',name: 'infoselect',component: InfoSelect,meta:{title:"信息查询"}},
    {path: '/infopro',name: 'infopro',component: InfoPro,meta:{title:"网上选课"}},
  ]


})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})



