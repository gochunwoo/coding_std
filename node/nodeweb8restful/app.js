import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import sangRoute from "./sangdataRoute.js";

const app = express();

// 실제 사용할 포트 설정 (환경변수 PORT가 있으면 그거 사용, 없으면 3000)
const PORT = process.env.PORT || 3000;

// __dirname 설정 (ES 모듈 환경)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 미들웨어 설정
app.use(cors()); // CORS 허용
app.use(express.json()); // JSON 요청 허용
app.use(express.urlencoded({ extended: true })); // 폼 데이터 허용
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 서비스

// RESTful 라우터 등록 (/sangdata로 시작하는 요청은 sangRoute가 처리)
app.use("/sangdata", sangRoute);

// 기본 루트 라우트 (맨 마지막에 둬야 다른 요청을 먼저 처리함)
app.get("/", (req, res) => {
  res.send("<h1>메인페이지</h1><p>요청은 /sangdata로 하세요</p>");
});

// 서버 실행 함수
const startServer = (app, port) => {
  app
    .listen(port, () => {
      console.info(`[INFO] Server is running at http://127.0.0.1:${port}`);
    })
    .on("error", (err) => {
      console.error(`[ERROR] Server failed: ${err.message}`);
    });
};

// 서버 실행 시작
startServer(app, PORT);
