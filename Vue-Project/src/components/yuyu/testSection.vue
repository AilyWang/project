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
              <i v-if='i !== 0' class="icon iconfont icon-close"></i>
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
<<<<<<< HEAD
      <div :is='test_component_name'></div>
       <!--  <div class="tab-card" ><iframe src="http://demo.topjui.com/html/echarts/line.html" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe></div>
=======
        <div class="tab-card " >
          <system></system>
        </div>
        <div class="tab-card " >
          <source-manage></source-manage>
        </div>
       <!--  <div class="tab-card " >
          <user-management></user-management>
        </div>
        <div class="tab-card " >
          <department-management></department-management>
        </div> -->
     <!--    <div class="tab-card" ><iframe src="http://demo.topjui.com/html/echarts/line.html" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe></div>
>>>>>>> 9d437d5e59a16710545c9f547ad4e66992a8a4b0
        <div class="tab-card" ><iframe src="http://demo.topjui.com/html/echarts/bar.html" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe></div>
        <div class="tab-card" > <iframe src="http://demo.topjui.com/html/echarts/pie.html" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe></div>
          <div class="tab-card" ><iframe src="http://demo.topjui.com/html/echarts/radar.html" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe></div> -->
    </section>
  </section>
</template>
<script>
  import sourceManage from '../qiao/sourceManage'
  import system from '../systemhomes/systemsection'
  import UserManagement from '../../pages/InstantChat/UserManagement';
  import DepartmentManagement from '../../pages/InstantChat/DepartmentManagement'
  import {mapGetters,mapActions} from "vuex"
  export default {
      name: 'testSection',
      data(){
        return{
            isClick:true,
            tabsName: [],  
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
        UserManagement
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
          }
        },
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
