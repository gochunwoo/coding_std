// ../components/jikwon.js

const { createApp } = Vue;

createApp({
  data() {
    return {
      jikwons: [],   // 직원 데이터 배열
      error: null,   // 에러 메시지
    };
  },
  methods: {
    // /jikwons 엔드포인트에서 직원 데이터 불러오기
    async fetchData() {
      this.error = null;
      try {
        const response = await axios.get('/jikwons');
        this.jikwons = response.data;
      } catch (err) {
        this.error = "데이터를 가져오는데 실패했습니다. 서버가 실행 중인지 확인해주세요.";
      }
    },
    // 직원 데이터, 에러 초기화
    clearData() {
      this.jikwons = [];
      this.error = null;
    },
  }
}).mount("#app");
