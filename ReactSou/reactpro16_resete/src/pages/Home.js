import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate(); // 페이지 이동

  // 컴포넌트가 처음 마운트될 때 멤버 데이터를 불러옴
  useEffect(() => {
    loadDataFunc();
  }, []);

  // 멤버 목록을 불러오는 함수
  const loadDataFunc = () => {
    axios
      .get("/members")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((error) => {
        console.log("읽기 오류", error);
        alert("데이터를 불러오는 데 실패했습니다.");
      });
  };

  // 삭제 처리
  const handleDelete = (num) => {
    axios
      .delete("/members/" + num)
      .then((res) => {
        loadDataFunc(); // 삭제 후 목록 갱신
      })
      .catch((error) => {
        console.log("삭제 오류", error);
        alert("삭제에 실패했습니다.");
      });
  };

  // Link를 사용해 페이지이동(단순하게 이동만 하는경우)을 할수 있으나
  // usenAVIGATE를 이용하면 특정이벤트가 실행됐을때 동작하도록 할 수있다
  // 즉, 추가적인 로직 처리를 가능하게 된다
  return (
    <>
      <Link to="/">홈페이지</Link>&nbsp;&nbsp;
      <Link to="/members/new">회원 추가</Link>&nbsp;&nbsp;
      <h1>회원 정보</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {members.map((item) => (
            <tr key={item.num}>
              <td>{item.num}</td>
              <td>{item.name}</td>
              <td>{item.addr}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/members/${item.num}/edit`);
                  }}
                >
                  수정
                </button>
              </td>
              <td>
                <button type="button" onClick={() => handleDelete(item.num)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
