import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + value);

  function increment() {
    setValue((v) => v + step);
  }
  function decrement() {
    setValue((v) => v - step);
  }

  function handleReset() {
    setStep(1);
    setValue(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step} </span>
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        ></input>

        <button onClick={increment}> +</button>
      </div>

      <p>
        <span>
          {value === 0
            ? "Today is "
            : value > 0
            ? `${value} days from today is `
            : `${value}  days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>

      {value !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}> Reset</button>
        </div>
      ) : null}
    </div>
  );
}
export default App;
