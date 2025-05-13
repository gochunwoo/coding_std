import React from "react";
import "../Mycss/Form.css";

// 두번째 컴포넌트 : 일정 입력 박스와 버튼이 담겨있음
// 현재 컴포넌트는 4개의 props를 받음
// value : input의 내용
// onCreate : button이 클릭될 때 실행 함수
// onChange : input 내용이 변경될 때 실행 함수
// onKeyDown : input에서 Enter 키가 눌리면 실행되는 함수

// 하일 추가 입력 필드
// 사용자가 텍스트 입력 -> onchange로 반영
// 엔터 누르면 -> onKeyDown에서 onCreate 호출
// 등록 버튼 클릭 -> onCreate 실행
const Form = ({ value, onChange, onCreate, onKeyDown }) => {
  return (
    <div className="form">
      할 일 입력 :
      <input value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <div className="create-button" onClick={onCreate}>
        등록
      </div>
    </div>
  );
};

export default Form;
