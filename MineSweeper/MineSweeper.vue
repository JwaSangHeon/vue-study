<template>
  <div>
    <mine-form />
    <div>{{ timer }}</div>
    <table-component />
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store, { INCREMENT_TIMER } from "./store";
import MineForm from "./MineForm.vue";
import TableComponent from "./TableComponent";

let interval;
export default {
  store,
  components: {
    MineForm,
    TableComponent,
  },
  computed: {
    ...mapState(["timer", "result", "gameStop"]),
  },
  methods: {},
  watch: {
    gameStop(value, oldValue) {
      if (value === false) {
        interval = setInterval(() => {
          this.$store.commit(INCREMENT_TIMER);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    },
  },
};
</script>

<style>
table {
  margin-top: 20px;
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  width: 50px;
  height: 50px;
  text-align: center;
}
</style>
