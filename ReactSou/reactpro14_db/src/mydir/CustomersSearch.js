import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCustomers } from "../redux/Action";
import axios from "axios";

const CustomersSearch = () => {
  const [searchName, setSearchName] = useState("");

  const customers = useSelector((state) => state.customers);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/gogek", {
        params: { name: searchName },
      });
      dispatch(setCustomers(response.data));
    } catch (err) {
      alert("데이터 불러오기 실패!");
      console.error(err);
    }
  };

  return (
    <div>
      <h3>고객 이름 검색 결과</h3>
      <input
        type="text"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="이름 검색"
      />
      <button onClick={handleSearch}>검색</button>
      <br />
      <ul>
        {customers.map((cus) => (
          <li key={cus.gogekno}>
            {cus.gogekno}번 / 고객명 :{cus.gogekname} / 연락처 : {cus.gogektel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersSearch;
