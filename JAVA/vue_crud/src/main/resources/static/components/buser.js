// ../components/buser.js

const { createApp } = Vue;

createApp({
  data() {
    return {
      busers: [],     // 부서 데이터 배열
      error: null,    // 에러 메시지
    };
  },
  methods: {
    // /buserdata에서 부서 전체 목록 불러오기
    async fetchData() {
      this.error = null;
      try {
        const response = await axios.get('/buserdata');
        // JSON 데이터가 오면 busers에 저장
        this.busers = response.data;
      } catch (error) {
        this.error = "데이터를 가져오는 중 오류가 발생했습니다. 서버가 실행 중인지 확인해주세요.";
      }
    },
    // 테이블 내용 지우기
    clearData() {
      this.busers = [];
      this.error = null;
    }
  }
}).mount("#app");
