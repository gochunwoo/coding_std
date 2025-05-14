import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const Count = () => {
  const [member, setMerber] = useState(0);
  const increase = () => {
    setMerber(member + 1);
  };
  const decrease = () => {
    setMerber(member - 1);
  };
  return (
    <div>
      <br></br>
      <Button onClick={increase}>회원 증가</Button>&nbsp;&nbsp;
      <Button onClick={decrease}>회원 감소</Button>&nbsp;&nbsp;
      <p>{member}</p>
    </div>
  );
};

export default Count;
