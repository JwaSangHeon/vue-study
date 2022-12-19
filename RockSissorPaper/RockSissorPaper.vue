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
    onClickButton(choice) {},
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
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
