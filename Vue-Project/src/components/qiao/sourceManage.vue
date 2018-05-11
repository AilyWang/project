<template>
  <div>
    <ul class="source_list">
      <li class="add" @click="showAdd">
        <a href="javascript:;">新增</a>
      </li>
      <!--<li class="edit">-->
        <!--<a href="javascript:;">编辑</a>-->
      <!--</li>-->
      <!--<li class="functionMenu">-->
       <!--<a href="javascript:;">删除</a>-->
      <!--</li>-->
      <li class="moduleCode">
        <a href="javascript:;" @click="checkTip">查询</a>
      </li>
    </ul>
    <source-manage-table></source-manage-table>
    <!--<choice-information v-show="hidden"></choice-information>-->

    <add-shadow v-show="hidden"></add-shadow>
    <operate-tip v-show="check"></operate-tip>

  </div>
</template>

<script>
  import sourceManageTable from './sourceManageTable'
  // import choiceInformation from './choiceInformation'
  import addShadow from './addShadow'
  import operateTip from './operateTip'
  export default {
    name: "sourceManage",
    data(){
      return{
        hidden:false,
        check:false
      }
    },
    components:{
      sourceManageTable,
      // choiceInformation,
      addShadow,
      operateTip,
    },
    methods:{
      showAdd(){
        this.hidden=!this.hidden;
      },
      checkTip(){
        this.check=!this.hidden;
      }
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
