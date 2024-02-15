import { memo } from 'react';

function CountDisplay(props) {
  return <output className="text-sm font-extrabold" {...props} />;
}

export default memo(CountDisplay);
