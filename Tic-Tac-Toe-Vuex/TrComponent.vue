<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :rowIndex="rowIndex"
      :cellIndex="index"
      :key="index"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent.vue";

export default {
  props: {
    rowIndex: Number,
  },
  data() {
    return {
      parent: "parent",
    };
  },
  computed: {
    rowData() {
      return this.$store.state.tableDate[this.rowIndex];
    },
  },
  components: {
    TdComponent,
  },
};
</script>
