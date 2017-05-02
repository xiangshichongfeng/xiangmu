import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home.vue'
import Course from '@/components/Course/course.vue'
import EditCourse from '@/components/Course/edit.vue'
import InfoPro from '@/components/InfoPro/infopro.vue'
import InfoSelect from '@/components/InfoSelect/infoselect.vue'
import User from '@/components//user.vue'
import selectInfo from '@/components/InfoSelect/select.vue'




Vue.use(Router);

export default new Router({
  mode: 'history',
  history: true,
  saveScrollPosition: false, // 不保存滚动位置
  routes: [
    {path: '/', redirect: "/Home"},
    {path: '/home',name: 'home',component: Home,meta:{title:"首页"}},
    {path: '/home/user',name: 'user',component: User,meta:{title:"个人中心"}},
    {path: '/course',name: 'course',component: Course,meta:{title:"课程管理"}},
    {path: '/course/edit',name: 'edit',component: EditCourse,meta:{title:"编辑材料"}},
    {path: '/infoselect/select',name: 'select',component: selectInfo,meta:{title:"编辑信息"}},
    {path: '/infoselect',name: 'infoselect',component: InfoSelect,meta:{title:"信息查询"}},
    {path: '/infopro',name: 'infopro',component: InfoPro,meta:{title:"网上选课"}},
  ]


})



