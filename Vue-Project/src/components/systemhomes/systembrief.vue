<template>
    <div class="system_brief">
        <p class="system_brief_p">致力于打造既美观实用又能快速开发的后台管理前端框架，解决传统EasyUI的性能和功能问题！ 纯HTML调用功能组件，不用写JS代码的EasyUI，专注你的后端业务开发！</p>
        <p class="system_brief_p">基于成熟稳定的EasyUI框架开发，集丰富组件+强大功能+优异性能+精美界面+便捷开发于一身，适用于企业级信息管理系统或Web后台管理系统</p>
        <p class="system_brief_p"><span>框架下载：</span>
            <a href="javascript:;" class="super_link">http://www.topjui.com/download.html</a> 
            <span>动态演示：</span>
            <a href="javascript:;" class="super_link">http://demo.ewsd.cn/login</a>
            （整合JAVA SSHM，查看详细介绍）</p>
        <p class="system_brief_p"><span>联系我们：</span>  <span> QQ: </span> 251122361  <span> Iphone: </span> 0755-33942020  <span> Email: </span> service@ewsd.cn </p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                brief:[
                    
                    "",

                ]
            }
        }
    }
</script>
<style>
.system_brief{
    width: 100%;
    border-left: 5px solid #009688;
    padding: 15px;
    margin-top: 10px;
    background: #f2f2f2;
    text-align: left;
}
.system_brief_p{
    padding: 5px;
    font-size: 14px;
    color: #333;
}
.system_brief_p span{
    font-weight: 600;
    color: #000;
}
.super_link{
    color: #333;
}
.super_link:hover{
    text-decoration: underline;
    color: #777;
}
</style>
