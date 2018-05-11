<template>
    <div class="app" @ievent = "ievent">
        <system-moddle></system-moddle>
    </div>
</template>

<script>
    import SystemModdle from "../../components/systemhomes/systemmoddle/systemmodule"
    export default {
        name: "PublickPage",
        components:{
            SystemModdle,
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
    height: 100%;
    display: flex;
    flex-direction: column;
}
    .app{
        height:100%;
        min-width: 640px;
        display: flex;
        flex-direction: column;
    }
   
</style>
