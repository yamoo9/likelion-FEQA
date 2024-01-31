// 바닐라 스크립트의 방식
// jQuery 라이브러리 방식
// 명령형 프로그래밍
// 어떻게(HOW)
// [   ]을 입력하면, 이벤트를 감지해서 [   ]에 출력한다.
// vs.
// 리액트의 방식
// 어떤 방법 ??? 선언형 프로그래밍
// 무엇을(WHAT)
// 제어할 상태를 선언해야 한다.

import { useState } from 'react';
import { A11yHidden } from '../components';

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~';

function Exercise() {
  const [feelMessage, setFeelMessage] = useState(INITIAL_FEEL_MESSAGE);

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };

  const handleChange = (e) => {
    setFeelMessage(e.target.value);
  };

  return (
    <div>
      <h2>폼 컨트롤</h2>
      <form>
        <div
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          {/* 
            Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
          */}
          <label htmlFor="feel-today">오늘 기분</label>
          <input
            id="feel-today"
            type="text"
            placeholder={INITIAL_FEEL_MESSAGE}
            // 컨트롤 컴포넌트
            // value 속성에 리액트가 제어하는 상태가 연결
            // 리액트가 제어하는 인풋
            value={feelMessage}
            // defaultValue={feelMessage}
            onChange={handleChange}
            // readOnly={true}
            // readOnly
          />
        </div>
      </form>

      <div style={{ marginBlockStart: 12, display: 'felx', gap: 4 }}>
        <button
          type="button"
          onClick={() => {
            handleUpdateFeelMessage('맑음');
          }}
        >
          표시
        </button>
        <button
          type="button"
          onClick={() => {
            handleUpdateFeelMessage(INITIAL_FEEL_MESSAGE);
          }}
        >
          초기화
        </button>
      </div>
      <div
        style={{
          border: '1px solid',
          marginBlock: 12,
          borderRadius: 6,
          padding: 20,
          backgroundColor: '#fff',
        }}
      >
        {/* <output>폼 입력 내용 출력</output> */}
        <output>{feelMessage}</output>
      </div>
      <div
        style={{
          border: '1px solid',
          marginBlock: 12,
          borderRadius: 6,
          padding: 20,
          backgroundColor: '#fff',
        }}
      >
        {/* 
          Warning: Use the `defaultValue` or `value` props instead of setting children on <textarea>.
        */}
        <A11yHidden as="label" htmlFor="feel-today-textarea">
          오늘 기분
        </A11yHidden>
        {/* JSX에서 마크업할 때는 value 또는 defaultValue를 사용해야 해! */}
        <textarea
          id="feel-today-textarea"
          value={feelMessage}
          onChange={handleChange}
        />
        {/* 리액트에서 JSX를 사용해 마크업할 때 HTML 처럼 안됨!!! */}
        {/* <textarea>{feelMessage}</textarea> */}
      </div>
    </div>
  );
}

export default Exercise;
