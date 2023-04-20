import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button
          data-testid="minus-button"
          disabled={disabled}
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          disabled={disabled}
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
        <div>
          <button
            data-testid="on-off-button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setDisabled(!disabled)}
          >
            on/off
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
