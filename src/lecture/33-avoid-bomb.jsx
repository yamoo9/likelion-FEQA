import { useState } from 'react';
import classes from './33-avoid-bomb.module.css';
// console.log(classes);

// jQuery, Vanilla JavaScript
// 명령형 프로그래밍

function Exercise() {
  // 리액트 (선언형 프로그래밍)
  // 상태 선언 방식
  // React.useState() 훅 함수
  // 상태 변경 트리거(요청) → 리액트 감지 → 렌더(가상DOM) → (스냅샷 비교, 재조정)변경이 있을 경우 → 커밋(DOM 반영) → 페인팅

  // 어떤 상태??? 게임 재생/일시정지 제어
  // 게임 중인가요? (isPlaying) => 네(T), 아니오(F) => boolean 타입
  // 프리미티브(primitive) 타입: 불변(immutable) 데이터 관리

  // 개발자가 직접 설정한 상태(데이터)
  const [isPlaying, setIsPlaying] = useState(false /* 초깃값: initial value */);

  // 설정된 상태에서 파생된(derived, 상태에 의존하는) 상태

  // 식
  const gameClassNames = `${classes.game} ${
    !isPlaying ? classes.stop : ''
  }`.trim();

  // 문
  // let gameClassNames = classes.game;

  // if (!isPlaying) {
  //   gameClassNames += ` ${classes.stop}`;
  // }

  // 이벤트 핸들러
  const handleBall = () => {
    globalThis.alert('게임 승! 🎩');
  };

  const handleBomb = () => {
    globalThis.alert('게임 패! 🥲');
  };

  const handleToggle = () => {
    // 이전(previous) 상태 값 기반으로 값 설정
    // isPlaying = true | false
    setIsPlaying(/* [2] callback api */ (isPlaying) => !isPlaying);
  };

  const handleStart = () => {
    // 상태 변경 요청(trigger) -> 리액트 UI 렌더링(함수 컴포넌트 다시 실행 => JSX 다시 반환)
    const nextIsPlaying = true;
    // 새로운 (다음: next) 상태 값 설정
    setIsPlaying(/* [1] new value */ nextIsPlaying);
  };

  const handlePause = () => {
    const nextIsPlaying = false;
    // 새로운 (다음: next) 상태 값 설정
    setIsPlaying(nextIsPlaying);
  };

  return (
    <>
      <div className={gameClassNames}>
        <button
          className={classes.ball}
          aria-label="공(ball)"
          onClick={handleBall}
        />
        <button
          className={classes.bomb}
          aria-label="폭탄(bomb)"
          onClick={handleBomb}
        >
          <span role="img">💣</span>
        </button>
      </div>
      <div className={classes.gameControls} role="group">
        <button
          type="button"
          aria-label="게임 시작"
          // onClick={handleStart}
          onClick={handleToggle}
          disabled={isPlaying /* true */}
        >
          start
        </button>
        <button
          type="button"
          aria-label="게임 일시정지"
          // onClick={handlePause}
          onClick={handleToggle}
          disabled={!isPlaying /* !false = true */}
        >
          pause
        </button>
      </div>
    </>
  );
}

export default Exercise;
