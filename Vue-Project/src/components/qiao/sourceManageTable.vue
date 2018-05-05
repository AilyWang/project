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
      <tr height="28">
        <td>1</td>
        <td><input type="checkbox"></td>
        <td>夏普空气净化器xxxxccc</td>
        <td>2103</td>
        <td>KC-W200SW</td>
        <td>1399.00</td>
        <td></td>
        <td>
          <span class="edit">编辑</span>
          <span class="delete">删除</span>
        </td>
      </tr>
    </table>
</template>

<script>
    export default {
        name: "sourceManageTable"
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
          color:#fff;
          border-radius: 2px;
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
