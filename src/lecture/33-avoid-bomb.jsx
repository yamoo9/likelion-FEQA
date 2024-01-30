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
  const gameClassNames = `${classes.game} ${classes.stop}`.trim();

  // 이벤트 핸들러
  const handleBall = () => {
    globalThis.alert('게임 승! 🎩');
  };

  const handleBomb = () => {
    globalThis.alert('게임 패! 🥲');
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
        <button type="button" aria-label="게임 시작" disabled>
          start
        </button>
        <button type="button" aria-label="게임 일시정지">
          pause
        </button>
      </div>
    </>
  );
}

export default Exercise;
