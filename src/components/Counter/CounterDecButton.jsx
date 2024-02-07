import { memo, useEffect, useRef } from 'react';
import { func } from 'prop-types';

function CounterDecButton(props) {
  const comparePrevPropsRef = useRef(props);

  useEffect(() => {
    const prevProps = comparePrevPropsRef.current;

    console.log(
      '이전 onUpdate vs. 이후 onUpdate -> ',
      Object.is(prevProps.onUpdate, props.onUpdate)
    );
  }, [props.onUpdate]);

  return (
    <button
      type="button"
      aria-label="카운트 감소"
      title="카운트 감소"
      className="mr-4"
      onClick={props.onUpdate}
    >
      -
    </button>
  );
}

CounterDecButton.propTypes = {
  onUpdate: func,
};

export default memo(CounterDecButton);
