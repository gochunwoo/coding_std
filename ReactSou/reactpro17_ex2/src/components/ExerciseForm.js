import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addExercise, updateExercise } from "../api/exercise";

function ExerciseForm({ selected, onSaved }) {
  const { weight } = useSelector((state) => state.user);

  const [name, setName] = useState(selected ? selected.name : "");
  const [duration, setDuration] = useState(selected ? selected.duration : "");

  // 칼로리 계산 (0.05 * 체중 * 운동시간)
  const calcCalorie = () => {
    if (!weight || !duration) return 0;
    return Math.round(0.05 * weight * duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exercise = { name, duration, calorieburn: calcCalorie() };
    if (selected) {
      await updateExercise(selected.id, exercise);
    } else {
      await addExercise(exercise);
    }
    onSaved(); // 저장/수정 후 리스트 갱신
    setName("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        운동명:{" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      &nbsp;&nbsp;
      <label>
        운동시간(분):{" "}
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>
      &nbsp;&nbsp;
      <button type="submit">{selected ? "수정" : "등록"}</button>
      &nbsp;소모칼로리: <b>{calcCalorie()}</b> kcal
    </form>
  );
}

export default ExerciseForm;
