import { memo } from 'react';

function CountButton(props) {
  return (
    <button
      type="button"
      className="grid place-content-center w-5 h-5 rounded-full hover:bg-indigo-100 focus:outline-none focus:bg-indigo-200"
      {...props}
    />
  );
}

export default memo(CountButton);
