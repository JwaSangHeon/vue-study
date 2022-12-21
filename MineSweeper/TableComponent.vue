<template>
  <table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td
        v-for="(cellData, cellIndex) in rowData"
        :key="cellIndex"
        :style="cellDataStyle(rowIndex, cellIndex)"
        @click="onClickTd(rowIndex, cellIndex)"
        @contextmenu.prevent="onRightClickTd(rowIndex, cellIndex)"
      >
        {{ cellDataText(rowIndex, cellIndex) }}
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState } from "vuex";
import {
  CLICK_MINE,
  CODE,
  FLAG_CELL,
  NORMALIZE_CELL,
  OPEN_CELL,
  QUESTION_CELL,
} from "./store";

export default {
  computed: {
    ...mapState(["tableData", "gameStop"]),
    cellDataStyle(state) {
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            return {
              background: "#444",
            };
          case CODE.CLICKED_MINE:
            return {
              background: "blue",
            };
          case CODE.OPENED:
            return {
              background: "white",
            };
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: "yellow",
            };
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return {
              background: "red",
            };
          default:
            return {};
        }
      };
    },
    cellDataText() {
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.MINE:
            return "X";
          case CODE.NORMAL:
            return "";
          case CODE.CLICKED_MINE:
            return "😎";
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return "?";
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return "!";
          default:
            return this.$store.state.tableData[row][cell] || "";
        }
      };
    },
  },
  methods: {
    onClickTd(row, cell) {
      if (this.gameStop) return;
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL:
          this.$store.commit(OPEN_CELL, { row, cell });
          return;
        case CODE.MINE:
          this.$store.commit(CLICK_MINE, { row, cell });
          return;
        default:
          return;
      }
    },
    onRightClickTd(row, cell) {
      if (this.gameStop) return;
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL:
        case CODE.MINE:
          this.$store.commit(FLAG_CELL, { row, cell });
          return;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          this.$store.commit(QUESTION_CELL, { row, cell });
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          this.$store.commit(NORMALIZE_CELL, { row, cell });
          return;
      }
    },
  },
};
</script>
