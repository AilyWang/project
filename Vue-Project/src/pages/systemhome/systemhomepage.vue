<template>
    <div class="app">
        <common-header></common-header>
        <system-moddle></system-moddle>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import CommonHeader from "../../components/commons/commonHeader"
    import CommonFooter from "../../components/commons/commonFooter"
    import SystemModdle from "../../components/systemhomes/systemmoddle/systemmodule"
    export default {
        name: "PublickPage",
        components:{
            CommonHeader,
            CommonFooter,
            SystemModdle
        }
    }
</script>

<style scoped>
.app{
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
