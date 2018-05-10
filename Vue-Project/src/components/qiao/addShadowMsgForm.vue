<template>
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
          <input type="radio"  name="comments" value="很好" v-model="product.quality"><span>很好</span>&nbsp;
        </p>
        <p class="right">
          <label class="trait">特征</label>
          <input type="checkbox" v-model="product.checkedTrait" value="物美"><span>物美</span>&nbsp;&nbsp;
          <input type="checkbox" v-model="product.checkedTrait" value="价廉"><span>价廉</span>&nbsp;&nbsp;
          <input type="checkbox" v-model="product.checkedTrait" value="性优"><span>性优</span>&nbsp;&nbsp;
          <input type="checkbox" v-model="product.checkedTrait" value="很好"><span>很好</span>&nbsp;&nbsp;
        </p>
      </div>
      <div>
        <label>商品描述</label><input type="text" name="desc" v-model="product.describe" @blur="sendMsg">
      </div>
      <!--{{product}}-->
    </form>
  </div>
</template>

<script>
    export default {
        name: "addShadowMsgForm",
        data(){
          return{
            product:{
              checkedTrait:[]
            }
          }
        },
        methods:{
          sendMsg(){
            // console.log(this)
            this.$store.commit('product',this.product)
          }

        }
    }
</script>

<style lang="scss" scoped>
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
</style>
