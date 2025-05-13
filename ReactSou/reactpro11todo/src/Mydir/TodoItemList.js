import React from "react";
import TodoItem from "./TodoItem";

// 배열을 순회해서 TodoItem 컴포넌트를 반복 렌더링
// 각항목에 id,text,checked 등을 props로 넘김김
const TodoItemList = ({ todos, onToggle, onRemove }) => {
  //  return(
  //     <div>
  //         {/* 테스트 용 */}
  //         <TodoItem text="안녕" />
  //        <TodoItem text="일정" />
  //        <TodoItem text="목록" />

  //     </div>
  //);
  const todoList = todos.map((todo) => (
    <TodoItem {...todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
  ));

  return <div>{todoList}</div>;
};

export default TodoItemList;
