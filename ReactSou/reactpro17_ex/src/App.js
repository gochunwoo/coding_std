import { Routes, Route, Link } from "react-router-dom";
import JikwonList from "./pages/JikwonList";
import JikwonGender from "./pages/JikwonGender";
import Home from "./pages/Home";
import JikwonAdd from "./pages/JikwonAdd";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand navbar-dark bg-primary px-3">
        <Link to="/" className="navbar-brand fw-bold">
          HR SYSTEM
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">
            메인페이지
          </Link>
          <Link to="/list" className="nav-link">
            직원목록
          </Link>
          <Link to="/gender" className="nav-link">
            성별/연봉
          </Link>
          <Link to="/add" className="nav-link">
            직원등록
          </Link>
        </div>
      </nav>
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<JikwonList />} />
          <Route path="/gender" element={<JikwonGender />} />
          <Route path="/add" element={<JikwonAdd />} />
        </Routes>
      </div>
      <footer className="text-center text-secondary py-4 small bg-light border-top">
        &copy; 2025 우리회사 HR관리팀. 모든 데이터는 안전하게 관리됩니다.
      </footer>
    </div>
  );
}
export default App;
