import React from "react";
import { useState } from "react";

import { Container } from "./App.js";

export function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPendingOperation] = useState(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];

  const handleClick = (value) => {
    setCurrentValue((prevValue) => {
      if (prevValue === "0") {
        return value;
      } else {
        return prevValue + value;
      }
    });

    setCompleteOperation((prevOperation) => prevOperation + value);
  };

  const handleOperation = (operation) => {
    setCompleteOperation(`${currentValue} ${operation} `);
    setPendingOperation(operation);
    setPendingValue(currentValue);
    setCurrentValue("0");
  };

  const handleCalculate = () => {
    if (!pendingOperation || !pendingValue) {
      return;
    }

    const num1 = parseFloat(pendingValue);
    const num2 = parseFloat(currentValue);

    let result;

    switch (pendingOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          setCurrentValue("Error");
          setCompleteOperation("Error");
          setPendingOperation(null);
          setPendingValue(null);
        }
        break;

      default:
        break;
    }

    setCompleteOperation(
      `${pendingValue} ${pendingOperation} ${currentValue} = ${result} `
    );

    setCurrentValue(result.toString());
    setPendingOperation(null);
    setPendingValue(null);
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPendingOperation(null);
    setPendingOperation(null);
    setCompleteOperation("");
  };

  return (
    <Container className="calculator">
      <div className="complete-operation">{completeOperation}</div>
      <div className="display">{currentValue}</div>

      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        {keypadNumbers.map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
        {operations.map((operation) => (
          <button key={operation} onClick={() => handleOperation(operation)}>
            {operation}
          </button>
        ))}
        <button onClick={handleCalculate}>=</button>
      </div>
    </Container>
  );
}