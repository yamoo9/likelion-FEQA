import { A11yHidden } from '@/components';
import { Component, Suspense, lazy, useCallback, useState } from 'react';
import useCountStore from '@/store/useCountStore';

const CountButton = lazy(() => import('./CountButton'));
const CountDisplay = lazy(() => import('./CountDisplay'));

export class CompareWithFunctionComponent extends Component {
  state = {
    a: 1,
    b: 1,
  };

  render() {
    return (
      <button type="button" onClick={this.update.bind(this)}>
        update state
      </button>
    );
  }

  update() {
    this.setState({
      b: this.state.b + 2,
    });
  }
}

function Counter() {
  useCountStore();

  // const [state, setState] = useState({
  //   a: 1,
  //   b: 1,
  // });

  // const handler = () => {
  //   setState({
  //     //...state, // { a, b }
  //     b: state.b + 2,
  //   });
  // };

  const [count, setCount] = useState(0);

  const handleDecrementCount = useCallback(() => setCount((c) => c - 1), []);
  const handleIncrementCount = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow">
      <A11yHidden>카운터 예제</A11yHidden>
      <Suspense fallback={<span>로딩 중...</span>}>
        <CountButton aria-label="카운터 감소" onClick={handleDecrementCount}>
          -
        </CountButton>
        <CountDisplay>{count}</CountDisplay>
        <CountButton aria-label="카운터 증가" onClick={handleIncrementCount}>
          +
        </CountButton>
      </Suspense>
    </div>
  );
}

export default Counter;
