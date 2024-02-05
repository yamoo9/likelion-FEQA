import React from 'react';

// 첫번째 커스텀(사용자 정의) 훅

function Exercise() {
  return (
    <div>
      <StopWatch />
      <Timer />
    </div>
  );
}

function StopWatch() {
  const [time, setTime] = React.useState(0);

  // 리액트 렌더링에 영향을 주지 않으면서
  // 어떤 값을 기억하고 싶다. useRef(memoizedValue)
  const timerRef = React.useRef({
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

    console.log({ stop: timerRef.current });
  };

  const displayTimer = time === 0 ? 0 : time.toFixed(3);

  return (
    <div>
      <h2>Stop Watch: {displayTimer}초</h2>
      <div className="flex gap-2 my-4">
        <button type="button" onClick={handleStart}>
          시작
        </button>
        <button type="button" onClick={handlePause}>
          일시정지
        </button>
        <button type="button" onClick={handleStop}>
          정지
        </button>
      </div>
    </div>
  );
}

function Timer() {
  return (
    <div>
      <h2>Demo 2</h2>
    </div>
  );
}

export default Exercise;
