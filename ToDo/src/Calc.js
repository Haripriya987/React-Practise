import { useState } from "react";

function Calc() {
  const [amount, setAmount] = useState("");
  const [perc1, setPerc1] = useState(0);
  const [perc2, setPerc2] = useState(0);

  const tip = (amount * (perc1 + perc2)) / 2 / 100;

  function handleReset() {
    setAmount(0);
    setPerc1(0);
    setPerc2(0);
  }

  return (
    <div>
      <Bill amount={amount} onSetAmount={setAmount} />
      <Service perc={perc1} onSelect={setPerc1}>
        How did you like the service
      </Service>
      <Service perc={perc2} onSelect={setPerc2}>
        How did your Friend like the Service
      </Service>
      {amount > 0 && (
        <>
          <Output amount={amount} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
      {/* <p> You pay ${amount}</p> */}
    </div>
  );
}

function Bill({ amount, onSetAmount }) {
  return (
    <div>
      <label>How much was the bill ? </label>
      <input
        type="text"
        value={amount}
        onChange={(e) => onSetAmount(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Service({ children, perc, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={perc} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0"> DiSSatisfied(0%) </option>
        <option value="5">OK (5%)</option>
        <option value="10">It is good(10%)</option>
      </select>
    </div>
  );
}

function Output({ amount, tip }) {
  return (
    <h3>
      You Pay ${amount + tip} (${amount} + $ {tip})
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

export default Calc;
