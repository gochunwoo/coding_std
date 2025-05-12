import React, { memo } from "react";

// React.memo로 자식 컴포넌트를 감싸 메모이징 적용됨
// 부모(App) 컴포넌트가 렌더링되더라도, props가 바뀌지 않으면 이 컴포넌트는 리렌더링되지 않음
const boxstyle = { border: "2px solid blue", paddin: "10px" };

const Child = ({ irum, nai }) => {
  console.log("자녀 나이 변경(리렌더링)"); // 이 로그가 찍히면 렌더링 발생한 것

  return (
    <div style={boxstyle}>
      <h3>🐘자녀 1🐘</h3>
      <p>이름 : 홍삼</p>
      <p>나이 : 5살</p>
      <h3>🐘자녀 2🐘</h3>
      <p>이름 : {irum}</p> {/* props로 받은 irum */}
      <p>나이 : {nai}살</p> {/* props로 받은 nai */}
    </div>
  );
};

// memo를 사용해 메모이징 완료
// irum 또는 nai 중 하나라도 바뀌면 다시 렌더링됨
export default memo(Child);
