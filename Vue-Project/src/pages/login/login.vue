<template>
    <div class="login_bg">
        <div class="login_box">
            <login-title></login-title>
            <login-content></login-content>
        </div>
    </div>
</template>
<script>
    import LoginTitle from "../../components/login/logintitle"
    import LoginContent from "../../components/login/logincontent"
    export default {
        components:{
            LoginTitle,
            LoginContent
        }
    }
</script>
<style>
.login_bg{
    width: 100%;
    height: 100%;
    background: url(../../assets/images/login/loginBg.jpg) no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login_box{
    max-width: 500px;
    height: 400px;
}
@media screen and (min-width: 500px){
    .login_box {
        left: 50%;
        margin-left: -250px;
    }
    .login_box {
        width: 100%;
        max-width: 500px;
        height: 400px;
        position: absolute;
        top: 50%;
        margin-top: -200px;
    }
}
</style>
