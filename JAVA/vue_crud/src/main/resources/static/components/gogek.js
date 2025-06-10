// ../components/gogek.js

const { createApp } = Vue;

createApp({
  data() {
    return {
      gogeks: [],    // 고객 정보 배열
      error: null,   // 에러 메시지
    };
  },
  methods: {
    // /gogeks 엔드포인트에서 고객 데이터 불러오기
    async fetchData() {
      this.error = null;
      try {
        const response = await axios.get('/gogeks');
        this.gogeks = response.data;
      } catch (err) {
        this.error = "데이터를 가져오는데 실패했습니다. 서버가 실행 중인지 확인해주세요.";
      }
    },
    // 테이블 및 에러 메시지 초기화
    clearData() {
      this.gogeks = [];
      this.error = null;
    },
  }
}).mount("#app");
