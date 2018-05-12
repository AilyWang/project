<template>
    <div class="login_push">
        <button class="login_but login_entry" type="button">
            <span class="but_box"><i class="iconfont icon-checkcircle but_icon but_success"></i></span>
            登录
        </button>
        <button class="login_but login_reset">
            <span class="but_box"><i class="iconfont icon-close but_icon"></i></span>
            重置
        </button>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
.login_push{
    width: 100%;
    text-align: center;
}
.login_but{
    display: inline-block;
    padding: 8px 22px;
    border: 1px solid;
    vertical-align: top;
    font-size: 16px;
    color: #fff;
    border-radius: 3px;
}
.login_entry{
    border-color: #4cae4c;
    background: #5cb85c;
    margin-right: 4px;
}
.login_reset{
    border-color: #d43f3a;
    background: #d9534f;
}
.but_box{
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 2px;
}
.but_icon{
    font-size: 16px;
    color: #fff;
}
.but_success{
    font-size: 14px;
}
</style>
