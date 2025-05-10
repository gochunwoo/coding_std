import React, { useState } from "react";
import CmMeter from "./mydir/CmMeter";

function App() {
  const [result, setResult] = useState({ meter: "", cm: "" });

  const handleConvert = (data) => {
    setResult(data);
  };

  // 부트스랩 설치:   cmd 창에     npm install bootstrap       
  return (
    <div className="alert alert-success mt-3">
      <CmMeter onConvert={handleConvert} />
      <div className="alert alert-success mt-3">
        <h2>😴 길이 환산 🏠</h2>
        메인 결과:미터: {result.meter} / 센티미터: {result.cm}
      </div>
    </div>
  );
}

export default App;
