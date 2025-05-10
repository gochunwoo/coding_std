/*
import { Component } from "react";

class MyName extends Component {
    static defaultProps = {
        name: "홍길동",
        age: 10,
    };
  render() {
    return (
      <div>
        안녕~~ 이름은: <b>{this.props.name}</b>
        나이는 : <b>{this.props.age}</b>
      </div>
    );
  }
}
export default MyName;
*/

/*
// 함수형 컴포넌트 사용
import React from "react";

function MyName({ name, age }) {
  return (
    <div>
      안녕~~ 이름은: <b>{name}</b>
      나이는 : <b>{age}</b>
    </div>
  );
}

// defaultProps 설정
MyName.defaultProps = {
  name: "홍길동",
  age: 10,
};

export default MyName;
*/
import React from "react";

function MyName(props) {
  const name = props.name || "홍길동";
  const age = props.age || 10;
  console.log(name, age);
  // props.name이 undefined일 경우 "홍길동"으로 대체
  return (
    <div>
      안녕~~ 이름은: <b>{props.name}</b>
      나이는 : <b>{props.age}</b>
    </div>
  );
}

export default MyName;
