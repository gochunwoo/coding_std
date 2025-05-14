import React, { useState, useEffect } from "react";
import axios from "axios";

const MyProduct2 = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // 컴포넌트가 mount된 후 Ajax 요청 : axios
  useEffect(() => {
    axios
      .get("/Sangpum.jsp")
      .then((res) => {
        setIsLoaded(true);
        setItems(res.data.items);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>에러 : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>로딩중 꼴받아도 기다리셈 ㅋㅋㅋㅋ</div>;
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

export default MyProduct2;
