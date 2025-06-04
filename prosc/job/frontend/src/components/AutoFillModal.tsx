type AutoFillModalProps = {
  show: boolean;
  onClose: () => void;
  onRun: () => void;
  isFilling: boolean;
  autoOption: "balance" | "night" | "fair";
  setAutoOption: (opt: "balance" | "night" | "fair") => void;
};

const AutoFillModal: React.FC<AutoFillModalProps> = ({
  show,
  onClose,
  onRun,
  isFilling,
  autoOption,
  setAutoOption,
}) => {
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.25)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 32,
          minWidth: 340,
          boxShadow: "0 4px 24px #0002",
          position: "relative",
        }}
      >
        <h3 style={{ marginTop: 0 }}>
          자동 채우기{" "}
          <span style={{ color: "#4caf50", fontWeight: 700, fontSize: 18 }}>
            AI
          </span>
        </h3>
        <div style={{ display: "flex", gap: 12, margin: "24px 0" }}>
          <div
            onClick={() => setAutoOption("balance")}
            style={{
              flex: 1,
              border:
                autoOption === "balance"
                  ? "2px solid #4caf50"
                  : "1px solid #ccc",
              borderRadius: 8,
              background: autoOption === "balance" ? "#e3fcec" : "#f8f8f8",
              padding: 16,
              cursor: "pointer",
              minHeight: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <b style={{ color: "#4caf50" }}>밸런스 (추천)</b>
            <span style={{ fontSize: 13, color: "#555", marginTop: 6 }}>
              모든 요소를 고려한 가장 일반적인 설정입니다.
            </span>
          </div>
          <div
            style={{
              flex: 1,
              border: "1px solid #eee",
              borderRadius: 8,
              background: "#f8f8f8",
              padding: 16,
              color: "#bbb",
              minHeight: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pointerEvents: "none",
              opacity: 0.6,
            }}
          >
            <b>연속 나이트 배제</b>
            <span style={{ fontSize: 13, marginTop: 6 }}>준비중입니다.</span>
          </div>
          <div
            style={{
              flex: 1,
              border: "1px solid #eee",
              borderRadius: 8,
              background: "#f8f8f8",
              padding: 16,
              color: "#bbb",
              minHeight: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pointerEvents: "none",
              opacity: 0.6,
            }}
          >
            <b>공정성 특화</b>
            <span style={{ fontSize: 13, marginTop: 6 }}>준비중입니다.</span>
          </div>
        </div>
        <div style={{ color: "#4caf50", fontSize: 14, marginBottom: 16 }}>
          자동 채우기는 1초 이내로 완료됩니다.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button
            onClick={onClose}
            style={{
              padding: "8px 18px",
              borderRadius: 4,
              border: "1px solid #bbb",
              background: "#fff",
              color: "#333",
              fontWeight: 500,
              cursor: "pointer",
            }}
            disabled={isFilling}
          >
            취소
          </button>
          <button
            onClick={onRun}
            style={{
              padding: "8px 18px",
              borderRadius: 4,
              border: "none",
              background: "#4caf50",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
              opacity: isFilling ? 0.6 : 1,
            }}
            disabled={isFilling}
          >
            만들기
          </button>
        </div>
        {isFilling && (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 8,
              textAlign: "center",
              color: "#888",
              fontSize: 13,
            }}
          >
            자동 채우기 중...
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoFillModal;
