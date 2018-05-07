<template>
    <div class="app">
        <common-header></common-header>
        <common-section></common-section>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import CommonHeader from "../../components/commons/commonHeader"
    import CommonSection from "../../components/commons/commonSection"
    import CommonFooter from "../../components/commons/commonFooter"
    export default {
        name: "PublickPage",
        components:{
            CommonHeader,
            CommonFooter,
            CommonSection
        }
    }
</script>

<style scoped>
    .app{
        height:100%;
        min-width: 640px;
        display: flex;
        flex-direction: column;
    }
   
</style>
