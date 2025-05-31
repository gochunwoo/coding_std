// 라우팅 연습

import express from "express"; // Express 모듈 불러오기
import path from "path"; // 경로 조작을 위한 path 모듈
import { fileURLToPath } from "url"; // 현재 모듈의 파일 경로와 디렉토리 경로 설정에 사용
// cors 정책을 해제해서 어디서든 현재 서버 호출이 가능하도록 허용
// npm i cors
import cors from "cors";

const app = express(); // Express 애플리케이션 생성
// app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.set("port", process.env.PORT || 3000); // 포트 설정 (환경변수가 없으면 3000번 사용)

const __filename = fileURLToPath(import.meta.url); // __filename : 현재 실행 중인 JS 파일의 절대 경로

// __dirname : 현재 파일이 위치한 폴더 경로
// path.dirname(__filename)을 이용해 ESM에서도 __dirname처럼 사용 가능
const __dirname = path.dirname(__filename);

// 정적 파일 서빙 (public 폴더에 있는 정적 자원 HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// 라우팅 설정
app.get("/", (req, res) => {
  res.send("<h2>🏠 메인 페이지입니다</h2>"); // 클라이언트에게 문자열을 전송
});

app.get("/java", (req, res) => {
  res.send("<h2>👤 java 소개 페이지입니다</h2>");
});

app.get("/node", (req, res) => {
  res.send('<a href="https://cafe.daum.net/flowlife/RM66/7">node 안내</a>');
});

app.get("/abc", (req, res) => {
  res.sendFile(path.join(__dirname, "abc.html")); // 현재 디랙토리의 file.html전송
});

app.get("/json", (req, res) => {
  res.json({ 이름: "공기밥" });
});

// 참고 : 요청?변수=값 일때는 req.query로 받음
app.get("/member/:bun/:irum", (req, res) => {
  const { bun, irum } = req.params;
  res.json({ bun, irum }); // JSON 전송
});

app.get("/user/:season", (req, res) => {
  const { season } = req.params;
  if (season === "summer") {
    res.json({ season: "더워" });
  } else {
    res.json({ season: "추워" });
  }
});

app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html")); // 현재 디랙토리의 file.html전송
});

// 서버 실행
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트번호로 웹서버 서비스 시작 ...");
});
