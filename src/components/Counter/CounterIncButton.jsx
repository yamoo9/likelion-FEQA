import { memo } from 'react';
import CounterDecButton from './CounterDecButton';

function CounterIncButton({ onUpdate }) {
  return (
    <button
      type="button"
      aria-label="카운트 증가"
      title="카운트 증가"
      onClick={onUpdate}
    >
      +
    </button>
  );
}

CounterIncButton.propTypes = CounterDecButton.propTypes;

export default memo(CounterIncButton);
