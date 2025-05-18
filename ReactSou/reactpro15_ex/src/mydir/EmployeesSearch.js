import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../redux/Action";
import axios from "axios";

const EmployeesSearch = () => {
  const [searchJik, setSearchJik] = useState("");
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/jikwon/byjik",
        {
          params: { jik: searchJik },
        }
      );
      dispatch(setEmployees(response.data));
    } catch (err) {
      alert("데이터 불러오기 실패!");
      console.error(err);
    }
  };

  return (
    <div>
      <h3>직원 직급 검색 결과</h3>
      <input
        type="text"
        value={searchJik}
        onChange={(e) => setSearchJik(e.target.value)}
        placeholder="직급 검색"
      />
      <button onClick={handleSearch}>검색</button>
      <br />
      <ul>
        {employees.map((emp, idx) => (
          <li key={emp.jikwonno ?? `emp_${idx}`}>
            {emp.jikwonno}번 / 직원명 : {emp.jikwonname} / 직급 :{" "}
            {emp.jikwonjik}
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
