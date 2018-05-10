<template>
    <div class="home_header">
        <ul class="home_option_list">
            <li class="home_option_hd">
                <a href="javascript:;" class="house_hd">
                    <span class="system_home"><i class="iconfont icon-home system_iconfont"></i></span>
                    <span class="system_home_text">系统首页</span>
                </a>
            </li>
            <li class="home_option_hd hd_oprate">
                <table style="border-collapse:0">
                    <tr>
                        <td class="system_hd_td">
                            <span class="band_system"><i class="iconfont icon-home system_iconfont"></i></span>
                        </td>
                        <td class="system_hd_td">
                            <span><i class="iconfont icon-refresh1 system_iconfont"></i></span>
                        </td>
                        <td class="system_hd_td">
                            <span><i class="iconfont icon-close system_iconfont"></i></span>
                        </td>
                        <td class="system_hd_td">
                            <span><i class="iconfont icon-desktop system_iconfont"></i></span>
                        </td>
                        
                    </tr>
                </table>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:[
            "iconFont"
        ]
    }
</script>
<style>
.home_header{
    width: 100%;
    height: 35px;
    background: #f3f3f3;
    font-size: 12px;
    font-weight: 600;
}
.home_option_hd{
    display: inline-block;
    height: 100%;
    margin-right: 5px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.house_hd{
    display: block;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-top: 3px solid #3c8dbc;
    background: linear-gradient(to bottom, #f8f8f8 0%, #f9f9f9 70%, #fff 100%);
    padding: 0 15px;
    height: 35px;
    line-height: 32px;
    position: relative;
    color: #575765;
}
.system_home{
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    color: #575765;
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -8px;
}
.system_iconfont{
    font-size: 16px;
    font-weight: 100;
}
.system_home_text{
    display: inline-block;
    padding-left: 15px;
}
.hd_oprate{
    float: right;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-right: 0;
    border-left-color: #fff;
}
.system_hd_td{
    height: 35px;
    padding: 0 4px;
}
.band_system{
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    color: #575765;
}
</style>

