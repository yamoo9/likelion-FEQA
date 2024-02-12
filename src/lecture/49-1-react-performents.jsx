import React from 'react';

// [학습 순서]
// 1. UI 지연 처리 (최적화)
// 1-1. Suspense 컴포넌트
// 1-2. lazy 함수
// 1-3. 페이지 컴포넌트 지연 처리
//
// 2. UI 업데이트 지연 처리
//    지연된 상태(이전 스냅샷) 값을 가져와 처리
// 2-1. useDeferredValue 훅 활용 (https://bit.ly/3SzFXc5)
// 2-2. 디바운싱(debouncing)과 다른 점 (https://bit.ly/3SzFXc5)
// 2-2-1. 지연(delay) 설정이 필요 없음
// 2-2-2. 키 입력 시 마다, 이전의 리-렌더링 중단 후 다시 렌더링 시작
// 2-2-3. 렌더링과 상관 없는 경우, 디바운싱 방법 유용
//
// 3. UI를 중단되지 않는 상태 처리
//    리-렌더링 중에도 상태 업데이트 반응성 유지
// 3-1. useTransition 훅 활용 (https://bit.ly/3UE4grP)
// 3-2. isPending 상태 플래그(status flag)
// 3-3. startTransition 함수 (https://bit.ly/3HVgmpd)

function Exercise() {
  return (
    <div>
      <h2>리액트 성능 최적화 II</h2>
      <ul>
        <li>Suspense, lazy 함수를 사용한 지연 처리</li>
        <li>useDefferedValue, useTransition 훅 활용</li>
      </ul>
    </div>
  );
}

export default Exercise;
