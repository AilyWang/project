<template>
  <div class="box_section_">
        <span class="btn_left_">
            <i class="iconfont icon-shezhi kang"></i>
            <span class="btn_text" @click="dialogTableVisible = true">新增</span>
          </span>
    <el-dialog title="基本信息" :visible.sync="dialogTableVisible" >
      <i class="iconfont icon-navicon kang" style="position: absolute; left: 10px;top: 20px;"></i>
      <el-form :label-position="labelPosition" label-width="100px" >
        <el-form-item label="用户名">
          <el-input style="width: 140px;"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input style="width: 140px; "></el-input>
        </el-form-item>
        <el-form-item label="性别 ">
          <span>男</span><input type="checkbox"/><span>女</span><input type="checkbox"/>
        </el-form-item>
        <el-form-item label="年龄 ">
          <el-input style="width: 140px;"></el-input>
        </el-form-item>
        <el-form-item label="所属机构 ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="固定电话">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <el-button type="success"  @click="resetForm('dynamicValidateForm')" style="margin-left:370px;">保存</el-button>
      <el-button type="danger"  @click="dialogTableVisible = false">关闭</el-button>
    </el-dialog>
        <span class="btn_in_">
           <i class="iconfont icon-pencil kang"></i>
            <span class="btn_text" @click="centerDialogVisible = true">编辑</span>
          </span>
    <el-dialog title="基本信息" :visible.sync="centerDialogVisible" >
      <i class="iconfont icon-navicon kang" style="position: absolute; left: 10px;top: 20px;"></i>
      <el-form :label-position="labelPosition" label-width="100px">
        <el-form-item label="用户名">
          <el-input style="width: 140px;"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input style="width: 140px; "></el-input>
        </el-form-item>
        <el-form-item label="性别 ">
          <span>男</span><input type="checkbox"/><span>女</span><input type="checkbox"/>
        </el-form-item>
        <el-form-item label="年龄 ">
          <el-input style="width: 140px;"></el-input>
        </el-form-item>
        <el-form-item label="所属机构 ">
          <el-input style="width: 340px; "></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input style="width: 340px; "></el-input>
        </el-form-item>
        <el-form-item label="固定电话">
          <el-input style="width: 340px; "></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input style="width: 340px; "></el-input>
        </el-form-item>
      </el-form>
      <el-button type="success"  @click="resetForm('dynamicValidateForm')" style="margin-left:370px;">更新</el-button>
      <el-button type="danger"  @click="centerDialogVisible = false">关闭</el-button>
    </el-dialog>
        <span class="btn_right_">
             <i class="iconfont icon-shezhi kang"></i>
            <span class="btn_text"  @click="open2">删除</span>
        </span>
        <span class="btn_in_">
           <i class="iconfont icon-filter kang"></i>
            <span class="btn_text">过滤</span>
         </span>
         <span class="btn_fived">
            <i class="iconfont icon-search kang"></i>
            <span class="btn_text" @click="outerVisible = true" >查询</span>
         </span>
    <el-dialog title="组合查询" :visible.sync="outerVisible" >
      <i class="iconfont icon-search kang" style="position: absolute; left: 10px;top: 20px;"></i>
      <el-form :label-position="labelPosition" label-width="100px">
        <div class="popup">
              <span class="font_">方式</span>
              <select>
                <option>并且</option>
                <option>或者</option>
              </select>
        </div>
        <div class="popup">
          <span  class="font_">左括号</span>
          <select>
            <option>无</option>
            <option>（</option>
          </select>
        </div>
        <div class="popup">
          <span  class="font_">字段</span>
          <select>
            <option>UUID</option>
            <option>员工号</option>
            <option>姓名</option>
            <option>性别</option>
            <option>电话</option>
            <option>手机</option>
            <option>电子邮箱</option>
            <option>所属机构</option>
            <option>职务</option>
            <option>用户组</option>
            <option>所属区域</option>
          </select>
        </div>
        <div class="popup">
          <span  class="font_">包含</span>
          <select>
            <option>包含</option>
            <option>等于</option>
            <option>不等于</option>
            <option>大于</option>
            <option>大于或等于</option>
            <option>小于</option>
            <option>小于或等于</option>
            <option>以...开头</option>
            <option>以...结尾</option>
          </select>
        </div>
        <div class="popup">
          <span  class="font_">右括号</span>
          <select>
            <option>无</option>
            <option>）</option>
          </select>
        </div>
      </el-form>
      <el-button type="success"  @click="resetForm('dynamicValidateForm')" style="margin-left:270px;margin-top: 240px">查询</el-button>
      <el-button type="danger"  @click="outerVisible = false">关闭</el-button>
    </el-dialog>
         <span class="btn_in_right_">
           <i class="iconfont icon-file1 kang"></i>
            <span class="btn_text">导出</span>
            <span class="symbol">▼</span>
            <div class="bower_top_hover">
                 <div class="bower_bottom">
                   <img src="../../assets/img/qqq.jpg">
                   <p>导出PDF报表</p>
                 </div>
                 <div class="bower_bottom">
                   <img src="../../assets/img/www.jpg">
                   <p>导出EXCEL报表</p>
                 </div>
                 <div class="bower_bottom">
                   <img src="../../assets/img/eee.jpg">
                   <p>导出EXCEL报表</p>
                 </div>
                 <div class="bower_bottom">
                   <img src="../../assets/img/rrr.jpg">
                   <p>导出WORD报表</p>
                 </div>
             </div>
         </span>
         <span class="btn_in_last_">
             <i class="iconfont icon-listul kang"></i>
            <span class="btn_text">更多</span>
            <span class="symbol">▼</span>
            <div class="bower_bottom_right">
                   <img src="../../assets/img/ttt.jpg">
                   <p>重置密码</p>
             </div>
         </span>
  </div>
