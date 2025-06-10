import React, { useState } from "react";
import MainForm from "./components/MainForm";
import ExerciseForm from "./components/ExerciseForm";
import ExerciseList from "./components/ExerciseList";

function App() {
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  // 저장/수정 후 ExerciseList 새로고침
  const handleSaved = () => setRefresh(!refresh);

  return (
    <div>
      <h2>운동 기록 관리</h2>
      <MainForm />
      <ExerciseForm selected={selected} onSaved={handleSaved} />
      <ExerciseList onSelect={setSelected} key={refresh} />
    </div>
  );
}

export default App;
