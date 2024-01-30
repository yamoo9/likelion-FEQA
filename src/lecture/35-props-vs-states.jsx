import { useState } from 'react';

function Box({ boxMessage }) {
  // 속성(props)
  // - 컴포넌트 외부에서 전달받은 데이터
  // - 컴포넌트 내부에서 읽기만 가능(read only, 수정 할 수 없는)
  // - 컴포넌트 내부에서 속성으로부터 파생된 상태를 만들어 사용하는 것도 가능 (주의!)
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        padding: 20,
      }}
    >
      <b>{boxMessage}</b>
    </div>
  );
}

export default function Exercise() {
  // 상태(states)
  // - 컴포넌트 내부에서만 사용 가능한 데이터
  // - 컴포넌트 외부에서는 접근 불가능
  // - 하위 컴포넌트에 속성(props)으로 전달 가능
  // - 컴포넌트 내부에서 업데이트가 가능한 데이터(read / write)
  const [message] = useState('최강! 8기! 😃');

  return (
    <div>
      <p>{message}</p>
      <hr />
      <Box boxMessage={message} />
    </div>
  );
}
