<template>
    <div class="system_mod">
        <system-section></system-section>
    </div>
</template>
<script>
    import SystemSection from "../systemsection"
    export default {
       components:{
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

