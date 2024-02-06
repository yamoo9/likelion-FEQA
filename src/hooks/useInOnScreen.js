import { useLayoutEffect, useRef, useState } from 'react';

function useInOnScreen(options) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const target = elementRef.current;

    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting);
    };

    const observerOptions = {
      ...useInOnScreen.defaultOptions,
      ...options,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    target && observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [isOnScreen, elementRef];
}

useInOnScreen.defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
  delay: 0,
};

export default useInOnScreen;
