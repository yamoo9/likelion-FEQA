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
  }, [callback, eventType, key]);

  // return undefined;
}

export default useKey;
