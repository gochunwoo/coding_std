import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import boardRouter from "./routes/board.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// 라우터 설정
app.use("/board", boardRouter);

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
