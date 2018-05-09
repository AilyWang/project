<template>
    <div class="shadow">
      <div class="tip" v-show="hidden">
        <div class="title">
          <span>操作提示</span>
          <a href="javascript:;" class="close"><i class="iconfont icon-close" @click="hiddenTip"></i></a>
        </div>
        <div class="content">
          <img src="../../assets/images/tip.jpg" alt="">
          <span>请先选择要操作的数据</span>
        </div>
        <div class="sure">
          <p @click="hiddenTip">确定</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "operateTip",
        data(){
         return{
           hidden:true
         }
        },
        methods:{
          hiddenTip(){
            this.hidden=false;
          }
        }
    }
</script>

<style lang="scss" scoped>
  .shadow{
    width:100%;
    height:600px;
    background:rgba(0,0,0,.3);
    position:relative;
    .tip{
      width:300px;
      height:160px;
      border-radius:3px;
      background: #fff;
      position:absolute;
      left:0;
      right:0;
      top:0;
      bottom:0;
      margin:auto;
      .title{
        line-height:35px;
        border-bottom:1px solid #f0f0f0;
        span{
          padding-left:10px;
          color: #575765;
        }
        .close{
          float: right;
          padding-right:10px;
          .iconfont{
            color: #575765;
            font-size: 12px;
          }
        }

      }
      .content{
        height:90px;
        img{
          float: left;
        }
        span{
          display: inline-block;
          padding-top:13px;
        }
      }
      .sure{
        height:35px;
        border-top:1px solid #f0f0f0;
        p{
          width:50px;
          text-align:center;
          height: 20px;
          line-height: 20px;
          background: #FF5722;
          color: #fff;
          border-radius: 5px;
          margin:0 auto;
          margin-top:5px;
          cursor:pointer;
        }
      }
    }
  }
</style>
