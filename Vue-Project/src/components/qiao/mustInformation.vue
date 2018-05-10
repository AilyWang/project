<template>
  <div class="add_shadow" v-show="hidden">
    <div class="shadow_message">
      <div class="top">
        <i class="iconfont icon-plus"></i>
        <span>新增/编辑</span>
        <p>
          <a href="javascript:;"><i class="iconfont icon-next"></i></a>
          <a href="javascript:;"><i class="iconfont icon-home"></i></a>
          <a href="javascript:;"><i class="iconfont icon-close" @click="shadowHidden"></i></a>
        </p>
      </div>
      <div class="choose">
        <ul>
          <li><i class="iconfont icon-navicon" ></i><a href="http://localhost:8080/#/mustInformation">必填信息</a></li>
          <li><i class="iconfont icon-navicon"></i><a href="http://localhost:8080/#/choiceInformation">选填信息</a></li>
        </ul>
      </div>
      <!--<div :is="tabname"></div>-->
      <!--<add-shadow-optional-msg></add-shadow-optional-msg>-->
      <!--<add-shadow-msg-form></add-shadow-msg-form>-->
      <div class="Msg">
        <form action="" class="detail_message">
          <p class="basicMsg">
            <span>基本信息</span>
          </p>
          <div style="margin-top: 10px" class="product_name">
            <label>商品名称</label><input type="text" v-model="product.name">
          </div>
          <div class="product_quality">
            <p class="left">
              <label>产品质量</label>
              <input type="radio" name="comments" value="好" v-model="product.quality"><span>好</span>&nbsp;&nbsp;
              <input type="radio"  name="comments" value="不好" v-model="product.quality"><span>不好</span>&nbsp;&nbsp;
              <input type="radio"  name="comments" value="很好" v-model="product.quality"><span>很好</span>&nbsp;&nbsp;
            </p>
            <p class="right">
              <label class="trait">特征</label>
              <input type="checkbox" value="物美" v-model="product.trait"><span>物美</span>&nbsp;&nbsp;
              <input type="checkbox" value="价廉" v-model="product.trait"><span>价廉</span>&nbsp;&nbsp;
              <input type="checkbox" value="性优" v-model="product.trait"><span>性优</span>&nbsp;&nbsp;
              <input type="checkbox" value="很好" v-model="product.trait"><span>很好</span>&nbsp;&nbsp;
            </p>
          </div>
          <div>
            <label>商品描述</label><input type="text" name="desc" v-model="product.describe">
          </div>
          {{product.trait}}
        </form>
      </div>
      <div class="foot">
        <p>
          <a href="http://localhost:8080/#/choiceInformation"><i class="iconfont icon-plus"></i>&nbsp;&nbsp;<span class="save">选填</span></a>
          <a href="javascript:;" @click="shadowHidden"><i class="iconfont icon-close"></i>&nbsp;&nbsp;<span class="close">关闭</span></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mustInformation",
      data(){
        return{
          hidden:true,
          product:{

          },
          quality:""
        }
      },
      methods:{
        shadowHidden(){
          this.hidden=false;
        },
        save(){

        }
      }
    }

</script>

<style lang="scss" scoped>
  .add_shadow{
    position:absolute;
    left:0;
    top:0;
    background:rgba(0,0,0,.2);
    width:100%;
    height:100%;
    /*width:100%;*/
    /*height:800px;*/
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
            a{
              color: #a9b0b6;
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
    .Msg{
      height:375px;
      .detail_message{
        .basicMsg{
          position:relative;
          height:30px;
          border-bottom:1px solid #f9f9f9;
          span{
            display: inline-block;
            width:70px;
            text-align: center;
            background: #fff;
            position:absolute;
            left:20px;
            top:20px;
          }
        }
        .product_name{
          input{
            width:575px;
            height:28px;
            background: #fff3f3;
            border:1px solid #ffdede;
            border-radius: 2px;
          }
        }
        div{
          padding-left:55px;
          padding-top:10px;
          padding-bottom:10px;
          label{
            color:#a9b0b6;
            display: inline-block;
            width:60px;
          }
        }
        input[name="comments"]{
          margin-right:3px;
          vertical-align: middle;
        }
        input[name="desc"]{
          width:722px;
          height:70px;
          border:1px solid #f0f0f0;
          border-radius: 2px;
        }
      }
      .product_quality{
        height:40px;
        .left{
          float: left;
        }
        .right{
          float: right;
          padding-right:50px;
          .trait{
            width:30px;
          }
          input{
            vertical-align: middle;
            margin-right:3px;
          }
        }
      }
    }
  }

</style>
