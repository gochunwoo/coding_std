import React, { useState } from "react";

function Gugudan() {
  const [dan, setDan] = useState("");
  const [gugu, setGugu] = useState([]);

  const handleChange = (e) => {
    setDan(e.target.value);
  };

  const handleClick = () => {
    const num = Number(dan);
    if (!num || num < 1 || num > 9) {
      setGugu(["1~9 사이의 숫자만 입력하세요."]);
      return;
    }
    let arr = [];
    for (let i = 1; i <= 9; i++) {
      arr.push(num + " x " + i + " = " + num * i);
    }
    setGugu(arr);
  };

  return (
    <div>
      단 입력 :{" "}
      <input
        type="number"
        value={dan}
        onChange={handleChange}
        min="1"
        max="9"
      />
      <button onClick={handleClick}>확인</button>
      <div>
        {gugu.map(function (line, idx) {
          return <div key={idx}>{line}</div>;
        })}
      </div>
    </div>
  );
}

export default Gugudan;
