<template>
    <div class="login_content">
        <login-form></login-form>
    </div>
</template>
<script>
    import LoginForm from "./logincontform"
    export default {
        components:{
            LoginForm
        }
    }
</script>
<style>
.login_content{
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 100%;
    max-width: 500px;
    background: rgba(255, 255, 255, .5);
}

</style>
