// ../components/total.js

const { createApp } = Vue;

createApp({
  data() {
    return {
      joinData: [],  // 통합 정보 배열
      error: null,   // 에러 메시지
    };
  },
  methods: {
    // /joindata 엔드포인트에서 통합 정보 불러오기
    async fetchData() {
      this.error = null;
      try {
        const response = await axios.get('/joindata');
        this.joinData = response.data;
      } catch (err) {
        this.error = "데이터를 가져오는데 실패했습니다. 서버가 실행 중인지 확인해주세요.";
      }
    },
    // 데이터와 에러 메시지 초기화
    clearData() {
      this.joinData = [];
      this.error = null;
    },
  }
}).mount("#app");
