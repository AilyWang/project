<template>
<div>
    <div class="login_input">
        <span class="login_input_icon"><i class="iconfont icon-user input_icon"></i></span>
        <input type="text" placeholder="用户名" class="login_username">
    </div>
    <div class="login_input">
        <span class="login_input_icon"><i class="iconfont icon-key input_icon"></i></span>
        <input type="password" placeholder="密码" class="login_userpass">
    </div>
</div>
    
</template>
<script>
    export default {
       
    }
</script>
<style>
.login_input{
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    background: #fff;
    margin-bottom: 30px;
    outline: none;
    text-align: left;
}
.login_input_icon{
    display: inline-block;
    width: 38px;
    height: 38px;
    line-height: 38px;
    border-right: 1px solid #ccc;
    background: #eee;
    text-align: center;
    vertical-align: top;
}
.input_icon{
    font-size: 12px;
    color: #000;
}
.login_username,.login_userpass{
    width: 85%;
    height: 38px;
    line-height: 38px;
    border: 0;
    color: #333;
    padding: 5px;
    outline: none;
}
</style>
