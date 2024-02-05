import { useEffect } from 'react';

function useKey(key, callback, eventType = 'keydown') {
  useEffect(() => {
    const handler = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback?.(e);
      }
    };

    globalThis.addEventListener(eventType, handler);

    return () => {
      globalThis.removeEventListener(eventType, handler);
    };
  }, [key, callback, eventType]);

  // return undefined;
}

export default useKey;
