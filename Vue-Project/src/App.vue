<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/css/iconfont.css"
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    text-decoration: none;
    list-style:none;
  }
  html,body,#app{
    height:100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
