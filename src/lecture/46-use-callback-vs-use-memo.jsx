import { A11yHidden } from '@/components';
import { number } from 'prop-types';
import { useId, useState } from 'react';

function Exercise() {
  return (
    <div>
      <h2>useCallback vs. useMemo</h2>
      <Counter min={5} count={9} step={2} max={32} />
    </div>
  );
}

function Counter({ min = 0, count = 0, step = 1, max = 50 }) {
  const id = useId();

  const [value, setValue] = useState(count);

  const handleChange = (e) => {
    const nextValue = Number(e.target.value);
    setValue(nextValue);
  };

  const handleCountUp = () => {
    setValue((v) => v + step);
  };

  const handleCountDown = () => {
    setValue((v) => v - step);
  };

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
        onClick={handleCountUp}
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
        onClick={handleCountDown}
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
