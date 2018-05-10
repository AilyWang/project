<template>
    <div class="aside">
<<<<<<< HEAD
        
      <div class="aside_panel_setting" v-for='(e,i) in asideData'>
        <div @click='showMeun(i)'  class="panle_setting_cont">
          <div class="panel_setting_label">
            <i :class="e[0].left_ico"></i>
          </div>
          <div class="panel_setting_text">{{e[0].tit}}</div>
          <div class="panel_setting_dropdown">
            <a href="javascript:;" class="setting_dp"></a>
          </div>
        </div>
        <ul class="panel_list" >
            <common-aside-li :send="e[0].timer"></common-aside-li>
        </ul>
      </div>
    </div>
</template>
<script>
    import CommonAsideLi from "./commonAsideLi"
    import Test from '../../api/test'
    import {mapGetters,mapActions} from "vuex"
       
    export default{
        components:{
            CommonAsideLi
        },
        computed:mapGetters({
            num:"getNum"
        }),
        created(){

             Test.getAside((data)=>{
                this.asideData = data[this.num]
              })

        },
        mounted(){
        },
        beforeupdate(){
        },
        data(){
          return {
            asideData:[],
            n:0
          }
        },
        methods: {
            showMeun(i){
                $($('.panle_setting_cont')[i]).siblings().toggle("slow");
                $($('.panel_setting_dropdown')[i]).toggleClass("panel_setting_dropdown_active");
            }
        },
         created(){
            
          Test.getAside((data)=>{
            this.asideData = data[this.num]
          })
      },
        watch:{
            num: function (x,y){
                console.log(x,y)
                Test.getAside((data)=>{
                    this.asideData = data[this.num]
                })
            }
        }
        
       
=======
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
        
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
    }
</script>

<style scoped>
<<<<<<< HEAD
  @media screen and (max-width:640px){
        .aside{
            display: none;
        }
    }
.aside{
    width: 225px;
<<<<<<< HEAD
    height: 100%;
    /* height: auto; */
    /* min-height: 700px; */
=======
    margin-right: 5px;
    overflow: hidden;
    height: auto;
>>>>>>> d4764c492be8c99f6b5c83e022bda3caabe6d910
    background: #222d32;
=======
.aside{
    width: 225px;
    height: auto;
    height: 500px;
    min-height: 500px;
    background: #222d32;
    position: absolute;
    left: 0;
    top: 50px;
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
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
<<<<<<< HEAD
=======
    background: url(../../assets/images/accordion_arrows2.png) no-repeat -16px 0;
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
    position: absolute;
    right: 5px;
    margin-top: -8px;
    top: 50%;
}
<<<<<<< HEAD
.panel_setting_dropdown{
    background: url(../../assets/images/accordion_arrows2.png) no-repeat -16px 0;
}
.panel_setting_dropdown_active{
    background: url(../../assets/images/accordion_arrows2.png) no-repeat 0 0;
}
.panel_list{
    width: 225px;
    background: #2c3b41;
    display: none;
=======
.panel_list{
    width: 225px;
    background: #2c3b41;
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
}
.panel_list_li{
    width: 100%;
}
<<<<<<< HEAD
.panel_list_li:hover{
    background: #1e282c;
}
=======
>>>>>>> 3e2bb6c58159282d04475c3d14e5cda734371f63
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
