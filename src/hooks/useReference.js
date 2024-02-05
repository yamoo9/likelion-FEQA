import { useState } from 'react';

// 리액트 훅의 규칙
// - 함수 컴포넌트 내부에서 사용 가능
// - use로 시작하는 함수는 사용자 정의 훅 안에서 사용 가능

// 첫번째 커스텀(사용자 정의) 훅
// 리액트의 useRef 훅의 작동 원리 살펴보기
function useReference(initialValue) {
  // 함수 컴포넌트 안에서 사용할 때 값을 기억하기 위함
  // 값을 업데이트 할 필요는 없음
  const [refObject /* 불변 값 */] = useState(
    /* 변경 가능한 JS 객체(참조형 데이터) */ { current: initialValue }
  );
  return refObject;
}

export default useReference;
