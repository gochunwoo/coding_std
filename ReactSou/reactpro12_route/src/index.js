import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* 리액트에서 URL 기반 라우팅을 활성화 시켜주는 컴포넌트 */}
    <React.StrictMode>
      {/* 개발중에만 작동하며 앱에 문제가 될수있는 코드를 미리알려줌*/}
      {/* 생명주기사용, deprecated API 경고등을 표시함, 생산 환경에서는 제거됨*/}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
