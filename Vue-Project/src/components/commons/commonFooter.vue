<template>
    <div class="footer">
        <div class="foot_flex">
            <span class="foot_l">当前用户：TopJUI前端框架</span>
            <span class="foot_cont">
                版权所有 © 2014-2017 
                <a href="javascript:;" class="foot_firm">深圳易网时代信息技术有限公司</a>
            </span>
            <span class="foot_r">
                企业正式版 V2.3(20161205)
            </span>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
.footer{
    width: 100%;
    background: #fff;
    border-top: 1px solid #d3d3d3;
    color: #000;
    font-size: 12px;
    padding: 7px 5px;
    z-index: 12;
}
.foot_flex{
    display: flex;
    justify-content: space-between;
}
.foot_firm{
    color: #333;
}
.foot_firm:hover{
    text-decoration: underline;
}
</style>
