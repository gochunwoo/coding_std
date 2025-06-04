type ScheduleTableProps = {
  schedule: string[][];
  cellSource: ("manual" | "auto" | "none")[][];
  onCellClick: (nurseIdx: number, dayIdx: number) => void;
  highlightAI: boolean;
  shiftLabels: Record<string, string>;
  nurses: string[];
  days: string[];
};

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  schedule,
  cellSource,
  onCellClick,
  highlightAI,
  shiftLabels,
  nurses,
  days,
}) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ccc",
              padding: 8,
              background: "#222",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            간호사
          </th>
          {days.map((day) => (
            <th
              key={day}
              style={{
                border: "1px solid #ccc",
                padding: 8,
                background: "#222",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {day}
            </th>
          ))}
          <th
            style={{
              border: "1px solid #ccc",
              padding: 8,
              background: "#222",
              color: "#ffe066",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            D합
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: 8,
              background: "#222",
              color: "#40c4ff",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            E합
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: 8,
              background: "#222",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            N합
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: 8,
              background: "#222",
              color: "#bdbdbd",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            O합
          </th>
        </tr>
      </thead>
      <tbody>
        {nurses.map((nurse, i) => {
          const row = schedule[i];
          const d = row.filter((v) => v === "D").length;
          const e = row.filter((v) => v === "E").length;
          const n = row.filter((v) => v === "N").length;
          const o = row.filter((v) => v === "-").length;
          return (
            <tr key={nurse}>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: 8,
                  background: "#111",
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                {nurse}
              </td>
              {days.map((_, j) => {
                let bg = "#fff",
                  color = "#222";
                if (schedule[i][j] === "-") {
                  bg = "#eee";
                  color = "#888";
                } else if (schedule[i][j] === "D") {
                  bg = "#ffe066";
                  color = "#222";
                } else if (schedule[i][j] === "E") {
                  bg = "#40c4ff";
                  color = "#222";
                } else if (schedule[i][j] === "N") {
                  bg = "#222";
                  color = "#fff";
                }
                if (highlightAI && cellSource[i][j] === "auto") {
                  bg = "#e3f2fd";
                }
                return (
                  <td
                    key={j}
                    style={{
                      border:
                        cellSource[i][j] === "manual"
                          ? "2px solid #1976d2"
                          : "1px solid #ccc",
                      padding: 8,
                      cursor: "pointer",
                      background: bg,
                      color: color,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                    title={
                      shiftLabels[schedule[i][j]] +
                      (highlightAI && cellSource[i][j] === "auto"
                        ? " (AI)"
                        : cellSource[i][j] === "manual"
                        ? " (직접)"
                        : "")
                    }
                    onClick={() => onCellClick(i, j)}
                  >
                    {schedule[i][j]}
                  </td>
                );
              })}
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: 8,
                  color: "#ffe066",
                  background: "#222",
                  fontWeight: 900,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {d}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: 8,
                  color: "#40c4ff",
                  background: "#222",
                  fontWeight: 900,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {e}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: 8,
                  color: "#fff",
                  background: "#222",
                  fontWeight: 900,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {n}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: 8,
                  color: "#bdbdbd",
                  background: "#222",
                  fontWeight: 900,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {o}
              </td>
            </tr>
          );
        })}
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: 8,
              fontWeight: "bold",
              background: "#222",
              color: "#fff",
              fontSize: 16,
            }}
          >
            합계
          </td>
          {days.map((_, j) => {
            const col = schedule.map((row) => row[j]);
            const d = col.filter((v) => v === "D").length;
            const e = col.filter((v) => v === "E").length;
            const n = col.filter((v) => v === "N").length;
            const o = col.filter((v) => v === "-").length;
            return (
              <td
                key={j}
                style={{
                  border: "1px solid #ccc",
                  padding: 8,
                  fontSize: 15,
                  background: "#111",
                  color: "#fff",
                  fontWeight: 900,
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#ffe066", fontWeight: 900 }}>
                  D:{d}{" "}
                </span>
                <span style={{ color: "#40c4ff", fontWeight: 900 }}>
                  E:{e}{" "}
                </span>
                <span style={{ color: "#fff", fontWeight: 900 }}>N:{n} </span>
                <span style={{ color: "#bdbdbd", fontWeight: 900 }}>O:{o}</span>
              </td>
            );
          })}
          <td
            style={{ border: "1px solid #ccc", padding: 8, background: "#111" }}
          ></td>
          <td
            style={{ border: "1px solid #ccc", padding: 8, background: "#111" }}
          ></td>
          <td
            style={{ border: "1px solid #ccc", padding: 8, background: "#111" }}
          ></td>
          <td
            style={{ border: "1px solid #ccc", padding: 8, background: "#111" }}
          ></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ScheduleTable;
