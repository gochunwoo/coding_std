import React, { useState } from "react";
import ProductTable from "./ProductTable";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [deleteCode, setDeleteCode] = useState("");
  const [items, setItems] = useState([]); // 배열

  // 조건이 true면 아래 코드(return)를 실행해서 함수 전체는 멈춘다는뜻
  // 여기서 ! 느낌표는 not 즉 비어있음을 의미
  const handleAdd = () => {
    if (!code || !name || !price) return;

    // 새로운 아이템 추가가
    const newItem = {
      id: Date.now(),
      code,
      name,
      price: Number(price),
    };

    setItems([...items, newItem]);
    setCode("");
    setName("");
    setPrice("");
  };

  // 등록된 상품목록(items)중에서 삭제할 코드와 일치하지 않는 상품만 골라서 새로운 배열을만든다
  const handleDelete = () => {
    const updated = items.filter((item) => item.code !== deleteCode);
    // item.code !== deleteCode  :  삭제할 코드와 같지 않은 상품만 남김
    // fiter()  :  조건을 만족하는 항목만 골라서 새로운 배열 생성
    // updated :  삭제 대상이 빠진 새로운 상품 목록
    setItems(updated);
    setDeleteCode("");
  };

  const count = items.length; // 배열자료형.length  배열에 들어가 있는 요소의 개수를 알려주는 속성(property)
  const total = items.reduce((sum, item) => sum + item.price, 0);
  // reduce()는 배열을 하나의 값으로 축약해주는메서드  (sum, item) => sum + item.price	누적합을 계산하는 로직 초기값은 0
  const average = count > 0 ? (total / count).toFixed(1) : 0.0; // toFixed() 소수점 자릿수를 지정해서 문자열로 변환
  // 상품이 1개이상 있으면 total 나누기 count 해서 toFixed(1) 소수점1자리까지문자열로반환 :(else역할) 0.0 상품없을때 평균

  return (
    <div className="container">
      <h2>상품 등록</h2>

      <div className="input-section">
        <label>
          코드: <input value={code} onChange={(e) => setCode(e.target.value)} />
        </label>
        <label>
          상품명:{" "}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          가격:{" "}
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button onClick={handleAdd}>등록</button>
      </div>

      <div className="input-section">
        <label>
          삭제할 코드:{" "}
          <input
            value={deleteCode}
            onChange={(e) => setDeleteCode(e.target.value)}
          />
        </label>
        <button onClick={handleDelete}>삭제</button>{" "}
        {/* 클릭하면 handleDelete 함수 실행됨 deleteCode에 저장된값과 일치하는상품찾아서삭제 */}
      </div>

      <ProductTable items={items} />

      <div className="summary">
        <p>
          <strong>건수:</strong> {count}개 &nbsp;&nbsp;
          <strong>가격 총합:</strong> {total.toLocaleString()}원 &nbsp;&nbsp;
          <strong>평균:</strong> {average}원
        </p>
      </div>
    </div>
  );
}

export default App;
