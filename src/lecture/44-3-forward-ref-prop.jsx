import { AppInput } from '@/components';
import { useEffect, useRef } from 'react';

function Exercise() {
  const emailRef = useRef(null); // { current: null } : Mutable Object {}

  useEffect(() => {
    setTimeout(() => (emailRef.current.value = 'yamoo9@naver.com'), 1000);
    setTimeout(() => emailRef.current.focus(), 2000);
  }, []);

  return (
    <form>
      <AppInput
        // key, ref 같은 특별한 속성 아님
        // 사용자 정의한 속성(prop)
        forwardRef={emailRef}
        label="이메일"
        type="email"
        hiddenLabel
        placeholder="user@dev.io"
      />
    </form>
  );
}

export default Exercise;
