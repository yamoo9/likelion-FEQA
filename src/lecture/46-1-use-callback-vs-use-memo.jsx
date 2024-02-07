import { A11yHidden } from '@/components';
import { number } from 'prop-types';
import {
  useCallback,
  useEffect,
  useId,
  // useMemo,
  useRef,
  useState,
} from 'react';
import { useToggle } from '@/hooks';

function Exercise() {
  const { value: isVisible, toggle } = useToggle(true);

  return (
    <div>
      {isVisible && <h2>useCallback vs. useMemo</h2>}
      <button type="button" onClick={toggle}>
        {isVisible ? '제목 감춤' : '제목 표시'}
      </button>
      <Counter min={5} count={9} step={2} max={32} />
    </div>
  );
}

// useCallback 훅
// - 리-렌더링 할 때 마다 함수 정의가
//   매번 초기화 되지 않도록 기억(memo, cache)하려고 사용하는 훅

function Counter({ min = 0, count = 0, step = 1, max = 50 }) {
  const id = useId();

  const [value, setValue] = useState(count);

  // const handleChange = useCallback(함수값, [종속성]);
  const handleChange = useCallback((e) => {
    const nextValue = Number(e.target.value);
    setValue(nextValue);
  }, []);

  // ⚠️ value가 바뀌면 다시 기억하기 위해서
  //   useCallback 다시 함수를 생성해서 캐시한 후 반환
  // const handleCountUp = useCallback(() => {
  //   const nextValue = value + step;
  //   setValue(nextValue);
  // }, [step, value]);

  // ✅ value가 바뀌어도 다시 기억할 필요가 없다.
  const handleCountUp = useCallback(() => {
    // const getNextValue = (v) => v + step;
    // setValue(getNextValue);
    setValue((v) => v + step);
  }, [step]);

  // useCallback 예시 (JS 함수 값만 기억)
  const handleCountDown = useCallback(() => {
    setValue((v) => v - step);
  }, [step]);

  // useMemo 예시 (JS 모든 값(함수 포함) 기억)
  // const memoYourName = useMemo(() => /* 값 기억 */'yamoo' + 9, []);
  // const handleCountDown2 = useMemo(
  //   () => () => {
  //     setValue((v) => v - step);
  //   },
  //   [step]
  // );

  // const countDown = () => {
  //   setValue((v) => v - step);
  // };

  const countDownRef = useRef(handleCountDown); // { current: countDown }

  // console.log(countDownRef); // prevCountDown

  useEffect(() => {
    // console.log('change value');
    // 이전 렌더링 되었을 때 countDown 함수랑
    // 다음 렌더링 되었을 때 countDown 함수랑 동일한 참조일까?
    // prevCountDown vs. countDown
    const prevCountDown = countDownRef.current;

    console.log(
      'prevCountDown vs. handleCountDown -> ',
      Object.is(prevCountDown, handleCountDown)
    );
  }, [handleCountDown, value]);

  return (
    <div className="flex gap-1 my-5" aria-labelledby={id}>
      <A11yHidden as="h3" id={id}>
        카운트
      </A11yHidden>
      <button
        type="button"
        aria-label="카운트 감소"
        title="카운트 감소"
        className="mr-4"
        onClick={handleCountDown}
      >
        -
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={handleChange}
        step={step}
        max={max}
        className="bg-transparent"
      />
      <button
        type="button"
        aria-label="카운트 증가"
        title="카운트 증가"
        onClick={handleCountUp}
      >
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  min: number,
  count: number,
  step: number,
  max: number,
};

export default Exercise;
