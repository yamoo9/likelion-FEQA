import { useState, useEffect } from 'react';

function useMousePosition(/* debounceTime = 0 */) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const nextPosition = {
        x: e.clientX,
        y: e.clientY,
      };

      setPosition(nextPosition);
    };

    globalThis.addEventListener('mousemove', handleMove);

    return () => {
      globalThis.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return [position.x, position.y];
}

export default useMousePosition;
