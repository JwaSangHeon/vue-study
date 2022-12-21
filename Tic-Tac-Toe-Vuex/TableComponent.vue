<template>
  <table>
    <tr-component
      v-for="(rowData, index) in tableData"
      :rowIndex="index"
      :key="index"
    ></tr-component>
  </table>
</template>

<script>
import TrComponent from "./TrComponent.vue";

export default {
  components: { TrComponent },

  computed: {
    tableData() {
      return this.$store.state.tableData;
    },
  },
};
</script>

<style scoped></style>
