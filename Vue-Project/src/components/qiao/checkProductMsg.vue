<template>
  <div>
    <div class="checkMessage" v-show="tg">
      <div class="foot">
        <p>
          <!--<a href="javascript:;"><i class="iconfont icon-plus"></i>&nbsp;&nbsp;<span class="save">保存</span></a>-->
          <a href="javascript:;"  @click="hiddenProduct"><i class="iconfont icon-close"></i>&nbsp;&nbsp;<span class="close">关闭</span></a>
        </p>
      </div>
      <div class="Msg">
        <form action="" class="detail_message">
          <p class="basicMsg">
            <span>基本信息</span>
          </p>
          <div style="margin-top: 10px" class="product_name">
            <label>商品名称</label><input type="text" v-model="productData[fun].name">
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
            <label>商品描述</label><input type="text" name="desc" v-model="productData[fun].describe" @blur="sendMsg">
          </div>
          <!--{{product}}-->
        </form>
      </div>
      <div class="Msg2 two">
        <form action="" class="detail_message">
          <p class="basicMsg">
            <span>扩展信息</span>
          </p>
          <div style="margin-top: 10px" class="product_name">
            <label>所属机构</label><input type="text" class="affiliation" v-model="productData[fun].instit"><span class="show_orga" @click="showOrga"><img src="../../assets/images/downArrow.jpg"></span>
            <ul class="organization" v-show="agency">
              <li v-for="(p,index) in allDepartment" @click="choose(index)">{{p.department}}</li>
            </ul>
          </div>

          <div style="margin-top: 10px" class="product_name">
            <label>商家日期</label><input type="text" v-model="productData[fun].date"><span><img src="../../assets/images/calendar.jpg"></span>
          </div>
          <div style="margin-top: 10px" class="product_name">
            <label>规格型号</label><input type="text" v-model="productData[fun].spec"><span @click="showStyle"><img src="../../assets/images/downArrow.jpg"></span>
            <ul class="style" v-show="sizeStyle">
              <li v-for="(n,index) in specifications" @click="check(index)">{{n.title}}</li>
            </ul>
          </div>
          <div style="margin-top: 10px" class="product_name">
            <label>销售单价</label><input type="text" v-model="productData[fun].price"><span><img src="../../assets/images/upArrow.jpg" style="padding-top: 2px" @click="addPrice">
        <img src="../../assets/images/downArrow.jpg" @click="reducePrice"></span>
          </div>
          <!--<div style="margin-top: 10px" class="product_name thumbnail">-->
          <!--<label>产品缩略图</label><input type="text"><span><img src="../../assets/images/upload.jpg" style="float: left;padding-left:5px">上传图片</span>-->
          <!--</div>-->
          <div class="note_infor">
            <!--{{}}-->
            <label>备注信息</label><input type="text" name="desc" v-model="productData[fun].note">
          </div>
        </form>
      </div>
   </div>
  </div>
</template>

<script>
  export default {
    name: "checkProductMsg",
    props:['productData','fun'],
    data(){
      return{
        tg:true,
        product:{
          checkedTrait:[]
        },
        agency:false,
        sizeStyle:false,
        chooseMsg:{},
        specifications:[
          {
            "title":"KC-W200SW"
          },
          {
            "title":"白色LR-1688BY-2"
          },
          {
            "title":"银灰色BCD-339WBA 339"
          }
        ],
        allDepartment:[
          {
            "department":"总经理部"
          },
          {
            "department":"人力资源部"
          },
          {
            "department":"财务部"
          }
        ]
      }
    },
    methods:{
      // fun(i){
      //   // console.log(i);
      // },
      hiddenProduct(){
        this.tg=!this.tg;
      },
      sendMsg(){
        this.$store.commit('product',this.product)
      },
      showOrga(){
        $(".organization").toggle();
      },
      showStyle(){
        this.sizeStyle=!this.sizeStyle
      },
      showManagerPerson(){
        $(".one").toggleClass("add").parent().children(".manager").toggle(300);
      },
      packUp(){
        $(".companyName").toggleClass("pack_up").parent().children(".department").toggle(300);
        console.log($(".company").children(".department"));
      },
      check(index){
        this.chooseMsg.asd=this.specifications[index].title;
        this.sizeStyle=!this.sizeStyle
      },
      choose(index){
        this.chooseMsg.depart=this.allDepartment[index].department;
        this.agency=!this.agency
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foot{
    position:absolute;
    left: 960px;
    top: 460px;
    z-index: 300;
    height:40px;
    padding-right:5px;
    line-height: 40px;
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
  .checkMessage{
   width:878px;
    /*margin: 0 auto;*/
    .Msg{
      padding-top: 100px;
      position:absolute;
      left:200px;
      top:0;
      width:100%;
      height:100%;
      background: rgba(0,0,0,.2);
      /*height:375px;*/
      /*margin:0 auto;*/
      .detail_message{
        width:878px;
        /*margin:0 auto;*/
        background: #fff;
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
            border:1px solid #f0f0f0;
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

    .Msg2{
      position:absolute;
      z-index:100;
      /*width:878px;*/
      /*margin:0 auto;*/
      /*height:375px;*/
      /*background:#fff;*/
      .detail_message{
        /*width:878px;*/
        /*margin:0 auto;*/
        height:275px;
        background: #fff;
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
          positipon:relative;
          float:left;
          .organization{
            overflow-y:auto ;
            height:160px;
            display: none;
            background: #fff;
            position:absolute;
            width:288px;
            border:1px solid #f0f0f0;
            left:115px;
            border-top:none;
            li{
              padding:5px 0;
              border-bottom:1px dotted #ccc;
              &:hover{
                background:#ccc;
              }
            }
            .company{
              list-style-position: inside;
              span{
                border:none;
                height:10px;
                background: url("../../assets/images/menu_arrows.png");
                background-position: 65px;
              }
              .pack_up{
                background-position: 36px;
              }
              .department{
                li{
                  padding-left:10px;
                  list-style-position: inside;
                  span{
                    display: inline-block;
                    border:none;
                    height:10px;
                    background: url("../../assets/images/menu_arrows.png");
                    background-position: 32px;
                  }
                  .add{
                    background-position:left 60px;
                  }
                  .manager{
                    display: none;
                    li{
                      span{
                        display: inline-block;
                        border:none;
                        height:10px;
                        background: url("../../assets/images/panel_tools.png");
                        background-position:left 12px;
                      }
                    }
                  }
                  &:hover{
                    background: #cccccc;
                  }
                }
              }
            }
          }
          .style{
            width:288px;
            height:156px;
            left:115px;
            position:absolute;
            background: #fff;
            border:1px solid #f0f0f0;
            li{
              padding:5px 0;
              border-bottom:1px dotted #ccc;
              &:hover{
                background:#ccc;
              }
            }
          }
          input{
            width:270px;
            height:27px;
            border:1px solid #f0f0f0;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            border-right: none;
            vertical-align: middle;
          }
          span{
            display: inline-block;
            width:18px;
            height:27px;
            line-height: 27px;
            text-align: center;
            background: #f7f7f7;
            vertical-align: middle;
            border:1px solid #f0f0f0;
            img{
              margin:0 auto;
              padding-top:9px;
            }
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
        }
        .thumbnail{
          input{
            width:600px;
          }
          span{
            display: inline-block;
            width:92px;
          }
        }
        .note_infor{
          clear: both;
        }
      }
    }
    .two{
      width: 878px;
      position: absolute;
      left: 200px;
      top:235px;
    }
  }

</style>
