import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../redux/Action";
import axios from "axios";

const EmployeesSearch = () => {
  const [searchName, setSearchName] = useState("");

  // reducers.js의 employeesReducer에서 관리되는 상태를 조회
  const employees = useSelector((state) => state.employees);

  const dispatch = useDispatch(); // dispatch(setEmploees(response.data))

  const handleSearch = async () => {
    // API요청,파일읽기,데이터베이스 작업등은 예상치 못한 오류 때문에
    // 트라이문으로 감싸지않으면 프로그램이멈출수있음
    try {
      const response = await axios.get("http://localhost:8080/api/jikwon", {
        params: { name: searchName }, // 서버에서 파라미터 처리할 때만 의미 있음
      });
      dispatch(setEmployees(response.data));
    } catch (err) {
      alert("데이터 불러오기 실패!");
      console.error(err);
    }
  };
  return (
    <div>
      <h3>직원 이름 검색 결과</h3>
      <input
        type="text"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="이름 검색"
      />
      <button onClick={handleSearch}>검색</button>
      <br />
      <ul>
        {employees.map((emp) => (
          <li key={emp.jikwonno}>
            {emp.jikwonno}번 / 직원명 :{emp.jikwonname} / {emp.jikwonpay}원
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesSearch;

/*
코드 요약
1. 이름 입력 →
2. 검색 버튼 클릭(이벤트) →
3. andleSearch 함수에서 AJAX(axios)로 서버에 GET 요청
    (서버에서 name 파라미터 받으면 필터링된 결과 반환)
4. 받은 데이터를 dispatch로 리덕스에 저장
5. Redux 상태(employees)를 map으로 화면에 뿌림
6. try-catch로 에러 처리도 안정적으로 구현
*/
