import { useState } from 'react';
import { A11yHidden, FormInput } from '@/components';

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
  agree: '네', // '아니오'
};

function FormExample() {
  // 하나의 폼 상태 관리
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <form style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
        <FormInput
          label="오늘 기분"
          placeholder={INITIAL_FEEL_MESSAGE}
          value={formData.feelMessage}
          onChange={handleChange}
        />
        <FormInput
          label="이메일"
          type="email"
          placeholder="user@company.dev"
          value={formData.email}
          onChange={handleChange}
        />

        <div>
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
      </form>
    </>
  );
}

export default Exercise;
