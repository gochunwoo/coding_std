import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberInsForm() {
  const navigate = useNavigate();

  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    axios
      .post("/members", state)
      .then((res) => {
        if (res.data.isSuccess) {
          alert("추가완료");
          navigate("/members");
        } else {
          alert("추가 실패");
        }
      })
      .catch((error) => {
        console.log("등록 오류:", error);
      });
  };

  return (
    <>
      <h2>새 회원 입력</h2>
      번호 : <input onChange={handleChange} type="text" name="num" />
      <br />
      이름 : <input onChange={handleChange} type="text" name="name" />
      <br />
      주소 : <input onChange={handleChange} type="text" name="addr" />
      <br />
      <button onClick={handleSave}>추가</button>
    </>
  );
}
