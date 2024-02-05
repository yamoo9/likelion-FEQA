import { useState, useRef } from 'react';

function useTime() {
  const [time, setTime] = useState(0);

  const timerRef = useRef({
    id: 0,
    start: null,
  });

  const handleStart = () => {
    if (!timerRef.current.start) {
      timerRef.current.start = Date.now();
    }

    const start = timerRef.current.start;

    timerRef.current.id = setInterval(() => {
      const lastTime = (Date.now() - start) / 1000;
      setTime(lastTime);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(timerRef.current.id);
  };

  const handleStop = () => {
    handlePause();
    setTime(0);
    timerRef.current.start = null;
  };

  return [time, handleStart, handlePause, handleStop];
}

export default useTime;
