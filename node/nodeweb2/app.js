// ===== 필수 모듈 Import =====
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// ===== 라우터 Import =====
import jikwonRouter from "./routes/jikwon.js";
import gogekRouter from "./routes/gogek.js";

// ===== Express 앱 초기화 =====
const app = express();

// ===== 미들웨어 설정 =====
app.use(cors());
app.use(express.json()); // JSON 요청 처리
app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 처리

// ===== 정적 파일 서빙 설정 =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// ===== 기본 설정 =====
// 포트 설정 (환경변수 또는 기본값 3000)
const PORT = process.env.PORT || 3000;
app.set("port", PORT);

// ===== 라우터 설정 =====
// 직원 관련 API 라우터
app.use("/jikwon", jikwonRouter);
// 고객 관련 API 라우터
app.use("/gogek", gogekRouter);

// ===== 기본 라우트 =====
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

app.listen(app.get("port"), () => {
  console.log(`🚀 서버가 ${app.get("port")}번 포트에서 실행 중입니다.`);
  console.log(`📱 URL: http://localhost:${app.get("port")}`);
});
