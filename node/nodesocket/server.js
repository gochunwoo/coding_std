import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

// Express app 생성
const app = express();

// __dirname 설정 (ESM 환경에서)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, "public")));

// **HTTP 서버 생성 후 WebSocketServer에 연결**
const server = http.createServer(app); // express 앱을 http 서버로 래핑
const wss = new WebSocketServer({ server }); // http 서버에 WebSocket 기능을 붙임

// 클라이언트 연결 시 실행되는 이벤트 핸들러
wss.on("connection", (ws, req) => {
  const clientId = uuidv4(); // uuidv4() : 무작위로 유일한 id생성 (클라이언트 식별용)
  ws.id = clientId; // 연결된 클라이언트의 websocket 인스턴스에 id를 부여
  console.log(`[${clientId}] 클라이언트 연결`);

  ws.on("message", (message) => {
    console.log(`[${clientId}] 메시지 수신: ${message}`);
    ws.send(`[서버응답] ${message}`);
  });

  ws.on("close", () => {
    console.log(`[${clientId}] 클라이언트 종료`);
  });
});

// 서버 시작
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`[INFO] Server is running at http://127.0.0.1:${PORT}`);
});
