import { A11yHidden } from '@/components';
import { number } from 'prop-types';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
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

function Counter({ min = 0, count = 0, step = 1, max = 50 }) {
  const id = useId();

  const [value, setValue] = useState(count);

  const handleChange = useCallback((e) => {
    const nextValue = Number(e.target.value);
    setValue(nextValue);
  }, []);

  const handleCountUp = useCallback(() => {
    setValue((v) => v + step);
  }, [step]);

  const handleCountDown = useCallback(() => {
    setValue((v) => v - step);
  }, [step]);

  const countDownRef = useRef(handleCountDown);

  useEffect(() => {
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

/* CounterButton ------------------------------------------------------------ */

/* CounterInput ------------------------------------------------------------- */

export default Exercise;
