<template>
  <form @submit.prevent="onReadyGame">
    <input type="number" placeholder="세로" v-model="row" />
    <input type="number" placeholder="가로" v-model="cell" />
    <input type="number" placeholder="지뢰 갯수" v-model="mine" />
    <button>시작</button>
  </form>
</template>

<script>
import { START_GAME } from "./store";
export default {
  data() {
    return {
      row: 10,
      cell: 10,
      mine: 20,
    };
  },
  methods: {
    onReadyGame() {
      this.$store.commit(START_GAME, {
        row: this.row,
        cell: this.cell,
        mine: this.mine,
      });
    },
  },
};
</script>
