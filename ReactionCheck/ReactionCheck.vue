<template>
  <div>
    <div id="screen">{{ this.message }}</div>
    <div></div>
    <div>
      <div>평균시간: {{}}</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "waiting",
      message: "클릭해서 실행하세요!",
    };
  },
  methods: {
    onReset() {
      console.log("pressReset");
    },
  },
};
</script>
