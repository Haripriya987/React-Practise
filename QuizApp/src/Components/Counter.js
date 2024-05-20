import "./App.css";
import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("may 20 2025");
  date.setDate(date.getDate() + count);

  function inc() {
    setCount((c) => c + step);
  }
  function dec() {
    setCount((c) => c - step);
  }

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  function reset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="app">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        {step}
      </div>

      <div>
        <button onClick={dec}>-</button>

        <input value={count} onChange={(e) => Number(e.target.count)} />
        <button onClick={inc}>+</button>
      </div>
      <p>Date:{date.toDateString()}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
