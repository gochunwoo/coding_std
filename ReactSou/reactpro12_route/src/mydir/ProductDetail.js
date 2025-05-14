import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // url에서 :id 가져옴

  return (
    <div>
      <h2>상품 상세 페이지</h2>
      <p>
        현재 선택한 상품 ID는 <strong>{id}</strong>입니다
      </p>
    </div>
  );
}

export default ProductDetail;
