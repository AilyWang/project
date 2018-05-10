<template>
    <div class="system_echart">
        <div class="system_echart_box" v-for="(q, index) in echart" :key="index">
            <div class="system_echart_cont">
                <div class="system_echart_head">{{q.title}}</div>
                <div class="system_echart_list">
                    <ul :class="q.class" style="width: 100%;height: 418px;padding: 9px 15px;">
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from "../../../node_modules/echarts/dist/echarts.min"
    export default {
       data(){
           return {
               echart:[
                   {
                       "title":"某地区蒸发量和降水量",
                       "class":"system_echart_list_water"
                   },
                   {
                       "title":"未来一周气温变化",
                       "class":"system_echart_list_sky"
                   },
                   {
                       "title":"某站点访问客户来源",
                       "class":"system_echart_list_source"
                   }
               ]
           }
       },
       mounted(){
           this.watersheets();
           this.skysheets();
           this.sourcesheet();
       },
       methods:{
           watersheets(){
                $(document).ready(function(){
                    var myChart = echarts.init(document.getElementsByClassName("system_echart_list_water")[0]);
                    var option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            x: 'right', // 'center' | 'left' | {number},
                            data: ['蒸发量', '降水量']
                        },
                        // toolbox: {
                        //     show: true,
                        //     feature: {
                        //         dataView: { show: true, readOnly: false },
                        //         magicType: { show: true, type: ['line', 'bar'] },
                        //         restore: { show: true },
                        //         saveAsImage: { show: true }
                        //     }
                        // },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '蒸发量',
                                type: 'bar',
                                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                                markPoint: {
                                    data: [
                                        { type: 'max', name: '最大值' },
                                        { type: 'min', name: '最小值' }
                                    ]
                                },
                                markLine: {
                                    data: [
                                        { type: 'average', name: '平均值' }
                                    ]
                                }
                            },
                            {
                                name: '降水量',
                                type: 'bar',
                                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                                markPoint: {
                                    data: [
                                        { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                                        { name: '年最低', value: 3, xAxis: 11, yAxis: 3 }
                                    ]
                                },
                                markLine: {
                                    data: [
                                        { type: 'average', name: '平均值' }
                                    ]
                                }
                            }
                        ]
                    };

                    myChart.setOption(option);
                })
           },
           skysheets(){
               $(document).ready(function(){
                    var myChart = echarts.init(document.getElementsByClassName("system_echart_list_sky")[0]);
                    let option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            x: 'right',
                            data:['最高气温','最低气温']
                        },
                        xAxis:  {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一','周二','周三','周四','周五','周六','周日']
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} °C'
                            }
                        },
                        series: [
                            {
                                name:'最高气温',
                                type:'line',
                                data:[11, 11, 15, 13, 12, 13, 10],
                                markPoint: {
                                    data: [
                                        {type: 'max', name: '最大值'},
                                        {type: 'min', name: '最小值'}
                                    ]
                                },
                                markLine: {
                                    data: [
                                        {type: 'average', name: '平均值'}
                                    ]
                                }
                            },
                            {
                                name:'最低气温',
                                type:'line',
                                data:[1, -2, 2, 5, 3, 2, 0],
                                markPoint: {
                                    data: [
                                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                                    ]
                                },
                                markLine: {
                                    data: [
                                        {type: 'average', name: '平均值'},
                                        [{
                                            symbol: 'none',
                                            x: '90%',
                                            yAxis: 'max'
                                        }, {
                                            symbol: 'circle',
                                            label: {
                                                normal: {
                                                    position: 'start',
                                                    formatter: '最大值'
                                                }
                                            },
                                            type: 'max',
                                            name: '最高点'
                                        }]
                                    ]
                                }
                            }
                        ]
                    };
                    myChart.setOption(option);
               });
           },
           sourcesheet(){
               $(document).ready(function(){
                    var myChart = echarts.init(document.getElementsByClassName("system_echart_list_source")[0]);
                    let option = {
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                        },
                        series : [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius : '55%',
                                center: ['50%', '60%'],
                                data:[
                                    {value:335, name:'直接访问'},
                                    {value:310, name:'邮件营销'},
                                    {value:234, name:'联盟广告'},
                                    {value:135, name:'视频广告'},
                                    {value:1548, name:'搜索引擎'}
                                ],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };

                    myChart.setOption(option);
               });
           }
       }
    }
</script>
<style>
.system_echart{
    width: 100%;
    margin-top: 10px;
}
.system_echart::after{
    content:"";
    display: block;
    height: 0;
    clear: both;
    overflow: hiddle;
    visibility: hiddle;
}
.system_echart_box{
    width: 33.33333%;
    float: left;
    padding-right: 10px;
}
.system_echart_box:last-child{
    padding-right: 0;
}
.system_echart_cont{
    width: 100%;
    height: 100%;
}
.system_echart_list_water,.system_echart_list_sky,.system_echart_list_source{
    border-bottom: 1px solid #e6e6e6;
}
.system_echart_head{
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
    color: #000;
    border-left: 5px solid #009688;
    background: #f2f2f2;
}
.system_echart_list{
    width: 100%;
    background: #fff;
    font-size: 14px;
    border: 1px solid #e6e6e6;
    border-left: 5px solid #f2f2f2;
    border-bottom: 0;
}
</style>

