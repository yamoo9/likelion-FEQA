let count = 100;

console.log(`count = ${count}`);

function Exercise({ message }) {
  const handleClick = (e) => {
    // Event 객체 (합성 이벤트)
    // console.log(e);

    // Event 객체 (브라우저 실제 이벤트)
    // console.log(e.nativeEvent);

    // 이벤트 전파 중지
    e.stopPropagation();

    console.log('-------------------------------');
    console.log(`e.target = ${e.target.nodeName}`); // 클릭한 요소(이벤트가 전파된 요소)
    console.log(`e.currentTarget = ${e.currentTarget.nodeName}`);
  };

  const handleCountUp = (e) => {
    e.stopPropagation();
    console.log(`count = ${++count}`);
  };

  const handleCountDown = (e) => {
    e.stopPropagation();
    console.log(`count = ${--count}`);
    // return undefined;
  };

  const actionOne = () => console.log('one');
  const actionTwo = () => console.log('two');
  const actionThree = () => console.log('three');

  const handleMultiEvents = (message, e) => {
    e.stopPropagation();

    console.log(`message prop value is ${message}`);

    actionOne();
    actionTwo();
    actionThree();
  };

  // ES 5
  // function handleOthers(message) {
  //   // 함수 내보내기
  //   // 이벤트 핸들러
  //   return function eventHander(e) {
  //     e.stopPropagation();
  //     console.log(e);
  //     // 스코프 영역의 매개변수 참조
  //     alert(message);
  //   };
  // }

  // vs.

  // Redux, Zustand(독일어: 츄스탄트) 상태 관리 라이브러리
  // 미들웨어 구현

  // ES Next (6+)
  // React.useCallback() ✨
  const handleOthers = (message) => (e) => {
    e.stopPropagation();
    alert(message);
  };

  return (
    <div lang="en" style={styles.div} onClick={handleClick}>
      <strong style={styles.strong} onClick={handleClick}>
        strong element
      </strong>{' '}
      <em style={styles.em} onClick={handleClick}>
        emphasize element
      </em>
      <button type="button" onClick={handleCountDown}>
        count down
      </button>
      <button type="button" onClick={handleCountUp}>
        count up
      </button>
      <button
        type="button"
        // 인라인 화살표 함수 활용
        onClick={(e) => handleMultiEvents(message, e)}
      >
        multi event handling
      </button>
      <button
        type="button"
        // 클로저 활용
        onClick={handleOthers(message)}
      >
        using closure
      </button>
    </div>
  );
}

const styles = {
  div: {
    display: 'flex',
    gap: 20,
    padding: 20,
    border: '1px solid blue',
  },
  strong: {
    padding: 20,
    border: '1px solid red',
  },
  em: {
    padding: 20,
    border: '1px solid green',
  },
};

export default Exercise;
