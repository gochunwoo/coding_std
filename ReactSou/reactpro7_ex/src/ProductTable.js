import React from "react";

function ProductTable({ items }) {
  const headers = ["코드", "상품명", "가격"];

  return (
    <div>
      <h3>📋 상품 목록</h3>
      <table>
        <thead>
          <tr>
            {headers.map((title, idx) => (
              <th key={idx}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString()}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
