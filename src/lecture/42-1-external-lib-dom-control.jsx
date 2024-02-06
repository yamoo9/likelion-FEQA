import { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Exercise() {
  // 사이드 이펙트
  // DOM 접근/조작 (useRef)
  // 외부 라이브러리 연결 (useEffect)

  const tiltBoxRef = useRef(null);

  useEffect(() => {
    const { current: element } = tiltBoxRef;

    // 플러그인 연결
    VanillaTilt.init(element);
  }, []);

  return (
    <div>
      <div
        ref={tiltBoxRef}
        className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg"
      >
        {'Vanilla Icecream'.toUpperCase()}
      </div>
    </div>
  );
}

export default Exercise;
