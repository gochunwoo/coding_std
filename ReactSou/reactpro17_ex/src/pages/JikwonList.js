import { useEffect, useState } from "react";
import { getAllJikwon, updateJik } from "../api/jikwon";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function JikwonList() {
  const [data, setData] = useState([]);
  const [editNo, setEditNo] = useState(null);
  const [editJik, setEditJik] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadList();
  }, []);

  const loadList = () => {
    getAllJikwon().then(setData);
  };

  const handleEditClick = (no, currentJik) => {
    setEditNo(no);
    setEditJik(currentJik);
  };

  const handleEditChange = (e) => {
    setEditJik(e.target.value);
  };

  const handleEditSave = async (no) => {
    await updateJik(no, editJik);
    setEditNo(null);
    setEditJik("");
    loadList();
  };

  const handleEditCancel = () => {
    setEditNo(null);
    setEditJik("");
  };

  // 퇴사(삭제) 기능
  const handleDelete = async (no) => {
    if (window.confirm("정말 퇴사처리 하시겠습니까?")) {
      await axios.delete(`http://localhost:8080/api/jikwon/${no}`);
      loadList();
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold mb-0">직원 정보</h2>
        <Link to="/add" className="btn btn-primary btn-lg">
          + 신규 직원 등록
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>사번</th>
              <th>이름</th>
              <th>직급</th>
              <th>근무년수</th>
              <th>연봉</th>
              <th style={{ minWidth: 120 }}>관리</th>
            </tr>
          </thead>
          <tbody>
            {data.map((j) => (
              <tr key={j.jikwonno}>
                <td>{j.jikwonno}</td>
                <td>{j.jikwonname}</td>
                <td>
                  {editNo === j.jikwonno ? (
                    <input
                      className="form-control"
                      value={editJik}
                      onChange={handleEditChange}
                      style={{ minWidth: 90 }}
                    />
                  ) : (
                    j.jikwonjik
                  )}
                </td>
                <td>{2025 - Number(j.jikwonibsail?.split("-")[0])}</td>
                <td>{j.jikwonpay}</td>
                <td>
                  {editNo === j.jikwonno ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleEditSave(j.jikwonno)}
                      >
                        저장
                      </button>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={handleEditCancel}
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEditClick(j.jikwonno, j.jikwonjik)}
                      >
                        수정
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(j.jikwonno)}
                      >
                        퇴사
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JikwonList;
