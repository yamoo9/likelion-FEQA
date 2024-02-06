import { FormInput } from '@/components';
import { useEffect, useRef } from 'react';

function Exercise() {
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const input = inputRef.current;
      input.value = '최강! 8기 화이팅! 주무시지 마세요~!';
      input.focus();
    }, 1000);
  }, []);

  return (
    <form>
      <FormInput ref={inputRef} label="ref 전달 메시지" />
    </form>
  );
}

export default Exercise;
