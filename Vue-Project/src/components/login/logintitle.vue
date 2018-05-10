<template>
    <div class="login_title">
        <div class="user_login"><i class="iconfont icon-user login_icon"></i>用户登录</div>
        <h1 class="login_title_txt">
            <small>企业管理信息系统快速开发平台 - 后台演示</small>
        </h1>
    </div>
</template>
<script>
    export default {
        name: "LoginTitle"
    }
</script>
<style>
.login_title{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 20px 15px;
    position: relative;
    background: rgba(0, 0, 0, .5);
}
.user_login{
    font-size: 12px;
    color: #fff;
    position: absolute;
    top: 8px;
    right: 8px;
}
.login_icon{
    font-size: 12px;
    color: #fff;
    margin-right: 3px;
}
.login_title_txt{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 36px;
    font-weight: 100;
    color: #fff;
}
small{
    font-size: 65%;
}
</style>
