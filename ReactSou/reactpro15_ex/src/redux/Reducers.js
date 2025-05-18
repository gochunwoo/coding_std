import { combineReducers } from "redux"; // 여러 개의 리듀서를 하나로 결합

const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_EMPLOYEES": // 액션이 디스패치 되면 상태를 action.payload 값으로 갱신
      return action.payload;
    // 사용 예) dispatch({type:"SET_EMPLOYEES", payload[{jikwonno:1,jikwonname:"홍길동"},...}],})
    default:
      return state;
  }
};

const customersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CUSTOMERS": // 액션이 디스패치 되면 상태를 action.payload 값으로 갱신
      return action.payload;
    // 사용 예) dispatch({type:"SET_EMPLOYEES", payload[{gogek:1,gogekname:"고길동"},...}],})
    default:
      return state;
  }
};

export default combineReducers({
  employees: employeesReducer,
  customers: customersReducer,
});

// reducers.js는 리덕스 상태를 갱신하는 작업을 정의한 리듀서를 포함한다
// 각 리듀서는 상태  트리에서 자신과 관련된 데이터만 관리한다.
// 여러 리듀서를 결합하여 리덕스 스토어에서 사용할 수 있는 최상위 리듀서를 만든다.
