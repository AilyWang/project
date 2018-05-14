<template>
    <div class="add_shadow" v-show="hidden">
      <div class="shadow_message">
        <div class="top">
          <i class="iconfont icon-plus"></i>
          <span>新增/编辑</span>
          <p>
            <a href="javascript:;"><i class="iconfont icon-next"></i></a>
            <a href="javascript:;"><i class="iconfont icon-home"></i></a>
            <a href="javascript:;" @click="shadowHidden"><i class="iconfont icon-close"></i></a>
          </p>
        </div>
        <div class="choose">
          <ul>
            <li @click="changetab(1)"><i class="iconfont icon-navicon" ></i>必填信息</li>
            <li @click="changetab(2)"><i class="iconfont icon-navicon"></i>选填信息</li>
          </ul>
        </div>
        <div :is="tabname"></div>
        <!--<add-shadow-optional-msg></add-shadow-optional-msg>-->
        <!--<add-shadow-msg-form></add-shadow-msg-form>-->
        <div class="foot">
          <p>
            <a href="javascript:;"><i class="iconfont icon-plus"></i>&nbsp;&nbsp;<span class="save">保存</span></a>
            <a href="javascript:;"><i class="iconfont icon-close"></i>&nbsp;&nbsp;<span class="close" @click="shadowHidden">关闭</span></a>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  import addShadowMsgForm from './addShadowMsgForm'
  import addShadowOptionalMsg from './addShadowOptionalMsg'
    export default {
        name: "addShadow",
        components:{
            addShadowMsgForm,
            addShadowOptionalMsg
        },
        data(){
          return{
            hidden:true,
            tab:1,
            tabname:"addShadowMsgForm",
          }
        },
        methods:{
          shadowHidden(){
            this.hidden=!this.hidden;
          },
          changetab(index){
            if(index == 1){
              this.tab = 1;
              this.tabname ="addShadowMsgForm";
            }else{
              this.tab = 2;
              this.tabname = "addShadowOptionalMsg";
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  .add_shadow{
    position:absolute;
    left:0;
    top:0;
    background:rgba(0,0,0,.3);
    width:100%;
    height:100%;
    /*width:100%;*/
    /*height:1000px;*/
    .shadow_message{
      width:878px;
      height:495px;
      background: #fff;
      position:absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
      border-radius:5px;
      box-shadow: 0px -3px 0px #3c8dbc;
      .top{
        height:35px;
        line-height: 35px;
        padding:0 5px;
        border-bottom:1px solid #f1f2f3;
        background: #f9f9f9;
        .icon-plus{
          font-size:13px;
          font-weight:normal;
        }
        span{
          font-size:12px;
          color: #575765;
        }
        p{
          float:right;
          .iconfont{
            font-size:12px;
            color:#404040;
            padding-left:3px;
            background: #f9f9f9;
          }
        }
      }
      .choose{
        height:35px;
        background: #f3f3f3;
        border-bottom: 2px solid #ececec;
        padding-top: 2px;
        ul{
          li{
            cursor: pointer;
            width:103px;
            float: left;
            text-align: center;
            background: #f5f5f5;
            height:31px;
            line-height: 31px;
            margin-left:5px;
            border:1px solid #eaeaea;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom: none;
            .iconfont{
              font-size:12px;
              font-weight: normal;
              line-height: 31px;
              margin-right:5px;
            }
          }
        }
      }

    }
    .foot{
      height:40px;
      padding-right:5px;
      line-height: 40px;
      border-top: solid 1px #ddd;
      p{
        float:right;
        a{
          display: inline-block;
          width:70px;
          color:#fff;
          background: #FF5722;
          height:30px;
          line-height: 30px;
          text-align: center;
          border-radius: 3px;
          margin-top:10px;
          &:first-child{
            background: brown;
          }
          .iconfont{
            font-size:12px;
          }
        }
      }
    }
  }
</style>
