import React, { useState } from 'react';
import Big from 'big.js';
import Button from './Button';
import './calculator.css';
import operate from '../logic/operate';

function Calculator() {
  const [previousOperation, setpreviousOperation] = useState('');
  const [currentOperation, setcurrentOperation] = useState();
  const [operation, setNewOperation] = useState();

  const handleDigitClick = (digit) => {
    if (digit === '.' && currentOperation.includes('.')) return;
    if (currentOperation === '0' && digit !== '.') {
      setcurrentOperation(digit);
    } else {
      setcurrentOperation(currentOperation + digit);
    }
  };

  const handleOperationClick = (operation) => {
    if (previousOperation === '') {
      setpreviousOperation(currentOperation);
      setcurrentOperation('0');
      setNewOperation(operation);
    } else {
      const result = operate(previousOperation, currentOperation, operation);
      setpreviousOperation(result);
      setcurrentOperation('0');
      setNewOperation(operation);
    }
  };

  const handleEqualsClick = () => {
    const result = operate(previousOperation, currentOperation, operation);
    setpreviousOperation('');
    setcurrentOperation(result);
    setNewOperation('');
  };

  const handleAllClearClick = () => {
    setpreviousOperation('');
    setcurrentOperation('0');
    setNewOperation('');
  };

  const handleNegateClick = () => {
    setcurrentOperation(Big(currentOperation).times(-1).toString());
  };

  return (
    <div className="calculator-grid">
      <div className="input-output">
        <div className="current-operand">
          {operation}
          {previousOperation}
        </div>
        <div className="input-output">{currentOperation}</div>
      </div>
      <Button handleClick={handleAllClearClick} type="button" digit="AC" />
      <Button handleClick={handleNegateClick} type="button" digit="+/-" />
      <Button handleClick={handleOperationClick} type="button" digit="%" />
      <Button
        handleClick={handleOperationClick}
        type="button"
        digit="÷"
        className="btncolor"
      />
      <Button handleClick={handleDigitClick} type="button" digit="7" />
      <Button handleClick={handleDigitClick} type="button" digit="8" />
      <Button handleClick={handleDigitClick} type="button" digit="9" />
      <Button
        handleClick={handleOperationClick}
        type="button"
        digit="x"
        className="btncolor"
      />
      <Button handleClick={handleDigitClick} type="button" digit="4" />
      <Button handleClick={handleDigitClick} type="button" digit="5" />
      <Button handleClick={handleDigitClick} type="button" digit="6" />
      <Button
        handleClick={handleOperationClick}
        type="button"
        digit="-"
        className="btncolor"
      />
      <Button handleClick={handleDigitClick} type="button" digit="1" />
      <Button handleClick={handleDigitClick} type="button" digit="2" />
      <Button handleClick={handleDigitClick} type="button" digit="3" />
      <Button
        handleClick={handleOperationClick}
        type="button"
        digit="+"
        className="btncolor"
      />
      <Button
        handleClick={handleDigitClick}
        type="button"
        digit="0"
        className="span-two"
      />
      <Button handleClick={handleDigitClick} type="button" digit="." />
      <Button
        handleClick={handleEqualsClick}
        type="button"
        digit="="
        className="btncolor"
      />
    </div>
  );
}

export default Calculator;
