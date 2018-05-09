<template>
    <div class="app" @ievent = "ievent">
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
        },
        methods:{
            ievent(...data){
                console.log('allData:',data);// data为包含传过来所有数据的数组，第一个元素是对象，第二个元素是字符串
            }
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
