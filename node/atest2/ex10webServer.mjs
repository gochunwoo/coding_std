// 웹서버 구축하기
import http from "http";
import { readFile } from "fs";
import { selectQuery, pool } from "./ex9db.mjs";

const server = http.createServer(async (req, res) => {
  if (req.url === "/list") {
    const rows = await selectQuery();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(rows));
  } else {
    readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("파일 읽기 오류");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});

process.on("SIGINT", async () => {
  console.log("서버 종료 중... DB 커넥션 풀 정리");
  await pool.end();
  process.exit();
});

export { selectQuery, pool };
