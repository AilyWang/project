<template>
  <div class="chat_box" v-show="chat">
    <div class="chat_head">
      <div class="person">
        <span>曾小贤</span>
        <span><i class="iconfont icon-close" @click="showChat"></i></span>
      </div>
      <div class="signature">
        <input type="text" value="在深邃的编码世界，做一枚轻盈的纸飞机">
      </div>
      <p>
        <i class="iconfont icon-user"></i>
        <i class="iconfont icon-users1"></i>
        <i class="iconfont icon-xiaoxi"></i>
      </p>
    </div>
    <ul class="chat_section">
      <li><img src="../../assets/images/chatAarrow.jpg" alt="" @click="personShow"><span>同学</span></li>
      <ul class="layim-list" v-show="chat_hidden">
        <li class="layim">
          <img src="http://tp1.sinaimg.cn/1571889140/180/40030060651/1">
          <div class="chat_person">
            <p>珊珊</p>
            <p>这些都是测试数据，实际使用请严格按照该格式返回</p>
          </div>
        </li>
        <li class="layim">
          <img src="http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg">
          <div class="chat_person">
            <p>Z_子晴</p>
            <p>这些都是测试数据，实际使用请严格按照该格式返回</p>
          </div>
        </li>
        <li class="layim">
          <img src="http://tp2.sinaimg.cn/1833062053/180/5643591594/0">
          <div class="chat_person">
            <p>珊珊</p>
            <p>这些都是测试数据，实际使用请严格按照该格式返回</p>
          </div>
        </li>
      </ul>
      <li><img src="../../assets/images/chatAarrow.jpg" alt=""><span>同事</span></li>
      <li><img src="../../assets/images/chatAarrow.jpg" alt=""><span>家人</span></li>
    </ul>
    <div class="chat_foot">
      <div class="chat_search" v-show="chat_sea">
        <input type="text" class="chat_searchFrame"><label for=""><i class="iconfont icon-close" @click="chatHid"></i></label>
      </div>
      <div class="layimSoft" v-show="version">
        <div class="top">
          <span>关于 LayIM</span>
          <i class="iconfont icon-close" @click="showVersion"></i>
        </div>
        <div id="" class="layui-layer-content">
         版本： 3.7.6><br>
          <span>版权所有：</span><a href="http://layim.layui.com" target="_blank">layim.layui.com</a>
        </div>
        <div class="foot"><a href="javascript:;"  @click="showVersion">确定</a></div>
      </div>
      <i class="iconfont icon-search" @click="showSea"></i>
      <i class="iconfont icon-plus"></i>
      <i class="iconfont icon-information-solid" @click="ss"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "chat",
        data(){
          return{
            chat_hidden:false,
            chat_sea:false,
            chat:true,
            version:false
          }
        },
        methods:{
          personShow(){
            this.chat_hidden=!this.chat_hidden;
          },
          showSea(){
            this.chat_sea=!this.chat_sea;
          },
          chatHid(){
            this.chat_sea=!this.chat_sea;
          },
          showChat(){
            this.chat=!this.chat;
          },
          showVersion(){
            this.version=!this.version;
          },
          ss(){
            this.version=!this.version;
          }
        },
        mounted(){
          $('.chat_searchFrame').focus(function () {
            $(this).css('outline','none')
          })
        }
    }
</script>

<style lang="scss" scoped>
  .chat_box{
    /*margin:0 auto;*/
    background: url("http://demo.ewsd.cn/static/plugins/layui/css/modules/layim/skin/3.jpg");
    background-repeat: no-repeat;
    position:absolute;
    top:100px;
    left:370px;
    width:260px;
    .chat_head{
      padding-top:10px;
      padding-left:10px;
      padding-right:10px;
      height:100px;
      width:100%;
      background:#ccc;
      font-size:16px;
      .person{
        span:first-child{
          float:left;
        }
        .icon-close{
          float:right;
          font-size:18px;
        }
      }
      .signature{
        input{
          margin-top:8px;
          float: left;
          width:240px;
          height:22px;
          background:#ccc;;
          border: 1px solid transparent;
        }
      }
      p{
        clear: both;
        padding-top: 5px;
        i{
          float: left;
          padding-right:60px;
          &:last-child{
            padding:0;
            font-weight:bold;
          }
        }
      }
    }
    .chat_section{
      background:rgba(255,255,255,.9);;
      padding-top:10px;
      height:360px;
      li{
        height:28px;
        line-height:28px;
        padding-left:10px;
        font-size:16px;
        img{
          display: inline-block;
          padding-top:5px;
          float: left;
          padding-right:5px;
        }
        span{
          float:left;
        }
      }
      .layim-list{
        .layim{
          margin:7px 0;
          font-size: 14px;
          display: flex;
          height:52px;
          .chat_person{
            p:first-child{
              float: left;
              font-size: 16px;
            }
            p:last-child{
              float: left;
              width:200px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          img{
            width:40px;
            height:40px;
            border-radius: 50%;
            margin-top:5px;
          }
        }
      }
    }
    .chat_foot{
      position:relative;
      width:100%;
      height:37px;
      line-height:37px;
      background:#ccc;
      padding-left:10px;
      .layimSoft{
        background: #fff;
        position:absolute;
        left:-3px;
        top:-200px;
        width:262px;
        height:180px;
        .top{
          height:43px;
          padding-left: 10px;
          height: 42px;
          line-height: 42px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          background-color: #eee;
          border-radius: 2px 2px 0 0;
          span{
            float: left;
            padding-right:140px;
          }
        }
        .layui-layer-content{
          float:left;
          span{
            padding-left:50px;
          }
        }
        .foot {
          clear: both;
          text-align: right;
          padding: 0 15px 12px;
          pointer-events: auto;
          user-select: none;
          -webkit-user-select: none;
            a{
              text-align: center;
              display: inline-block;
              width:50px;
              line-height:30px;
              background-color: #1E9FFF;
              color:#fff;
              border-radius: 5px;
            }
        }
      }
      i{
        float: left;
        padding-right:80px;
        &:last-child{
          padding:0;
        }
      }
      .chat_search{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        background: #ddd;
        input{
          float: left;
          border:none;
          height:37px;
          background: #ddd;
          width:210px;
        }
        .icon-close{
          font-size:14px;
          font-weight:normal;
        }
      }
    }
  }

</style>
