// 바닐라 스크립트의 방식
// jQuery 라이브러리 방식
// 명령형 프로그래밍
// 어떻게(HOW)
// [    ]을 입력하면, 이벤트를 감지해서 [    ]에 출력한다.
// vs.
// 리액트의 방식
// 어떤 방법 ??? 선언형 프로그래밍
// 무엇을(WHAT)
// 제어할 상태를 선언해야 한다.

import { useState } from 'react';
import { A11yHidden, FormInput } from '@/components';

function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <FormExample />
    </div>
  );
}

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~';

// 컴포넌트 추출
function FormExample() {
  // [1] 오늘 기분
  const [feelMessage, setFeelMessage] = useState(INITIAL_FEEL_MESSAGE);

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };

  const handleChange = (e) => {
    setFeelMessage(e.target.value);
  };

  // [2] email 상태 관리
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // [3] agree 상태 관리
  const [agree, setAgree] = useState('네' /* '아니오' */);
  const handleChangeAgree = (e) => {
    setAgree(e.target.value);
  };

  return (
    <>
      <form style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
        <FormInput
          label="오늘 기분"
          placeholder={INITIAL_FEEL_MESSAGE}
          value={feelMessage}
          onChange={handleChange}
        />
        <FormInput
          label="이메일"
          type="email"
          placeholder="user@company.dev"
          value={email}
          onChange={handleChangeEmail}
        />

        <div>
          <label>
            <input
              type="radio"
              name="agree"
              value="네"
              checked={agree === '네'}
              onChange={handleChangeAgree}
            />
            동의하오!
          </label>
          <label>
            <input
              type="radio"
              name="agree"
              value="아니오"
              checked={agree === '아니오'}
              onChange={handleChangeAgree}
            />
            이의있소!
          </label>
        </div>

        <ButtonGroup
          onUpdate={handleUpdateFeelMessage}
          resetMessage={INITIAL_FEEL_MESSAGE}
        />
        <FormOutput outputValue={feelMessage} />
        <FormTextarea value={feelMessage} onChange={handleChange} />
      </form>
    </>
  );
}

function FormTextarea({ value, onChange }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <A11yHidden as="label" htmlFor="feel-today-textarea">
        오늘 기분
      </A11yHidden>
      <textarea id="feel-today-textarea" value={value} onChange={onChange} />
    </div>
  );
}

function ButtonGroup({
  onUpdate,
  displayMessage = '맑음',
  resetMessage = '날씨 모름',
}) {
  return (
    <div style={{ marginBlockStart: 12, display: 'flex', gap: 4 }}>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(displayMessage);
        }}
      >
        표시
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(resetMessage);
        }}
      >
        초기화
      </button>
    </div>
  );
}

function FormOutput({ outputValue }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <output>{outputValue}</output>
    </div>
  );
}

export default Exercise;
