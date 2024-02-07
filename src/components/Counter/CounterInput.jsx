import { number, func } from 'prop-types';

function CounterInput({ min, value, onUpdate, step, max }) {
  return (
    <input
      type="number"
      min={min}
      value={value}
      onChange={onUpdate}
      step={step}
      max={max}
      className="bg-transparent"
    />
  );
}

CounterInput.propTypes = {
  min: number.isRequired,
  value: number.isRequired,
  step: number.isRequired,
  max: number.isRequired,
  onUpdate: func.isRequired,
};

export default CounterInput;
