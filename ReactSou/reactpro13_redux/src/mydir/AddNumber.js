import React, { useState } from "react";

const AddNumber = (props) => {
  const [size, setSize] = useState(1);
  const handleClick = () => {
    props.onClick(size); // 부모로부터 전달받은  onClick 함수. 버튼클릭시 size 값을 부모에게 전달
  };
  const handleChange = (e) => {
    setSize(Number(e.target.value)); // 입력 값을 숫자로 변환 후 상대변수 갱신
  };
  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={handleClick} />
      <input type="text" value={size} onChange={handleChange} />
    </div>
  );
};

export default AddNumber;
