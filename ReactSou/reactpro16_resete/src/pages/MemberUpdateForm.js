import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm() {
  const navigate = useNavigate(); // 페이지 이동을 위한 함수
  const { num } = useParams(); // URL에서 회원 번호 추출 ,  /members/:num/edit

  // 수정 대상 회원 정보를 저장할 상태 정의
  const [state, setState] = useState({
    num: 0, // 회원 번호 (readOnly로 수정 못하게 표시)
    name: "", // 회원 이름
    addr: "", // 회원 주소
  });

  // 페이지 마운트 시 기존 회원 정보 불러오기
  useEffect(() => {
    axios
      .get(`/members/${num}`) // 수정 대상 자료 읽기
      .then((res) => {
        setState(res.data); // 받아온 데이터를 state에 저장 (num, name, addr)
      })
      .catch((error) => {
        console.log("데이터 불러오기 오류:", error); // 에러 로그 출력
      });
  }, [num]); // num이 바뀔 때마다 다시 실행됨 (처음 1번 실행됨)

  // input 변경 시 상태 업데이트
  const handleChange = (e) => {
    // 사용자가 입력한 input의 name 속성(name, addr 등)을 기준으로
    // 그 필드의 값만 동적으로 업데이트된다
    // 예) 이름 input을 수정하면 { name: "수정된 값" } 만 바뀜
    setState({
      ...state, // 기존 값을 유지하면서
      [e.target.name]: e.target.value, // 현재 입력한 필드만 수정됨 (동적 키 처리)
    });
  };

  // 수정 완료 후 서버 전송
  const handleUpdate = () => {
    axios
      .put(`/members/${num}`, state) // 수정된 회원 정보 PUT 요청으로 서버에 전송
      .then((res) => {
        if (res.data.isSuccess) {
          // 서버에서 성공 여부 확인
          alert("수정 완료"); // 성공 메시지 출력
          navigate("/members"); // 수정 후 회원 목록 페이지로 이동
        } else {
          alert("수정 실패"); // 실패 메시지 출력
        }
      })
      .catch((error) => {
        console.log("수정 오류:", error); // 수정 요청 중 에러 발생 시 로그 출력
      });
  };

  return (
    <>
      <h2>회원 정보 수정</h2>
      <div>
        번호 : <input type="text" name="num" value={state.num} readOnly />
        <br /> {/* 회원 번호는 수정 불가 */}
        이름 :{" "}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
        <br /> {/* 이름 입력 */}
        주소 :{" "}
        <input
          type="text"
          name="addr"
          onChange={handleChange}
          value={state.addr}
        />
        <br /> {/* 주소 입력 */}
        <button onClick={handleUpdate}>수정 확인</button> {/* 수정 확인 버튼 */}
      </div>
    </>
  );
}
