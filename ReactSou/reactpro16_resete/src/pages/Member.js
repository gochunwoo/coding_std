import { Link } from "react-router-dom";

export default function Member() {
  return (
    <>
      <h1>메인 페이지</h1>
      <h2>정보 확인</h2>
      <ul>
        <li>
          <Link to="members">회원목록</Link>
        </li>
      </ul>
    </>
  );
}
