import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const products = [
    { id: 1, name: "🍎 Apple" },
    { id: 2, name: "🍌 Banana" },
    { id: 3, name: "🥕 Carrot" },
  ];

  return (
    <div>
      <h2>상품 목록</h2>
      <ui>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ui>
    </div>
  );
}

export default ProductList;
