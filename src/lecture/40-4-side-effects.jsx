import {
  useState /* 상태 */,
  useEffect /* 사이드 이펙트 */,
  useRef /* 참조 */,
} from 'react';

function Exercise() {
  // 리액트의 방식이 아님
  useEffect(() => {
    // DOM API
    // const containers = document.querySelectorAll('.container');
    // containers[1].classList.add('super-container');
  }, []);

  // 리액트의 방식 1
  // ref 콜백 함수
  // 함수의 매개변수로 해당 DOM 객체가 전달된다.
  const accessDomElement = (domElement) => {
    // console.log(domElement);
    domElement.classList.add('super-container');
    domElement.addEventListener('pointerenter', (e) => {
      e.target.style.backgroundColor = '#fbe25452';
    });
    domElement.addEventListener('pointerleave', (e) => {
      e.target.style.backgroundColor = '';
    });
  };

  // console.log(typeof accessDomElement);

  // 리액트의 방식 2

  // React.useRef 훅을 실행한다.
  // 수정 가능한(mutable) 객체가 반환. 이 객체는 current 속성을 가짐. { current: mutableValue }
  // null => JSX <div ref={elementRef}></div> => DOM Element (DOM 커밋 -> 브라우저 페인팅 -> 이후에 접근)
  const elementRef = useRef(null);

  useEffect(() => {
    let count = 10;

    const { current: element } = elementRef;

    // 명령형 프로그래밍 수행 === 접근성

    console.log(elementRef); // { current: <div> }
    const handleClicker = () => {
      console.log((count += 10));
    };

    element.addEventListener('click', handleClicker);

    return /* cleanup function */ () => {
      element.removeEventListener('click', handleClicker);
    };
  }, []);

  // console.log(elementRef); // { current: null }

  // [useRef의 다른 쓰임새]
  // 함수는 매번 실행될 때마다 실행 영역이 초기화 되기 때문에 어떤 값을 기억할 수 없다.
  // 그런데 리액트에서는 상태(useState 훅)를 사용하면 매번 실행될 때마다 기억이 가능하다. (리-렌더 : 다시 실행)
  // 하지만 어떤 경우 컴포넌트를 재 실행하지 않고 특정 값을 기억하고 싶다.

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const memoizedRef = useRef({ x: 0, y: 0 });

  return (
    <>
      <div className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작 1</h2>
      </div>
      <div className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작 2</h2>
      </div>
      <div ref={elementRef} className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작 3</h2>
      </div>

      <button
        type="button"
        onClick={() => {
          memoizedRef.current.x += 1;
          memoizedRef.current.y -= 2;

          console.log(memoizedRef.current.x, memoizedRef.current.y);
        }}
      >
        컴포넌트에 기억된 값 x = {memoizedRef.current.x} / y =
        {memoizedRef.current.y} 변경
      </button>

      <button
        type="button"
        onClick={() => {
          setPosition(({ x, y }) => ({
            x: x + 2,
            y: y + 1,
          }));
        }}
      >
        컴포넌트 상태 값 x = {position.x} / y ={position.y} 변경
      </button>
    </>
  );
}

export default Exercise;
