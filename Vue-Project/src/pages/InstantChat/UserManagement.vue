<template>
  <div>
    <organization-name></organization-name>
    <add-delete></add-delete>
    <table-dropdown></table-dropdown>
  </div>
</template>


<script>
  import OrganizationName  from "../../components/WangKangKang/OrganizationName";
  import AddDelete  from "../../components/WangKangKang/AddDelete";
  import TableDropdown  from "../../components/WangKangKang/TableDropdown";
    export default {

    components:{
      OrganizationName,
      AddDelete,
      TableDropdown
    }
  }
</script>

<style>

</style>
