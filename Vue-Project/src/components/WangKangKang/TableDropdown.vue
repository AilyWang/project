<template>
   <div class="from">
     <table class="tab_top_" border="1" cellspacing="0" cellpadding="0">
       <tr>
         <td></td>
         <td><input type="checkbox"></td>
         <td>员工号</td>
         <td>姓名</td>
         <td>性别</td>
         <td>电话</td>
         <td>手机</td>
         <td>电子邮箱</td>
         <td>所属机构</td>
         <td>职务</td>
         <td>用户组</td>
       </tr>
       <tr v-for="(n, index) in add" :key="index" style="color: #969696;">
         <td>{{n.num}}</td>
         <td><input type="checkbox"></td>
         <td v-for="(m, index) in n.add" :key="index">{{m}}</td>
       </tr>
     </table>

   </div>
</template>

<script>
  import {baseData} from "../../api/index"
 export default {
   data(){
     return {
       add:[]
     }
   },
   mounted(){
     this.show()
   },
   methods: {
     show(){
       const baseDatas = new baseData();
       baseDatas.getData((data) =>{
         this.add = data
       });
     }
   }
 }
</script>

<style>
  .tab_top_{
    border-color:#dddddd;
    border-collapse:collapse;
    margin-top:20px;
    position: absolute;
    top:115px;
    left: 500px;
    background: white;
  }
  .tab_top_ tr td{
    border-right:1px dashed #dddddd;
    padding:10px 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
  .tab_top_ tr td:nth-child(1){
    padding:10px 20px;
  }
  .tab_top_tr:nth-child(1) td:hover{
    background:#e7eaec ;
  }
 .tab_top_ tr:hover{
   background:#e7eaec ;
 }
  :hover tab_top_ tr td{
    color: #e7eaec;
  }
</style>
