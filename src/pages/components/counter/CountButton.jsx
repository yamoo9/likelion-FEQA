import { memo } from 'react';
import { bool } from 'prop-types';
import useCountStore from '@/store/useCountStore';

function CountButton({ decrease = false, ...restProps }) {
  const updater = useCountStore(({ plus, minus }) =>
    !decrease ? plus : minus
  );

  return (
    <button
      type="button"
      onClick={updater}
      className="grid place-content-center w-5 h-5 rounded-full hover:bg-indigo-100 focus:outline-none focus:bg-indigo-200"
      {...restProps}
    />
  );
}

CountButton.propTypes = {
  decrease: bool,
};

export default memo(CountButton);
