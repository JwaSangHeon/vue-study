<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">
      {{ this.message }}
    </div>
    <div></div>
    <div>
      <div>평균시간: {{ second }}</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
  data() {
    return {
      second: "-",
      state: "waiting",
      message: "클릭해서 실행하세요!",
    };
  },
  methods: {
    onReset() {
      this.second = "-";
      this.state = "waiting";
      this.message = "클릭해서 실행하세요!";
      clearTimeout(timeout);
    },
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "화면의 색이 초록색일때 클릭해주세요";
        timeout = setTimeout(() => {
          this.state = "now";
          this.message = "클릭하세요!";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
      } else if (this.state === "ready") {
        this.state = "waiting";
        this.message = "너무 성급하시네요, 초록색일때 클릭하세요";
        this.second = "-";
        clearTimeout(timeout);
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "클릭해서 실행하세요!";
        this.second = endTime - startTime;
      }
    },
  },
};
</script>

<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
