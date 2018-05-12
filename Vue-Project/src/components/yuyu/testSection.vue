<template>
  <section class="test_section">
  	<nav class='test_section_nav'>
      <a href="#" class="moveClick click_previous" @click='click_previous()'>
        <i class="icon iconfont icon-previous"></i>
      </a>
      <div class='left_nav'>
    		<ul >
          <li calss='Click_Zzz' @click="changeTab(i)" v-for="(T,i) in tab">
            <!-- :class="{active:T.isActive}" 点击样式 -->
              <a  href="#"    >
                <i :class="'icon '+T.icon"></i>
                {{T.name}}
              <i @click='closeClose' v-if='i !== 0' class="icon iconfont icon-close "></i>

              </a>
          </li>

    		</ul>
      </div>
  		<div class='right_btn'>
  			<a href='#'>
                <i class="icon iconfont icon-home"></i>
  			</a>
  			<a href='#' @click='changeData()'>
                <i class="icon iconfont icon-refresh1"></i>
  			</a>
  			<a href='#'>
                <i class="icon iconfont icon-close"></i>
  			</a>
  			<a href='#'  class="win-fullscreen" @click='changeView()'>
                <i class="icon iconfont icon-desktop"></i>
  			</a>
  		</div>
        <a href="#" class="moveClick click_next" @click='click_next()'>
            <i class="icon iconfont icon-next"></i>
      </a>
  	</nav>
    <section class="test_section_content">
      <div :is='test_component_name'></div>
    </section>
  </section>
</template>
<script>
  import sourceManage from '../qiao/sourceManage'
  import system from '../systemhomes/systemsection'
  import UserManagement from '../../pages/InstantChat/UserManagement';
  import DepartmentManagement from '../../pages/InstantChat/DepartmentManagement'
  import Radar from "./moreChart/radar"
  import Pie from "./moreChart/pie"
  import Histgram from "./moreChart/histgram"
  import BrokenLine from "./moreChart/brokenLine"
  import TestTest from "./moreChart/TestTest"
  import {mapGetters,mapActions} from "vuex"
  export default {
      name: 'testSection',
      data(){
        return{
            isClick:true,
            tabsName: [],  
          isFull:true,
           tabsName: [],
            active: false ,
            isActive: true ,
            ulLeftNum : 0,
            countWidth:0,
            allLiWidth : 0,
            test_component_name:'system'
          }

      },
      components:{
        sourceManage,
        system,
        DepartmentManagement,
        UserManagement,
        Radar,
        Pie,
        Histgram,
        BrokenLine,
        TestTest
      },
      computed:mapGetters({
            tab:"getTab"
      }),
      updated(){
      },
      beforeupdated(){

      },
      mounted(){
        // this.tabsName = this.$store.state.counter.tabData
      },
      methods:{
        closeClose(){

        },
        closeTab(i){
          // console.log(i,$($('.left_nav .icon-close').parent().parent()[i]))
          // $($('.left_nav .icon-close').parent().parent()[i]).toggle()
          // console.log(i)
        },
        click_previous(){
            var ul = document.querySelectorAll('.left_nav ul')[0]
            var li = Array.from(ul.children);
            if(this.ulLeftNum === 0){
              this.ulLeftNum = 0
            }else{
              this.ulLeftNum+=li[0].offsetWidth
              ul.style.left = this.ulLeftNum + 'px';
            }
        },
        click_next(){
          var ul = document.querySelectorAll('.left_nav ul')[0];
          var left_nav_width = ul.parentNode.offsetWidth;
          var li = Array.from(ul.children);
          li.forEach((v,k)=>{
            this.allLiWidth+=v.offsetWidth+3
          })
          if((this.allLiWidth - left_nav_width)<0){
             ul.style.left = 0 + 'px';
          }else if((this.allLiWidth - left_nav_width)<(this.allLiWidth + this.ulLeftNum)){
              this.ulLeftNum-=li[0].offsetWidth
              ul.style.left = this.ulLeftNum + 'px';
          }else{
              ul.style.left = -(this.allLiWidth - left_nav_width) + 'px';
          }
        },
        changeTab(i){
          if(i === 0){
            this.test_component_name = 'system'
          }else if(i === 1){
            this.test_component_name = 'sourceManage'
          }else if(i === 2){
            this.test_component_name = 'DepartmentManagement'
          }else if(i === 3){
            this.test_component_name = 'UserManagement'
          }else if(i === 4){
            this.test_component_name = "BrokenLine"
          }else if(i === 5){
            this.test_component_name = "Histgram"
          }else if(i === 6){
            this.test_component_name = "Pie"
          }else if(i === 7){
            this.test_component_name = "Radar"
          }
        },
        tabsSwitch(tabIndex) {
            var tabCardCollection = document.querySelectorAll(".tab-card"),
                len = tabCardCollection.length;
            for(var i = 0; i < len; i++) {
                tabCardCollection[i].style.display = "none";
                this.tabsName[i].isActive = false;
            }
            this.tabsName[tabIndex].isActive = true;
            tabCardCollection[tabIndex].style.display = "block";
        }  ,
        // 刷新
        changeData(){
            $.get("Reboot.run", function (result) {
                console.log(result);
            })
            .done(function() {
                window.location.reload();
            });
        },
        // 全屏
  	    changeView(){
  	    	 if(this.isFull){
              this.exitFull()
              this.isFull = false;
           }else{
              this.requestFullScreen(document.documentElement)
              this.isFull = true;
           }
  	    },
      	// 进入全屏
  	    requestFullScreen(element) {
	        var requestMethod = element.requestFullScreen || //W3C
	        element.webkitRequestFullScreen ||    //Chrome等
	        element.mozRequestFullScreen || //FireFox
	        element.msRequestFullScreen; //IE11
	        if (requestMethod) {
	            requestMethod.call(element);
	        }else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
	            var wscript = new ActiveXObject("WScript.Shell");
	            if (wscript !== null) {
	                wscript.SendKeys("{F11}");
	            }
	        }
  	    },
  	    //退出全屏
        exitFull() {
	        var exitMethod = document.exitFullscreen || //W3C
	        document.mozCancelFullScreen ||    //Chrome等
	        document.webkitExitFullscreen || //FireFox
	        document.webkitExitFullscreen; //IE11
	        if (exitMethod) {
	            exitMethod.call(document);
	        }else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
	            var wscript = new ActiveXObject("WScript.Shell");
	            if (wscript !== null) {
	                wscript.SendKeys("{F11}");
	            }
	        }
    	 }
      },
      watch:{
          tabsName: function (x,y){
              console.log(x,y)
            
          }
      }

  }
