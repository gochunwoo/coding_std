import { useState } from "react";
import { getJikwonByGender, getAvgPayByGender } from "../api/jikwon";

function JikwonGender() {
  const [gender, setGender] = useState("");
  const [list, setList] = useState([]);
  const [avg, setAvg] = useState([]);

  const handleGender = async (g) => {
    setGender(g);
    const data = await getJikwonByGender(g);
    setList(data);

    const avgData = await getAvgPayByGender();
    setAvg(avgData);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fw-bold">성별 직원</h2>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className={`btn btn-outline-primary btn-lg ${
            gender === "남" ? "active" : ""
          }`}
          onClick={() => handleGender("남")}
        >
          남자
        </button>
        <button
          className={`btn btn-outline-warning btn-lg ${
            gender === "여" ? "active" : ""
          }`}
          onClick={() => handleGender("여")}
        >
          여자
        </button>
      </div>
      <div className="table-responsive mb-3">
        <table className="table table-striped table-hover table-bordered align-middle shadow-sm">
          <thead className="table-info">
            <tr>
              <th>사번</th>
              <th>이름</th>
              <th>연봉</th>
              <th>성별</th>
            </tr>
          </thead>
          <tbody>
            {list.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center text-secondary">
                  성별 버튼을 눌러주세요
                </td>
              </tr>
            ) : (
              list.map((j) => (
                <tr key={j.jikwonno}>
                  <td>{j.jikwonno}</td>
                  <td>{j.jikwonname}</td>
                  <td>{j.jikwonpay}</td>
                  <td>{j.jikwongen}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mb-2 text-center">
        <h4 className="fw-bold">성별 연봉 평균</h4>
        <div className="d-flex justify-content-center gap-3">
          {avg.map(([g, pay]) => (
            <span
              key={g}
              className={`badge bg-${g === "남" ? "primary" : "warning"} text-${
                g === "남" ? "light" : "dark"
              } fs-6 px-4 py-2`}
              style={{ fontWeight: "600" }}
            >
              {g} : {Math.round(pay)} 만원
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default JikwonGender;
