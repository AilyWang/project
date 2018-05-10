<template>
    <div class="system_mod">
        <common-aside></common-aside>
        <system-section></system-section>
    </div>
</template>
<script>
    import CommonAside from "../../commons/commonAside"
    import SystemSection from "../systemsection"
    export default {
       components:{
           CommonAside,
           SystemSection
        }
    }
</script>
<style>
.system_mod{
    flex: 1;
    overflow-y: scroll;
    display: flex;
    height: 100%;
}
</style>

