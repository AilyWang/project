<template>
  <section class="section">
    <common-aside></common-aside>
    <test-section></test-section>
  </section>
</template>
<script>
    import CommonAside from "./commonAside"
    import TestSection from "../yuyu/testSection"
    export default {
        name: "CommonSection",
        components:{
            CommonAside,
            TestSection
        }
    }
</script>
<style lang='scss' scoped>
 .section{
    flex:1;
    display:flex;
 }
</style>
