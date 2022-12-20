<template>
  <div class="ball" :style="styleObj">{{ number }}</div>
</template>

<script>
export default {
  name: "LottoBall",
  props: {
    number: Number,
  },

  computed: {
    styleObj() {
      let background;
      if (this.number <= 10) {
        background = "red";
      } else if (this.number <= 20) {
        background = "orange";
      } else if (this.number <= 30) {
        background = "yellow";
      } else if (this.number <= 40) {
        background = "green";
      } else {
        background = "blue";
      }
      return {
        background,
      };
    },
  },
};
</script>

<style>
.ball {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid black;
  text-align: center;
  font-size: 40px;
  line-height: 80px;
}
</style>
