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
    import {Login} from "../../api/login"
    export default {
        data(){
            return {
                form:[]
            }
        },
        components:{
            LoginTitle,
            LoginContent
        },
        mounted(){
            this.input();
        },
        methods:{
            input(){
                $(".login_entry").click(() => {
                    //获取用户输入的账号和密码
                    var name = $(".login_username").val();
                    var pass = $(".login_userpass").val();
                   //获取express中模拟的账户信息
                    const LoginData = new Login();
                    LoginData.getLogin((data) => {
                        this.form = data[0];
                        if(name == "" || pass == ""){
                            alert("请输入用户名和密码!!");
                        } else if(this.form.name == name && this.form.pass == pass){
                            this.$router.push("");
                        } else {
                            alert("正输入正确的用户名和密码！");
                        }
                    })
                })
            }
            // input(){
            //     $(".login_entry").click(() => {
            //         var name = $(".login_name").val();
            //         var pass = $(".login_pass").val();
            //         const LoginData = new Login();
            //         LoginData.getLogin((data) => {
            //             this.form = data[0];
            //             console.log(name, pass);
            //         })
            //     })
            // }
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
