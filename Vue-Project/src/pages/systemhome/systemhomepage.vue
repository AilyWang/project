<template>
<<<<<<< HEAD:Vue-Project/src/pages/systemhome/systemhomepage.vue
    <div class="app">
        <common-header></common-header>
        <system-moddle></system-moddle>
=======
    <div class="app" @ievent = "ievent">
        <common-header></common-header>
        <common-section></common-section>
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910:Vue-Project/src/pages/publicpage/publickPage.vue
        <common-footer></common-footer>
    </div>
</template>

<script>
    import CommonHeader from "../../components/commons/commonHeader"
    import CommonSection from "../../components/commons/commonSection"
    import CommonFooter from "../../components/commons/commonFooter"
<<<<<<< HEAD:Vue-Project/src/pages/systemhome/systemhomepage.vue
    import SystemModdle from "../../components/systemhomes/systemmoddle/systemmodule"
=======
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910:Vue-Project/src/pages/publicpage/publickPage.vue
    export default {
        name: "PublickPage",
        components:{
            CommonHeader,
            CommonFooter,
<<<<<<< HEAD:Vue-Project/src/pages/systemhome/systemhomepage.vue
            SystemModdle
=======
            CommonSection
        },
        methods:{
            ievent(...data){
                console.log('allData:',data);// data为包含传过来所有数据的数组，第一个元素是对象，第二个元素是字符串
            }
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910:Vue-Project/src/pages/publicpage/publickPage.vue
        }
    }
</script>

<style scoped>
<<<<<<< HEAD:Vue-Project/src/pages/systemhome/systemhomepage.vue
.app{
    height: 100%;
    display: flex;
    flex-direction: column;
}
=======
    .app{
        height:100%;
        min-width: 640px;
        display: flex;
        flex-direction: column;
    }
   
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910:Vue-Project/src/pages/publicpage/publickPage.vue
</style>
