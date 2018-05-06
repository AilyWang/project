<template>
    <div>
        <common-header></common-header>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import CommonHeader from "../../components/commons/commonHeader"
    import CommonFooter from "../../components/commons/commonFooter"
    export default {
        name: "PublickPage",
        components:{
            CommonHeader,
            CommonFooter
        }
    }
</script>

<style scoped>

</style>