</script>
<style lang='scss' scoped=''>
 .test_section{
    flex:1;
    display:flex;
   flex-direction:column;
    background: #eee;
    overflow: hidden;
    flex-direction:column;
   overflow: hidden;
    .test_section_nav{
      .moveClick{
        /*display:none;*/
      }
        font-size:12px;
        background:rgb(243,243,243);
        border-bottom:1px solid #ddd;
        display:flex;
        align-items: center;
        i{
          font-size: 14px;
          color:rgb(127,127,127)
        }
      .left_nav{
          flex:1;
        overflow: hidden;
        ul{
            width:3700px;
            position:relative;
            display:flex;
            li{
               margin-right:3px;
              a{
                display:block;
                line-height:30px;
                padding:0 5px;
                border:1px solid #ddd;
                border-bottom:none;
                border-radius:6px 6px 0 0;
                .icon-close{
                  font-size:10px;
                  color: #575757;
                }
              }
              .active{
                background:rgb(252,252,252);
                border-top:3px solid #3c8dbc;
                .icon-close:hover{
                  background:rgb(222,222,222);
                }
              }
            }
          }

      }
       a:hover{
            background:rgb(222,222,222);
            color:#000;
       }
      .right_btn{
          width:100px;
          height:36px;
          display:flex;
          align-items:center;
          /*!*background:#eef;*!*/
          border-left:1px solid #ddd;
          a{
            flex:1;
            padding:4px 0;
            color:buleviolet;
            color:#f06;
          }
      }
    }
    .test_section_content{
      overflow:hidden;
      flex:1;
      overflow-y: scroll;
      .tab-card{
        height:100%;
        display:none;
         #layui-layer3{
        display:none;
      }
      }

    }
}
</style>
