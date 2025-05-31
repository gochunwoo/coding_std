const { createApp } = Vue;

createApp({
  data() {
    return {
      joinData: [],
      error: null,
      baseUrl: "http://localhost:80",
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${this.baseUrl}/joindata`);
        this.joinData = response.data;
        this.error = null;
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
        this.error =
          "데이터를 가져오는데 실패했습니다. 서버가 실행 중인지 확인해주세요.";
      }
    },
    clearData() {
      this.joinData = [];
      this.error = null;
    },
  },
}).mount("#app");
