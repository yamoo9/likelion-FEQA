import { useState } from 'react';

function useToggle(initialValue = false) {
  const [toggleValue, setToggleValue] = useState(initialValue);

  const updateToggleValue = () => setToggleValue((t) => !t);

  return [toggleValue, updateToggleValue];
}

export default useToggle;
