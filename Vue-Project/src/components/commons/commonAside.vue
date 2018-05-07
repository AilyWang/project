<template>
    <div class="aside">
        <div class="aside_panel_setting">
            <div class="panle_setting_cont">
                <div class="panel_setting_label">
                    <i class="iconfont icon-shezhi setting_label"></i>
                </div>
                <div class="panel_setting_text">系统设置</div>
                <div class="panel_setting_dropdown">
                    <a href="javascript:;" class="setting_dp"></a>
                </div>
            </div>
            <ul class="panel_list">
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-cube"></i></span>
                        <span class="panel_cf">基础配置</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-lifering"></i></span>
                        <span class="panel_cf">资源管理</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-bookmark"></i></span>
                        <span class="panel_cf">分级字典</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-file"></i></span>
                        <span class="panel_cf">数据字典</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-link"></i></span>
                        <span class="panel_cf">常用链接</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-refresh1"></i></span>
                        <span class="panel_cf">初始缓存</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="aside_panel_setting">
            <div class="panle_setting_cont">
                <div class="panel_setting_label">
                    <i class="iconfont icon-user setting_label"></i>
                </div>
                <div class="panel_setting_text">用户管理</div>
                <div class="panel_setting_dropdown">
                    <a href="javascript:;" class="setting_dp"></a>
                </div>
            </div>
            <ul class="panel_list">
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-sitemap"></i></span>
                        <span class="panel_cf">组织机构</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-user"></i></span>
                        <span class="panel_cf">用户信息</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-user-o"></i></span>
                        <span class="panel_cf">角色授权</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-group"></i></span>
                        <span class="panel_cf">会员管理</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="aside_panel_setting">
            <div class="panle_setting_cont">
                <div class="panel_setting_label">
                    <i class="iconfont icon-code setting_label"></i>
                </div>
                <div class="panel_setting_text">代码生成</div>
                <div class="panel_setting_dropdown">
                    <a href="javascript:;" class="setting_dp"></a>
                </div>
            </div>
            <ul class="panel_list">
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-book"></i></span>
                        <span class="panel_cf">生成代码</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="aside_panel_setting">
            <div class="panle_setting_cont">
                <div class="panel_setting_label">
                    <i class="iconfont icon-desktop setting_label"></i>
                </div>
                <div class="panel_setting_text">系统监控</div>
                <div class="panel_setting_dropdown">
                    <a href="javascript:;" class="setting_dp"></a>
                </div>
            </div>
            <ul class="panel_list">
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-list-alt"></i></span>
                        <span class="panel_cf">操作日志</span>
                    </a>
                </li>
                <li class="panel_list_li">
                    <a href="javascript:;" class="panel_base_config">
                        <span class="panel_cf panel_cf_label"><i class="iconfont icon-listul"></i></span>
                        <span class="panel_cf">异常日志</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
.aside{
    width: 225px;
    margin-right: 5px;
    overflow: hidden;
    background: #222d32;
    color: #fff;
    font-size: 12px;
}
.aside .iconfont{
    font-size: 16px;
}
.aside_panel_setting{
    width: 223px;
}
.panle_setting_cont{
    width: 223px;
    padding: 5px 5px 5px 20px;
    position: relative;
    border-left: 2px solid transparent;
    border-top: 1px solid #2c3b41;
}
.panel_setting_label{
    width: 16px;
    height: 16px;
    position: absolute;
    left: 14px;
    margin-top: -8px;
    top: 50%;
}
.setting_label{
    font-size: 16px;
}
.panel_setting_text{
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin-left: 17px;
}
.panel_setting_dropdown{
    width: 16px;
    height: 16px;
    background: url(../../assets/images/accordion_arrows2.png) no-repeat -16px 0;
    position: absolute;
    right: 5px;
    margin-top: -8px;
    top: 50%;
}
.panel_list{
    width: 225px;
    background: #2c3b41;
}
.panel_list_li{
    width: 100%;
}
.panel_base_config{
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    _line-height: 30px;
    color: #fff;
    padding-left: 36px;
}
.panel_cf{
    display: inline-block;
    vertical-align: middle;
}
.panel_cf_label{
    width: 16px;
    height: 16px;
    line-height: 16px;
    margin-right: 5px;
}
.icon-cube{
    font-size: 16px;
    color: #fff;
}
</style>
