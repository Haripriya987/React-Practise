import "./App.css";
import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };

    case "inc":
      return { ...state, count: state.count + state.step };

    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };

    case "reset":
      // return { count: 0, step: 1 };
      return initialState;
    default:
      console.log("Something error occured");
  }

  // if (action.type === "inc") return state + action.payload;
  // if (action.type === "dec") return state - action.payload;
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;

  if (action.type === "setCount") return action.payload;
}

function Counter2() {
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;

  const date = new Date("may 20 2025");
  date.setDate(date.getDate() + count);

  function inc() {
    // setCount((c) => c + step);
    // dispatch({ type: "inc", payload: step });
    dispatch({ type: "inc" });
  }
  function dec() {
    // setCount((c) => c - step);
    // dispatch({ type: "dec", payload: step });
    dispatch({ type: "dec" });
  }

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };
  function defineCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  function reset() {
    // setCount(0);
    // setStep(1);

    dispatch({ type: "reset" });
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

        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <p>Date:{date.toDateString()}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2;
