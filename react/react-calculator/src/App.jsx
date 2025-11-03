import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

 
  function handleClick(value) {
    
    const operators = ["+", "-", "*", "/"];
    const lastChar = input.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
      return; // 
    }

    setInput(input + value);
  }

  function handleClear() {
    setInput("");
  }

  function handleEqual() {
    try {
  
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  }

  return (
    <div className="App">
      <h2>React Calculator</h2>
      <div className="display">{input || "0"}</div>

      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>
        <button onClick={() => handleClick("-")}>−</button>

        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}

        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default App;
