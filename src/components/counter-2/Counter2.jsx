import React from 'react';
import { useState } from 'react';
import './Counter2.css';

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  const onMultiplication = () => {
    setCount(count * 2);
  };

  const onDivision = () => {
    setCount(count / 2);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <div className="counter2">
      <h3 className="counter2__text">Counter: {count}</h3>
      <div className="counter2__btns">
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onMultiplication}>x2</button>
        <button onClick={onDivision}>/2</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter2;
