import React, { useState } from "react";
import Child from "./mkdir/Child"; //  React.memo로 감싼 자식 컴포넌트 import됨

function App() {
  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  const changeFatherAge = () => {
    // 아빠 나이 변경 이벤트 핸들러
    setFatherAge(fatherAge + 1);
  };

  const changeChildAge = () => {
    // 자녀 나이 변경 이벤트 핸들러
    setChildAge(childAge + 1);
  };

  console.log("아빠 나이가 변경됨 (리렌더링)"); // 부모(App) 컴포넌트 렌더링 확인용

  const boxstyle = { border: "1px solid", paddin: "10px" };

  return (
    <div style={boxstyle}>
      <h2>🦁아빠(홍길동님)🦁</h2>
      <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changeFatherAge}>아빠 나이 변경</button>
      <hr />
      {/*  props로 irum과 nai를 전달하고 있음
           irum은 고정 값이라 바뀌지 않음
           nai는 childAge 상태라 바뀔 수 있음
           React.memo 덕분에 props가 바뀌지 않으면 Child는 리렌더링되지 않음 */}
      <Child irum={"홍자녀"} nai={childAge} />
      <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
