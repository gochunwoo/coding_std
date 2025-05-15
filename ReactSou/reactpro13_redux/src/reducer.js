/*
Redux의 리듀서 함수용 모듈
리듀서는 액션에 따라 상태를 변경하는 함수로
현재 상태(state)와 action을 받아 새로운 상태로 변환한다
*/
const initialstate = { number: 0 }; // 1. 초기 상태 정의

export const numberReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "INCRESE_NUMBER": // 2. 액션 타입이 INCRESE_NUMBER 일 때
      return { ...state, number: state.number + action.payload }; // 3. 기존 상태 복사 + number 값변경경
    default:
      return state; // 4. 그외엔 기존 상태 그대로 반환
  }
};
/* 전체 흐름
1) 초기 상태 반환 : 리듀서가 처음 호출되면 state는 initialstate 가 기본값으로 사용
2) 액션 처리      : action.type을 확인해 ㅎ ㅐ당 로직을 수행
3) 상태 업데이트  : INCRESE_NUMBER 가 dispatch되면 state.number 가 갱신된 새 상태를 반환
4) 처리되지 않는 액션의 경우 현재 상태를 그대로 반환

*/
