import { useState } from 'react';

function Box({ boxMessage, onChangeMessage }) {
  // 속성(props)
  // - 컴포넌트 외부에서 전달받은 데이터
  // - 컴포넌트 내부에서 읽기만 가능(read only, 수정 할 수 없는)
  // - 컴포넌트 내부에서 속성으로부터 파생된 상태를 만들어 사용하는 것도 가능 (주의!)
  // console.log({ onChangeMessage });

  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        padding: 20,
      }}
    >
      <b>{boxMessage}</b>
      <button
        type="button"
        style={{
          marginBlockStart: 12,
        }}
        onClick={() => {
          // prop 변경 시도 (안됨. 이유는 읽기 전용이니까)
          console.log(
            '비유: 감히 자식이 부모에게 물려받은 [성]을 바꾸려 하는 것과 같다.'
          );

          // boxMessage += '🎩';
          // console.log({ boxMessage });

          // 그렇다면?
          // 부모의 상태를 자식이 바꾸려면?
          // 부모의 상태를 변경할 수 있는 업데이트 함수를 prop으로 자식에게 전달
          // 자식은 전달받은 업데이트 함수(참조)를 실행
          onChangeMessage(boxMessage + ' 🎩');

          // 결과적으로 부모 내부에 있는 업데이트 함수가 실행
          // 부모의 상태를 바꾼다.
          // 부모가 다시 그려진다.
          // 자식도 다시 그려진다. (prop이 변경된다.)
        }}
      >
        change boxMessage prop
      </button>
    </div>
  );
}

// 메시지 배열
const messages =
  '최강! 8기, 상원님 1위에서 끌어내리기, 야무지게 먹어야지, 예은님의 감사해요!'.split(
    ', '
  );

// 랜덤 메시지 반환 함수
const getRamdomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

export default function Exercise() {
  // 상태(states)
  // - 컴포넌트 내부에서만 사용 가능한 데이터
  // - 컴포넌트 외부에서는 접근 불가능
  // - 하위 컴포넌트에 속성(props)으로 전달 가능
  // - 컴포넌트 내부에서 업데이트가 가능한 데이터(read / write)
  // 메시지 초깃값 (초기화 함수 활용)
  const [message, setMessage] = useState(getRamdomMessage);

  const handleChangeMessage = (nextMessage) => {
    console.log(nextMessage);
    setMessage(nextMessage);
  };

  return (
    <div>
      <p>{message}</p>
      <button
        type="button"
        // onClick={() => handleChangeMessage(getRamdomMessage())}
        // 리액트 개발자들이 잘 사용 안함
        onClick={handleChangeMessage.bind(null, getRamdomMessage())}
      >
        change message
      </button>
      <hr />
      <Box boxMessage={message} onChangeMessage={handleChangeMessage} />
    </div>
  );
}

// 리액트 DOM (리액트 컴포넌트 → 리액트 엘리먼트) 간의 모델(관계))
// 루트 엘리먼트 트리 구조
// 부모 - 자식 - 형제
