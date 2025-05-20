import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card shadow-lg rounded-4 border-0">
            <div className="card-body text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="사원 아이콘"
                width={96}
                className="mb-4"
              />
              <h1 className="mb-2 fw-bold" style={{ color: "#3056d3" }}>
                Welcome! HR 관리자 시스템
              </h1>
              <p className="mb-4 text-secondary">
                이곳은 우리 회사 인사/직원 관리 시스템입니다.
                <br />
                <span className="text-muted">사람이 곧 경쟁력! 👨‍💼👩‍💼</span>
              </p>
              <div className="d-grid gap-3 mb-4">
                <Link to="/list" className="btn btn-primary btn-lg fw-bold">
                  직원 목록 바로가기
                </Link>
                <Link
                  to="/gender"
                  className="btn btn-warning btn-lg fw-bold text-dark"
                >
                  성별/연봉 통계 보기
                </Link>
              </div>
              <div className="alert alert-info text-start mt-3">
                <strong>📣 사용 Tip</strong>
                <ul className="mb-0 ms-3">
                  <li>
                    직원 목록에서 <b>직급을 바로 수정</b>할 수 있습니다.
                  </li>
                  <li>
                    각 직원의 <b>정보를 실시간으로 확인</b>하세요.
                  </li>
                  <li>상단 메뉴에서 원하는 기능에 빠르게 접근!</li>
                </ul>
              </div>
              <div className="mt-4 small text-secondary">
                &copy; 2025 우리회사 HR관리팀 <br />
                <span className="text-muted">
                  모든 데이터는 내부 서버에서 안전하게 관리됩니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
