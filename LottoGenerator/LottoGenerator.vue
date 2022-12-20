<template>
  <div>
    <h2>당첨숫자</h2>
    <div id="balls">
      <lotto-ball v-for="num in winBalls" :key="num" :number="num"></lotto-ball>
    </div>
    <h2>보너스!</h2>
    <div id="bonus">
      <lotto-ball v-if="bonusNumber" :number="bonusNumber"></lotto-ball>
      <button v-if="redo" @click="onClickButton">한번 더!</button>
    </div>
  </div>
</template>

<script>
import LottoBall from "./LottoBall.vue";
const generateNumber = () => {
  const numbers = [];
  let candidate = Array(45)
    .fill()
    .map((ele, i) => i + 1);
  for (let i = 0; i < 7; i++) {
    const index = Math.floor(Math.random() * (45 - i));
    numbers.push(candidate.splice(index, 1)[0]);
  }
  const bonusNumber = numbers.splice(0, 1)[0];
  numbers.sort((a, b) => a - b);
  return [...numbers, bonusNumber];
};

const timeout = [];
export default {
  components: { LottoBall },
  data() {
    return {
      redo: false,
      bonusNumber: null,
      winNumbers: generateNumber(),
      winBalls: [],
    };
  },
  computed: {},
  methods: {
    onClickButton() {
      this.redo = false;
      this.bonusNumber = null;
      this.winNumbers = generateNumber();
      this.winBalls = [];
      this.showBalls();
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeout[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeout[6] = setTimeout(() => {
        this.bonusNumber = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    },
  },

  mounted() {
    this.showBalls();
  },
  beforeDestroy() {
    timeout.forEach((t) => {
      clearTimeout(t);
    });
  },
};
</script>

<style scoped>
#balls {
  display: flex;
  gap: 20px;
}
#bonus {
  display: flex;
  gap: 20px;
}
#bonus button {
  align-self: center;
  font-size: 24px;
}
</style>
