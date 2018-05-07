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
    
    *{
        box-sizing: border-box;
    }
    body,div,p,ul,ol,li,dl,dt,dd,table,tbody,thead,tr,td,form,hr,fieldset,h1,h2,h3,h4,h5,h6,img,input{
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;
    }
    body{
        font-family: "微软雅黑",Arial;
        font: 12px/normal "microsoft yahei","Times New Roman","宋体",Times,serif;
        background: #f7f7f8;
        position: relative;
    }
    a{
        text-decoration:none;
    }
    ul,ol{
        list-style:none;
    }
    img{
        border: 0;
        display: block;
    }
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
</style>
