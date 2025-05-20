import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // API 직접 사용

function JikwonAdd() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    jikwonno: "",
    jikwonname: "",
    busernum: "",
    jikwonjik: "",
    jikwonpay: "",
    jikwonibsail: "",
    jikwongen: "",
    jikwonrating: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/jikwon", form);
    alert("직원 등록 완료!");
    navigate("/list");
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">신규 직원 등록</h2>
      <form className="row g-3" onSubmit={handleSubmit} autoComplete="off">
        <div className="col-md-3">
          <label className="form-label">사번</label>
          <input
            className="form-control"
            name="jikwonno"
            value={form.jikwonno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">이름</label>
          <input
            className="form-control"
            name="jikwonname"
            value={form.jikwonname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">부서번호</label>
          <input
            className="form-control"
            name="busernum"
            value={form.busernum}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">직급</label>
          <input
            className="form-control"
            name="jikwonjik"
            value={form.jikwonjik}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">급여</label>
          <input
            className="form-control"
            name="jikwonpay"
            value={form.jikwonpay}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">입사일(YYYY-MM-DD)</label>
          <input
            className="form-control"
            name="jikwonibsail"
            value={form.jikwonibsail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">성별</label>
          <select
            className="form-select"
            name="jikwongen"
            value={form.jikwongen}
            onChange={handleChange}
            required
          >
            <option value="">선택</option>
            <option value="남">남</option>
            <option value="여">여</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">등급</label>
          <input
            className="form-control"
            name="jikwonrating"
            value={form.jikwonrating}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 mt-3">
          <button className="btn btn-primary px-4" type="submit">
            등록
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary ms-2"
            onClick={() => navigate("/list")}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
export default JikwonAdd;
