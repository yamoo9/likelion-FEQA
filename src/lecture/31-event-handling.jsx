function Exercise() {
  const handleClick = (e) => {
    // Event 객체 (합성 이벤트)
    // console.log(e);
    // Event 객체 (브라우저 실제 이벤트)
    // console.log(e.nativeEvent);

    console.log('------------------------------------');
    console.log(`e.target = ${e.target.nodeName}`); // 클릭한 요소(이벤트가 전파된 요소)
    console.log(`e.currentTarget = ${e.currentTarget.nodeName}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        padding: 20,
        border: '1px solid blue',
      }}
      onClick={handleClick}
    >
      <strong
        style={{
          padding: 20,
          border: '1px solid red',
        }}
        onClick={handleClick}
      >
        Hover
      </strong>{' '}
      <em
        style={{
          padding: 20,
          border: '1px solid green',
        }}
        onClick={handleClick}
      >
        Me
      </em>
    </div>
  );
}

export default Exercise;
