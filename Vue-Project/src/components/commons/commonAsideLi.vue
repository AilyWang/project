<template>
  <div>
   <li  class="panel_list_li" v-for='t in send'>
      <a @click='senddata(t)' href="javascript:;" class="panel_base_config">
        <span class="panel_cf panel_cf_label">
          <i style="font-size:18px;" :class="t.left_ico"></i></span>
        <span class="panel_cf">{{t.tit}} </span>
      </a>
    </li>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  props:['send'],
  name: 'commonasideli',
  data(){
    return {
    }
  },
  updated(){
    // this.senddata(this.send)
  },
  methods:{
    senddata(value){
      var tabDatachange = {"name":value.tit,"icon":value.left_ico, "isActive":false}
      this.$store.commit('tabDatachange',tabDatachange)
    }
  }
}
</script>

<style>
.panel_list_li{
    width: 100%;
}
.panel_list_li:hover{
    background: #1e282c;
}
.panel_base_config{
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    _line-height: 30px;
    color: #fff;
    padding-left: 36px;
}
.panel_cf{
    display: inline-block;
    vertical-align: middle;
}
.panel_cf_label{
    width: 16px;
    height: 16px;
    line-height: 16px;
    margin-right: 5px;
}

.icon-cube{
    font-size: 16px;
    color: #fff;
}
</style>
