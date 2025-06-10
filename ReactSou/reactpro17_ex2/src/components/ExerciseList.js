import React, { useEffect, useState } from "react";
import {
  getAllExercise,
  updateExercise,
  deleteExercise,
} from "../api/exercise";
import { useSelector } from "react-redux";

function ExerciseList() {
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null); // 현재 수정 중인 id
  const [editRow, setEditRow] = useState({}); // 수정할 값 임시 저장
  const { weight } = useSelector((state) => state.user);

  const load = async () => {
    setList(await getAllExercise());
  };

  useEffect(() => {
    load();
  }, []);

  // 칼로리 자동 계산
  const calcCalorie = (duration) =>
    Math.round(0.05 * (weight || 0) * (duration || 0));

  const handleEdit = (row) => {
    setEditId(row.id);
    setEditRow({ ...row });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditRow((prev) => ({
      ...prev,
      [name]: value,
      calorieburn: name === "duration" ? calcCalorie(value) : prev.calorieburn,
    }));
  };

  const handleSave = async (id) => {
    await updateExercise(id, {
      ...editRow,
      calorieburn: calcCalorie(editRow.duration),
    });
    setEditId(null);
    load();
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await deleteExercise(id);
    load();
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>운동명</th>
          <th>운동시간(분)</th>
          <th>칼로리</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {list.map((row) =>
          editId === row.id ? (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  name="name"
                  value={editRow.name}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  name="duration"
                  type="number"
                  value={editRow.duration}
                  onChange={handleChange}
                />
              </td>
              <td>{calcCalorie(editRow.duration)}</td>
              <td>
                <button onClick={() => handleSave(row.id)}>저장</button>
                <button onClick={handleCancel}>취소</button>
              </td>
              <td>
                <button onClick={() => handleDelete(row.id)}>삭제</button>
              </td>
            </tr>
          ) : (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.duration}</td>
              <td>{row.calorieburn}</td>
              <td>
                <button onClick={() => handleEdit(row)}>수정</button>
              </td>
              <td>
                <button onClick={() => handleDelete(row.id)}>삭제</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default ExerciseList;
