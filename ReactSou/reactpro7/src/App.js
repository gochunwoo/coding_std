import "./App.css";
import React, { useState } from "react";

// 할일 목록 출력 담당
function HobbyList({ itemProps }) {
  return (
    <ul>
      {itemProps.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }

    const newItem = {
      text: text,
      id: Date.now(),
    };

    // prevItems : setItems 함수에의해 전달된 현재 상태값. 즉, 이전의 item 배열이다
    // 리액트가 상태 업데이트를 수행할 때 현재 상태를 콜백함수에 전달해,
    // 새로운 상태를 생성할수 있도록 하는 방식
    setItems((prevItems) => [...prevItems, newItem]);
    console.log(items);
    setText("");
  };

  return (
    <div className="App">
      <h3>🧸취미 목록🧸</h3>

      <HobbyList itemProps={items}></HobbyList>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-hobby">취미는? </label>&nbsp;
        <input id="new-hobby" onChange={handleChange} value={text} />
        &nbsp;&nbsp;
        <button>클릭 #{items.length}</button>
      </form>
      <br></br>
      <div>총건수 : {items.length}</div>
    </div>
  );
}

export default App;

/*
전체 정리
function App() 은 메인콤포넌트
function HobbyList({itemPrps}){...} 리스트를 보여주는역할(자식컴포)

자식 컴포넌트 :
itemProps는 부모(App)가 준목록
.map()으로 반복해서 <li> 만들고 보여줌
key={item.id}는 리액트가 내부에서 각항목을 구분할수 있게해주는 고유값

메인 App 컴포넌트:
const [items, setItems] = useState([]); 
배열 상태: 입력된 취미들 저장
const [text, setText] = useState("");
문자열 상태: 입력창에 쓰는 내용 저장
items : 리스트로 보여줄 데이터들 (배열)
text : 입력창에 실시간으로 적고 있는 텍스트

handleChange =(e)=>{ setText(e.target.value) };
입력값이 바뀔때마다 자동으로 text 상태에 값 저장

e.preventDefault(); 새로고침방지

if (text.length === 0) { return; }
아무것도 안썻으면 추가안함

새 아이템 만들기
  const newItem = {
    text: text,       입력한 내용
    id: Date.now(),   고유한 ID 값 (시간으로 만들기)
  };

setItems((prevItems) => [...prevItems, newItem]);
아이템 추가하기

prevItems: 지금까지의 취미 목록
새로운 아이템을 복사해서 뒤에 붙임 -> 새배열로 저장됨

console.log(items); 콘솔에 찍히는건 이전상태

setText("") 입력창 비우기

return( 실제 화면 렌더링 
<HobbyList itemProps={items}></HobbyList> 리스트보여주기

< 폼태그 >
input 입력창입력할때 마다 text상태업데이트
button 클릭시 폼전송 -> handleSubmit 호출
#{items.length} -> 입력된 취미개수 표시
)

최종 정리 (흐름)
입력창 키보드 입력 -> handleChange실행 -> text 상태 변경
-> 버튼클릭 -> handlsSubmit 실행 -> newItem 추가 -> items 상태변경
-> 리렌더링 -> HobbyList가 새로운 items 받아서 리스트 화면에 출력

정리 요약
입력창 타이핑 : onChange={handleChange}	text 상태 업데이트
버튼 클릭 or 엔터: onSubmit={handleSubmit}	items에 새 항목 추가
리스트 출력 <Hobbyl.. itemProps={items} 새로운 항목 리스트로 출력
*/
