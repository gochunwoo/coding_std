import React, { Component } from "react";

class Subject extends Component {
  render() {
    const clickHandler = () => {
      // 버튼 클릭 이벤트 핸들러
      console.log("두번쨰 버튼을 클릭함");
    };

    const keyupHandler = (e) => {
      console.log("텍스트 이벤트 성공");
      console.log("입력 값은 ", e.target.value);
    };
    return (
      <div>
        <h2>자식컴포넌트 클래스컴포넌트</h2>
        <h2>제목: {this.props.title}</h2>
        <h3>부제목: {this.props.subtitle}</h3>
        <br />
        <button
          onClick={function () {
            this.props.changComponet();
          }.bind(this)}
        >
          {this.props.subtitle}
        </button>
        <br />
        <button onClick={clickHandler}>(클래스컴포넌트)두번째 버튼</button>
        <br></br>
        <input type="text" onKeyUp={keyupHandler} />
      </div>
    );
  }
}

export default Subject;
