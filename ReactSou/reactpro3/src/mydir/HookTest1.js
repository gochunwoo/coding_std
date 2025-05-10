import React, { useState } from "react";
// useState 는 Hooks의 일종으로 Hook을 호출해 컴포넌트 안에 state를 추가함
const HookTest1 = () => {
  const [count, setCount] = useState(0); // state 값과 이 값을 갱신하는 함수를 쌍으로 선언

  return (
    <div>
      number : {count} &nbsp;
      <button onClick={() => setCount(count + 1)}>증가 2</button>
    </div>
  );
};

export default HookTest1;
