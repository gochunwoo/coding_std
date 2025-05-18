import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCustomers } from "../redux/Action";
import axios from "axios";

const CustomersSearch = () => {
  const [searchDept, setSearchDept] = useState("");
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/buser/bydept",
        {
          params: { busername: searchDept },
        }
      );
      dispatch(setCustomers(response.data));
    } catch (err) {
      alert("데이터 불러오기 실패!");
      console.error(err);
    }
  };

  return (
    <div>
      <h3>부서별 직원 검색 결과</h3>
      <input
        type="text"
        value={searchDept}
        onChange={(e) => setSearchDept(e.target.value)}
        placeholder="부서명 검색"
      />
      <button onClick={handleSearch}>검색</button>
      <br />
      <ul>
        {customers.map((emp, idx) => (
          <li key={emp.jikwonno ?? `emp_${idx}`}>
            {emp.jikwonno}번 / 직원명 : {emp.jikwonname} / 직급 :{" "}
            {emp.jikwonjik} / 부서 : {emp.buser?.busername}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersSearch;
