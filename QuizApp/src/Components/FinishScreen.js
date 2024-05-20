import React from "react";

export default function FinishScreen({
  points,
  maximumPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maximumPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maximumPossiblePoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">HighScore {highscore} points</p>

      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart
      </button>
    </>
  );
}
