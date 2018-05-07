<template>
    <div class="header">
        <div class="header_l">
            <table>
                <tbody>
                    <tr>
                        <td class="header_quick">
                            <span><i class="iconfont icon-envira"></i></span>
                            EMIS快速开发平台
                        </td>
                        <td class="header_back">
                            <a href="javascript:;" class="l_btn_text"><i class="iconfont icon-chevron-circle-left"></i></a>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="header_td_bd header_td_bg">
                                            <a href="javascript:;" class="l_btn_text header_btn">
                                                <p><i class="iconfont icon-shezhi"></i></p>
                                                <p>平台设置</p>
                                            </a>
                                        </td>
                                        <td class="header_td_bd">
                                            <a href="javascript:;" class="l_btn_text header_btn">
                                                <p><i class="iconfont icon-edge"></i></p>
                                                <p>门户网站</p>
                                            </a>
                                        </td>
                                        <td class="header_td_bd">
                                            <a href="javascript:;" class="l_btn_text header_btn">
                                                <p><i class="iconfont icon-group"></i></p>
                                                <p>协同办公</p>
                                            </a>
                                        </td>
                                        <td class="header_td_bd">
                                            <a href="javascript:;" class="l_btn_text header_btn">
                                                <p><i class="iconfont icon-xing-square"></i></p>
                                                <p>流程中心</p>
                                            </a>
                                        </td>
                                        <td class="header_td_bd">
                                            <a href="javascript:;" class="l_btn_text header_btn">
                                                <p><i class="iconfont icon-wechat"></i></p>
                                                <p>即时聊天</p>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="header_r">
            <a href="javascript:;" class="l_btn_text">
                <span><i class="iconfont icon-user hd_set"></i></span>
                <span>topjui(TopJUI)前端框架</span>
                <span class="header_dropdown"></span>
            </a>
            <span class="header_coll"></span>
            <a href="javascript:;" class="l_btn_text l_user_set">
                <span><i class="iconfont icon-shezhi hd_set"></i></span>
                <span>设置</span>
                <span class="header_dropdown"></span>
                <div class="header_set_options">
                    <div class="setting_l"></div>
                    <div class="setting_r">
                        <span class="setting_r_emtry setting_r_person">
                            <a href="javascript:;" class="person_msg">
                                <span class="person_img"><i class="iconfont icon-icinfocircle"></i></span>
                                个人信息
                            </a>
                        </span>
                        <span class="setting_r_emtry setting_r_pw">
                            <a href="javascript:;" class="person_msg amend_paddword">
                                <span class="person_img"><i class="iconfont icon-key"></i></span>
                                修改密码
                            </a>
                        </span>
                    </div>
                </div>
            </a>
            <span class="header_coll"></span>
            <a href="javascript:;" class="l_btn_text l_user_set">
                <span><i class="iconfont icon-tree hd_set"></i></span>
                <span>主题</span>
                <span class="header_dropdown"></span>
                <span class="header_theme_options">
                    <!-- 这是主题的垂直滑动条 -->
                    <span class="theme_croll">
                        <span class="theme_croll_cont"></span>
                    </span>
                </span>
            </a>
            <span class="header_coll"></span>
            <a href="javascript:;" class="l_btn_text">
                <span><i class="iconfont icon-signout hd_set"></i></span>
                <span>注销</span>
                <span class="header_dropdown"></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name: "CommonHeader"
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 50px;
        background: #3c8dbc;
        color:#ffffff;
        text-align: center;
        font-size: 13px;
    }
    @media screen and (max-width:1280px){
        .header{
            overflow: hidden;
        }
    }
 
    .header .l_btn_text{
        display: inline-block;
        color: #fff;
        font-size: 13px;
    }
    table { 
        border-collapse: 0; 
        border-spacing: 0; 
    }
    .header_td_bd{
        border-right: 1px #367fa9 solid;
    }
    .header_td_bd:hover{
        background: #367fa9;
    }
    .header_td_bg{
        background: #367fa9;
    }
    .header_quick{
        background: #367fa9;
        padding: 0 5px;
        font-size: 20px;
        font-weight: 600;
        padding: 0 15px 0 10px;
    }
    .header_back{
        padding: 0 5px;
    }
    .header_l{
        float: left;
    }
    .header_btn{
        padding: 5px;
        margin: 0 5px;
        height: 40px;
    }
    .header_r{
        float: right;
        padding-right: 10px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 12px;
        vertical-align: middle;
    }
    .l_user_set{
        position: relative;
    }
    .header_r .l_btn_text{
        height: 28px;
        padding-left: 5px;
        padding-right: 2px;
        line-height: 28px;
        border-radius: 4px;
        margin-bottom: -3px;
    }
    .header_r .l_btn_text:hover{
        background: rgba(255, 255, 255, .4)
    }
    .header_coll{
        display: inline-block;
        width: 0;
        height: 12px;
        border-right: 2px solid #ffede5;
        margin-bottom: -1px;
    }
    .header_r .hd_set{
        font-size: 16px;
        vertical-align: baseline;
    }
    .header_dropdown{
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(../../assets/images/menu_arrows.png) no-repeat 0 center;
        margin-bottom: -3px;
    }
    .icon-envira{
        font-size: 24px;
        margin-right: 2px;
    }
    .icon-shezhi,.icon-edge,.icon-group,.icon-xing-square,.icon-wechat{
        font-size: 24px;
        vertical-align: -3px;
    }
    .icon-chevron-circle-left{
        font-size: 16px;
    }
    .header_set_options{
        display: none;
        position: absolute;
        left: 0;
        width: 120px;
        height: 70px;
        background: #f3f3f3;
        border: 1px solid #ccc;
        border-radius: 1px;
        box-shadow: 2px 2px 5px #ccc;
        position: absolute;
        left: 0;
    }
    .setting_l{
        width: 25%;
        height: 100%;
        border-right: 1px solid #ccc;
        float: left;
    }
    .setting_r{
        width: 75%;
        height: 100%;
        float: right;
        border-left: 1px solid #fff;
    }
    .setting_r_emtry{
        display: block;
        position: relative;
        z-index: 6;
        width: 95%;
        height: 34px;
        margin-left: 2px;
        margin-right: 2px;
    }
    .setting_r_pw{
        border-top: 1px solid #fff;
    }
    .person_msg{
        width: 110px;
        height: 25px;
        line-height: 25px;
        position: absolute;
        top: 3px;
        left: -34.5%;
        z-index: 9;
        text-align: left;
        color: #333;
        border: 1px solid transparent;
        border-radius: 3px;
    }
    .person_msg:hover{
        background: #e2e2e2;
        border-color: #c1c1c1;
    }
    .setting_r_person{
        border-bottom: 1px solid #ccc;
    }
    .person_img{
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-left: 4px;
        margin-right: 7px;
        vertical-align: text-top;
    }
    .icon-icinfocircle,.icon-key{
        font-size: 16px;
    }
</style>
