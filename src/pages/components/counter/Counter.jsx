import { A11yHidden } from '@/components';
import useCountStore from '@/store/useCountStore';
import { Suspense, lazy } from 'react';

const CountButton = lazy(() => import('./CountButton'));
const CountDisplay = lazy(() => import('./CountDisplay'));

function Counter() {
  // useCountStore(/* selector : memory data */);

  // 상태 값만 선택자 함수를 통해 추출하는 경우
  const count = useCountStore((state) => state.count);

  return (
    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow">
      <A11yHidden>카운터 예제</A11yHidden>
      <Suspense fallback={<span>로딩 중...</span>}>
        <CountButton decrease aria-label="카운터 감소">
          -
        </CountButton>
        <CountDisplay>{count}</CountDisplay>
        <CountButton aria-label="카운터 증가">+</CountButton>
      </Suspense>
    </div>
  );
}

export default Counter;
