<template>
    <!-- <div class="home_page_section"> -->
        <!-- <div class="home_page_section_cont"> -->
            <!-- <system-navigation></system-navigation> -->
            <system-content></system-content>
        <!-- </div> -->
    <!-- </div> -->
</template>
<script>
    // import SystemNavigation from "./systemnavigation"
    import SystemContent from "./systemcontent"
    export default {
        components:{
            // SystemNavigation,
            SystemContent
        }
    }
</script>
<style>
    .home_page_section{
        width: 100%;
    }
    .home_page_section_cont{
        height: 100%;
        overflow: hidden;
        padding: 2px 5px;
        background: #f3f3f3;
        display: flex;
        flex-direction: column;
    }
</style>

