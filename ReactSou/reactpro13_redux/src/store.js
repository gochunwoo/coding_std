import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducer"; // 액션을 기반으로 상태를 갱신하는 로직을 포함

const store = configureStore({
  // 리덕스 상태를 갱신하기 위한 리듀서를 등록
  reducer: numberReducer,
});

/*
configureStore 함수
configureStore 는 Redux TooIkit의 대표적인 함수
여러개의 리듀서를 하나로 합치고 미들웨어와 개발자 도구 설정 등 다양한 옵션을
쉽게 한번에 처리해서 스토어(store) 를 만들어줌

즉 Redux의 createStore를 더쉽게 쓸수 있게 만든 고수준 함수


const store = configureStore({ reducer: numberReducer })
실제 **스토어(store)**를 생성하는 부분
*/
