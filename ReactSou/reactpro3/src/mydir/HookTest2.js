import React, { useState, useEffect } from "react";
import "../App.css";
import plc1 from "../img/plc1.png";
import plc2 from "../img/plc2.png";

export default function HookTest2() {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  useEffect(() => {
    // 현재 컴포넌트가 mount 될때 useEffect의 내부 함수가 실행
    let a = 1; // 지역 변수
    console.log(a);
  }, []); // [](의존성 배열) : 예를 들어 kor 변수가 있을 때 kor을 넣으면 ker이 변경될 때 마다 실행

  let stcss = { color: "blue", textAlign: "center", fontSize: "30pt" };

  return (
    <div className="App">
      <div style={stcss}>
        number : {item} &nbsp;
        <button onClick={incrementItem}>증가</button> &nbsp;
        <button onClick={decrementItem}>감소</button>
      </div>
      <div style={stcss}>
        <img src={plc1} alt="PLC" style={{ width: "100px" }} />
        <img src={plc2} alt="PLC" style={{ width: "150px" }} />
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/logo192.png`}
          alt="public 폴더 내의 이미지 읽기"
        />
      </div>
    </div>
  );
}

// export default HookTest2;
