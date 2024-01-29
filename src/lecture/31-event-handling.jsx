let count = 100;

console.log(`count = ${count}`);

function Exercise() {
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

  return (
    <div lang="en" style={styles.div} onClick={handleClick}>
      <strong style={styles.strong} onClick={handleClick}>
        strong element
      </strong>{' '}
      <em style={styles.em} onClick={handleClick}>
        emphasize element
      </em>
      <button
        type="button"
        // inline arrow function
        onClick={
          /* handleCountDown */
          (e) => {
            e.stopPropagation();
            console.log(`count = ${--count}`);
          }
        }
      >
        count down
      </button>
      <button type="button" onClick={handleCountUp}>
        count up
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
