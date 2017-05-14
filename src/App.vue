<template>
  <div id="app">
    <router-view></router-view>
     <Common></Common>
  </div>
</template>
<script>
import Common from './components/Common'

import './assets/base.css'
import "./router/index.js";
export default {
  created() {
    if(this.$route.name =='login' || this.$route.name =='zhuce'){
        window.localStorage.clear();
    }
  },
  components: {
    Common,
  },
  computed: {
   
  }


}
</script>
<style>
html{
  width: 100%;
  height: 100%;
}
#app{
    padding-top:120px;
    padding-left:200px;
    padding-right:10px;
    overflow:hidden;
}
</style>
