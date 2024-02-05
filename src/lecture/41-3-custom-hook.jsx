import { useState, useRef } from 'react';
import useTime from '@/hooks/useTime';

function Exercise() {
  return (
    <div>
      <StopWatch />
      <hr className="mb-4" />
      <Timer />
    </div>
  );
}

function StopWatch() {
  // 로직 분리
  // 커스텀 훅 사용 API
  const [time, start, pause, stop] = useTime();

  const displayTimer = time === 0 ? 0 : time.toFixed(3);

  return (
    <div>
      <h2>Stop Watch: {displayTimer}초</h2>
      <div className="flex gap-2 my-4">
        <button type="button" onClick={start}>
          시작
        </button>
        <button type="button" onClick={pause}>
          일시정지
        </button>
        <button type="button" onClick={stop}>
          정지
        </button>
      </div>
    </div>
  );
}

// [커스텀 훅을 왜 만들까?]
// 스톱워치에서 구현했던 유사한 기능을 또!!! 또 구현!!
// 로직 복사 + 붙여넣기 -> 수정 (DRY)
// 로직 재사용
// 함수???
// 훅의 규칙! => use로 시작하는 함수! 아! 사용자가 정의하는 훅 함수!
// 아하!!! 커스텀 훅으로 만들자!!!

function Timer() {
  const [time, begin, , end] = useTime();
  const displayTime = time === 0 ? 0 : time.toFixed(3);

  return (
    <div>
      <button type="button" onClick={begin}>
        BEGIN
      </button>
      <h2>타이머: {displayTime}s</h2>
      <button type="button" onClick={end}>
        END
      </button>
    </div>
  );
}

export default Exercise;
