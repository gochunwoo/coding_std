document.addEventListener("DOMContentLoaded", function () {
  const { createApp } = Vue;
  createApp({
    data() {
      return {
        message1: "Hello vue",
        message2: "안녕!" + "반가워",
        message3: Math.random() * 9,
      };
    },
    methods: {
      updateMessage() {
        this.message1 = "update hello";
        this.message2 = "버튼을 클릭";
        this.message3 = Math.random() * 9;
      },
    },
    // 라이프사이클 (Vue3이므로 beforeDestroy→beforeUnmount)
    beforeCreate() {
      console.log("beforeCreate");
    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mount");
    },
    beforeUpdate() {
      console.log("beforeUpdate");
    },
    updated() {
      console.log("updated");
    },
    beforeUnmount() {
      console.log("beforeUnmount");
    },
  }).mount("#app2");
});
