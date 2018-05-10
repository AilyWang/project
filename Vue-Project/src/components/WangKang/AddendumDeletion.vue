<template>
  <div class="box_section">
    <span class="btn_left">
      <i class="iconfont icon-shezhi kang"></i>
      <span class="btn_text"  @click="dialogTableVisible = true">新增</span>
    </span>
    <el-dialog title="新增/编辑" :visible.sync="dialogTableVisible">
      <i class="iconfont icon-navicon kang" style="position: absolute; left: 0;top: 20px;"></i>
      <el-form :label-position="labelPosition" label-width="100px">
        <el-form-item label="体系代码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="层级 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="父级机构 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="名称 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="代码 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="状态 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="是否可展开 ">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <el-button type="success"  @click="resetForm('dynamicValidateForm')" style="margin-left:500px;">保存</el-button>
      <el-button type="danger"  @click="dialogTableVisible = false">关闭</el-button>
    </el-dialog>
    <span class="btn_in">
      <i class="iconfont icon-pencil kang"></i>
      <span class="btn_text"  @click="centerDialogVisible = true">编辑</span>
    </span>
    <el-dialog title="新增/编辑" :visible.sync="centerDialogVisible">
      <i class="iconfont icon-navicon kang" style="position: absolute; left: 0;top: 20px;"></i>
      <el-form :label-position="labelPosition" label-width="100px">
        <el-form-item label="体系代码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="层级 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="父级机构 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="名称 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="代码 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="状态 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="是否可展开 ">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <el-button type="success"   @click="resetForm('dynamicValidateForm')" style="margin-left:500px;">更新</el-button>
      <el-button type="danger"  @click="centerDialogVisible = false">关闭</el-button>
    </el-dialog>
    <span class="btn_right">
     <i class="iconfont icon-shezhi kang"></i>
      <span class="btn_text" @click="open2">删除</span>
    </span>
    <table class="tab_top" border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td><input type="checkbox"></td>
        <td>名称</td>
        <td>负责人</td>
        <td>主管领导</td>
        <td>体系代码</td>
        <td>编号</td>
        <td>父级编号</td>
        <td>层级</td>
        <td>排序</td>
        <td>代码</td>
        <td>状态</td>
      </tr>
      <tr v-for="(n, index) in appform" :key="index" style="color: #969696;">
        <td><input type="checkbox"></td>
        <td v-for="(m, index) in n.add" :key="index">{{m}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import addForms from "../../api/from";
export default {
  data() {
    return {
      appform:[],
      dialogTableVisible: false,
      centerDialogVisible:false
    };
  },
  mounted(){
    this.showd()
  },
  methods: {
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    showd(){
      const addForm = new addForms();
      addForm.getData((data) =>{
        this.appform = data
      });
    }
  }
}
</script>

<style>
  <!-- 引入样式 -->
  html,body{
    height: 100%;
  }
  body{
    display: flex;
  }
  .box_section{
    width:750px;
    height:100%;
    padding-left:220px;
    padding-top:90px;
    flex:1;
  }
  .btn_left{
    padding:10px 4px;
    background:#009688;
    border-radius:3px;
    color: white;
  }
  .btn_in{
    padding:10px 4px;
    background:#1e9fff;
    border-radius:3px;
    color: white;
  }
  .btn_right{
    padding:10px 4px;
    background:#ff5722;
    border-radius:3px;
    color: white;
  }
  .btn_left:hover{
    cursor: pointer;
  }
  .btn_in:hover{
    cursor: pointer;
  }
  .btn_right:hover{
    cursor: pointer;
  }
  .tab_top{
    border-color:#dddddd;
    border-collapse:collapse;
    margin-top:20px;
  }
  .tab_top tr td{
    border-right:1px dashed #dddddd;
    padding:10px 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
  .tab_top tr td:nth-child(11){
    color:#008000;
  }
  .tab_top tr:hover{
    background: #e7eaec;
  }
  .kang{
    font-size: 18px;
  }
</style>
