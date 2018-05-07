<template>
    <span class="theme_options_r_cont">
        <span class="person_img theme_color" :style="'color:'+iconColor"><i class="iconfont icon-tree"></i></span>
        <slot></slot>
    </span>
</template>
<script>
    export default {
        props:[
            "iconColor"
        ]
        
    }
</script>
<style>
    .person_img{
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-left: 4px;
        margin-right: 7px;
        vertical-align: text-top;
    }
    .theme_options_r_cont{
        display: inline-block;
        width: 175px;
        height: 26px;
        line-height: 26px;
        margin-left: -29px;
        border-radius: 3px;
        text-align: left;
        color: #333;
        border: 1px solid transparent;
    }
    .theme_options_r_cont:hover{
        background: #e2e2e2;
        border-color: #c1c1c1;
    }
    .icon-tree{
        font-size: 16px;
    }
    .theme_color{
        vertical-align: -1px;
    }
    
</style>

