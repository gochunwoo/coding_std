import React, { useState } from "react";

function CmMeter({ onConvert }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const num = parseFloat(input);
    onConvert({ meter: num, cm: num * 100 });
  };

  return (
    <div>
      <input
        className="form-control"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button className="btn btn-primary" onClick={handleClick}>
        📏📐값📏📐
      </button>
    </div>
  );
}

export default CmMeter;
