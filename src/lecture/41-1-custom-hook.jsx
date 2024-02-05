import React from 'react';

function Exercise() {
  return (
    <div>
      <StopWatch />
      <Timer />
    </div>
  );
}

// 사이드 이펙트를 사용하는 리액트 컴포넌트
// [힌트] 리액트 훅 : 리-렌더링 유발 ❌, 함수가 리-렌더링 되어도 값을 기억
//       useRef vs. useState
function StopWatch() {
  const [time, setTime] = React.useState(0);

  const timerRef = React.useRef(0); // { current: 0 }

  // 스톱워치 시작 핸들러
  const handleStart = () => {
    const current = Date.now();

    const start = current;
    let now = current;

    // 인터벌 타이머 작동 (리액트 렌더링 관련 ❌)
    timerRef.current = setInterval(() => {
      now = Date.now();
      const nextTime = (now - start) / 1000;
      setTime(nextTime);
    }, 10 /* 0.01s === 10ms */);

    console.log({ in: timerRef.current });
  };

  // 스톱워치 일시정지 핸들러
  const handlePause = () => {
    console.log('일시정지');
    clearInterval(timerRef.current);
  };

  // 스톱워치 정지 핸들러
  const handleStop = () => {
    console.log('정지');
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
