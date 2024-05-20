import React from "react";
import { useEffect } from "react";

export default function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="time">
      {mins < 0 && "0"}
      {mins}:{secs < 0 && "0"}
      {secs}
    </div>
  );
}
