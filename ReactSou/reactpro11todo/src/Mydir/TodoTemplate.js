import React from "react";
import "../Mycss/TodoTemplate.css";

// 첫번째 컴포넌트
// 페이지 틀 만들기
const TodoTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">📝오늘 할 일 📝</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoTemplate;
