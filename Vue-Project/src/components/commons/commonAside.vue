<template>
    <div class="aside">
        
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
        <!-- {{num}} -->
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
                // console.log(x,y)
                Test.getAside((data)=>{
                    this.asideData = data[this.num]
                })
            }
        }
        
       
     

        
    }
</script>

<style scoped>
  @media screen and (max-width:640px){
        .aside{
            display: none;
        }
    }
.aside{
    width: 225px;
    height: 100%;
    /* height: auto; */
    /* min-height: 700px; */
    margin-right: 5px;
    overflow: hidden;
    height: auto;
    background: #222d32;
}
.aside .iconfont{
    font-size: 16px;
}
.aside_panel_setting{
    color: #fff;
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
}
.panel_list_li{
    width: 100%;
}
.panel_list_li:hover{
    background: #1e282c;
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
.panel_setting_text,i{
    color: #fff;
}
</style>
