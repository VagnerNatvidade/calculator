import React from "react";
import { useState } from "react";

import { Container } from "./index";

export function Calculator() {
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

    setCompleteOperation((prevOperation) => prevOperation);
  };

  const handleOperation = (operation) => {
    setCompleteOperation(`${currentValue} ${operation} `);
    setPendingOperation(operation);
    setPendingValue(currentValue);
    setCurrentValue("0");
  };

  const handleCalculate = () => {
    if (!pendingValue || !pendingOperation) {
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
          setCurrentValue("Não é possível dividir por zero");
          setCompleteOperation("Não é possível dividir por zero");
          setPendingOperation(null);
          setPendingValue(null);
        }
        break;

      default:
        break;
    }

    setCompleteOperation(
      `${pendingValue} ${pendingOperation} ${currentValue} =`
    );

    setCurrentValue(String(result));
    setPendingOperation(null);
    setPendingValue(null);
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPendingOperation(null);
    setPendingOperation(null);
    setCompleteOperation("");
  };

  const handleClearCurrentValue = () => {
    setCurrentValue("0");
  };

  return (
    <Container className="calculator">
      <div className="complete-operation">{completeOperation}</div>
      <div className="display">{currentValue}</div>

      <div className="buttons">
        <div>
          {keypadNumbers.map((num) => (
            <button className="num" key={num} onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          <button onClick={handleClear}>CE</button>
          <button onClick={handleClearCurrentValue}>C</button>
        </div>

        <div>
          {operations.map((operation) => (
            <button
              className="operation"
              key={operation}
              onClick={() => handleOperation(operation)}
            >
              {operation}
            </button>
          ))}
        </div>
      </div>
      <button className="equals" onClick={handleCalculate}>
        =
      </button>
    </Container>
  );
}
