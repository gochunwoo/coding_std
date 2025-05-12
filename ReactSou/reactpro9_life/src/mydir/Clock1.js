import React from "react";

class Clock1 extends React.Component {
  render() {
    return (
      <div>
        <h2>클래스 컴포넌트1</h2>
        <h3>정적 시간 : 지금은 {new Date().toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock1;
