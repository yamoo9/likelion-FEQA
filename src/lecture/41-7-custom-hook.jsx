import { Stack } from '@/components';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Exercise() {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const elementRef = useRef(null);

  // DOM 커밋 이후 (브라우저 페인팅 이전) 실행
  useLayoutEffect(() => {
    console.log('useLayoutEffect');

    // 관측할 대상
    // target elment : elementRef.current
    const target = elementRef.current;

    // 관측될 경우 실행되는 콜백 함수
    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting);
    };

    // 관측 옵저버 옵션
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    // 옵저버 생성
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 옵저버 관측 (대상 요소)
    // console.log(target);
    observer.observe(target);

    // 클린업
    return () => {
      console.log('cleanup useLayoutEffect');
      // 관측 행위 중단
      observer.disconnect();
    };
  }, []);

  // 브라우저 페인팅 이후 실행
  // useEffect 훅
  useEffect(() => {
    console.log('useEffect');

    return () => {
      console.log('cleanup useEffect');
    };
  }, []);

  return (
    <section className="w-full my-5">
      <header className="fixed bottom-0 left-0 w-full bg-white/70 text-indigo-900 backdrop-blur-sm p-5">
        <p>
          INTERSECTION →{' '}
          <b className="font-extrabold">{isOnScreen ? 'IN' : 'OUT'}</b>
        </p>
      </header>
      <h2 className="my-5">
        Intersection Observer{' '}
        <abbr title="Application Programming Interface">API</abbr>
      </h2>

      <Stack vertical gap={16}>
        <Box color="black">Intersection U</Box>

        <Box color="indigo">Intersection P</Box>

        {/* <Box color="emerald">Intersection L</Box> */}
        <article
          ref={elementRef}
          className={`h-[90vh] w-[100%] p-5 bg-emerald-800 text-white rounded-lg`}
        >
          <h3 className="uppercase text-2xl">intersection Y</h3>
        </article>

        <Box color="orange">Intersection Z</Box>
      </Stack>
    </section>
  );
}

function Box({ color, children }) {
  let bgColor = '';
  switch (color) {
    case 'orange':
      bgColor = 'bg-orange-800';
      break;
    case 'emerald':
      bgColor = 'bg-emerald-800';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-800';
      break;
    default:
      bgColor = 'bg-black';
  }
  return (
    <article
      className={`h-[90vh] w-[100%] p-5 ${bgColor} text-white rounded-lg`}
    >
      <h3 className="uppercase text-2xl">{children}</h3>
    </article>
  );
}

export default Exercise;
