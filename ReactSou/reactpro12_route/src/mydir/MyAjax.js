import React, { useState, useEffect } from "react";

const MyProduct = () => {
  const [error, setError] = useState(null);
  const [isLoadded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // 컴포넌트 mount된 후 Ajax 요청 : fetch
  useEffect(() => {
    fetch("/aaa.jsp", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("네크워크오류");
        }
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); // 의존성 배열 1회만실행

  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoadded) {
    return <div>로딩중 기다려....</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
};

export default MyProduct;
