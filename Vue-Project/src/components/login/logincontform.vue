<template>
    <div class="login_cont_form">
        <form>
            <login-input></login-input>
            <login-but></login-but>
        </form>
    </div>
</template>
<script>
    import LoginInput from "./logincontinput"
    import LoginBut from "./logincontbut"
    export default {
       data(){
           return {
               formsg:[
                    {
                        "icon":"user",
                        "type":"text",
                        "value":"用户名"
                    },
                    {
                        "icon":"user",
                        "type":"text",
                        "value":"密码"
                    }
                ]
           }
                // :input-val="n.value" :input-type="n.type" :form-icon="n.icon" v-for="(n,index) in formsg" :key="index"
       },
        components: {
            LoginInput,
            LoginBut
        }
    }
</script>
<style>
.login_cont_form{
    padding: 36px 44px;
}
.login_cont_form form {
    width: 100%;
}
</style>
