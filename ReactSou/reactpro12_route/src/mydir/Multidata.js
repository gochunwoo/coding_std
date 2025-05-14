import React from "react";

const MemberComp = ({ memberData }) => {
  return (
    <tr>
      <td>{memberData.irum}</td>
      <td>{memberData.junhwa}</td>
    </tr>
  );
};

const Multidata = () => {
  const members = [
    { irum: "Lynn", junhwa: "111-1111" },
    { irum: "oscar", junhwa: "222-2222" },
    { irum: "chunwoo", junhwa: "333-3333" },
  ];

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화</th>
        </tr>
      </thead>
      <tbody>
        {members.map((mem, index) => (
          <MemberComp key={index} memberData={mem} />
        ))}
      </tbody>
    </table>
  );
};

export default Multidata;
