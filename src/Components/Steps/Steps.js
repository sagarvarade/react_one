import { useState } from "react";
import "./index.css";
import DateCounter from "./DateCounter";

const messages = ["Learn React :)", "Apply For Jobs", "Invest your Income"];

function Steps() {
  //const step=1
  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const nextStep = () => {
    if (step < 3) setSteps((e) => setSteps(e + 1));
  };
  const backStep = () => {
    if (step > 1) setSteps((e) => setSteps(e - 1));
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          {/* <h1>InterActive Components</h1> */}
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={backStep}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <DateCounter />
    </div>
  );
}

export default Steps;
