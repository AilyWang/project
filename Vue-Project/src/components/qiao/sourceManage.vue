<template>
  <div>
    <ul class="source_list">
      <li class="add">
        新增
      </li>
      <li class="edit">
        编辑
      </li>
      <li class="functionMenu">
        删除
      </li>
      <li class="moduleCode">
        查询
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
        color:#fff;
        border-radius: 2px;
        margin:0 2px;
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
