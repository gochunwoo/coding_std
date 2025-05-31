const { createApp } = Vue;

createApp({
  data() {
    return {
      jikwons: [],
      error: null,
      baseUrl: "http://localhost:80",
    };
  },
  methods: {
    async fetchData() {
      this.error = null;
      try {
        const response = await axios.get(`${this.baseUrl}/jikwons`);
        this.jikwons = response.data;
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        this.error =
          "데이터를 가져오는 중 오류가 발생했습니다. 서버가 실행 중인지 확인해주세요.";
      }
    },
    clearData() {
      this.jikwons = [];
      this.error = null;
    },
  },
}).mount("#app");
