<template>
   <div class="section_left">
     <table class="tab_top" border="1" cellspacing="0" cellpadding="0">
         <tr class="tr_top">
           <td><input type="checkbox"></td>
           <td>机构名称</td>
         </tr>
     </table>
     <div class="section_bottom">
         <table class="tab_bottom" border="1" cellspacing="0" cellpadding="0">
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>深圳易网时代信息技术有限公司</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>总经理部</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>总经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>党委书记</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>副总经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>副总经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>综合办公室</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>部门经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>部门副经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>工会主管</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>文秘</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>人力资源部</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>部门经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>部门副经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>薪酬主管</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>人力主管</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>培训主管</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>财务部</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>部门经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>部门副经理</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>会计</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>出纳</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>项目管理部</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>长沙项目部</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>北京项目部</td>
           </tr>
           <tr style="color:#444444;">
             <td><input type="checkbox"></td>
             <td>深圳项目部</td>
           </tr>
         </table>
     </div>
   </div>
</template>

<script>

</script>

<style>
  body{
    position: relative;
    overflow-y:hidden ;
    background: #efefef;
  }
  .section_left{
    position: absolute;
    left: 225px;
    top:90px;
    background: white;
    height:560px;
    overflow-y:scroll;
  }
  .section_bottom{
    height: 1000px;
    width:235px;
    overflow-x: hidden;
    overflow-y: hidden;

  }
  .tab_top{
    border-color:#dddddd;
    border-collapse:collapse;
    position:fixed;
    width: 234px;
    background: white;
    z-index:999;
  }
  .tab_top tr td{
    border-right:1px dashed #dddddd;
    padding:10px 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
  .tab_top tr td:nth-child(2){
    padding:10px 64px;
  }
  .tab_bottom{
    border-color:#dddddd;
    border-collapse:collapse;
    margin-top: -12px;
  }
  .tab_bottom tr td{
    border-right:1px dashed #dddddd;
    padding:10px 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
  .tab_bottom tr td:nth-child(2){
    padding:10px 40px;
  }
  .tab_top tr:hover{
    background: #e7eaec;
  }
  .tab_bottom tr:hover{
    background: #e7eaec;
  }

 </style>
