import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("App 컴포넌트에 대한 componentDidMount");
    // 초기 상품 목록 로딩
    setTimeout(() => {
      setProducts(["Apple", "Banana", "Carrot"]);
      setLoading(false);
    }, 2000);

    return () => {
      // 클린업 함수
      console.log("App 컴포넌트에 대한 componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    // 업데이트
    if (products.length > 0) {
      console.log("componentDidUpdate 발생");
      console.log("products가 갱신됨");
    }
  }, [products]);

  const handleChange = (e) => {
    setNewProduct(e.target.value); //  변수명 일치
  };

  const handleAddProduct = () => {
    if (newProduct.trim() !== "") {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setNewProduct(""); // 입력창 초기화
    }
  };

  const handleRemoveProduct = (product) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p !== product));
  };

  return (
    <div>
      <h1>상품 목록 관리</h1>
      {loading ? (
        <p>상품 정보...</p>
      ) : (
        <ul>
          {products.map(
            (
              product,
              index // map을 통해서 상품 목록 출력
            ) => (
              <li key={index}>
                {product}
                {""}
                <button onClick={() => handleRemoveProduct(product)}>
                  삭제
                </button>
              </li>
            )
          )}
        </ul>
      )}
      <input
        type="text"
        value={newProduct}
        onChange={handleChange}
        placeholder="새 상품 입력"
      />
      <button onClick={handleAddProduct}>상품 추가</button>
    </div>
  );
};

export default App;
