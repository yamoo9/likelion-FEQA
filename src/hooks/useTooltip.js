import { useState } from 'react';

function useTooltip(initialValue = false) {
  const [isShow, setIsShow] = useState(initialValue);

  const show = () => setIsShow(true);
  const hide = () => setIsShow(false);
  const toggle = () => setIsShow((s) => !s);

  return {
    isShow,
    show,
    hide,
    toggle,
  };
}

export default useTooltip;
