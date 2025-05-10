import { Component } from "react";
import Navdata from "./mycomponent/Navdata";
// class component 형식으로 작성
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>머리글 : 웹문서</h1>
      </header>
    );
  }
}
// function component 형식으로 작성
function Welcome(props) {
  return (
    <article>
      {props.who} 글 기사 내용 {/* { } : JS의 변수와 매핑 */}
    </article>
  );
}

function App() {
  // index.js에 의해 index.html에 호출되는 js 모듈 => 컴포넌트라고 함
  return (
    <div className="App">
      {/* JSX(Javascript Syntax extension, JS를 확장한 문법) 내의 주석 */}
      연습용
      <br />
      <Subject></Subject> {/* 별도 컴포넌트 호출 */}
      <h2>메인 컴포넌트</h2>
      <Welcome></Welcome>
      <Welcome who="홍길동님"></Welcome>
      <hr />
      <Navdata msg="가자"></Navdata>
    </div>
  );
}

export default App;
