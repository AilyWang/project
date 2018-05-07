<template>
  <section class="test_section">
  	<nav class='test_section_nav'>
       <a href="#" class="click_previous">
            <i class="icon iconfont icon-previous"></i>
      </a>

      <div class='left_nav'>
  		<ul >
  		  <li>
          <a>
            <i class="icon iconfont icon-home"></i>
            系统首页
          </a>
        </li>
        <li>
          <a>
            <i class="icon iconfont icon-home"></i>
            系统首页
            <i class="icon iconfont icon-close"></i>
          </a>
        </li> <li>
          <a>
            <i class="icon iconfont icon-home"></i>
            系统首页
          </a>
        </li>
        <li>
          <a>
            <i class="icon iconfont icon-home"></i>
            系统首页
            <i class="icon iconfont icon-close"></i>
          </a>
        </li> <li>
          <a>
            <i class="icon iconfont icon-home"></i>
            系统首页
          </a>
        </li>
        <li>
          <a>
            <i class="icon iconfont icon-home"></i>
            系统首页
            <i class="icon iconfont icon-close"></i>
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
                <i class="icon iconfont icon-eye"></i>
  			</a>
  		</div>
        <a href="#" class="click_next">
            <i class="icon iconfont icon-next"></i>
      </a>
  	</nav>
  	<section class="test_section_content">
  	</section>
  </section>
</template>
<script>
  export default {
      name: 'testSection',
      data(){
        return{
          isFull:true
        }
      },
      methods:{
        changeData(){
            $.get("Reboot.run", function (result) {
                console.log(result);
            })
            .done(function() {
                window.location.reload();
            });
        },
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

  }
</script>
<style lang='scss' scoped=''>
 .test_section{
    flex:1;
    display:flex;
    background: #eee;
   overflow: hidden;
   flex-direction:column;
    .test_section_nav{
      font-size:12px;
        background:rgb(243,243,243);
        display:flex;
        align-items: center;
        i{
          font-size: 14px;
        }
      .left_nav{
          flex:1;
        overflow: hidden;
        ul{
            width:3700px;
            display:flex;
            li{
               margin-right:3px;
              a{
                display:block;
                line-height:34px;
                padding:0 5px;
                border:1px solid #ddd;
                border-bottom:none;
                border-radius:6px 6px 0 0;
                .icon-close{
                  font-size:10px;
                  color: #575757;
                }
              }
            }
          }

      }
       a:hover{
            background:#fff;
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
    }
}
</style>
