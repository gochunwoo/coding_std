import { useState } from "react";
import "./App.css";
import ScheduleTable from "./components/ScheduleTable";
import AutoFillModal from "./components/AutoFillModal";
import type { CellSource } from "./utils/scheduleRules";
// import { generateSchedule } from "./utils/scheduleRules";
import { smartGenerateSchedule } from "./utils/smartScheduler";

const NURSES = [
  "간호사1",
  "간호사2",
  "간호사3",
  "간호사4",
  "간호사5",
  "간호사6",
  "간호사7",
  "간호사8",
  "간호사9",
  "간호사10",
];
const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const SHIFTS = ["-", "D", "E", "N"]; // 오프, 데이, 이브닝, 나이트
const SHIFT_LABELS: Record<string, string> = {
  "-": "오프",
  D: "데이",
  E: "이브닝",
  N: "나이트",
};

function App() {
  // 10명 × 7일 근무표 상태
  const [schedule, setSchedule] = useState<string[][]>(
    Array.from({ length: NURSES.length }, () => Array(7).fill("-"))
  );
  // 셀의 출처: 'manual'(직접), 'auto'(AI), 'none'(초기)
  const [cellSource, setCellSource] = useState<CellSource[][]>(
    Array.from({ length: NURSES.length }, () => Array(7).fill("none"))
  );
  // AI 셀 강조 체크박스 상태
  const [highlightAI, setHighlightAI] = useState(false);
  // 자동채우기 모달 상태
  const [showAutoModal, setShowAutoModal] = useState(false);
  const [autoOption, setAutoOption] = useState<"balance" | "night" | "fair">(
    "balance"
  );
  const [isFilling, setIsFilling] = useState(false);

  // 셀 클릭 시 근무타입 변경 + 출처를 manual로
  const handleCellClick = (nurseIdx: number, dayIdx: number) => {
    setSchedule((prev) => {
      const newSchedule = prev.map((row) => [...row]);
      const current = newSchedule[nurseIdx][dayIdx];
      const nextIdx = (SHIFTS.indexOf(current) + 1) % SHIFTS.length;
      newSchedule[nurseIdx][dayIdx] = SHIFTS[nextIdx];
      return newSchedule;
    });
    setCellSource((prev) => {
      const newSource = prev.map((row) => [...row]);
      newSource[nurseIdx][dayIdx] = "manual";
      return newSource;
    });
  };

  // AI 자동채우기 셀만 지우기
  const clearAutoCells = () => {
    setSchedule((prevSchedule) =>
      prevSchedule.map((row, i) =>
        row.map((cell, j) => (cellSource[i][j] === "auto" ? "-" : cell))
      )
    );
    setCellSource((prevCellSource) =>
      prevCellSource.map((row) =>
        row.map((src) => (src === "auto" ? "none" : src))
      )
    );
  };

  // 개선된 자동채우기 실행
  const runAutoFill = () => {
    setIsFilling(true);
    setTimeout(() => {
      const {
        schedule: newSchedule,
        cellSource: newSource,
        success,
        message,
      } = smartGenerateSchedule({
        nurses: NURSES,
        days: DAYS,
      });
      setIsFilling(false);
      setShowAutoModal(false);
      if (!success) {
        alert(message || "규칙을 만족하는 근무표를 찾지 못했습니다.");
        return;
      }
      setSchedule(newSchedule);
      setCellSource(newSource);
    }, 100);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>3교대 간호사 근무표 (테스트용)</h2>
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginBottom: 16,
          marginRight: 16,
        }}
      >
        <input
          type="checkbox"
          checked={highlightAI}
          onChange={(e) => setHighlightAI(e.target.checked)}
          style={{ marginRight: 6 }}
        />
        AI 강조
      </label>
      <AutoFillModal
        show={showAutoModal}
        onClose={() => setShowAutoModal(false)}
        onRun={runAutoFill}
        isFilling={isFilling}
        autoOption={autoOption}
        setAutoOption={setAutoOption}
      />
      <button
        onClick={() => setShowAutoModal(true)}
        style={{
          marginBottom: 8,
          padding: "8px 16px",
          fontWeight: "bold",
          background: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        자동채우기
      </button>
      <button
        onClick={clearAutoCells}
        style={{
          marginLeft: 8,
          marginBottom: 16,
          padding: "8px 16px",
          fontWeight: "bold",
          background: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        자동채우기 지우기
      </button>
      <ScheduleTable
        schedule={schedule}
        cellSource={cellSource}
        onCellClick={handleCellClick}
        highlightAI={highlightAI}
        shiftLabels={SHIFT_LABELS}
        nurses={NURSES}
        days={DAYS}
      />
      <p style={{ marginTop: 16, color: "#888" }}>
        셀을 클릭하면 근무타입이 순서대로 변경됩니다 (오프 → 데이 → 이브닝 →
        나이트 → 오프 ...)
      </p>
    </div>
  );
}

export default App;
