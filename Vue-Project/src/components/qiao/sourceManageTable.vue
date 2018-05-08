<template>
    <table cellpadding="0" cellspacing="0" class="source_table">
      <tr height="28">
        <th></th>
        <th><input type="checkbox"></th>
        <th>商品名称</th>
        <th>商品编号</th>
        <th>规格型号</th>
        <th>销售单价</th>
        <th>完成率</th>
        <th>操作</th>
      </tr>
      <tr height="28" v-for="(p,index) in product">
        <td>{{index+1}}</td>
        <td><input type="checkbox"></td>
        <td>{{p.name}}</td>
        <td>{{p.num}}</td>
        <td>{{p.spec}}</td>
        <td>{{p.price}}</td>
        <td></td>
        <td>
          <span class="edit">
            <a href="javascript:;">编辑</a>
          </span>
          <span class="delete">
            <a href="javascript:;">删除</a>
          </span>
        </td>
      </tr>
    </table>
</template>

<script>
  import ProductApi from '../../api/ProductApi'
    export default {
      name: "sourceManageTable",
        data(){
          return{
            product:[]
          }
        },
        created(){
          ProductApi.getProductData((data)=>{
            this.product=data
          })
        }
    }
</script>

<style lang="scss" scoped>
  .source_table{
    font-size:12px;
    width:100%;
    tr{
      text-align: center;
      th{
        border-bottom:1px dotted #ccc;
        border-right:1px dotted #ccc;
      }
      td{
        border-bottom:1px dotted #ccc;
        border-right:1px dotted #ccc;
        span{
          display: inline-block;
          text-align: center;
          line-height: 22px;
          width:36px;
          height:22px;
          border-radius: 2px;
          a{
            color:#fff;
          }
        }
        .edit{
          background:#009688 ;
        }
        .delete{
          background-color: #FF5722;
        }
      }
    }
  }
</style>
