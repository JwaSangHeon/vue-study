<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cellData="cellData"
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
    rowData: Array,
    rowIndex: Number,
  },
  data() {
    return {
      parent: "parent",
    };
  },
  components: {
    TdComponent,
  },
};
</script>
