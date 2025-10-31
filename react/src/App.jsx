import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
     
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
          (btn) =>
            btn === "=" ? (
              <button key={btn} onClick={handleCalculate}>
                {btn}
              </button>
            ) : (
              <button key={btn} onClick={() => handleClick(btn)}>
                {btn}
              </button>
            )
        )}
        <button onClick={handleClear}>AC</button>
      </div>
    </div>
  );
}

export default App;
