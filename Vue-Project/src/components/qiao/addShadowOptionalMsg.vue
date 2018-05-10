<template>
  <div class="Msg">
    <form action="" class="detail_message">
      <p class="basicMsg">
        <span>扩展信息</span>
      </p>
      <div style="margin-top: 10px" class="product_name">
        <label>所属机构</label><input type="text" class="affiliation" v-model="chooseMsg.depart"><span class="show_orga" @click="showOrga"><img src="../../assets/images/downArrow.jpg"></span>
        <ul class="organization" v-show="agency">
          <!--<li class="company">-->
            <!--<span @click="packUp" class="companyName"></span>深圳易网时代信息技术有限公司-->
            <!--<ul class="department">-->
              <!--<li >-->
                <!--<span class="one"@click="showManagerPerson"></span>总经理部-->
                <!--<ul class="manager">-->
                  <!--<li><span></span>总经理</li>-->
                  <!--<li><span></span>党委书记</li>-->
                  <!--<li><span></span>副总经理</li>-->
                <!--</ul>-->
              <!--</li>-->
              <!--<li><span></span>综合办公室</li>-->
              <!--<li><span></span>人力资源部</li>-->
              <!--<li><span></span>财务部</li>-->
              <!--<li><span></span>项目管理部</li>-->
            <!--</ul>-->
          <!--</li>-->
          <li v-for="(p,index) in allDepartment" @click="choose(index)">{{p.department}}</li>
        </ul>
      </div>

      <div style="margin-top: 10px" class="product_name">
        <label>商家日期</label><input type="text" v-model="chooseMsg.date"><span><img src="../../assets/images/calendar.jpg"></span>
      </div>
      <div style="margin-top: 10px" class="product_name">
        <label>规格型号</label><input type="text" v-model="chooseMsg.asd"><span @click="showStyle"><img src="../../assets/images/downArrow.jpg"></span>
        <ul class="style" v-show="sizeStyle">
            <li v-for="(n,index) in specifications" @click="check(index)">{{n.title}}</li>
        </ul>
      </div>
      <div style="margin-top: 10px" class="product_name">
        <label>销售单价</label><input type="text" v-model="chooseMsg.price"><span><img src="../../assets/images/upArrow.jpg" style="padding-top: 2px" @click="addPrice">
      <img src="../../assets/images/downArrow.jpg" @click="reducePrice"></span>
      </div>
      <!--<div style="margin-top: 10px" class="product_name thumbnail">-->
        <!--<label>产品缩略图</label><input type="text"><span><img src="../../assets/images/upload.jpg" style="float: left;padding-left:5px">上传图片</span>-->
      <!--</div>-->
      <div class="note_infor">
        <label>备注信息</label><input type="text" name="desc" v-model="chooseMsg.annotation">
      </div>
    </form>
    <!--{{num}}-->
  </div>

</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    name: "addShadowMsgForm",
    computed:mapGetters({
      num:"getProduct"
    }),
    data(){
      return{
        agency:false,
        sizeStyle:false,
        chooseMsg:{},
        // asd:"",
        // price:"",
        // depart:"",
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
      showOrga(){
        $(".organization").toggle();
      },
      showStyle(){
        this.sizeStyle=!this.sizeStyle
      },
      addPrice(){
        this.chooseMsg.price++;
      },
      reducePrice(){
        this.chooseMsg.price--;
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
</style>
