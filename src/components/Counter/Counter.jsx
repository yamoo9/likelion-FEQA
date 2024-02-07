import { number } from 'prop-types';
import { useCallback, useId, useState } from 'react';
import { A11yHidden } from '@/components';
import CounterDecButton from './CounterDecButton';
import CounterIncButton from './CounterIncButton';
import CounterInput from './CounterInput';

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

  return (
    <div className="flex gap-1 my-5" aria-labelledby={id}>
      <A11yHidden as="h3" id={id}>
        카운트
      </A11yHidden>
      <CounterDecButton onUpdate={handleCountDown} />
      <CounterInput
        min={min}
        value={value}
        step={step}
        max={max}
        onUpdate={handleChange}
      />
      <CounterIncButton onUpdate={handleCountUp} />
    </div>
  );
}

Counter.propTypes = {
  min: number,
  count: number,
  step: number,
  max: number,
};

export default Counter;
