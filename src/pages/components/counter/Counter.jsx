import { A11yHidden } from '@/components';
import useCountStore from '@/store/useCountStore';
import { Suspense, lazy } from 'react';

const CountButton = lazy(() => import('./CountButton'));
const CountDisplay = lazy(() => import('./CountDisplay'));

function Counter() {
  // useCountStore(/* selector : memory data */);

  // 상태 값만 선택자 함수를 통해 추출하는 경우
  // const count = useCountStore((state/* { count } */) => state.count);

  // 상태, 상태 업데이트 함수(plus, minus, set, reset) 중 일부 추출하는 경우
  const [count, plus, minus] = useCountStore(({ count, plus, minus }) => [
    count,
    plus,
    minus,
  ]);

  // const handleDecrementCount = useCallback(() => setCount((c) => c - 1), []);
  // const handleDecrementCount = () => minus();

  // const handleIncrementCount = useCallback(() => setCount((c) => c + 1), []);
  // const handleIncrementCount = () => plus();

  return (
    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow">
      <A11yHidden>카운터 예제</A11yHidden>
      <Suspense fallback={<span>로딩 중...</span>}>
        <CountButton aria-label="카운터 감소" onClick={minus}>
          -
        </CountButton>
        <CountDisplay>{count}</CountDisplay>
        <CountButton aria-label="카운터 증가" onClick={plus}>
          +
        </CountButton>
      </Suspense>
    </div>
  );
}

export default Counter;
