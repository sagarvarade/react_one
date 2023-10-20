import React, { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(0);
  const date = new Date("june 21 2023");
  date.setDate(date.getDate() + count);
  return (
    <div className="steps">
      <div>
        <h2>Date Counter</h2>
        <button className="btn" onClick={(e) => setSteps(steps - 1)}>
          -
        </button>{" "}
        &nbsp;
        <span>Steps : {steps}</span>&nbsp;
        <button className="btn" onClick={(e) => setSteps(steps + 1)}>
          +
        </button>{" "}
        <br />
        <button className="btn" onClick={(e) => setCount(count - steps)}>
          -
        </button>{" "}
        &nbsp;
        <span>Count : {count}</span>&nbsp;
        <button className="btn" onClick={(e) => setCount(count + steps)}>
          +
        </button>
      </div>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
}

export default DateCounter;
