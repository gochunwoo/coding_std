import React from "react";
import "../Mycss/TodoItem.css";

// 네번째 컴포넌트 : 5개의 props를 전달
// text : todo 내용
// checked : 체크박스 상태
// id : 고유 아이디
// onToggle : 체크박스 온 오프
// onRemove : 아이템 삭제 함수

// 얘는 체크값이 활성화되면 일정 우측에 체크마크(📌) 표시하고
// 마우스가 이걸 위에 있을 경우 x를 보여줌
// 삭제 버튼 클릭 -> onRemove(id)실행
const TodoItem = ({ text, checked, id, onToggle, onRemove }) => {
  return (
    <div className="todo-item">
      {/* 텍스트 영역: 클릭 시 체크 토글 */}
      <div
        className={`todo-text ${checked ? "checked" : ""}`}
        onClick={() => onToggle(id)}
      >
        {text}

        {/* 마우스를 텍스트 위에 올리면 보여지는 삭제 버튼 */}
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); // onToggle이 실행되지 않도록 함, 이벤트 전파 방지
            onRemove(id); // 삭제 함수 실행
          }}
        >
          &times;
        </div>
      </div>

      {/* 체크된 항목이면 우측에 체크 마크(📌) 표시 */}
      <div className="actions">
        {checked && <div className="check-mark">📌</div>} {/* 조건부 렌더링 */}
      </div>
    </div>
  );
};

export default TodoItem;
