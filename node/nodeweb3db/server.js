import express from "express";
import mariadb from "mariadb";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// ===== 데이터베이스 연결 =====
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "123",
  database: "test",
  port: 3306,
  connectionLimit: 5,
});

// ===== 미들웨어 =====
app.use(cors()); // 모든 요청에서 허용된 도메인에서 요청을 받을 수 있도록 설정
app.use(express.json()); // 요청 본문을 JSON 형식으로 파싱
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 서비스

// select : sangdata 테이블 읽은 후 클라이언트에게 전송
app.get("/sangdata", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM sangdata");
    conn.release();
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "error fetching data", details: error.message });
  }
});

// next() : 다음 미들웨어(또는 라우터)로 넘어가는 함수
app.use((req, res, next) => {
  res.status(404).send("페이지를 찾을 수 없어요");
});

app.use((req, res, next) => {
  res.status(500).send("서버 오류가 발생했어요");
});
// ===== 서버 실행 =====
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
