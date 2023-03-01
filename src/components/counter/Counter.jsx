import React from 'react';
import { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState({});

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setStyle({});
      }, 500);
    };
  }, [count]);

  const onIncrement = () => {
    setCount(count + 1);
    setStyle({ color: 'green' });
  };

  const onDecrement = () => {
    setCount(count - 1);
    setStyle({ color: 'red' });
  };
  return (
    <div className="counter">
      <button className="increment" onClick={onIncrement}>
        +
      </button>
      <span className="count" style={style}>
        {count}
      </span>
      <button className="decrement" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
