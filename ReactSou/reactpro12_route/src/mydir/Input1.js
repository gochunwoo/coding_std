import React, { useState } from "react";

const Input1 = () => {
  const [txtvalue, setTxtvalue] = useState("");

  const changeFunc = (e) => {
    setTxtvalue(e.target.value);
  };

  return (
    <div>
      자료 입력 :
      <input type="text" value={txtvalue} onChange={changeFunc} />
    </div>
  );
};

export default Input1;
