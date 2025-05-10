// 리액트에는 데이터를 다루는 두 가지 방식이 있다. props와 state이다.
// props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법이고, 자식 컴포넌트는 props를 받아 사용할뿐 수정은불가
// state는 해당 컴포넌트 내부에서 선언하며 값 변경 가능
// props 또는 state가 변경되면 컴포넌트는 자동 리렌더링 한다.

import MyName from "./mydir/MyName";

function App() {
  return (
    <div>
      <p>메인 컴포넌트(부모)</p>
      <MyName name="메로나나 "/>   {/* MyName 컴포넌트에 name이라는 props를 전달 */}
      <MyName />  
      <MyName name="이순신 " age="30"/>  
    </div>
  );
}

export default App;
