<template>
    <div>
        <common-header></common-header>
        <common-aside></common-aside>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import CommonHeader from "../../components/commons/commonHeader"
    import CommonAside from "../../components/commons/commonAside"
    import CommonFooter from "../../components/commons/commonFooter"

    export default {
        name: "PublickPage",
        components:{
            CommonHeader,
            CommonFooter,
            CommonAside
        }
    }
</script>

<style scoped>

</style>
