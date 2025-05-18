// Redux에서 사용하는 Action을 정의한 파일
// action은 어떤일 발생했는지 알리고, 액션 객체는 type 필드를 포함
// 추가적으로 필요한 데이터(payload)를 함께 전달한다

// 리덕스 상태에서 지구언 데이터를 설정 - 액션 객체 생성됨
// 사용 예) dispatch(setEmployees([{jikwonno:1,jikwonname:"홍길동"},...]))
export const setEmployees = (employees) => ({
  type: "SET_EMPLOYEES",
  payload: employees,
});

// 리덕스 상태에서 고객 데이터를 설정 - 액션 객체 생성됨
// 사용 예) dispatch(setCustomers([{gogekno:1,gogekname:"고길동"},...]))
export const setCustomers = (customers) => ({
  type: "SET_CUSTOMERS",
  payload: customers,
});
