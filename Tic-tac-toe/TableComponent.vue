<template>
  <table>
    <tr-component
      v-for="(rowData, index) in tableData"
      :rowData="rowData"
      :rowIndex="index"
      :key="index"
    ></tr-component>
  </table>
</template>

<script>
import TrComponent from "./TrComponent.vue";

export default {
  components: { TrComponent },

  props: {
    tableData: Array,
  },
};
</script>

<style scoped></style>
