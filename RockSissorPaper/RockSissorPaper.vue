<template>
  <div>
    <div id="computer" :style="computedStyleObj"></div>
    <div>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>

<script>
const rspCode = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};
const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCode) => {
  return Object.entries(rspCode).find((v) => {
    return v[1] === imgCode;
  })[0];
};

let interval = null;
export default {
  data() {
    return {
      imgCode: rspCode.바위,
      result: "",
      score: 0,
    };
  },
  computed: {
    computedStyleObj() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCode} 0px`,
      };
    },
  },
  methods: {
    changeHand() {
      interval = setInterval(() => {
        if (this.imgCode === rspCode.바위) {
          this.imgCode = rspCode.가위;
        } else if (this.imgCode === rspCode.가위) {
          this.imgCode = rspCode.보;
        } else if (this.imgCode === rspCode.보) {
          this.imgCode = rspCode.바위;
        }
      }, 100);
    },
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imgCode)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다.";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다.";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHand();
      }, 1000);
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    this.changeHand();
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    clearInterval(interval);
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
