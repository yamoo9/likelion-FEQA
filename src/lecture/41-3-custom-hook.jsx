import { useTime } from '@/hooks';

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
  // 배열 구조 분해 할당 API
  // const [time, start, pause, stop, display] = useTime();

  // 객체 구조 분해 할당 API
  const { time, getDisplayTime: display, play, pause, stop } = useTime();

  return (
    <div>
      <h2>Stop Watch: {display(time)}초</h2>
      <div className="flex gap-2 my-4">
        <button type="button" onClick={play}>
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

function Timer() {
  // 배열 구조 분해 할당 API
  // const [time, begin, , , output] = useTime();

  // 객체 구조 분해 할당 API
  const { stop, time, getDisplayTime, play } = useTime();

  const printTime = getDisplayTime(time, 2);

  return (
    <div>
      <button type="button" onClick={play}>
        BEGIN
      </button>
      <h2>타이머: {printTime}s</h2>
      <button type="button" onClick={stop}>
        END
      </button>
    </div>
  );
}

export default Exercise;
