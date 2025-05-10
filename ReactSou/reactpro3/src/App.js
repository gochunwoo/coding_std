/*
import { Component } from "react";
// Componet는 'react' 패키지가 개별적으로 export한 함수를 가져올 떄 { } 를 사용함. 구조 분해 할당
import HookTest1 from "./mydir/HookTest1";
import HookTest2 from "./mydir/HookTest2";

class App extends Component {
  state = {
    // state : 컴포넌트 내부에서 사용(관리)하는 동적데이터, 변화가 발생하면 자동 렌더링됨
    count: 0,
  };

  countUpdate(n) {
    this.setState({ count: n }); // 호출되면 자동 렌더링됨
  }
  render() {
    const { count } = this.state;

    return (
      <div>
        number : {count} &nbsp;
        <button
          onClick={() => {
            this.countUpdate(count + 1);
          }}
        >
          증가1
        </button>
        <hr />
        <HookTest1></HookTest1>
        <hr />
        <HookTest2></HookTest2>
      </div>
    );
  }
}
*/
import React, { useState } from "react";
import HookTest1 from "./mydir/HookTest1";
import HookTest2 from "./mydir/HookTest2";

function App() {
  const [count, setCount] = useState(0); // useState로 상태 선언

  const countUpdate = (n) => {
    setCount(n); // 상태 업데이트 함수
  };

  return (
    <div>
      number : {count} &nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가1</button>
      <hr />
      <HookTest1 />
      <hr />
      <HookTest2 />
    </div>
  );
}

export default App;
