import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); //  현재 파일 경로
const __dirname = path.dirname(__filename); //  현재 폴더 경로

const app = express();
app.use(express.static(__dirname)); // 정적 파일 환경설정 (현재 폴더 기준으로 HTML 등 제공)

// 요청 처리
app.get("/", (req, res) => {
  console.log(req.url, req.headers.cookie); // 클라이언트에서 보낸 쿠키 정보 출력 (요청 주소와 함께)

  // 클라이언트에 쿠키 설정정
  res.cookie("mycookie", "test", {
    httpOnly: true, //  자바스크립트에서 접근 불가 (보안 목적)
    maxAge: 3600000, //  쿠키 만료 시간 (1시간)
  });

  res.send("Hello Cookie"); // 클라이언트(브라우저)에 응답 데이터 전송
});

app.get("/login", (req, res) => {
  const { name } = req.query; //  /login?name=값 형식으로 입력된 name 가져오기

  if (name) {
    res.cookie("username", name, { httpOnly: true }); // httpOnly:true <= 클라이언트(브라우저)에서는 접근 불가
    res.send(`<h2>${name}님 환영합니다.</h2>`); //  로그인 성공 메시지 전송
  } else {
    // 400 : Bad request
    res.status(400).send("<h2>이름을 입력해주세요</h2>"); //  name 값이 없을 경우 오류 메시지 출력
  }
});

// 서버 실행
app.listen(8080, () => {
  console.log("8080 번 포트로 웹 서비스 진행.."); //  서버 실행 로그
});
