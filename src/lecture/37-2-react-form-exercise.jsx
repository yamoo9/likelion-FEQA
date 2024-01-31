import { FormInput } from '@/components';
import { useState } from 'react';

// [학습 목표]
// 폼 상태 개별 관리 → 폼의 상태를 하나의 객체로 묶어서 관리

function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <FormExample />
    </div>
  );
}

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~';

const INITIAL_FORM_DATA = {
  feelMessage: INITIAL_FEEL_MESSAGE,
  email: '',
  agree: '아니오', // '아니오'
  studySubject: 'react',
};

function FormExample() {
  // 하나의 폼 상태 관리
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    // object.property
    // 각괄호 표기 방법
    // object[key]

    // formData { feelMessage, agree, email }
    // formData.agree
    // formData['agree']

    // 사용자와 상호작용한 다음 렌더링 턴에서 적용되는 상태 값
    const nextFormData = {
      ...formData,
      [name]: value,
    };

    /* 
      nextFormData = {
        feelMessage: '...',
        agree: '...',
        email: '...',
        ['feelMessage']: '...',
      }
    */

    setFormData(nextFormData);
  };

  const handleSubmit = (e) => {
    // 브라우저 기본 동작 중지
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        style={{ display: 'flex', flexFlow: 'column', gap: 20 }}
      >
        <FormInput
          name="feelMessage"
          label="오늘 기분"
          placeholder={INITIAL_FEEL_MESSAGE}
          value={formData.feelMessage}
          onChange={handleChange}
        />
        <FormInput
          name="email"
          label="이메일"
          type="email"
          placeholder="user@company.dev"
          value={formData.email}
          onChange={handleChange}
        />

        <div data-label="라디오 버튼(인풋)">
          <label>
            <input
              type="radio"
              name="agree"
              value="네"
              checked={formData.agree === '네'}
              onChange={handleChange}
            />
            동의하오!
          </label>
          <label>
            <input
              type="radio"
              name="agree"
              value="아니오"
              checked={formData.agree === '아니오'}
              onChange={handleChange}
            />
            이의있소!
          </label>
        </div>

        <div
          data-label="셀렉트 메뉴"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <label htmlFor="studySubject">공부할 주제</label>
          <select
            id="studySubject"
            name="studySubject"
            value={formData.studySubject}
            onChange={handleChange}
          >
            <option value="">학습 주제</option>
            <option value="react">리액트</option>
            <option value="storybook">스토리북</option>
            <option value="javascript">자바스크립트</option>
            <option value="typescript">타입스크립트</option>
            <option value="pass">오늘은 패스!!!</option>
          </select>
        </div>

        <div
          role="group"
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          <button type="submit">보내기</button>
          <button type="reset">취소</button>
        </div>
      </form>
    </>
  );
}

export default Exercise;
