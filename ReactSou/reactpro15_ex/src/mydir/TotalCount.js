import React from "react";
import { useSelector } from "react-redux";

const TotalCount = () => {
  const employees = useSelector((state) => state.employees);
  const customers = useSelector((state) => state.customers);

  const totalEmployees = employees.length;
  const totalCustomers = customers.length;
  const totalCount = totalEmployees + totalCustomers;

  return (
    <div>
      <p>직원수: {totalEmployees}명</p>
      <p>고객수: {totalCustomers}명</p>
      <p>총인원: {totalCount}명</p>
    </div>
  );
};

export default TotalCount;