</template>

<script>
  export default {
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
      }
    },
    data() {
      return {
        dialogTableVisible: false,
        centerDialogVisible:false,
        outerVisible:false
      };
    },
  }
</script>

<style>
  .box_section_{
    cursor: pointer;
    margin-top: 10px;
    margin-left: 100px;
  }
  .btn_left_{
    padding:10px 4px;
    background:#009688;
    border-radius:3px;
    color: white;
    margin-left: 100px;
  }
  .btn_in_{
    padding:10px 4px;
    background:#1e9fff;
    border-radius:3px;
    color: white;
  }
  .btn_right_{
    padding: 10px 4px;
    background: #ff5722;
    border-radius: 3px;
    color: white;
  }
  .btn_in_:nth-child(2){
    background: #ffb800;
  }
  .btn_in_right_{
    padding:10px 4px;
    background:#1e9fff;
    border-radius:3px;
    color: white;
    position: relative;
    margin-right:10px;
     margin-left:10px;
  }
  .btn_in_last_{
    padding:10px 4px;
    background:#ffb800;
    border-radius:3px;
    color: white;
    position: relative;
  }
  .symbol{
    color: black;
  }
  .btn_right_{
    padding:10px 4px;
    background:#ff5722;
    border-radius:3px;
    color: white;
  }
  .btn_fived{
    padding:10px 4px;
    background:#800080;
    border-radius:3px;
    color: white;
  }
  .bower_top_hover{
    width: 150px;
    height: 100px;
    border: 1px solid #d3d3d3;
    background: #f3f3f3;
    position: absolute;
    top:35px;
    left: 0;
    display: none;
  }
  .btn_in_right_:hover .bower_top_hover{
    display: block;
    z-index: 999;
  }
  .btn_in_right_:hover{
    background: #9dd1f8;
  }
  .bower_bottom{
    float: left;
    width: 150px;
    height: 25px;
    text-align: center;
    line-height: 20px;
    color: #444444;
    padding-top:5px;
  }
  .bower_bottom img{
    float: left;
    margin-right: 10px;
    border-right:1px solid #cccccc;
  }
  .bower_bottom p{
    float: left;
    margin-top: 0px;
  }
  .bower_bottom_right{
    width: 150px;
    height: 25px;
    border: 1px solid #d3d3d3;
    background: #f3f3f3;
    position: absolute;
    top: 35px;
    left: 0;
    color: #444444;
    display: none;
  }
  .bower_bottom_right img{
    float: left;
    margin-right: 10px;
    border-right:1px solid #cccccc;
  }
  .bower_bottom_right p{
    float: left;
    margin-top: 0px;
  }
  .btn_in_last_:hover .bower_bottom_right{
    display: block;
    z-index: 999;
  }
  .btn_in_last_:hover{
    background: #f7dc98;
  }
  .bower_bottom_right:hover{
    background: #d3d3d3;
  }
  .bower_bottom:hover{
    background: #d3d3d3;
  }
  .btn_left_:hover{
    background: #2acbbc;
  }
  .btn_in_:nth-child(2):hover{
    background: #f6ce67;
  }
  .btn_right_:hover{
    background: #f69475;
  }
  .btn_in_:nth-child(4):hover{
    background: #74c1fa;
  }
  .btn_fived:hover{
    background: #d20fd2;
  }
  .kang{
    font-size: 18px;
  }
  .popup{
    float: left;
    padding-right: 10px;
  }
  .popup select{
    width:80px;
    height: 30px;
    line-height: 30px;
  }
</style>
