import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

const wss = new WebSocketServer({ server });

const clients = new Map(); // 여러 user와 통신(각 ws 객체)을 할 때 정보 담기(목록)

// WebSocket 상태 코드 상수 정의
const WS_OPEN = 1;

// 사용자명 중복 체크 및 에러 핸들링 추가
function broadcast(message, exceptWs = null) {
  wss.clients.forEach((client) => {
    if (client.readyState === WS_OPEN && client !== exceptWs) {
      client.send(message);
    }
  });
}

// 현재 접속자 유저확인
function sendUserList() {
  const users = Array.from(clients.values());
  const listMessage = `현재 접속자: ${users.join(", ")}`;
  broadcast(listMessage);
}

wss.on("connection", (ws) => {
  let username = null;

  ws.on("message", (msg) => {
    const message = msg.toString();

    if (!username) {
      username = message;
      // 사용자명 중복 체크
      if (Array.from(clients.values()).includes(username)) {
        ws.send("이미 사용 중인 이름입니다.");
        return;
      }
      clients.set(ws, username);
      broadcast(`${username}님이 입장했습니다.`);
      sendUserList();
      return;
    } else {
      broadcast(`${username}: ${message}`);
    }
  });

  ws.on("close", () => {
    if (username) {
      broadcast(`${username}님이 퇴장했습니다.`);
      clients.delete(ws);
      sendUserList();
    }
  });
});

// 에러 핸들링 추가
wss.on("error", (error) => {
  console.error("WebSocket error:", error);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`[INFO] Server is running at http://127.0.0.1:${PORT}`);
});
