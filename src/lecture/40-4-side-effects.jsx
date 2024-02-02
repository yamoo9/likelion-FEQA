import {
  useState /* 상태 */,
  useEffect /* 사이드 이펙트 */,
  useRef /* 참조 */,
} from 'react';

function Exercise() {
  // 리액트의 방식
  useEffect(() => {}, []);

  // 리액트의 방식이 아님
  useEffect(() => {
    // DOM API
    // const containers = document.querySelectorAll('.container');
    // containers[1].classList.add('super-container');
  }, []);

  // 리액트의 방식
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

  return (
    <>
      <div ref={accessDomElement} className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작 1</h2>
      </div>
      <div ref={accessDomElement} className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작 2</h2>
      </div>
      <div className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작 3</h2>
      </div>
    </>
  );
}

export default Exercise;
