<template>
        <div class="diamond_msg_one">
            <a class="diamond_msg_one_cont">
                <div class="diamond_msg_l" :style="'background:'+bgColor">
                    <span><i :class="'iconfont icon-'+iconEnd+' diamond_icon'"></i></span>
                </div>
                <div class="diamond_msg_r">
                    <span class="diamond_num" ><slot name="num"></slot></span>
                    <span class="diamond_xiaoxi"><slot name="sec"></slot></span>
                </div>
            </a>
        </div>
</template>
<script>
    export default{
        props:[
            "bgColor",
            "iconEnd"
        ]
    }
</script>
<style>


.diamond_msg_one{
    float: left;
    width: 16.666666667%;
    padding-right: 10px;
    border-radius: 4px;
}
.diamond_msg_one_cont{
    display: block;
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    border-radius: 5px;
}
.diamond_msg_one:last-child{
    padding-right: 0;
}
.diamond_msg_one_cont::after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}
.diamond_msg_l{
    width: 40%;
    height: 100%;
    padding: 22px 0;
    text-align: center;
    float: left;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.diamond_msg_r{
    padding-top: 22px;
    float: left;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.diamond_msg_r{
    width: 60%;
    height: 100%;
}
.diamond_icon{
    font-size: 42px;
    color: #fff;
    position: absolute;
    left: 0px;
    bottom: 0px;
    transition: all .5s;
}
.span_icon{
    display: inline-block;
    width: 42px;
    height: 42px;
    line-height: 42px;
    position: relative;
}
.diamond_icon:hover{
    transform: rotateZ(360deg);
}

.diamond_num{
    display: block;
    font-size: 26px;
    text-align: center;
}
.diamond_xiaoxi{
    display: block;
    text-align: center;
    font-size: 16px;
}
</style>
