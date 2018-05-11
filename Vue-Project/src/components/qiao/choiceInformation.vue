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
            <span>扩展信息</span>
          </p>
          <div style="margin-top: 10px" class="product_name">
            <label>所属机构</label><input type="text" class="affiliation"><span class="show_orga" @click="showOrga"><img src="../../assets/images/downArrow.jpg"></span>
            <ul class="organization">
              <li class="company">
                <span @click="packUp" class="companyName"></span>深圳易网时代信息技术有限公司
                <ul class="department">
                  <li >
                    <span class="one"@click="showManagerPerson"></span>总经理部
                    <ul class="manager">
                      <li><span></span>总经理</li>
                      <li><span></span>党委书记</li>
                      <li><span></span>副总经理</li>
                    </ul>
                  </li>
                  <li><span></span>综合办公室</li>
                  <li><span></span>人力资源部</li>
                  <li><span></span>财务部</li>
                  <li><span></span>项目管理部</li>
                </ul>
              </li>
            </ul>
          </div>

          <div style="margin-top: 10px" class="product_name">
            <label>商家日期</label><input type="text"><span><img src="../../assets/images/calendar.jpg"></span>
          </div>
          <div style="margin-top: 10px" class="product_name">
            <label>规格型号</label><input type="text" v-model="asd"><span @click="showStyle"><img src="../../assets/images/downArrow.jpg"></span>
            <ul class="style" v-show="sizeStyle">
              <li v-for="(n,index) in specifications" @click="check(index)">{{n.title}}</li>
            </ul>
          </div>
          <div style="margin-top: 10px" class="product_name">
            <label>销售单价</label><input type="text" v-model="price"><span><img src="../../assets/images/upArrow.jpg" style="padding-top: 2px" @click="addPrice">
      <img src="../../assets/images/downArrow.jpg" @click="reducePrice"></span>
          </div>
          <!--<div style="margin-top: 10px" class="product_name thumbnail">-->
            <!--<label>产品缩略图</label><input type="text"><span><img src="../../assets/images/upload.jpg" style="float: left;padding-left:5px">上传图片</span>-->
          <!--</div>-->
          <div class="note_infor">
            <label>备注信息</label><input type="text" name="desc">
          </div>
        </form>
      </div>
      <div class="foot">
        <p>
          <a href="javascript:;"><i class="iconfont icon-plus"></i>&nbsp;&nbsp;<span class="save">保存</span></a>
          <a href="javascript:;" @click="shadowHidden"><i class="iconfont icon-close"></i>&nbsp;&nbsp;<span class="close">关闭</span></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "choiceInformation",
      data(){
        return{
          hidden:true,
          sizeStyle:false,
          asd:"",
          price:"",
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
          ]
        }
      },
      methods:{
        shadowHidden(){
          this.hidden=false;
        },
        showOrga(){
          $(".organization").toggle();
        },
        showStyle(){
          this.sizeStyle=!this.sizeStyle
        },
        addPrice(){
          this.price++;
        },
        reducePrice(){
          this.price--;
        },
        showManagerPerson(){
          $(".one").toggleClass("add").parent().children(".manager").toggle(300);
        },
        packUp(){
          $(".companyName").toggleClass("pack_up").parent().children(".department").toggle(300);
          console.log($(".company").children(".department"));
        },
        check(index){
          this.asd=this.specifications[index].title;
        }
      },
      mounted(){
          $(".department li:not(ul)").click(function () {
            var index=$(this).index();
            console.log(index)
            $(".affiliation").val($(".department li").eq(index));
            // console.log($(".department li").eq(index).text())
          })
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
    li{
      cursor: pointer;
    }
    .Msg{
      height:375px;
      background:#fff;
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
              /*padding-left: 10px;*/
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
  }

</style>
