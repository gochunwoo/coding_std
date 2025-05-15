import { useDispatch } from "react-redux";
import { addNumber } from "../store/counterSlice";

/*
import React from "react";
import AddNumber from "./AddNumber";

// dispatch를 사용하여 숫자를 증가시키는 액션을 디스패치한다다
const AddNumberSuper = (props) => {
  return (
    <div id="super">
      <h1>AddNumberSuper</h1>
      <AddNumber onClick={(size) => props.onClick(size)} />
    </div>
  );
};

export default AddNumberSuper;

props는 컴포넌트끼리 데이터를 전달하는 방법
props는 properties(속성) 컴포넌트한테 선물처럼 데이터 주는방식
부모컴포넌트에서 자식 컴포넌트에게 ㄱ값(데이터) 을 전달할떄 쓴느도구
*/

function AddNumberSuper() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>AddNumberSuper</h1>
      <button onClick={() => dispatch(addNumber(1))}>+1</button>
      <button onClick={() => dispatch(addNumber(2))}>+2</button>
      <button onClick={() => dispatch(addNumber(3))}>+3</button>
    </div>
  );
}

export default AddNumberSuper;
