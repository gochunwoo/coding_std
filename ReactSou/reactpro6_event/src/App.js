import "./App.css";
import React, { useState } from "react";

function App() {
  const irum = "천우의 jsx 사용법";
  let title = "이건 제목이야";

  //상대변수
  const [jemok, setJemokFunc] = useState("자바스크립트"); // 대상 : 문자, 숫자,배열,객체....
  const [jemok2, setJemokFunc2] = useState(["리액트", "자바"]);

  // 참고
  const kbs = useState("공영방송");
  console.log("kbs : ", kbs);

  function dataUpdate() {
    // alert("a");
    title = "타이틀 널 바꿀꺼야"; // 일반변수 값 변경
    setJemokFunc("오라클"); // 상태변수 값 변경
  }

  function dataUpdate2() {
    let newArr = [...jemok2]; // 전개 연산자
    console.log(newArr);
    newArr[1] = "자바는 백엔드 프로그래밍의 최고 언어";
    setJemokFunc2(newArr); // 리렌더링
  }
  // 그림 클릭 이벤트 관련
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="redbar">
        <h2>리액트의 변수 이해</h2>
      </div>
      <div className="list">
        <h3>이름은 {irum}</h3>
        <p>변수 값 확인</p>
        <span>
          <b>일반변수 : {title}</b>
        </span>
        &nbsp;&nbsp;
        <span>
          <b>스테이트변수 : {jemok}</b>
        </span>
        &nbsp;&nbsp;
        <button onClick={dataUpdate}>title, jemok 변경</button>
        <hr />
        <div>{jemok2[0]}</div>
        <div>{jemok2[1]}</div>
        <button onClick={dataUpdate2}>jemok2(배열) 변경</button>
        <br />
        <br />
        <h3>그림림 클릭 : <span onClick={() => {
          setCount(count + 1);
        }}>😘😘 횟수:{count}</span></h3>&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default App;
