import { useReducer } from "react";
import "./App.css";

const initialState = {
  amount: 0,
  loan: 0,
  isActive: false,
};
function reducer(state, action) {
  if (!state.isActive && action.type !== "open") return state;

  switch (action.type) {
    case "open":
      return {
        ...state,
        amount: state.amount + 500,
        isActive: true,
      };

    case "deposit":
      return {
        ...state,
        amount: state.amount + action.payload,
      };

    case "withdraw":
      return {
        ...state,
        amount: state.amount - action.payload,
      };

    case "requestLoan":
      if (state.loan > 0) return state;

      return {
        ...state,
        amount: state.amount + action.payload,
        loan: action.payload,
      };

    case "payLoan":
      if (state.loan === 0) return state;

      return {
        ...state,
        amount: state.amount - action.payload,
        loan: 0,
      };

    case "close":
      if (state.amount !== 0 || state.loan > 0) return state;

      return {
        ...initialState,
      };

    default:
      throw new Error("Error has occured");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { amount, loan, isActive } = state;

  return (
    <div className="App">
      <h1>UseReducer Bank Account</h1>
      <p>Balance : {amount}</p>
      <p>Loan:{loan}</p>
      <p>
        <button onClick={() => dispatch({ type: "open" })} disabled={isActive}>
          open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={!isActive}
        >
          withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
          disabled={!isActive}
        >
          Request loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan", payload: 5000 })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "close" })}
          disabled={!isActive}
        >
          Close Account
        </button>
      </p>
    </div>
  );
}

export default App;
