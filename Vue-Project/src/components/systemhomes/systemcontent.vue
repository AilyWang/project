<template>
    <div class="system_content">
        <div class="system_diamond">
            <system-diamond :bg-color="n.bgcolor" :icon-end="n.icon" v-for="(n, index) in diamandOne" :key="index">
                <span slot="num">{{n.number}}</span>
                <span slot="sec">{{n.content}}</span>
            </system-diamond>
        </div>
        <system-brief></system-brief>
        <system-echarts></system-echarts>
        <system-news></system-news>
    </div>
</template>
<script>
    import SystemDiamond from "./systemdiamond"
    import SystemNews from './systemnews'
    import SystemBrief from './systembrief'
    import SystemEcharts from './systemecharts'
    export default{
       data(){
           return {
               diamandOne:[
                   {
                       "icon":"xiaoxi",
                       "number":"5",
                       "content":"新消息",
                       "bgcolor":"#54ade8"
                   },
                   {
                       "icon":"renyuanguanli",
                       "number":"3",
                       "content":"新增人数",
                       "bgcolor":"#ff5722"
                   },
                   {
                       "icon":"users1",
                       "number":"3",
                       "content":"用户人数",
                       "bgcolor":"#009688"
                   },
                   {
                       "icon":"zhaopian",
                       "number":"31",
                       "content":"图片总数",
                       "bgcolor":"#5fb878"
                   },
                   {
                       "icon":"file",
                       "number":"13",
                       "content":"待审核文章",
                       "bgcolor":"#f7b824"
                   },
                   {
                       "icon":"wendang",
                       "number":"30",
                       "content":"文章总数",
                       "bgcolor":"#2f4056"
                   }
               ]
           }
       },
        components:{
            SystemDiamond,
            SystemNews,
            SystemBrief,
            SystemEcharts
        }
    }
</script>

<style>
.system_content{
    padding: 10px;
    min-height: 500px;
    background: #fff;
    margin-right: -5px;
    flex: 1;
    overflow-y: scroll;
}
.system_diamond{
    width: 100%;
}

.system_diamond::after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}
</style>

