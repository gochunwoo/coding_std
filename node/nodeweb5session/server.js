import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); //  현재 파일 경로
const __dirname = path.dirname(__filename); //  현재 폴더 경로

const app = express();
const port = 3000;

// === 미들웨어 설정 ===
app.use(bodyParser.urlencoded({ extended: true })); //  요청 본문에서 데이터를 파싱하는 미들웨어
// 세션 설정
app.use(
  session({
    secret: "Kjf3984!@#42kasdfR*#$zxcv290423", // 랜덤/복잡한 문자열 추천
    resave: false, //  세션 데이터 저장 여부
    saveUninitialized: true, //  초기화되지 않은 세션 저장 여부
    cookie: { maxAge: 1000 * 60 * 60 }, //  쿠키 만료 시간
  })
);

app.set("view engine", "ejs"); //  뷰 엔진 설정
app.set("views", path.join(__dirname, "views")); //  뷰 파일 경로 설정

const auth = {
  id: "kor",
  password: "111",
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.post("/login", (req, res) => {
  const { id, password } = req.body;
  // console.log(id, password);
  if (id === auth.id && password === auth.password) {
    req.session.user = { id };
    res.redirect("/mymain"); // 로그인 성공시 mymain 페이지로 이동하기 위한 요청
  } else {
    res.send("로그인 실패 <a href='/'>로그인 화면으로</a>");
  }
});

app.get("/mymain", (req, res) => {
  if (req.session.user) {
    res.render("mymain", { sessionId: req.session.user.id });
  } else {
    res.send("로그인 실패 <a href='/'>로그인 화면으로</a>");
  }
});

// 로그아웃 처리
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/main");
    }
    res.clearCookie("connect.sid"); //  세션 쿠키 삭제
    res.redirect("/");
  });
});

// 세션 확인
app.get("/getsession", (req, res) => {
  console.log(req.session);
  res.send("세션 확인");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
