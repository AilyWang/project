<template>
  <div>
    <ul class="source_list">
      <li class="add">
        <a href="javascript:;">新增</a>
      </li>
      <li class="edit">
        <a href="javascript:;">编辑</a>
      </li>
      <li class="functionMenu">
       <a href="javascript:;">删除</a>
      </li>
      <li class="moduleCode">
        <a href="javascript:;">查询</a>
      </li>
    </ul>
    <source-manage-table></source-manage-table>
  </div>
</template>

<script>
  import sourceManageTable from './sourceManageTable'
    export default {
        name: "sourceManage",
        components:{
          sourceManageTable
        }
    }
</script>

<style lang="scss" scoped>
    ul li{
      list-style: none;
    }
    .source_list{
      width:100%;
      height:100%;
      float:right;
      height: 37px;
      padding:3px 2px;
      background:#fafafa;
      li{
        text-align: center;
        line-height: 30px;
        float:left;
        height:30px;
        width:56px;
        font-size:12px;
        border-radius: 2px;
        margin:0 2px;
        a{
          color:#fff;
        }
      }
      .add{
        background: #009688;
      }
      .edit{
        background: #1E9FFF;
      }
      .functionMenu{
        background: #FFB800;
      }
      .moduleCode{
        background: #FF5722;
      }
    }
</style>
