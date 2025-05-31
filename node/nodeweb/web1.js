// express 모듈로 웹서버 운영하기

// 1. express 모듈 불러오기 (ESM 방식)
import express from "express"; // 익스프레스 모듈 가져오기

// 2. 서버 app 객체 생성
const app = express(); // express()를 실행하면 서버 객체가 생성됨

// 3. 포트 번호 지정
const PORT = 3000; // 이 포트로 서버가 동작할 것임

// 4. 라우팅 설정
app.get("/", (req, res) => {
  // 클라이언트가 '/' 경로로 접속하면
  res.send("🎉 환영합니다 천우의 서버입니다."); // 이 메시지를 보내줌
});

app.get("/good", (req, res) => {
  // 클라이언트가 '/' 경로로 접속하면
  res.send("아주 좋아용👍");
});

app.get("/123", (req, res) => {
  // 클라이언트가 '/' 경로로 접속하면
  res.send("아주 좋아용👍");
});

// 5. 서버 실행
app.listen(PORT, "0.0.0.0", () => {
  console.log(`서버 실행 중 입니다 주소는 : http://localhost:${PORT}입니다`);
});
