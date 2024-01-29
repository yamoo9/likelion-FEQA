import React from 'react';
import classes from './CountUp.module.css';

function CountUp({ count: initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);

  const handleCountUp = () => {
    const nextCount = count + 1;
    setCount(nextCount);
  };

  return (
    <div className={classes.CountUp}>
      <output>{count}</output>
      <button
        type="button"
        className={classes.button}
        aria-label="카운트 1업"
        onClick={handleCountUp}
      >
        +1
      </button>
    </div>
  );
}

export default CountUp;
