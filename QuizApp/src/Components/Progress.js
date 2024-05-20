import React from "react";

export default function Progress({
  index,
  numQuestion,
  points,
  maximumPossiblePoints,
  answer,
}) {
  return (
    // console.log(index,numQuestion,points,maximumPossiblePoints)
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> /{numQuestion}
      </p>

      <p>
        <strong>{points}</strong> /{maximumPossiblePoints}
      </p>
    </header>
  );
}

//
